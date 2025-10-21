#!/bin/bash

echo "🚀 Setting up George Amir Portfolio..."

# Clean install
echo "📦 Installing dependencies..."
rm -rf node_modules package-lock.json
npm install

echo "✅ Setup complete!"
echo ""
echo "To run the development server:"
echo "  npm run dev"
echo ""
echo "To build for production:"
echo "  npm run build"
echo ""
echo "To deploy to GitHub Pages:"
echo "  npm run deploy"