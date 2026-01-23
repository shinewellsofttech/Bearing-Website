# Bearing Website - React + Vite

This project has been converted from a static HTML website to a React application using Vite.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Copy assets from the original HTML package to the public folder:
   - Manually copy the `industrie-html-package/main-pkg/assets` folder to `public/assets`
   - Or run: `node copy-assets.js` (if the script is in the project root)

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
├── public/
│   └── assets/          # Static assets (images, fonts, etc.)
├── src/
│   ├── components/       # React components (Header, Footer, etc.)
│   ├── pages/           # Page components
│   ├── hooks/           # Custom React hooks
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Features

- React Router for navigation
- Converted jQuery functionality to React hooks
- Swiper integration for sliders
- Bootstrap styling
- Responsive design
- Modern React patterns

## Notes

- The original HTML pages need to be converted to React components
- Some jQuery plugins may need additional setup
- Assets should be placed in the `public/assets` folder
- CSS files are imported in `src/index.css`

# Bearing-Website
