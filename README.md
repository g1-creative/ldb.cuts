# LDB Cuts Barbershop Website

A professional, clean, and fast-loading website for LDB Cuts Barbershop in Bonita Springs, FL.

## Features

- **Modern Design**: Clean, minimal, masculine design with neutral color palette
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Loading**: Lightweight React application with minimal dependencies
- **SEO-Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: Proper headings, alt text placeholders, and keyboard navigation
- **Booking Integration**: Direct links to Booksy booking platform

## Pages

1. **Home**: Hero section with CTAs, features, and call-to-action
2. **Services**: Complete list of services with durations and pricing
3. **About**: Business description and values
4. **Gallery**: Responsive image grid (placeholders ready for real photos)
5. **Contact**: Business information, map, and contact details

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Adding Images

Replace image placeholders in:
- `src/pages/Home.jsx` - Hero image
- `src/pages/About.jsx` - Owner/barber photo
- `src/pages/Gallery.jsx` - Gallery images

### Adding Logo and Favicon

1. Add your logo to `public/logo.png` and update the Header component
2. Add your favicon to `public/favicon.ico`

### Updating Business Information

Business information is located in:
- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact page details
- `index.html` - SEO meta tags

### Google Maps

The contact page includes a Google Maps embed. The current implementation uses a basic embed that should work without an API key. If you need more advanced features, you may need to add a Google Maps API key.

## Project Structure

```
src/
├── components/       # Reusable components (Header, Footer, etc.)
├── pages/           # Page components (Home, Services, About, etc.)
├── App.jsx          # Main app component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles
```

## Technologies

- React 18
- React Router DOM
- Vite
- CSS3 (no heavy frameworks for fast loading)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 LDB Cuts Barbershop. All rights reserved.

