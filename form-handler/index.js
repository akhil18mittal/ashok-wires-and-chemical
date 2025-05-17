const fetch = require('node-fetch');

/**
 * Form handler function to securely forward form data to GitHub Actions
 * This can be deployed to Netlify Functions, Vercel Serverless Functions, or Cloudflare Workers
 */
exports.handler = async (event) => {
  // Set CORS headers for browser preflight
  const headers = {
    'Access-Control-Allow-Origin': 'https://ashokwires.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }
  
  try {
    // Parse form data
    const formData = JSON.parse(event.body);
    
    // Basic form validation
    if (!formData.name || !formData.mobile) {
      return { 
        statusCode: 400, 
        headers,
        body: JSON.stringify({ error: 'Required fields missing' })
      };
    }
    
    // Check timestamp to prevent very old submissions
    const submissionTime = parseInt(formData.timestamp || Date.now(), 10);
    const currentTime = Date.now();
    if (currentTime - submissionTime > 15 * 60 * 1000) { // 15 minutes
      return { 
        statusCode: 400, 
        headers,
        body: JSON.stringify({ error: 'Form submission expired' })
      };
    }
    
    // Check for honeypot
    if (formData.website) {
      // Silently reject spam but return success to avoid spam bot learning
      return { 
        statusCode: 200, 
        headers,
        body: JSON.stringify({ message: 'Form submitted successfully' })
      };
    }
    
    // Add form submission time
    formData.submission_time = new Date().toISOString();
    
    // Get GitHub token from environment variable
    const githubToken = process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
      console.error('GitHub token not configured');
      return { 
        statusCode: 500, 
        headers,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }
    
    // Repository details - update these
    const owner = 'akhil18mittal'; // Your GitHub username
    const repo = 'ashok-wires-and-chemical'; // Your repository name
    
    // Send to GitHub repository dispatch event
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'form-submission',
          client_payload: formData
        })
      }
    );
    
    if (response.status !== 204) {
      const responseData = await response.text();
      console.error('GitHub API error:', response.status, responseData);
      return { 
        statusCode: 500, 
        headers,
        body: JSON.stringify({ error: 'Error sending form data' })
      };
    }
    
    // Success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Form submitted successfully',
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 