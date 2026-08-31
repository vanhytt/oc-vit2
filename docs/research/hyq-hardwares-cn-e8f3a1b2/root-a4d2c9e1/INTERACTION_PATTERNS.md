# HYQ Hardwares - Interaction Patterns & Animations

## Scroll Behaviors

### Sticky Header
- **Trigger:** Page scroll down
- **Behavior:** Header reduces height and sticks to top
- **Animation:** Smooth height transition (0.3s)
- **Shadow:** Appears on scroll (0 to shadow-level-2)
- **Z-index:** 1000 (above content)
- **Desktop:** Full sticky
- **Mobile:** Hamburger menu stays accessible

### Scroll-triggered Animations (WOW.js equivalent)
- **Animation library:** Framer Motion (Next.js recommended)
- **Trigger:** Element enters viewport
- **Common animations:**
  - Fade in: opacity 0 to 1
  - Slide up: translateY(40px) to 0
  - Slide left: translateX(-40px) to 0
  - Scale in: scale(0.95) to 1
- **Duration:** 0.6s to 0.8s
- **Delay:** 0.1s-0.2s between staggered items

### Parallax Effects
- **Hero section:** Background moves slower than foreground
- **Speed ratio:** 0.5x (background at 50% scroll speed)
- **Mobile:** Disabled (performance)

## Hover States

### Card Hover
- **Effect:** Shadow elevation + slight scale
- **Duration:** 0.3s
- **Changes:**
  - Shadow: level-2 to level-3
  - Transform: scale(1) to scale(1.02)
  - Background: white to light-gray

### Button Hover
- **Primary button:** Dark red, slight scale (1.05)
- **Secondary button:** Filled background appears
- **Icon button:** Background highlight (light gray)
- **Duration:** 0.2s

### Link Hover
- **Effect:** Color change + underline animation
- **Duration:** 0.2s
- **Changes:**
  - Color: normal red to dark red
  - Text-decoration: underline appears

### Image Hover (in cards)
- **Effect:** Zoom + overlay
- **Duration:** 0.4s
- **Changes:**
  - Image: scale(1) to scale(1.1)
  - Overlay: opacity 0 to 0.3

## Click/Tap Interactions

### Button Click
- **Feedback:** Brief opacity flash (0.1s)
- **Effect:** Ripple animation (optional, Material Design style)
- **Action delay:** 0.05s (for feel of responsiveness)

### Menu Toggle (Mobile)
- **Trigger:** Hamburger icon tap
- **Animation:** Menu slides in from left (0.3s)
- **Backdrop:** Fades in simultaneously
- **Overlay:** Prevents background scroll
- **Close:** Tap overlay or menu item, back button

### Carousel Navigation
- **Next/Prev buttons:** Click/tap to slide
- **Auto-slide:** 5 second interval (can be paused on hover)
- **Swipe:** Touch drag on mobile
- **Duration:** Slide animation 0.4s-0.6s
- **Indicators:** Dots show current slide (clickable)

### Form Interactions
- **Focus state:** Input border color changes to accent
- **Error state:** Border becomes red, error message appears
- **Valid state:** Green checkmark or border
- **Submit:** Button loading state with spinner

### Accordion/Collapse
- **Trigger:** Click heading
- **Animation:** Height smooth transition (0.3s)
- **Rotate indicator:** Arrow rotates 180 degrees
- **Content:** Fades in as it expands

## Animations on Page Load

### Staggered Card Load
- **First card:** Fade in + slide up (delay 0s)
- **Each subsequent card:** +0.1s delay
- **Total for 4 cards:** Spread over 0.3s total
- **Duration each:** 0.6s

### Hero Banner Load
- **Text:** Fade in + slide up (delay 0.2s)
- **Button:** Fade in + scale (delay 0.4s)
- **Background:** Pan/zoom animation (slow, 3s)

### Number Counter Animation
- **Start:** 0 to final number
- **Duration:** 2s
- **Easing:** cubic-bezier (ease-out)
- **Trigger:** On scroll into view

## Form Validations

### Real-time Validation
- **Input field:** Check on blur or after typing stops (debounce 0.5s)
- **Error message:** Fade in below input (0.2s)
- **Success checkmark:** Green check icon appears (0.3s)
- **Submit button:** Disabled while form invalid



## Mobile-Specific Interactions

### Touch Feedback
- **Active state:** Visual highlight on tap (not on hover)
- **Tap target minimum:** 44x44px (accessibility standard)
- **Double-tap:** Prevent text selection

### Swipe Gestures
- **Horizontal swipe:** Carousel navigation
- **Vertical swipe:** Pull-to-refresh (optional)
- **Sensitivity:** 50px minimum swipe distance

### Mobile Menu
- **Slide in from left:** Full-screen overlay
- **Tap outside:** Close menu
- **Back gesture:** Native browser back closes menu
- **Scroll:** Menu scrollable if items overflow

### Bottom Navigation (if present)
- **Fixed position:** Sticky bottom bar
- **Swipe up:** Menu collapses/expands
- **Active indicator:** Current page highlighted

## Loading States

### Skeleton Screens
- **Placeholder:** Light gray shimmer animation (1.5s loop)
- **Cards:** Show image placeholder + text lines
- **Fade in:** Real content fades in when loaded (0.3s)

### Progress Indicators
- **Linear progress:** Bar fills left to right
- **Circular spinner:** Rotates 360 degrees (1s loop)
- **Pulsing dots:** 3 dots pulse sequentially

## Notifications/Toasts

### Toast Position
- **Desktop:** Top-right corner, 20px offset
- **Mobile:** Bottom center, full width with margins
- **Z-index:** 2002 (above modals)

### Toast Animation
- **Slide in:** From bottom (mobile) or right (desktop) - 0.3s
- **Auto-dismiss:** After 5-8 seconds
- **Slide out:** 0.3s reverse animation
- **Duration on screen:** 5s default

### Toast Types
- **Success:** Green background, checkmark icon
- **Error:** Red background, X icon
- **Warning:** Orange background, alert icon
- **Info:** Blue background, info icon

## Modal/Dialog Interactions

### Open Modal
- **Backdrop:** Fade in (0.2s), semi-transparent dark
- **Modal:** Scale in + fade (0.3s)
- **Body scroll:** Disabled (overflow hidden)

### Close Modal
- **Fade out:** Backdrop and modal (0.2s)
- **Body scroll:** Re-enabled
- **Focus:** Returns to trigger button

### Modal Buttons
- **Primary action:** Red button (right)
- **Secondary action:** Gray button (left)
- **Close button:** X icon (top-right)

## Accessibility Interactions

### Keyboard Navigation
- **Tab:** Cycle through focusable elements
- **Shift+Tab:** Reverse cycle
- **Enter:** Activate buttons/links
- **Space:** Toggle checkboxes/radio buttons
- **Escape:** Close menus/modals
- **Arrow keys:** Navigate carousels, dropdowns

### Focus States
- **Visible outline:** 2px solid accent color
- **Outline offset:** 2px
- **Not removed:** Visible for keyboard users
- **High contrast:** Especially on dark backgrounds

### Reduced Motion
- **User preference:** @prefers-reduced-motion
- **Animation adjustments:**
  - Disable entrance animations
  - Keep color transitions
  - Disable parallax
  - Disable auto-play carousels

### Screen Reader Announcements
- **Form errors:** Announced on focus
- **Live regions:** ARIA live regions for dynamic content
- **Navigation:** Semantic HTML with proper landmarks
- **Skip links:** Jump to main content

