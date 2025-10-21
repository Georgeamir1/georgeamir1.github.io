# Kendrick Filbert - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and enhanced UI components.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 and TypeScript for type safety
- **Beautiful UI Components**: Custom components inspired by shadcn/ui with Tailwind CSS
- **Smooth Animations**: Framer Motion for delightful user interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Dark Mode Support**: Toggle between light and dark themes
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast development and build times

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Formspree integration
- **Routing**: React Router DOM

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd workspace
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, Input, etc.)
│   ├── Navigation.tsx   # Main navigation component
│   └── ScrollToTop.tsx  # Scroll to top button
├── sections/
│   ├── Hero.tsx         # Hero/landing section
│   ├── About.tsx        # About section with skills
│   ├── Portfolio.tsx    # Project portfolio with filters
│   ├── Experience.tsx   # Professional experience timeline
│   └── Contact.tsx      # Contact form and footer
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## 🎨 Key Components

### UI Components (shadcn/ui inspired)
- **Button**: Multiple variants (default, outline, ghost, gradient)
- **Card**: Flexible card component with header, content, and footer
- **Badge**: Tag/badge component for skills and categories
- **Input & Textarea**: Styled form inputs with focus states

### Sections
- **Hero**: Eye-catching landing section with animated profile image
- **About**: Skills, philosophy, and tools with interactive cards
- **Portfolio**: Filterable project grid with smooth transitions
- **Experience**: Timeline view of professional experience
- **Contact**: Contact form with validation and success/error states

### Features
- **Dark Mode**: Persistent theme switching with localStorage
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Responsive Design**: Mobile-first approach with breakpoints
- **Animations**: Entrance animations and hover effects
- **Performance**: Optimized images and lazy loading

## 🎯 Improvements Over Original

1. **Modern Component Architecture**: Migrated from vanilla HTML/CSS to React with TypeScript
2. **Enhanced UI Components**: Custom-built components with better interactions
3. **Better State Management**: React hooks for theme, forms, and filters
4. **Improved Animations**: Framer Motion for professional animations
5. **Type Safety**: TypeScript for better development experience
6. **Better Performance**: Vite for faster builds and HMR
7. **Maintainability**: Modular component structure
8. **Accessibility**: Better semantic HTML and ARIA labels

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify
1. Run `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Update `vite.config.ts` with base path
2. Run `npm run build`
3. Deploy `dist` folder to gh-pages branch

## 📝 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```js
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Content
Update the content in section files:
- `src/sections/Hero.tsx` - Hero content
- `src/sections/About.tsx` - About information
- `src/sections/Portfolio.tsx` - Projects array
- `src/sections/Experience.tsx` - Experience array

### Contact Form
The form uses Formspree. Update the form action URL in `src/sections/Contact.tsx`:
```tsx
fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## 📄 License

ISC

## 👤 Author

**Kendrick Filbert**
- Email: kendrickfilbert@yahoo.com
- Instagram: [@kendrickfff](https://instagram.com/kendrickfff)
- GitHub: [@kenassignemt](https://github.com/kenassignemt)
- HuggingFace: [@kendrickfff](https://huggingface.co/kendrickfff)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
