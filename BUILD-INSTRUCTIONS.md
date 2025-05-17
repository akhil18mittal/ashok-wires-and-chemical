# Building a Static Website with Jekyll, GitHub Pages and Netlify

This guide provides comprehensive instructions for building a static website with functioning contact forms, completely free (except for domain registration). By following these steps, you'll set up:

- A Jekyll-based static website
- GitHub repository for source control
- Form handling with serverless functions
- Email notifications for form submissions
- Deployment with Netlify 
- Custom domain configuration

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Setting Up Jekyll](#setting-up-jekyll)
3. [Building Your Website](#building-your-website)
4. [GitHub Repository Setup](#github-repository-setup)
5. [Form Handling Setup](#form-handling-setup)
6. [GitHub Actions for Email Notifications](#github-actions-for-email-notifications)
7. [Deploying to Netlify](#deploying-to-netlify)
8. [Setting Up a Custom Domain](#setting-up-a-custom-domain)
9. [Troubleshooting](#troubleshooting)
10. [Maintenance Tips](#maintenance-tips)

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- A GitHub account
- A Netlify account (free tier)
- A text editor (VS Code recommended)
- Ruby installed on your computer
- Git installed on your computer

## Setting Up Jekyll

Jekyll is a static site generator that transforms plain text into static websites.

### 1. Install Ruby and Jekyll

**For Windows:**

1. Download and install Ruby+Devkit from [RubyInstaller](https://rubyinstaller.org/downloads/)
2. During installation, check "Add Ruby executables to your PATH"
3. Open Command Prompt and run:

```bash
gem install jekyll bundler
```

**For macOS:**

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Ruby
brew install ruby

# Add Ruby to your path (add this to ~/.zshrc or ~/.bash_profile)
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# Install Jekyll and Bundler
gem install jekyll bundler
```

**For Ubuntu/Debian:**

```bash
# Install dependencies
sudo apt-get update
sudo apt-get install ruby-full build-essential zlib1g-dev

# Set up a gem installation directory for your user account
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Install Jekyll and Bundler
gem install jekyll bundler
```

### 2. Create a New Jekyll Site

```bash
# Create a new Jekyll site in the current directory
jekyll new my-website
cd my-website

# Start the development server
bundle exec jekyll serve
```

Your site will be available at `http://localhost:4000`.

## Building Your Website

### 1. Understanding Jekyll's Structure

```
my-website/
├── _config.yml          # Configuration file
├── _data/               # Data files (YAML, JSON, CSV)
├── _includes/           # Reusable components
├── _layouts/            # Templates for pages
├── _posts/              # Blog posts (Markdown)
├── _sass/               # Sass partials
├── _site/               # Generated site (don't edit)
├── assets/              # Images, CSS, JS
│   ├── css/
│   ├── images/
│   └── js/
├── _drafts/             # Unpublished posts
├── about.md             # About page
└── index.md             # Homepage
```

### 2. Configuring Your Site

Edit `_config.yml` to update site information:

```yaml
title: Your Site Title
email: your-email@example.com
description: >-
  Your site description for search engines
baseurl: "" # the subpath of your site, e.g. /blog
url: "https://yoursite.com" # the base hostname & protocol
twitter_username: yourusername
github_username: yourusername

# Build settings
theme: minima
plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

### 3. Creating Pages

Create pages using Markdown or HTML with YAML front matter:

```markdown
---
layout: page
title: About
permalink: /about/
---

This is the about page content.
```

### 4. Adding Contact Forms

Create a contact form in an HTML file (e.g., `contact.html`):

```html
---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-form">
  <form id="contact-form">
    <input type="hidden" name="form_type" value="contact">
    <input type="hidden" name="page" value="contact">
    <input type="hidden" id="timestamp" name="timestamp" value="">
    
    <!-- Honeypot field (hidden from real users, but bots will fill it) -->
    <div style="display:none;">
      <input type="text" id="website" name="website">
    </div>
    
    <div class="form-group">
      <label for="name">Name *</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
      <label for="mobile">Mobile Number *</label>
      <input type="tel" id="mobile" name="mobile" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email (Optional)</label>
      <input type="email" id="email" name="email">
    </div>
    
    <div class="form-group">
      <label for="message">Message (Optional)</label>
      <textarea id="message" name="message" rows="4"></textarea>
    </div>
    
    <button type="submit">Submit</button>
    
    <div id="form-success" style="display: none;" class="success-message">
      Thank you for your message. We will get back to you soon!
    </div>
    
    <div id="form-error" style="display: none;" class="error-message">
      There was a problem sending your message. Please try again.
    </div>
  </form>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Set timestamp
  document.getElementById('timestamp').value = Date.now().toString();
  
  // Form submission
  document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Get elements
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const successEl = document.getElementById('form-success');
    const errorEl = document.getElementById('form-error');
    
    // Clear messages
    successEl.style.display = 'none';
    errorEl.style.display = 'none';
    
    // Disable button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
      // Get form data
      const formData = new FormData(form);
      const formJson = Object.fromEntries(formData.entries());
      
      // Send to serverless function
      const response = await fetch('https://yoursite.netlify.app/.netlify/functions/index', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formJson)
      });
      
      const data = await response.json();
      
      if (response.ok && data.status === 'success') {
        // Success
        successEl.style.display = 'block';
        form.reset();
        document.getElementById('timestamp').value = Date.now().toString();
      } else {
        // API error
        errorEl.textContent = data.error || 'There was a problem sending your message.';
        errorEl.style.display = 'block';
      }
    } catch (error) {
      // Network error
      errorEl.textContent = 'Network error. Please try again later.';
      errorEl.style.display = 'block';
    } finally {
      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = 'Submit';
    }
  });
});
</script>
```

## GitHub Repository Setup

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name your repository (e.g., "my-website")
4. Add a description (optional)
5. Keep it public
6. Do not initialize with README, .gitignore, or license
7. Click "Create repository"

### 2. Push Your Site to GitHub

```bash
# In your Jekyll site directory
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/my-website.git
git push -u origin main
```

## Form Handling Setup

### 1. Create a Netlify Function

Create a `form-handler` directory in your project:

```bash
mkdir -p form-handler
```

Create `form-handler/index.js`:

```javascript
const fetch = require('node-fetch');

/**
 * Form handler function to forward form data to GitHub Actions
 */
exports.handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': 'https://yoursite.com',
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
    
    // Basic validation
    if (!formData.name || !formData.mobile) {
      return { 
        statusCode: 400, 
        headers,
        body: JSON.stringify({ error: 'Required fields missing' })
      };
    }
    
    // Check timestamp
    const submissionTime = parseInt(formData.timestamp || Date.now(), 10);
    const currentTime = Date.now();
    if (currentTime - submissionTime > 15 * 60 * 1000) { // 15 minutes
      return { 
        statusCode: 400, 
        headers,
        body: JSON.stringify({ error: 'Form submission expired' })
      };
    }
    
    // Check honeypot
    if (formData.website) {
      // Silently reject spam
      return { 
        statusCode: 200, 
        headers,
        body: JSON.stringify({ message: 'Form submitted successfully' })
      };
    }
    
    // Add submission time
    formData.submission_time = new Date().toISOString();
    
    // Get GitHub token
    const githubToken = process.env.GITHUB_TOKEN;
    
    if (!githubToken) {
      console.error('GitHub token not configured');
      return { 
        statusCode: 500, 
        headers,
        body: JSON.stringify({ error: 'Server configuration error' })
      };
    }
    
    // Repository details
    const owner = 'yourusername'; // Your GitHub username
    const repo = 'my-website'; // Your repository name
    
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
    
    // Success
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
```

### 2. Create a `package.json` File

Create `form-handler/package.json`:

```json
{
  "name": "form-handler",
  "version": "1.0.0",
  "description": "Serverless function for form handling",
  "main": "index.js",
  "dependencies": {
    "node-fetch": "^2.6.7"
  }
}
```

## GitHub Actions for Email Notifications

### 1. Create GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings" > "Secrets and variables" > "Actions"
3. Add these secrets:
   - `MAIL_SERVER`: Your email server (e.g., smtp.gmail.com)
   - `MAIL_PORT`: Your email server port (e.g., 587)
   - `MAIL_USERNAME`: Your email username
   - `MAIL_PASSWORD`: Your email password or app password
   - `RECIPIENT_EMAIL`: Email where you want to receive notifications

### 2. Create a GitHub Actions Workflow

Create `.github/workflows/form-handler.yml`:

```yaml
name: Form Submission Handler

on:
  repository_dispatch:
    types: [form-submission]

jobs:
  email-notification:
    runs-on: ubuntu-latest
    steps:
      - name: Validate submission
        id: validate
        uses: actions/github-script@v6
        with:
          script: |
            const payload = context.payload.client_payload;
            
            // Basic validation
            if (!payload || !payload.name || !payload.mobile) {
              core.setFailed('Invalid form submission');
              return;
            }
            
            // Check honeypot
            if (payload.website) {
              core.setFailed('Spam detected');
              return;
            }
            
            // Set outputs for email
            const formType = payload.form_type || 'contact';
            const subject = formType === 'quote' 
              ? `Website Quote Request: ${payload.name}` 
              : `Website Contact: ${payload.name}`;
              
            core.setOutput('subject', subject);
            core.setOutput('body', `
              Form Type: ${formType}
              Name: ${payload.name}
              Mobile: ${payload.mobile || 'Not provided'}
              Email: ${payload.email || 'Not provided'}
              
              Message:
              ${payload.message || 'No message provided'}
              
              Sent from: ${payload.page || 'Website'}
              Time: ${new Date().toISOString()}
            `);
      
      - name: Send email notification
        if: steps.validate.outcome == 'success'
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: ${{ secrets.MAIL_SERVER }}
          server_port: 587
          username: ${{ secrets.MAIL_USERNAME }}
          password: ${{ secrets.MAIL_PASSWORD }}
          subject: ${{ steps.validate.outputs.subject }}
          body: ${{ steps.validate.outputs.body }}
          to: ${{ secrets.RECIPIENT_EMAIL }}
          from: "Website Notification <${{ secrets.MAIL_USERNAME }}>"
          secure: false
          ignore_cert: true
          priority: high
```

## Deploying to Netlify

### 1. Create a `netlify.toml` Configuration File

Create `netlify.toml` in your project root:

```toml
[build]
  publish = "_site"
  command = "jekyll build"
  functions = "form-handler"

[build.environment]
  JEKYLL_ENV = "production"
  RUBY_VERSION = "2.7.8"
  BUNDLER_VERSION = "2.3.26"
  NODE_VERSION = "16"
  LANG = "en_US.UTF-8"
  FORCE_RUNTIME = "ruby"

# Redirects for the function
[[redirects]]
  from = "/form-api/*"
  to = "/.netlify/functions/:splat"
  status = 200

# Default redirect for SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Create a Build Script

Create `build.sh` in your project root:

```bash
#!/bin/bash
set -e

echo "Installing bundler..."
gem install bundler -v "${BUNDLER_VERSION:-2.3.26}"

echo "Installing dependencies..."
bundle install

echo "Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build
```

### 3. Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/) and sign in
2. Click "New site from Git"
3. Select GitHub and authorize Netlify
4. Choose your repository
5. Configure build settings:
   - Branch to deploy: `main`
   - Build command: `chmod +x build.sh && ./build.sh`
   - Publish directory: `_site`
6. Click "Deploy site"

### 4. Configure Environment Variables on Netlify

1. Go to your site dashboard on Netlify
2. Navigate to "Site settings" > "Environment variables"
3. Add a new variable:
   - Key: `GITHUB_TOKEN`
   - Value: [Your GitHub personal access token]
4. Click "Save"

## Setting Up a Custom Domain

### 1. Purchase a Domain

Purchase a domain from a registrar like Namecheap, GoDaddy, or Google Domains.

### 2. Configure DNS

#### Using Netlify DNS (Recommended)

1. In your Netlify site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name and click "Verify"
4. Click "Add domain"
5. Select "Set up Netlify DNS"
6. Follow the instructions to update your domain's nameservers at your registrar

#### Using External DNS

1. In your Netlify site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain name and click "Verify"
4. Click "Add domain"
5. Go to your DNS provider and add these records:
   - An `A` record with your apex domain pointing to Netlify's load balancer: `104.198.14.52`
   - A `CNAME` record with `www` pointing to your Netlify site URL: `yoursitename.netlify.app`

### 3. Enable HTTPS

1. In your Netlify site dashboard, go to "Domain settings" > "HTTPS"
2. Click "Verify DNS configuration"
3. Once verified, click "Provision certificate"
4. Netlify will automatically provision and install a Let's Encrypt SSL certificate

## Troubleshooting

### Common Issues and Solutions

#### Jekyll Build Errors

```bash
# Check for missing dependencies
bundle install

# Update gems
bundle update

# Check for syntax errors in your Markdown files
jekyll doctor
```

#### Netlify Build Failures

- Check build command in `netlify.toml`
- Ensure Ruby version is compatible
- Review build logs for specific errors

#### Form Submission Errors

- Check browser console for JavaScript errors
- Verify Netlify function is deployed correctly
- Check GitHub token permissions
- Test form submission with curl:

```bash
curl -X POST https://yoursite.netlify.app/.netlify/functions/index \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","mobile":"1234567890","form_type":"contact","timestamp":"'$(date +%s)000'"}'
```

#### Email Sending Errors

- Check GitHub Actions logs for errors
- Verify email server settings
- For Gmail, ensure "Less secure app access" is enabled or use an App Password

## Maintenance Tips

### Regular Updates

```bash
# Update Jekyll and gems
bundle update

# Update npm packages
cd form-handler
npm update
```

### Security Best Practices

1. Keep GitHub token scopes limited
2. Rotate credentials periodically
3. Use honeypot fields to prevent spam
4. Implement rate limiting for forms
5. Regularly check for outdated dependencies

### Performance Optimization

1. Minify HTML, CSS, and JavaScript
2. Optimize images
3. Enable caching in Netlify
4. Use a CDN (Netlify already provides this)
5. Implement lazy loading for images

### Backup Strategy

1. Use Git for version control and backup
2. Consider automated backups of your repository
3. Export domain configuration from your registrar

---

By following this guide, you've created a professional static website with working contact forms, custom domain, and email notifications—all without spending money on hosting or backend services. The only cost is your domain name registration.

For more help:
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions) 