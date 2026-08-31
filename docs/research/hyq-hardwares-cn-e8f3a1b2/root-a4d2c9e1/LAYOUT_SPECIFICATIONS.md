# HYQ Hardwares - Layout Specifications

## Page Structure

### Desktop Layout (1200px+)
```
┌─────────────────────────────────────┐
│           HEADER (sticky)           │
├─────────────────────────────────────┤
│                                     │
│       HERO SECTION (full-width)     │
│                                     │
├─────────────────────────────────────┤
│  PRODUCT CATEGORIES (4 col grid)    │
├─────────────────────────────────────┤
│  FEATURE SECTION (2-3 features)     │
├─────────────────────────────────────┤
│  PRODUCT SHOWCASE (carousel)        │
├─────────────────────────────────────┤
│  ABOUT/COMPANY INFO (text + image)  │
├─────────────────────────────────────┤
│  NEWS/UPDATES (3 col grid)          │
├─────────────────────────────────────┤
│  CTA SECTION                        │
├─────────────────────────────────────┤
│           FOOTER                    │
└─────────────────────────────────────┘
```

### Tablet Layout (768px - 1199px)
- Header: Same as desktop
- Hero: Full-width, reduced height
- Product Categories: 2-3 columns with 0.8 zoom applied
- Feature Section: 2 columns or stacked
- Product Showcase: 2 items visible
- About Section: Stacked vertically
- News Grid: 2 columns
- Footer: 2-3 columns

### Mobile Layout (< 768px)
- Header: Hamburger menu, logo centered
- Hero: Full viewport height, text repositioned
- Product Categories: 1 column, full width with padding
- Features: 1 column stacked
- Product Showcase: 1 item visible, swipeable
- About: Full width, image then text
- News: 1 column, full width
- Footer: 1 column, stacked sections
- Bottom navigation: Fixed mobile nav bar (if present)

## Spacing System

### Padding/Margin Scale
```
xs:  4px  (0.25rem)
sm:  8px  (0.5rem)
md:  16px (1rem)
lg:  24px (1.5rem)
xl:  32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
4xl: 80px (5rem)
```

### Section Spacing
- Top padding: 60-80px (desktop), 40-60px (tablet), 30-40px (mobile)
- Bottom padding: Same as top
- Horizontal padding: 20px (mobile), 40px (tablet), 60px (desktop)
- Max-width container: 1200px

## Typography System

### Font Family
```css
font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
```

### Font Sizes & Weights

#### Headings
- **H1:** 36px, weight 700, line-height 1.3
- **H2:** 28px, weight 700, line-height 1.4
- **H3:** 24px, weight 600, line-height 1.4
- **H4:** 20px, weight 600, line-height 1.5
- **H5:** 18px, weight 600, line-height 1.5
- **H6:** 16px, weight 600, line-height 1.6

#### Body Text
- **Body Large:** 18px, weight 400, line-height 1.6
- **Body Regular:** 16px, weight 400, line-height 1.6
- **Body Small:** 14px, weight 400, line-height 1.5
- **Caption:** 12px, weight 400, line-height 1.4

#### Other
- **Button text:** 16px, weight 500
- **Link text:** 16px, weight 400 (inherit)
- **Label:** 14px, weight 500

### Text Responsive
- Desktop: Full sizes as above
- Tablet: 90-95% of desktop sizes
- Mobile: 80-90% of desktop sizes

## Grid System

### Container Max-Width
- Desktop: 1200px (with 20px sides = 1240px total)
- Tablet: 750px (with 20px sides = 790px total)
- Mobile: 100% (with 15px sides = 30px padding)

### Column Grid
- Desktop: 12-column grid or flexbox
- Product grids: 4 columns (desktop), 2 (tablet), 1 (mobile)
- Feature grids: 3 columns (desktop), 2 (tablet), 1 (mobile)
- News grids: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Gap between columns: 24px (desktop), 16px (tablet), 12px (mobile)

## Component Sizing

### Buttons
- **Small:** 32px height, 12px horizontal padding
- **Medium:** 40px height, 16px horizontal padding (default)
- **Large:** 48px height, 20px horizontal padding
- **Icon buttons:** 40x40px (clickable area 44x44px min)

### Icons
- **Small:** 16x16px
- **Medium:** 24x24px
- **Large:** 32x32px
- **Extra Large:** 48x48px (hero icons)

### Card Sizes
- **Product cards:** 200-250px width (responsive)
- **News cards:** 280-320px width (responsive)
- **Feature cards:** Full width / column width

### Input Fields
- **Height:** 40px
- **Padding:** 12px horizontal, 10px vertical
- **Border radius:** 4px
- **Font size:** 16px

## Responsive Images

### Hero Images
- Desktop: 1200x600px or 1440x720px (16:9)
- Tablet: 900x450px
- Mobile: 480x270px or 100vw

### Product Images
- Desktop: 300x300px (1:1)
- Thumbnail: 120x120px
- Gallery: 600x600px (large view)

### Avatars
- Small: 32x32px
- Medium: 48x48px
- Large: 64x64px

## Border & Radius

### Border Radius
- **Small:** 4px (inputs, small elements)
- **Medium:** 6px (cards, buttons)
- **Large:** 8px (sections)
- **Full:** 50% (circles, avatars)

### Border Widths
- **Thin:** 1px (most borders)
- **Medium:** 2px (focus states, emphasis)
- **Thick:** 3px (special states)

## Z-Index Hierarchy

```css
--z-negative:     -1
--z-base:         0
--z-dropdown:     100
--z-sticky:       1000
--z-modal:        2000
--z-modal-backdrop: 1999
--z-tooltip:      2001
--z-notification: 2002
```

## Transitions & Animations

### Default Transition
```css
transition: all 0.3s ease-in-out;
```

### Fast Transition
```css
transition: all 0.15s ease;
```

### Slow Transition
```css
transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

### Common Animations
- Fade: 0.3s opacity
- Slide: 0.4s transform
- Scale: 0.2s transform
- Bounce: 0.6s elastic

## Media Query Breakpoints

```css
@media (max-width: 767px) { /* mobile */ }
@media (min-width: 768px) and (max-width: 1199px) { /* tablet */ }
@media (min-width: 1200px) { /* desktop */ }
@media (min-width: 1920px) { /* large desktop */ }
```
