# HYQ Hardwares - Component Inventory

## Navigation Components

### Header Navigation
- **Type:** Sticky top navigation
- **Layout:** Logo (left) + Menu items (center) + Contact/Actions (right)
- **States:** 
  - Default (full width)
  - Scrolled (reduced height, sticky)
  - Mobile (hamburger menu)
- **Interactions:** Dropdown submenus on hover (desktop), click to toggle (mobile)

### Mobile Menu
- **Type:** Slide-out drawer from left
- **Trigger:** Hamburger icon (3 lines)
- **Content:** Full vertical menu with collapsible categories
- **Backdrop:** Semi-transparent overlay when open

## Content Cards

### Product Card
- **Size:** 100% on mobile, 33% on tablet, 25% on desktop (4 columns)
- **Content:** 
  - Product image (top)
  - Product name/title
  - Brief description
  - Learn more link/button
- **Hover Effect:** Image zoom + shadow elevation
- **Responsive:** Stack vertically on mobile

### News/Blog Card
- **Size:** 100% on mobile, 50% on tablet, 33% on desktop (3 columns)
- **Content:**
  - Thumbnail image
  - Publication date
  - Title
  - Excerpt
  - Read more link
- **Hover:** Image zoom, text color change

## Forms

### Contact Form
- **Fields:**
  - Name (text input)
  - Email (email input)
  - Phone (tel input)
  - Company (text input)
  - Message (textarea)
  - Submit button
- **Validation:** Required field indicators
- **Submission:** POST to backend

### Quote Request Form
- **Fields:**
  - Product category (select)
  - Quantity (number input)
  - Specifications (textarea)
  - Delivery date (date input)
  - Contact info fields
- **Functionality:** Multi-step form possible

## Interactive Elements

### Hero Slider/Carousel
- **Type:** Full-width banner slider (Swiper.js)
- **Content per slide:**
  - Background image
  - Overlay text (headline, description)
  - CTA button
- **Auto-play:** Yes, 5 second interval
- **Navigation:** Dots (bottom) + Arrows (left/right)
- **Mobile:** Swipe gestures enabled

### Product Showcase Carousel
- **Type:** Horizontal scrollable grid (Swiper.js)
- **Items:** 4 per row (desktop), 2 (tablet), 1 (mobile)
- **Navigation:** Next/Previous buttons
- **Auto-scroll:** Optional, manual drag available

## Buttons

### Primary Button
- **Color:** Brand red or accent color
- **Padding:** Moderate (18-24px vertical)
- **Text:** White/light
- **Hover:** Darker red, slight scale (1.05)
- **Sizes:** Small (sm), Medium (md), Large (lg)

### Secondary Button
- **Color:** Transparent with border
- **Border:** 2px solid accent color
- **Text:** Accent color
- **Hover:** Filled background

### Icon Button
- **Type:** Square or round button with icon only
- **Uses:** Social media, navigation toggles

## Sections/Containers

### Hero Section
- **Height:** 60-80vh desktop, full viewport mobile
- **Background:** Slider or solid image
- **Content:** Centered or offset text + button
- **Animation:** Fade in on scroll

### Feature Section
- **Layout:** 2-3 columns with icon + text
- **Icon:** 64x64px
- **Spacing:** Padding 40-60px
- **Background:** Light gray or white

### Product Grid Section
- **Layout:** Dynamic grid (4/3/2/1 cols)
- **Gaps:** 24-32px
- **Container:** Max-width 1200-1400px
- **Padding:** 60px horizontal sides

### Text + Image Section
- **Layout:** Alternating left/right images
- **Mobile:** Stack vertically
- **Image Size:** 50% or 40% of width
- **Text Width:** Remaining space

### Testimonials/Quotes
- **Layout:** Carousel or static grid
- **Content:** Avatar + Name + Company + Quote
- **Star Rating:** Optional

### CTA (Call-to-Action) Section
- **Type:** Banner with headline + button
- **Background:** Accent color or image overlay
- **Text Color:** White/light
- **Padding:** 60-80px
- **Button:** Centered or inline

## Footer Components

### Footer Grid
- **Columns:** 4-5 on desktop, 2 on tablet, 1 on mobile
- **Sections:**
  1. Company info + logo
  2. Product categories links
  3. Support/Resources links
  4. Company links
  5. Contact information

### Footer Bottom
- **Content:** Copyright + Social icons + Language selector
- **Background:** Darker than main footer
- **Spacing:** 20-30px padding

## Lists

### Bullet List
- **Style:** Disc bullets or custom icons
- **Spacing:** 12px between items
- **Text:** Left-aligned with bullet

### Numbered List
- **Style:** 1, 2, 3... or custom numbering
- **Spacing:** Similar to bullet list

### Definition List
- **Format:** Term + Definition pairs
- **Styling:** Term bold, definition regular weight

## Tables

### Product Table
- **Columns:** Product name, Specs, Price, Stock status
- **Rows:** Alternating background colors
- **Mobile:** Stack as cards or horizontal scroll

### Comparison Table
- **Columns:** Feature names + 2-3 product columns
- **Highlight:** Included features with checkmarks
