# Ficta Website Specification

**Version:** 1.0
**Last Updated:** October 31, 2024
**Live URL:** https://ficta.ai
**Status:** Production

---

## Table of Contents

1. [Overview](#overview)
2. [Technical Architecture](#technical-architecture)
3. [Design System](#design-system)
4. [Features & Functionality](#features--functionality)
5. [Pages & Components](#pages--components)
6. [Infrastructure & Deployment](#infrastructure--deployment)
7. [Performance & Optimization](#performance--optimization)
8. [Maintenance & Updates](#maintenance--updates)
9. [Future Enhancements](#future-enhancements)

---

## Overview

### Purpose
The Ficta website serves as the primary web presence for Ficta, a playful AI-powered story creation app designed for children. The site showcases the app's features, provides download links, and communicates the company's mission and privacy policies.

### Target Audience
- Parents seeking educational apps for children
- Educators interested in creative writing tools
- Children (ages 6-13) exploring story creation
- Investors and partners researching the company

### Key Objectives
- Drive App Store downloads
- Communicate COPPA compliance and privacy commitment
- Showcase the app's playful, creative aesthetic
- Provide transparent information about the team and policies

---

## Technical Architecture

### Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Framework** | Next.js (Static Export) | 15.5.5 |
| **Language** | TypeScript | Latest |
| **Styling** | Tailwind CSS | 4.1.14 |
| **Animations** | Framer Motion | Latest |
| **Icons** | Lucide React | 0.359.0 |
| **UI Components** | shadcn/ui | Custom |
| **Package Manager** | npm | 10.9.2 |
| **Runtime** | Node.js | 22.16.0 |

### Build Configuration

**Output:** Static HTML Export
**Build Command:** `npm run build`
**Output Directory:** `/out`
**Export Mode:** Enabled (`output: "export"`)

### Key Dependencies

```json
{
  "next": "15.5.5",
  "react": "19.1.0",
  "framer-motion": "latest",
  "lucide-react": "^0.359.0",
  "@tailwindcss/postcss": "^4.1.14",
  "tailwindcss": "^4.1.14"
}
```

### File Structure

```
ficta-site/
├── public/
│   └── images/
│       ├── logo.png                    # Dragon logo (846KB)
│       ├── typewriter.png              # Typewriter illustration (885KB)
│       └── team/
│           └── ying-dong.png           # Founder photo (1.5MB)
├── src/
│   ├── app/
│   │   ├── globals.css                 # Design system & Tailwind config
│   │   ├── layout.tsx                  # Root layout with metadata
│   │   └── page.tsx                    # Main page with view routing
│   ├── components/
│   │   ├── BottomNav.tsx               # Floating navigation
│   │   ├── Product.tsx                 # Hero/app showcase page
│   │   ├── TeamAndPolicy.tsx           # Team & privacy policy page
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx   # Protected image component
│   │   └── ui/                         # 49 shadcn/ui components
│   └── styles/
├── next.config.ts                      # Next.js & webpack config
├── postcss.config.cjs                  # Tailwind v4 PostCSS config
├── .npmrc                              # npm configuration (legacy-peer-deps)
└── package.json                        # Project dependencies
```

---

## Design System

### Brand Identity

**Mission Statement:**
"Co-creator of stories - Inspired by how children learn to write, the app 'shows, not tells' how to use words, build sentences, and form stories."

**Visual Personality:**
- Playful and creative
- Trustworthy and professional
- Child-friendly and approachable
- Artistic and whimsical

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary** (Cyan) | `#8FD3DC` | Main brand color, active states, accents |
| **Secondary** (Coral) | `#DC988F` | Secondary accents, decorative elements |
| **Accent** (Light Peach) | `#F5E5E3` | Hover states, subtle backgrounds |
| **Background** | `#FEFCFB` | Off-white warm background |
| **Foreground** | `#1A1A1A` | Near-black for text |
| **Card** | `#FFFFFF` | Pure white for elevated surfaces |
| **Muted** | `#F8F9FA` | Subtle backgrounds |
| **Muted Foreground** | `#6B7280` | Secondary text |
| **Border** | `rgba(0,0,0,0.08)` | Subtle borders |

### Typography

**Font Family:** Cousine (Google Fonts)
**Weights:** 400 (Regular), 700 (Bold)
**Styles:** Normal, Italic

**Type Scale:**
- Base size: 16px
- h1: `var(--text-2xl)` - 1.5rem / 24px
- h2: `var(--text-xl)` - 1.25rem / 20px
- h3: `var(--text-lg)` - 1.125rem / 18px
- h4: `var(--text-base)` - 1rem / 16px
- p: `var(--text-base)` - 1rem / 16px

**Character:**
Monospace typography creates a distinctive typewriter aesthetic that connects to the story/writing theme and provides excellent readability.

### Spacing & Layout

**Container Widths:**
- `max-w-7xl`: Main content containers
- `max-w-3xl`: Text content, narrow layouts
- `max-w-xl`: Paragraph widths

**Common Spacing:**
- Page bottom padding: `pb-32` (128px) for navigation clearance
- Section vertical: `py-20` (80px)
- Responsive horizontal: `px-6 lg:px-12` (24px → 48px)
- Grid gaps: `gap-16` (64px) for large, `gap-6` (24px) for medium

### Border Radius

- Pills/buttons: `rounded-full`
- Cards/containers: `rounded-3xl` (1.5rem / 24px)
- Buttons: `rounded-2xl` (1rem / 16px)

### Elevation & Shadows

- Subtle borders: `border border-border/50`
- Card hover: `hover:shadow-2xl`
- Floating nav: `shadow-2xl`
- Images: `drop-shadow-2xl`

---

## Features & Functionality

### 1. Animated Hero Section

**Typewriter Animation:**
- Blue typewriter illustration with gentle floating motion (y: [0, -5, 0])
- Duration: 2 seconds, infinite loop
- Positioned center-right on desktop (hidden on mobile < 1024px)

**Floating Story Papers:**
- Generated every 3 seconds via interval
- Maximum 5 papers visible at once
- Each paper contains story beginning text:
  - "Once upon a time..."
  - "In a magical land..."
  - "A brave dragon soared..."
  - "The adventure begins..."
  - "Stories come alive..."
  - "Dreams take flight..."
- Animation: Floats upward from typewriter, rotates slightly, fades in/out
- Duration: 8 seconds total
- Y travel: 100px → -400px (500px range)
- Alternating left/right drift based on index

**Typing Keys Simulation:**
- 5 small circles above typewriter keyboard
- Animated to simulate key presses
- Staggered delays (0.1s each)
- Creates realistic typing rhythm

**Background Effects:**
- 3 pulsing orbs (primary, secondary, accent colors)
- Infinite scale/opacity animations
- Staggered delays (0, 1, 2 seconds)
- Creates ambient depth
- Positioned: top-left, bottom-right, center

**Floating Decorations:**
- 3 sparkle/star icons
- Slow floating animations (4-7 seconds)
- Positioned around typewriter
- Opacity: 25-30% for subtlety

### 2. Navigation System

**Bottom Navigation:**
- Fixed position: `bottom-8 left-1/2 -translate-x-1/2`
- Glassmorphic effect: `bg-white/80 backdrop-blur-xl`
- Pill-shaped: `rounded-full`
- Shadow: `shadow-2xl`
- z-index: 50

**Navigation Items:**
1. **App** (Smartphone icon)
   - Shows Product/Hero page
   - Active state: cyan background, white text
2. **Team and policy** (Users icon)
   - Shows TeamAndPolicy page
   - Active state: cyan background, white text

**Responsive Behavior:**
- Mobile (< 640px): Icons only
- Desktop (≥ 640px): Icons + labels
- Smooth transitions: 300ms
- Hover state: `bg-accent` for inactive items

### 3. View Routing

**Implementation:**
- Single-page application (SPA)
- State-based routing using React `useState`
- Two views: `'product'` | `'teamandpolicy'`
- No page reloads, instant transitions
- Logo click returns to Product view

### 4. Responsive Design

**Breakpoints:**
- sm: 640px
- md: 768px
- lg: 1024px (primary desktop breakpoint)
- xl: 1280px
- 2xl: 1536px

**Mobile-First Approach:**
- Typewriter animation: Hidden < 1024px (`hidden lg:block`)
- Navigation labels: Hidden < 640px
- Grid layouts: Single column → 2 columns at lg
- Text alignment: Centered → left-aligned at lg
- Padding: Smaller → larger at lg

### 5. Accessibility Features

**Current Implementation:**
- Semantic HTML elements (`nav`, `main`, `section`, `button`)
- Alt text on all images
- Keyboard-accessible navigation (buttons, not divs)
- Sufficient color contrast (WCAG AA compliant)
- Hover and focus states on interactive elements

**To Be Added:**
- ARIA labels on interactive elements
- Reduced motion preferences support
- Enhanced focus indicators
- Screen reader optimization

---

## Pages & Components

### Main Page (page.tsx)

**Layout:**
```tsx
<div className="min-h-screen">
  <Logo /> {/* Fixed top-left */}
  <main>
    {activeView === 'product' && <Product />}
    {activeView === 'teamandpolicy' && <TeamAndPolicy />}
  </main>
  <BottomNav /> {/* Fixed bottom-center */}
</div>
```

**Logo Component:**
- Fixed position: `top-8 left-8 z-40`
- Dragon logo image (48x48px)
- "FICTA" wordmark (text-2xl)
- Hover effect: `scale-110`
- Click handler: Returns to Product view

### Product Component

**Structure:**
1. Hero Section (min-h-screen)
   - Animated background orbs
   - Left content area (heading, description, CTA)
   - Right animation area (typewriter, papers, sparkles)

**Content:**
- **Heading:** "co-creator of stories" (with "of stories" in cyan)
- **Description:** App value proposition (shows not tells)
- **CTA:** App Store download button

**App Store Button:**
- Background: Black
- Icon: Apple logo (24x24px)
- Text layout: Vertical stack
  - "Download on the" (text-xs, opacity-80)
  - "App Store" (text-lg)
- Size: Large (px-8 py-6)
- Border radius: rounded-2xl
- Hover: `bg-black/90`
- Link: https://apps.apple.com/us/app/ficta/id6503630141

**Animations:**
- Entry: Fade in + slide up (0.8s duration)
- Typewriter: Continuous float (2s loop)
- Papers: Spawn every 3s, float for 8s
- Orbs: Continuous pulse (4s loop)
- Sparkles: Continuous rotation + float (4-7s loops)

### TeamAndPolicy Component

**Structure:**
1. Team Section
   - Tagline: "Creators. Thinkers. Makers."
   - Team member grid (currently 1 member)

2. Privacy Policy Section
   - COPPA-compliant policy
   - Comprehensive sections

**Team Member Card:**
- Layout: Avatar + Info + Description + Social Links
- Avatar: 128x128px, rounded-2xl
- Hover effect: Lift (-translate-y-2) + shadow-2xl
- Background hover overlay: primary/5 opacity
- Social icons: LinkedIn, Twitter (40x40px circles)

**Team Member Data:**
```tsx
{
  name: "Ying Dong",
  role: "Co-founder",
  image: yingDongImage,
  linkedin: "https://www.linkedin.com/in/dongying/",
  twitter: "https://twitter.com/yingatcambridge",
  description: "Having lived and worked across continents..."
}
```

**Privacy Policy:**
- Container: White card, rounded-3xl
- Sections:
  1. Introduction
  2. Information We Collect
  3. How We Use User Data
  4. Data Retention
  5. Data Security
  6. Children's Privacy (COPPA focus)
  7. Parental Rights
  8. How to Revoke Consent & Request Deletion
  9. Changes to Policy
  10. Contact Information
- Contact email: ying@ficta.ai
- Effective date: 10/27/2025

### BottomNav Component

**Props Interface:**
```tsx
interface BottomNavProps {
  activeView: 'product' | 'teamandpolicy';
  onViewChange: (view: 'product' | 'teamandpolicy') => void;
}
```

**Features:**
- Fixed positioning
- Glassmorphic background
- Active state styling
- Responsive label visibility
- Smooth transitions

### UI Components (shadcn/ui)

**Complete Library (49 components):**
- accordion, alert-dialog, alert, aspect-ratio, avatar
- badge, breadcrumb, button, calendar, card
- carousel, chart, checkbox, collapsible, command
- context-menu, dialog, drawer, dropdown-menu
- form, hover-card, input-otp, input, label
- menubar, navigation-menu, pagination, popover
- progress, radio-group, resizable, scroll-area
- select, separator, sheet, sidebar, skeleton
- slider, sonner, switch, table, tabs
- textarea, toggle-group, toggle, tooltip
- use-mobile (hook), utils

**Currently Used:**
- Button (App Store download)
- Motion components (via Framer Motion)

**Available for Future Use:**
All 49 components are installed and ready for feature expansion.

---

## Infrastructure & Deployment

### Hosting Architecture

```
User Request (ficta.ai)
        ↓
Global DNS Resolution
        ↓
Cloudflare DNS (amy.ns.cloudflare.com, cameron.ns.cloudflare.com)
        ↓
Cloudflare Pages (Edge Network - 300+ cities)
        ↓
Static HTML/CSS/JS served from nearest edge location
```

### Domain Configuration

**Registrar:** IONOS
**DNS Provider:** Cloudflare DNS
**Nameservers:**
- `amy.ns.cloudflare.com`
- `cameron.ns.cloudflare.com`

**Domains:**
- Primary: `ficta.ai`
- WWW: `www.ficta.ai`
- Both pointing to Cloudflare Pages

### GitHub Repository

**URL:** https://github.com/yingficta/ficta-site
**Branch:** main
**Deployment Trigger:** Push to main branch

### Cloudflare Pages Configuration

**Project Name:** ficta-site
**Production Branch:** main
**Framework Preset:** Next.js (Static HTML Export)
**Build Command:** `npm run build`
**Build Output Directory:** `out`
**Node Version:** 22.16.0
**npm Version:** 10.9.2

**Environment Variables:** None required

**Build Settings:**
- Install command: `npm clean-install --progress=false`
- Legacy peer deps: Enabled via `.npmrc`

### SSL/TLS

**Provider:** Cloudflare
**Certificate:** Auto-generated and auto-renewed
**Protocols:** TLS 1.2, TLS 1.3
**HTTPS:** Forced (automatic redirect from HTTP)

### Figma Asset Resolution

**Webpack Plugin:** Custom resolver in `next.config.ts`

**Asset Mapping:**
```typescript
{
  // Logo
  "9b57b1f721b7529f390f9b7efdeb42384e37b266.png":
    "/public/images/logo.png",

  // Typewriter
  "7b4b926981c8f2b5834b29675e0eb4faf27cc08d.png":
    "/public/images/typewriter.png",

  // Ying Dong photo
  "d92992a735857595aeb9bf21070812a7f561e673.png":
    "/public/images/team/ying-dong.png"
}
```

---

## Performance & Optimization

### Build Output

**Production Bundle Size:**
- Main page: 54 kB
- First Load JS: 156 kB (includes React, Framer Motion)
- Shared chunks: 102 kB

**Route Optimization:**
- Static prerendering (○ Static)
- No server-side rendering
- No dynamic routes

### Image Optimization

**Current State:**
- Images: Unoptimized (static export limitation)
- Formats: PNG
- Sizes:
  - Logo: 846 KB
  - Typewriter: 885 KB
  - Team photo: 1.5 MB

**Future Optimization:**
- Convert to WebP/AVIF
- Implement responsive images
- Add lazy loading for below-fold images

### CSS Optimization

**Tailwind v4 Features:**
- CSS-based configuration
- Automatic purging of unused styles
- Inline critical CSS
- Modern CSS features (custom properties, @layer)

**Bundle Strategy:**
- Single CSS file
- Minified in production
- Cached by Cloudflare CDN

### JavaScript Optimization

**Code Splitting:**
- Next.js automatic code splitting
- Shared chunks for common dependencies
- Route-based splitting (currently single route)

**Minification:**
- Production build automatically minifies
- Tree shaking enabled
- Dead code elimination

### Performance Metrics (Estimated)

**Lighthouse Scores (Target):**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### CDN & Caching

**Cloudflare Edge Network:**
- 300+ data centers globally
- Automatic asset caching
- Smart routing to nearest location
- DDoS protection included

**Cache Strategy:**
- Static assets: Cached at edge
- HTML: Cached with revalidation
- Images: Long-term caching

---

## Maintenance & Updates

### Deployment Workflow

**Local Development:**
```bash
# 1. Make changes to code
# 2. Test locally
npm run dev

# 3. Build production version
npm run build

# 4. Commit changes
git add .
git commit -m "Description of changes"

# 5. Push to GitHub
git push origin main
```

**Automatic Deployment:**
- Cloudflare Pages detects push to main branch
- Triggers automatic build (2-3 minutes)
- Deploys to production
- Live at ficta.ai

**Rollback Process:**
- Cloudflare Pages keeps deployment history
- Can rollback to any previous deployment
- One-click rollback in dashboard

### Monitoring

**Cloudflare Analytics:**
- Page views
- Unique visitors
- Geographic distribution
- Bandwidth usage
- Cache hit rate

**Available Monitoring:**
- Uptime monitoring
- Performance metrics
- Error tracking
- Build status notifications

### Content Updates

**To Update:**

1. **Text Content:**
   - Edit `src/components/Product.tsx` (hero text, stories)
   - Edit `src/components/TeamAndPolicy.tsx` (team, policy)

2. **Images:**
   - Replace files in `/public/images/`
   - Commit and push

3. **Team Members:**
   - Add to `teamMembers` array in TeamAndPolicy.tsx
   - Include new team photo in `/public/images/team/`

4. **Navigation:**
   - Modify `navItems` in BottomNav.tsx

5. **Styling:**
   - Update CSS variables in `src/app/globals.css`
   - Modify Tailwind classes in components

### Dependency Updates

**Regular Maintenance:**
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update Next.js
npm install next@latest react@latest

# Test thoroughly
npm run build
npm run dev
```

**Peer Dependency Conflicts:**
- `.npmrc` file handles legacy peer deps
- Update with caution, test builds

---

## Future Enhancements

### Short-Term (1-3 months)

**Performance:**
- [ ] Convert images to WebP/AVIF format
- [ ] Implement lazy loading for images
- [ ] Add loading skeleton for animations
- [ ] Optimize bundle size (code splitting)

**Content:**
- [ ] Add app screenshots carousel
- [ ] Expand team member section
- [ ] Add FAQ section
- [ ] Blog/resources section

**Features:**
- [ ] Dark mode support
- [ ] Multi-language support (i18n)
- [ ] Newsletter signup form
- [ ] Contact form

**SEO:**
- [ ] Add structured data (Schema.org)
- [ ] Meta descriptions for pages
- [ ] Open Graph images
- [ ] XML sitemap
- [ ] robots.txt optimization

### Mid-Term (3-6 months)

**Analytics & Tracking:**
- [ ] Google Analytics 4 integration
- [ ] Conversion tracking (App Store downloads)
- [ ] Heatmap analysis (Hotjar/Microsoft Clarity)
- [ ] A/B testing framework

**User Experience:**
- [ ] Accessibility audit & improvements
- [ ] ARIA labels on all interactive elements
- [ ] Keyboard navigation enhancements
- [ ] Reduced motion preferences
- [ ] Focus indicators

**Content Management:**
- [ ] Headless CMS integration (optional)
- [ ] Admin interface for content updates
- [ ] Draft/preview functionality

**Marketing:**
- [ ] Email capture integration
- [ ] Social media feed integration
- [ ] Press kit page
- [ ] Testimonials section

### Long-Term (6-12 months)

**Advanced Features:**
- [ ] Interactive story creation demo
- [ ] Video content (demo, tutorials)
- [ ] User-generated content showcase
- [ ] Community features (optional)

**Technical Improvements:**
- [ ] Progressive Web App (PWA) support
- [ ] Service worker for offline access
- [ ] Advanced caching strategies
- [ ] Performance monitoring dashboard

**Business Features:**
- [ ] Pricing page (if app monetization changes)
- [ ] Partner/educator resources section
- [ ] API documentation (if public API launches)
- [ ] Developer portal

**Internationalization:**
- [ ] Spanish translation
- [ ] Chinese translation
- [ ] Localized content strategies
- [ ] Regional landing pages

---

## Appendix

### Key URLs

- **Production:** https://ficta.ai
- **WWW:** https://www.ficta.ai
- **Cloudflare Pages:** https://ficta-site.pages.dev
- **GitHub Repo:** https://github.com/yingficta/ficta-site
- **App Store:** https://apps.apple.com/us/app/ficta/id6503630141

### Contact Information

**Technical Contact:** ying@ficta.ai
**Domain Registrar:** IONOS
**DNS Provider:** Cloudflare
**Hosting:** Cloudflare Pages
**Repository:** GitHub

### Design Resources

**Figma Design File:** Ficta Website
**Design Documentation:**
- `DESIGN_SYSTEM.md` - Complete design system specs
- `COMPONENT_GUIDE.md` - Component usage guide
- `HANDOFF.md` - Developer handoff notes

### Build Warnings (Non-Critical)

**ESLint Warnings:**
- Using `<img>` tags instead of Next.js `<Image />`
  - Reason: Static export with Figma assets
  - Impact: No automatic image optimization
  - Resolution: Can be ignored or use custom loader

**CSS Warnings:**
- Google Fonts @import order
  - Impact: None (cosmetic warning)
  - Resolution: Can be ignored

### Browser Support

**Supported Browsers:**
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari: iOS 12+
- Chrome Mobile: Last 2 versions

**Not Supported:**
- Internet Explorer (all versions)
- Legacy Edge (pre-Chromium)

### Compliance & Legal

**Privacy:**
- COPPA compliant
- Privacy policy prominently displayed
- Parental consent mechanisms documented
- Data deletion process outlined

**Accessibility:**
- WCAG 2.1 Level AA target
- Semantic HTML structure
- Keyboard navigation support
- Color contrast compliance

**Performance:**
- Core Web Vitals monitoring
- Lighthouse CI recommended
- Performance budgets to be established

---

## Version History

### Version 1.0 (October 31, 2024)
- Initial production release
- Complete rebuild from Figma design files
- Implemented animated typewriter scene
- Added team and privacy policy pages
- Deployed to Cloudflare Pages
- Custom domain configured (ficta.ai)
- SSL certificate enabled
- GitHub integration for auto-deployment

---

**Document Maintained By:** Ficta Development Team
**Last Review Date:** October 31, 2024
**Next Review Date:** January 31, 2025

---

*This specification document should be updated whenever significant changes are made to the website structure, features, or infrastructure.*
