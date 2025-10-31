# Ficta Design System

Complete design system documentation for the Ficta website.

## Brand Identity

### Mission
Ficta bridges imagination and language for children through playful story creation. The design reflects this mission through a creative, accessible, and joyful aesthetic.

### Visual Personality
- **Playful**: Animations, floating elements, typewriter metaphor
- **Creative**: Artistic color palette, monospace typography
- **Trustworthy**: Clean layout, clear information hierarchy
- **Child-friendly**: Soft colors, approachable design, whimsical elements

## Color Palette

### Primary Colors

#### Primary - Cyan/Turquoise
```css
--primary: #8FD3DC
--primary-foreground: #1A1A1A
```
**Usage**: Main brand color, buttons, active states, accents, floating orbs  
**RGB**: rgb(143, 211, 220)  
**HSL**: hsl(186, 52%, 71%)

**Applications**:
- Active navigation buttons
- Brand highlights (e.g., "of stories" text)
- Link hover states
- Animated background orbs
- Icon accents

#### Secondary - Peachy/Coral
```css
--secondary: #DC988F
--secondary-foreground: #1A1A1A
```
**Usage**: Secondary accents, decorative elements, hover effects  
**RGB**: rgb(220, 152, 143)  
**HSL**: hsl(7, 55%, 71%)

**Applications**:
- Decorative paper lines
- Secondary background orbs
- Complementary accents

### Neutral Colors

#### Background
```css
--background: #FEFCFB
```
Off-white warm background (not pure white)

#### Foreground
```css
--foreground: #1A1A1A
```
Near-black for primary text (softer than pure black)

#### Card
```css
--card: #FFFFFF
```
Pure white for elevated surfaces

#### Muted
```css
--muted: #F8F9FA
--muted-foreground: #6B7280
```
Subtle backgrounds and secondary text

#### Accent
```css
--accent: #F5E5E3
```
Light peachy background for hover states

#### Border
```css
--border: rgba(0, 0, 0, 0.08)
```
Subtle borders with low opacity

### Chart Colors
Extended palette for potential data visualization:
```css
--chart-1: #8FD3DC (primary)
--chart-2: #DC988F (secondary)
--chart-3: #A8DFE5 (light cyan)
--chart-4: #E8BBB4 (light coral)
--chart-5: #C1EAED (very light cyan)
```

## Typography

### Font Family
```css
font-family: 'Cousine', monospace;
```
**Source**: Google Fonts  
**Weights Used**: 400 (Regular), 700 (Bold)  
**Styles**: Normal, Italic

**Why Cousine?**
- Distinctive typewriter aesthetic
- Excellent readability at all sizes
- Monospace spacing creates unique rhythm
- Connects to story/writing theme

### Type Scale

Base font size: `16px`

#### Headings
```css
h1 {
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h2 {
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h3 {
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}

h4 {
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: 1.5;
}
```

#### Body Text
```css
p {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
}
```

#### Special Text Treatments

**Logo Wordmark**
```css
font-size: 2xl (text-2xl)
letter-spacing: tracking-tight
```

**Hero Heading**
```css
tracking-tight
leading-none
```
The word "FICTA" appears in all capitals throughout.

### Typography Guidelines

**DO:**
- Use system-defined heading sizes from globals.css
- Maintain consistent line-height (1.5)
- Use tracking-tight for display text
- Keep body text at base size for readability

**DON'T:**
- Add Tailwind font-size classes (text-xl, text-2xl) unless specifically requested
- Override font-weight unless necessary
- Use custom line-heights
- Mix font families

## Spacing System

### Container Widths
- `max-w-7xl`: Main content containers
- `max-w-3xl`: Text content, narrow layouts
- `max-w-xl`: Paragraph widths

### Padding/Margin Scale
Common spacing values:
- `pb-32`: Bottom padding for pages (navigation clearance)
- `py-20`: Section vertical padding
- `px-6 lg:px-12`: Responsive horizontal padding
- `gap-16`: Large gaps between grid items
- `gap-6`: Medium gaps
- `space-y-10`: Vertical spacing in content

### Layout Patterns
```css
/* Page wrapper */
min-h-screen pb-32

/* Section */
px-6 lg:px-12 py-20

/* Content container */
max-w-7xl mx-auto
```

## Border Radius

Consistent rounded corners create friendly, modern aesthetic:

- `rounded-full`: Pills, buttons, navigation, avatars
- `rounded-3xl`: Cards, containers, major elements
- `rounded-2xl`: Buttons, smaller cards

## Shadows

### Elevation System
```css
/* Subtle elevation */
border border-border/50

/* Card hover */
hover:shadow-2xl

/* Floating navigation */
shadow-2xl

/* Dropdowns/images */
drop-shadow-2xl
```

## Iconography

### Icon Library
**Lucide React** - Consistent, clean icon set

### Icon Sizes
- `w-5 h-5`: Standard inline icons
- `w-6 h-6`: Larger inline icons (buttons)
- `w-8 h-8`: Decorative icons
- `w-12 h-12`: Logo size

### Icon Usage
- **Navigation**: Smartphone, Users
- **Download**: Apple
- **Social**: Instagram, Twitter, Linkedin
- **Decorative**: Sparkles, Star
- **Information**: FileText

### Icon Colors
- Inherit text color by default
- Primary/Secondary for accents
- Opacity variations (text-primary/30)

## Components

### Buttons

#### Primary Button (App Store)
```tsx
className="bg-black hover:bg-black/90 text-white rounded-2xl px-8 py-6"
```
- Black background (distinctive from brand colors)
- Large padding for prominence
- Icon + text layout
- Rounded corners

