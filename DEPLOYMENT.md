# GitHub Pages Deployment Guide

## Quick Fix for White Screen

The white screen issue is likely because:
1. The React app hasn't been built yet
2. GitHub Pages is trying to serve source files instead of built files
3. Path issues with assets

## Immediate Solution (Use Simple HTML)

For immediate deployment while setting up React:

```bash
# Copy the simple version as index.html
cp index-simple.html index.html

# Commit and push
git add .
git commit -m "Fix white screen with simple HTML version"
git push
```

## Full React Deployment (Recommended)

### Option 1: GitHub Actions (Automated)

1. The workflow is already set up in `.github/workflows/deploy.yml`
2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (will be created automatically)
   - Folder: / (root)

3. Push to main branch:
```bash
git add .
git commit -m "Add React portfolio with GitHub Actions deployment"
git push
```

### Option 2: Manual Deployment with gh-pages

1. Install dependencies locally:
```bash
npm install
```

2. Build and deploy:
```bash
npm run deploy
```

This will:
- Build the React app
- Create a gh-pages branch
- Deploy the built files

### Option 3: Build Locally and Push

1. Build the project:
```bash
npm install
npm run build
```

2. The built files will be in the `dist` folder
3. You can manually push these to gh-pages branch

## Repository Settings

Make sure your GitHub repository has:

1. **GitHub Pages enabled**:
   - Settings → Pages → Source: Deploy from a branch
   - Branch: gh-pages (or main if using /docs folder)

2. **Correct repository name**:
   - If your repo is `username.github.io`, it will be at `https://username.github.io`
   - If your repo is `portfolio`, it will be at `https://username.github.io/portfolio`

## Troubleshooting

### If you still see a white screen:

1. **Check browser console** for errors (F12)
2. **Verify paths** - all assets should use relative paths
3. **Clear cache** - Hard refresh (Ctrl+Shift+R)
4. **Check deployment** - Ensure files are in the correct branch

### Common Issues:

1. **404 on assets**: Update `base` in vite.config.js:
   ```js
   base: '/your-repo-name/'  // If not using username.github.io
   ```

2. **Module not found**: Ensure all dependencies are in package.json

3. **Build fails**: Check Node version (needs 16+)

## Project Structure for GitHub Pages

```
your-repo/
├── index.html          # Entry point
├── package.json        # Dependencies
├── vite.config.js      # Build configuration
├── src/               # React source files
│   ├── main.jsx
│   ├── App.jsx
│   └── components/
├── dist/              # Built files (git ignored)
└── .github/
    └── workflows/
        └── deploy.yml  # Automated deployment
```

## Quick Commands

```bash
# Development
npm install        # Install dependencies
npm run dev       # Start dev server

# Deployment
npm run build     # Build for production
npm run preview   # Preview production build
npm run deploy    # Deploy to gh-pages

# Git
git add .
git commit -m "Update portfolio"
git push
```

## Next Steps

1. Choose your deployment method
2. Update repository settings
3. Deploy and test
4. Update the README with your live URL

Your portfolio will be live at:
- `https://[username].github.io` (if repo name is [username].github.io)
- `https://[username].github.io/[repo-name]` (for other repo names)