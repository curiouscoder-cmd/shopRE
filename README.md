# RISHABH ELECTRONICS - Electronics & Furniture Store Website

A modern, responsive website for RISHABH ELECTRONICS, a trusted electronics and furniture store located in Baloda Bazar, Raipur, Chhattisgarh. Built with Next.js 14 and featuring beautiful 3D animations, modern UI design, and comprehensive business showcase.

## 🏪 About the Business

**RISHABH ELECTRONICS** has been serving customers since 2014, offering:
- **Electronics**: TVs, Refrigerators, Air Conditioners, Mobile Phones, Fans, Lighting, Induction Cooktops, Washing Machines, Speakers, Water Purifiers, Security Cameras
- **Furniture**: Almirahs & Wardrobes, Beds, Tables, Chairs, Dining Sets, Sofa Sets
- **Top Brands**: Samsung, LG, Sony, Whirlpool, Godrej, Voltas, Prestige, Bajaj, Haier, Kent, and many more

**Contact**: +91 99264 80250  
**Hours**: Saturday-Thursday: 10:00 AM - 9:00 PM (Closed on Friday)

## ✨ Features

- **Modern Hero Section** with 3D background elements and animations
- **Product Categories** showcase with beautiful imagery
- **Brand Gallery** featuring 50+ trusted brands
- **Interactive Gallery** with product images
- **Google Maps Integration** with current satellite imagery
- **Contact Information** with WhatsApp integration
- **Responsive Design** optimized for all devices
- **Beautiful UI** with gradient backgrounds and smooth animations
- **SEO Optimized** with proper meta tags and structure

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React 18
- **Icons**: React Icons
- **Maps**: Google Maps Embed API
- **Animations**: Custom CSS animations with Tailwind
- **Font**: Inter (Google Fonts)

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── brands/            # Brands page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── products/          # Products page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── home/             # Home page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductCategoriesSection.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/               # Reusable UI components
│   ├── Footer.tsx        # Site footer
│   └── Navbar.tsx        # Navigation bar
└── data/                 # Static data
    ├── brands.ts         # Brand information
    ├── categories.ts     # Product categories
    └── products.ts       # Product data

public/
└── images/               # Static images
    ├── brands/          # Brand logos
    ├── categories/      # Category images
    └── gallery/         # Gallery images
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration

### Adding New Products/Categories

1. **Add product images** to `public/images/categories/`
2. **Update data files** in `src/data/`
   - `categories.ts` for new product categories
   - `brands.ts` for new brands
   - `products.ts` for individual products

### Styling Guidelines

- Uses Tailwind CSS utility classes
- Custom animations defined in `tailwind.config.js`
- Responsive design with mobile-first approach
- Consistent color scheme with gradients
- 3D effects and modern UI elements

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with `railway up`
- **Self-hosted**: Use `npm run build` and `npm run start`

## 🎨 Design Features

- **3D Background Elements**: Floating geometric shapes and tech icons
- **Gradient Backgrounds**: Beautiful color transitions
- **Glass Morphism**: Semi-transparent elements with backdrop blur
- **Smooth Animations**: Bounce, float, and pulse effects
- **Modern Typography**: Inter font with proper hierarchy
- **Interactive Elements**: Hover effects and transitions

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Adapted for tablets (768px+)
- **Desktop**: Full experience (1024px+)
- **Large Screens**: Enhanced for 4K displays (1920px+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software for RISHABH ELECTRONICS. All rights reserved.

## 📞 Support

For technical support or business inquiries:
- **WhatsApp**: [Message us](https://wa.me/9926480250)

---

**Built with ❤️ for RISHABH ELECTRONICS - Your trusted electronics and furniture partner since 2014**