#### Navigation Button
```tsx
className="px-6 py-3 rounded-full"
// Active state:
bg-primary text-white shadow-lg
// Inactive state:
hover:bg-accent text-muted-foreground
```

### Cards

#### Team/Content Cards
```tsx
className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
```

Features:
- White background
- Subtle border
- Generous padding
- Hover lift effect
- Smooth transitions (300ms)
- Optional hover background overlay

#### Privacy Policy Card
```tsx
className="bg-white rounded-3xl overflow-hidden border border-border/50"
```
- Larger text for readability (text-base)
- Black text for contrast
- Structured sections

### Navigation

#### Bottom Nav
```tsx
className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
```

Features:
- Glassmorphic effect (`bg-white/80 backdrop-blur-xl`)
- Pill shape (`rounded-full`)
- Floating shadow
- Responsive labels
- Active state indication

### Logo Treatment

```tsx
className="fixed top-8 left-8 z-40"
```

Features:
- Dragon image (48x48px)
- "FICTA" wordmark
- Hover scale effect
- Clickable to return to App page

## Animation System

### Motion (Framer Motion) Patterns

#### Page Entrance
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

#### Staggered Elements
```tsx
transition={{ delay: 0.1 * index }}
```

#### Pulsing Orbs
```tsx
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.3, 0.5, 0.3],
}}
transition={{
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

#### Floating Elements
```tsx
animate={{
  y: [-15, 15, -15],
  rotate: [0, 180, 360],
}}
transition={{
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

#### Paper Float Animation
```tsx
initial={{
  y: 100,
  opacity: 0,
  rotate: 0,
  scale: 0.8,
}}
animate={{
  y: -400,
  opacity: [0, 1, 1, 0.7, 0],
  rotate: [5, -3],
  scale: [0.8, 1, 1, 1, 0.95],
}}
transition={{
  duration: 8,
  ease: "easeOut",
}}
```

### Transition Guidelines

**Duration**:
- Quick: 300ms (hover states)
- Medium: 800ms (page entrance)
- Long: 4-8s (ambient animations)

**Easing**:
- `easeInOut`: Smooth start and end
- `easeOut`: Natural deceleration

**Performance**:
- Use transform properties (scale, translate, rotate)
- Avoid animating expensive properties (box-shadow)
- Leverage GPU acceleration

## Layout Patterns

### Hero Section
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12">
  <div className="max-w-7xl mx-auto w-full">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Content */}
    </div>
  </div>
</section>
```

**Features**:
- Full viewport height
- Centered content
- Two-column grid on desktop
- Overflow hidden for animations
- Responsive padding

### Content Section
```tsx
<section className="px-6 lg:px-12 py-20">
  <div className="max-w-7xl mx-auto">
    {/* Content */}
  </div>
</section>
```

## Accessibility

### Current Implementation
- Semantic HTML elements
- Alt text on images
- Keyboard-accessible navigation
- Sufficient color contrast
- Hover and focus states

### Future Enhancements
- ARIA labels on interactive elements
- Keyboard shortcuts
- Screen reader optimization
- Reduced motion preferences
- Focus indicators

## Responsive Design

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Patterns

**Hide on Mobile**:
```tsx
className="hidden lg:block"
```
Used for: Typewriter animation, navigation labels

**Responsive Grid**:
```tsx
className="grid lg:grid-cols-2"
```

**Responsive Padding**:
```tsx
className="px-6 lg:px-12"
```

**Responsive Text**:
```tsx
className="text-center lg:text-left"
```

**Responsive Flex**:
```tsx
className="flex-col sm:flex-row"
```

## Image Guidelines

### Usage
- Always use `ImageWithFallback` component for new images
- Preserve Figma asset imports (`figma:asset/...`)
- Include descriptive alt text
- Optimize for performance

### Treatments
- Drop shadows for floating elements
- Rounded corners for profile images
- Scale on hover for interactive elements

## Brand Assets

### Dragon Logo
- Format: PNG
- Size: 48x48px (standard), scalable
- Usage: Top-left corner, always visible
- Hover effect: scale-110

### Typewriter Illustration
- Format: PNG
- Size: 384px width (w-96)
- Usage: Hero section animation
- Treatment: drop-shadow-2xl

### Team Photos
- Format: PNG
- Size: 128x128px (w-32 h-32)
- Shape: rounded-2xl
- Treatment: Scale on hover

## Content Tone & Voice

### Writing Style
- **Clear**: Simple, direct language
- **Warm**: Friendly and approachable
- **Confident**: Authoritative but not arrogant
- **Child-focused**: Centered on kids' needs

### Example Patterns

**Headlines**: Short, impactful
```
"co-creator of stories"
```

**Descriptions**: Informative, inspiring
```
"Let kids lead, and let AI assist. Make writing feel like play."
```

**Team**: Personal, authentic
```
"Creators. Thinkers. Makers."
```

## Development Guidelines

### CSS Custom Properties
- Defined in `styles/globals.css`
- Use variables for consistency
- Follow existing token structure
- Don't override base typography

### Component Structure
- Functional components with TypeScript
- Props interfaces for all components
- Consistent naming (PascalCase)
- Co-locate related components

### Animation Best Practices
- Use Motion for complex animations
- Keep animations purposeful
- Test performance on mobile
- Provide reduced motion support

### Code Style
- Use Tailwind classes for styling
- Group related classes logically
- Keep components focused and small
- Comment complex logic

---

**Last Updated**: October 27, 2025  
**Maintained By**: Ficta Team  
**Status**: Active Development
