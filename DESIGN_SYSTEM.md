# Personal Blog Design System

A performance-optimized design system built with Tailwind CSS v4 best practices for Astro. Designed around accessibility, performance, and a harmonious aesthetic centered on cream backgrounds with purple and forest green accents.

## 🎨 Color Palette

### Primary Colors
- **Cream Background**: `#fefaf6` - Warm, easy-on-the-eyes background
- **Cream Dark**: `#f9f2eb` - Subtle surface variations
- **Cream Darker**: `#f0e6d6` - Deeper surface tones

### Purple Accent (Signature Color)
Purple is the star of the show—use it for headings, buttons, and primary interactive elements.

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Purple 50 | `#faf7ff` | `--color-purple-50` | Light backgrounds |
| Purple 100 | `#f0e8ff` | `--color-purple-100` | Hover states |
| Purple 200 | `#e2d5ff` | `--color-purple-200` | Subtle accents |
| Purple 300 | `#c9b3ff` | `--color-purple-300` | Borders |
| Purple 400 | `#a885ff` | `--color-purple-400` | Secondary elements |
| **Purple 500** | `#8b5cf6` | `--color-purple-500` | **Primary purple** |
| **Purple 600** | `#7c3aed` | `--color-purple-600` | **Buttons, links** |
| **Purple 700** | `#6d28d9` | `--color-purple-700` | **Headings** |
| Purple 800 | `#5b21b6` | `--color-purple-800` | Dark variants |
| Purple 900 | `#4c1d95` | `--color-purple-900` | Deepest purple |

### Forest Green (Secondary Accent)
Use sparingly to avoid clutter—perfect for success states, secondary buttons, or nature-themed content.

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Forest 50 | `#f0fdf4` | `--color-forest-50` | Light backgrounds |
| Forest 100 | `#dcfce7` | `--color-forest-100` | Subtle backgrounds |
| **Forest 600** | `#16a34a` | `--color-forest-600` | **Primary forest** |
| Forest 700 | `#15803d` | `--color-forest-700` | Hover states |

### Text Colors
All text colors meet WCAG 2.1 AA contrast requirements.

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Text Primary | `#1a1a1a` | `--color-text-primary` | Main body text |
| Text Secondary | `#374151` | `--color-text-secondary` | Subheadings |
| Text Muted | `#6b7280` | `--color-text-muted` | Captions, metadata |
| Text Light | `#9ca3af` | `--color-text-light` | Placeholders |

## 📝 Typography

### Font Stack
- **Body**: `Wotfard` → System sans-serif fallback
- **Headings**: `Fields` → Georgia fallback  
- **Code**: `Geist Mono` → Monospace fallback

### Scale & Usage
Base font size: **16px** (1rem)

| Element | Size | Line Height | Weight | Color |
|---------|------|-------------|--------|-------|
| H1 | `clamp(2rem, 4vw, 3.5rem)` | 1.2 | 700 | Purple 700 |
| H2 | `clamp(1.5rem, 3vw, 2.5rem)` | 1.2 | 700 | Purple 700 |
| H3 | `clamp(1.25rem, 2.5vw, 2rem)` | 1.2 | 700 | Purple 700 |
| H4 | `1.5rem` | 1.2 | 700 | Purple 700 |
| H5 | `1.25rem` | 1.2 | 700 | Purple 700 |
| H6 | `1.125rem` | 1.2 | 700 | Purple 700 |
| Body | `1rem` | 1.6 | 400 | Text Primary |

### Typography Classes

```html
<!-- Content width constraints -->
<article class="content-narrow">65 characters max width</article>
<article class="content-medium">75 characters max width</article>
<article class="content-wide">85 characters max width</article>

<!-- Prose spacing for natural reading rhythm -->
<div class="prose-spacing">
  <h2>Automatic spacing</h2>
  <p>Between all elements</p>
  <p>Follows design system rhythm</p>
</div>
```

## 📐 Spacing & Layout

### Spacing Scale
Generous whitespace is key to the design philosophy.

| Class | Margin | Usage |
|-------|--------|-------|
| `.space-xs` | `0.5rem` | Tight spacing |
| `.space-sm` | `0.75rem` | Small gaps |
| `.space-md` | `1rem` | Standard spacing |
| `.space-lg` | `1.5rem` | Comfortable spacing |
| `.space-xl` | `2rem` | Large spacing |
| `.space-2xl` | `3rem` | Extra large |
| `.space-3xl` | `4rem` | Section spacing |
| `.space-4xl` | `6rem` | Hero spacing |

### Breathing Room Classes
For consistent, generous padding:

