# HYQ Hardwares Website - Design Analysis

**Target URL:** https://www.hyq-hardwares.cn/
**Extraction Date:** 2026-08-31
**Company:** 天津市浩越全五金制品股份有限公司 (Tianjin Haoyuequan Hardware Products Co., Ltd.)

## Business Overview

HYQ Hardwares is a Chinese hardware manufacturer specializing in:
- Drywall screws (干壁钉)
- Drilling screws (钻尾钉)
- Cement nails (水泥钉)
- Fiberboard nails (纤维板钉)
- Coil nails (卷钉)
- Shooting nails (射钉)
- Self-tapping screws (自攻钉)
- Rivets (拉铆钉)

## Website Technology Stack

Based on HTML analysis:
- **CMS Platform:** Meidianbang (美点帮/优站) - Chinese website builder
- **Frontend:** Bootstrap + jQuery + Swiper.js
- **Animations:** WOW.js + Animate.css + Swiper Animate
- **Icons:** Custom icon font
- **Responsive:** Mobile-first responsive design
- **Analytics:** Baidu Analytics (百度统计)
- **CDN:** gcdn.meidianbang.cn

## Color Palette

### Primary Colors
- **Brand Red:** Likely red accent (need to extract from screenshots)
- **Dark Text:** #000000 or similar dark gray
- **White/Light Background:** #ffffff

### Usage Pattern
The site appears to use a clean, industrial color scheme typical of B2B hardware manufacturers.

## Typography

### Font Stack
```css
font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
```

### Chinese Typography Considerations
- Primary: Microsoft YaHei (微软雅黑) - standard web-safe Chinese font
- Fallback: Arial for Latin characters
- Font weights: 400 (regular), 700 (bold)

## Layout Structure

### Header
- Logo (left aligned)
- Navigation menu (horizontal)
- Language switcher
- Contact information

### Main Content Sections
1. **Hero Banner** - Full-width slider with product showcases
2. **Product Categories** - Grid layout showcasing main product lines
3. **Company Introduction** - About section with company info
4. **Product Showcase** - Featured products with images
5. **News/Updates** - Latest company news
6. **Contact Section** - Contact form and company details
7. **Footer** - Links, contact info, copyright

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px (with 0.8 zoom)
- Mobile: < 768px

## Component Inventory

### Navigation
- Top navigation bar with dropdown menus
- Mobile hamburger menu
- Sticky header behavior

### Cards/Product Items
- Product image cards
- Hover effects
- Title and description overlay

### Forms
- Contact form with fields
- Quote request form
- Newsletter signup

### Sliders/Carousels
- Hero banner slider
- Product showcase carousel
- Certificate/partner logos slider

### Buttons
- Primary CTA buttons
- Secondary outline buttons
- Icon buttons

### Interactive Elements
- Image lightbox/gallery
- Accordion sections
- Tab navigation
- Back to top button

## Key Features to Replicate

1. **Swiper-based Hero Slider** with animations
2. **Product Grid Layout** with hover effects
3. **Mobile Navigation** with slide-out menu
4. **Sticky Header** on scroll
5. **Animate on Scroll** effects using WOW.js
6. **Lazy Loading Images**
7. **Multi-language Support** structure

## Assets Needed

### Images
- Company logo (SVG/PNG)
- Product images (multiple per category)
- Hero slider backgrounds
- Company photos
- Certificates and awards
- Factory/facility images

### Icons
- Navigation icons
- Product category icons
- Contact icons (phone, email, location)
- Social media icons

## Animation Patterns

Based on WOW.js + Animate.css usage:
- Fade in animations on scroll
- Slide up effects for cards
- Bounce effects for CTAs
- Zoom animations for images

## Mobile-Specific Features

- Touch-friendly navigation
- Swipeable carousers
- Click-to-call buttons
- Optimized image sizes
- Simplified navigation structure

## SEO Elements Present

- Meta descriptions in Chinese
- Schema.org structured data (Organization, WebSite, WebPage)
- Canonical URLs
- OG tags for social sharing
- Sitemap integration
- Baidu push notification integration

## Next Steps for Reconstruction

1. Extract exact colors from screenshots
2. Build component library in Next.js
3. Implement Swiper.js integration
4. Create responsive grid layouts
5. Add scroll animations with Framer Motion (instead of WOW.js)
6. Implement image optimization with Next.js Image
7. Build mobile navigation
8. Add contact forms
9. Create product showcase sections
10. Implement footer with all links
