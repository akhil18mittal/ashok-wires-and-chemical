# Form Handler for Ashok Wires & Chemicals

This is a serverless function that securely forwards form submissions from the Ashok Wires & Chemicals website to GitHub Actions, which then processes the data and sends email notifications.

## Deployment Options

This form handler can be deployed to any of the following serverless platforms:

### 1. Netlify Functions

1. Create a Netlify account and connect it to your GitHub repository
2. Add the following environment variable in Netlify:
   - `GITHUB_TOKEN`: Your GitHub Personal Access Token with `repo` scope

3. Create a `netlify.toml` file in the root of your repository:
   ```toml
   [build]
     functions = "form-handler"
   ```

4. Deploy to Netlify

Your function will be available at: `https://your-netlify-site.netlify.app/.netlify/functions/index`

### 2. Vercel Serverless Functions

1. Create a Vercel account and connect it to your GitHub repository
2. Add the following environment variable in Vercel:
   - `GITHUB_TOKEN`: Your GitHub Personal Access Token with `repo` scope

3. Create a `vercel.json` file in the root of your repository:
   ```json
   {
     "functions": {
       "form-handler/index.js": {
         "memory": 128,
         "maxDuration": 10
       }
     }
   }
   ```

4. Deploy to Vercel

Your function will be available at: `https://your-vercel-site.vercel.app/api/index`

### 3. Cloudflare Workers

1. Install Wrangler CLI: `npm install -g wrangler`
2. Create a `wrangler.toml` file in the `form-handler` directory:
   ```toml
   name = "form-handler"
   type = "javascript"
   account_id = "your-account-id"
   workers_dev = true
   
   [vars]
   GITHUB_TOKEN = "your-github-token"
   
   [build]
     command = ""
     upload.format = "service-worker"
   ```

3. Deploy: `wrangler publish`

Your function will be available at: `https://form-handler.your-subdomain.workers.dev`

## Setting Up GitHub Actions

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" > "Actions"
3. Add the following secrets:
   - `MAIL_SERVER` (e.g., smtp.gmail.com)
   - `MAIL_PORT` (e.g., 587)
   - `MAIL_USERNAME` (your email username)
   - `MAIL_PASSWORD` (your email app password)
   - `RECIPIENT_EMAIL` (where to send form submissions)

## Updating Your Forms

After deploying the serverless function, update the `YOUR_FUNCTION_ENDPOINT` in both forms to the URL of your deployed function. 