```html
<section class="breathing-room-sm">1.5rem padding</section>
<section class="breathing-room-md">2rem padding</section>
<section class="breathing-room-lg">3rem padding</section>
<section class="breathing-room-xl">4rem padding</section>
```

## 🧩 Components

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">Primary Action</button>
```
- Purple background with white text
- Hover: Darker purple + lift effect + glow
- Focus: Purple outline

#### Secondary Button  
```html
<button class="btn btn-secondary">Secondary Action</button>
```
- Transparent background with purple text and border
- Hover: Light purple background

#### Forest Button
```html
<button class="btn btn-forest">Nature Action</button>
```
- Forest green background (use sparingly)
- Hover: Darker green + lift effect + glow

### Cards
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content with automatic spacing</p>
</div>
```
- White background with subtle border
- Hover: Shadow + lift effect
- Rounded corners (0.75rem)

### Form Inputs
```html
<input type="text" class="input" placeholder="Enter text...">
```
- Clean styling with purple focus states
- Accessible contrast and focus indicators

## ✨ Animations & Interactions

### Utility Classes
```html
<!-- Smooth transitions -->
<div class="transition-smooth">Standard easing</div>
<div class="transition-bounce">Playful bounce effect</div>

<!-- Hover effects -->
<div class="hover-lift">Lifts on hover</div>
<div class="hover-glow">Purple glow on hover</div>

<!-- Focus states -->
<button class="focus-ring">Purple focus ring</button>
<button class="focus-ring-forest">Forest focus ring</button>
```

### Design Principles
- **Subtle**: Animations enhance, never distract
- **Smooth**: 200ms duration with ease curves
- **Accessible**: Respects `prefers-reduced-motion`
- **Purposeful**: Only used when adding polish

## ♿ Accessibility Features

### Built-in Compliance
- WCAG 2.1 AA contrast ratios for all text
- Focus indicators on all interactive elements
- Screen reader support with semantic markup
- Keyboard navigation friendly
- High contrast mode support
- Reduced motion preferences respected

### Utility Classes
```html
<!-- Screen reader only content -->
<span class="sr-only">Hidden from visual users</span>

<!-- Skip links for keyboard navigation -->
<a href="#main" class="skip-link">Skip to content</a>
```

## 🚀 Performance Optimizations

### Font Loading
- `font-display: swap` for all custom fonts
- Optimized WOFF2 formats
- System font fallbacks

### CSS Architecture
- Tailwind CSS v4 with native CSS custom properties
- Layer-based organization for optimal specificity
- Minimal runtime overhead with compile-time optimizations

### Astro Integration
```css
@import 'tailwindcss';
```
- No config file needed (Tailwind v4 benefit)
- Tree-shaking for unused styles
- Critical CSS inlining

## 📋 Usage Guidelines

### Do's ✅
- Use purple as the primary accent color
- Provide generous whitespace and breathing room
- Follow the spacing scale for consistency
- Use semantic HTML elements
- Test with keyboard navigation
- Verify color contrast ratios

### Don'ts ❌
- Don't overuse the forest green accent
- Don't create cluttered layouts
- Don't use animations excessively
- Don't ignore accessibility requirements
- Don't deviate from the typography scale
- Don't use stark white backgrounds

### Implementation
1. Import the design system: `import '../styles/design-system.css'`
2. Use CSS custom properties: `color: var(--color-purple-600)`
3. Apply component classes: `class="btn btn-primary"`
4. Follow spacing guidelines: `class="breathing-room-lg"`
5. Test accessibility with screen readers and keyboard navigation

## 🔧 Integration with Astro

### Performance Benefits
- **SSG/SSR**: Styles compiled at build time
- **Critical CSS**: Inlined automatically by Astro
- **View Transitions**: Smooth page navigation
- **Partial Hydration**: Minimal client-side JavaScript
- **Image Optimization**: Built-in responsive images

### Example Layout Usage
```astro
---
import '../styles/design-system.css';
---

<html lang="en">
  <body>
    <a href="#main" class="skip-link">Skip to content</a>
    <nav class="breathing-room-md">
      <button class="btn btn-primary">Primary CTA</button>
    </nav>
    <main id="main" class="content-medium prose-spacing breathing-room-lg">
      <h1>Purple Heading</h1>
      <p>Body text with perfect contrast</p>
      <div class="card hover-lift">
        Interactive card with subtle animations
      </div>
    </main>
  </body>
</html>
```

This design system prioritizes performance, accessibility, and visual harmony while providing a solid foundation for building beautiful, fast web experiences with Astro and Tailwind CSS v4. 