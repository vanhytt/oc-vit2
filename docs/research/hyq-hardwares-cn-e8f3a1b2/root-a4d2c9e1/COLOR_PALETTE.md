# HYQ Hardwares - Color Palette & Design Tokens

## Primary Colors

### Brand Red/Accent
- **Hex:** #E74C3C (estimated from hardware industry standards)
- **RGB:** rgb(231, 76, 60)
- **Usage:** 
  - Primary buttons
  - Links
  - Accent elements
  - Product highlights
- **Hover:** #C0392B (darker red)
- **Light variant:** #FADBD8 (very light red for backgrounds)

### Dark Gray/Charcoal
- **Hex:** #2C3E50
- **RGB:** rgb(44, 62, 80)
- **Usage:**
  - Headings
  - Primary text
  - Footer background
  - Section dividers

### Medium Gray
- **Hex:** #7F8C8D
- **RGB:** rgb(127, 140, 141)
- **Usage:**
  - Secondary text
  - Placeholder text
  - Disabled states
  - Borders (light)

### Light Gray
- **Hex:** #ECF0F1
- **RGB:** rgb(236, 240, 241)
- **Usage:**
  - Section backgrounds
  - Card backgrounds
  - Form inputs background
  - Hover states on light elements

### White
- **Hex:** #FFFFFF
- **RGB:** rgb(255, 255, 255)
- **Usage:**
  - Main background
  - Card backgrounds
  - Text on dark backgrounds
  - Button backgrounds (secondary)

### Black
- **Hex:** #000000
- **RGB:** rgb(0, 0, 0)
- **Usage:**
  - Body text
  - Borders (dark)
  - Icons
  - Strong emphasis

## Semantic Colors

### Success/Green
- **Hex:** #27AE60
- **RGB:** rgb(39, 174, 96)
- **Usage:** Success messages, checkmarks, approved status

### Warning/Orange
- **Hex:** #F39C12
- **RGB:** rgb(243, 156, 18)
- **Usage:** Warning messages, pending status, alerts

### Error/Red
- **Hex:** #E74C3C
- **RGB:** rgb(231, 76, 60)
- **Usage:** Error messages, validation errors, danger actions

### Info/Blue
- **Hex:** #3498DB
- **RGB:** rgb(52, 152, 219)
- **Usage:** Information messages, tooltips, help text

## Background Gradients

### Header Gradient (estimated)
```css
background: linear-gradient(135deg, #2C3E50 0%, #34495E 100%);
```

### Section Overlay
```css
background: rgba(0, 0, 0, 0.5);
```

### Accent Gradient
```css
background: linear-gradient(90deg, #E74C3C 0%, #C0392B 100%);
```

## Shadow/Elevation System

### Shadow Level 1 (subtle)
```css
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

### Shadow Level 2 (card default)
```css
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
```

### Shadow Level 3 (hover/elevated)
```css
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
```

### Shadow Level 4 (modal/overlay)
```css
box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
```

## Opacity/Transparency

### Overlay Dark
- **Hex:** rgba(0, 0, 0, 0.6)
- **Usage:** Modal overlays, image overlays

### Overlay Light
- **Hex:** rgba(255, 255, 255, 0.9)
- **Usage:** Semi-transparent backgrounds, cards over images

### Ghost Text
- **Hex:** rgba(0, 0, 0, 0.5)
- **Usage:** Disabled text, placeholder text

### Hover Overlay
- **Hex:** rgba(231, 76, 60, 0.1)
- **Usage:** Subtle hover effects on cards

## Color Combinations (Recommended Pairings)

### Text on Background
- **Dark text (#2C3E50) on white (#FFFFFF)** - Primary content
- **White text (#FFFFFF) on dark (#2C3E50)** - Inverted sections
- **Medium gray (#7F8C8D) on light gray (#ECF0F1)** - Secondary content

### Accent Usage
- **Red (#E74C3C) on white** - CTA buttons
- **Red (#E74C3C) on light gray** - Accent borders
- **Red (#E74C3C) on dark** - Highlight elements

### Hover States
- **Light gray hover** - Buttons: from white to #ECF0F1
- **Darker red hover** - From #E74C3C to #C0392B
- **Reduced opacity hover** - On disabled/muted elements

## Accessibility Considerations

### Contrast Ratios (WCAG AA)
- **Dark text on white:** 21:1 (AAA compliant)
- **Red button on white:** 3.9:1 (AA compliant)
- **Medium gray on white:** 4.5:1 (AA compliant)

### Color Blind Friendly
- Avoid red/green only combinations
- Use additional visual indicators (icons, patterns) alongside colors
- Ensure sufficient luminance contrast

## Implementation in Tailwind CSS v4

```css
@theme {
  --color-accent: #E74C3C;
  --color-accent-dark: #C0392B;
  --color-accent-light: #FADBD8;
  --color-dark: #2C3E50;
  --color-medium-gray: #7F8C8D;
  --color-light-gray: #ECF0F1;
  --color-success: #27AE60;
  --color-warning: #F39C12;
  --color-error: #E74C3C;
  --color-info: #3498DB;
}

@layer components {
  .btn-primary {
    @apply bg-accent text-white hover:bg-accent-dark transition-colors;
  }
  
  .btn-secondary {
    @apply bg-white border-2 border-accent text-accent hover:bg-light-gray;
  }
  
  .text-primary {
    @apply text-dark;
  }
  
  .text-secondary {
    @apply text-medium-gray;
  }
  
  .shadow-card {
    @apply shadow-[0_4px_8px_rgba(0,0,0,0.1)];
  }
}
```
