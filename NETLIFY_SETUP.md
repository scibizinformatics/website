# Netlify Automated Deployment Setup

This repository is configured for automated deployment to Netlify.

## Site Configuration

- **Site ID**: `f6b77b23-6c7c-409d-9ebc-5112f6e0465f`
- **Build Command**: `npm run generate`
- **Publish Directory**: `dist`

## Option 1: Using Netlify's Built-in CI/CD (Recommended - Easiest)

1. Go to your Netlify dashboard: https://app.netlify.com
2. Navigate to your site (Site ID: f6b77b23-6c7c-409d-9ebc-5112f6e0465f)
3. Go to **Site settings** → **Build & deploy** → **Continuous Deployment**
4. Click **Link to Git provider** and connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run generate`
   - **Publish directory**: `dist`
   - **Node version**: `18`
6. Save and deploy!

Netlify will automatically deploy on every push to your main/master branch.

## Option 2: Using GitHub Actions (Already Configured)

If you prefer using GitHub Actions, the workflow is already set up at `.github/workflows/netlify-deploy.yml`.

### Setup Steps:

1. Get your Netlify Auth Token:
   - Go to https://app.netlify.com/user/applications
   - Click **New access token**
   - Give it a name (e.g., "GitHub Actions Deploy")
   - Copy the token

2. Add the token to GitHub Secrets:
   - Go to your GitHub repository
   - Navigate to **Settings** → **Secrets and variables** → **Actions**
   - Click **New repository secret**
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: Paste your Netlify auth token
   - Click **Add secret**

3. Push to master/main branch - deployment will trigger automatically!

## Current Configuration

The `netlify.toml` file includes:
- Build settings
- Cache headers for static assets
- Security headers (X-Frame-Options, X-XSS-Protection, etc.)
- SPA redirects for client-side routing

## Testing Locally

To test the Netlify build locally:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run generate

# Test locally with Netlify
netlify dev
```

## Environment Variables

If you need to add environment variables:
1. Go to Netlify dashboard → Site settings → Environment variables
2. Add your variables there
3. They'll be available during build time

## Manual Deployment (if needed)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build the site
npm run generate

# Deploy to production
netlify deploy --prod --dir=dist
```

