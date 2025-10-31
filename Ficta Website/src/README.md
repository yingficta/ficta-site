# Ficta Website

A creative, artistic website for Ficta - a playful AI-powered story creation app for children. Built with React, Tailwind CSS, and Motion (Framer Motion).

## Overview

Ficta is a story creation app designed to help children learn to write through playful interaction. The website showcases the app with an engaging, animated interface featuring a distinctive dual-tone color palette and monospace typography.

## Design Philosophy

The Ficta website embodies a creative, playful aesthetic that reflects the app's mission to make writing feel like play for children. The design features:

- **Dual-tone color palette**: Cyan/turquoise primary color paired with peachy/coral secondary color
- **Typewriter aesthetic**: Cousine monospace font for a distinctive, creative feel
- **Cute dragon logo**: A friendly character that appears throughout the site
- **Animated storytelling**: Dynamic typewriter scene with floating story papers
- **Minimalist navigation**: Floating bottom nav with just two sections

## Technology Stack

- **React** - UI framework
- **Tailwind CSS v4.0** - Styling (custom design tokens in globals.css)
- **Motion/React** (Framer Motion) - Animations
- **Lucide React** - Icons
- **shadcn/ui** - Component library foundation

## Project Structure

```
├── App.tsx                          # Main app component with view routing
├── components/
│   ├── Product.tsx                  # App showcase page with hero animation
│   ├── TeamAndPolicy.tsx            # Combined team and privacy policy page
│   ├── BottomNav.tsx                # Floating navigation component
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Protected image component
│   └── ui/                          # shadcn/ui components
├── styles/
│   └── globals.css                  # Design tokens and typography
└── guidelines/
    └── Guidelines.md                # Project guidelines
```

## Key Features

### 1. App Page (Product.tsx)
- Animated hero section with typewriter scene
- Papers floating out with story beginnings
- Pulsing background orbs in brand colors
- Floating sparkles and stars
- App Store download link
- Streamlined content (removed testimonials, Google Play, feature sections)

### 2. Team and Policy Page (TeamAndPolicy.tsx)
- Team member profile with photo and bio
- Social media links (LinkedIn, Twitter)
- Comprehensive COPPA-compliant privacy policy
- Clean, readable layout with hover effects

### 3. Navigation (BottomNav.tsx)
- Fixed floating bottom navigation
- Two sections: "App" and "Team and policy"
- Pill-shaped active state indicator
- Responsive design

### 4. Brand Elements
- Dragon logo in top-left corner (fixed position)
- "FICTA" wordmark in all capitals
- Consistent use of brand colors throughout

## Design System

### Colors
- **Primary**: `#8FD3DC` (Cyan/Turquoise)
- **Secondary**: `#DC988F` (Peachy/Coral)
- **Accent**: `#F5E5E3` (Light peachy background)
- **Background**: `#FEFCFB` (Off-white)
- **Foreground**: `#1A1A1A` (Near black)

### Typography
- **Font Family**: Cousine (Google Fonts monospace)
- **Heading Sizes**: Modest, reduced from original larger sizes
- **Base Size**: 16px
- All typography defined in globals.css with CSS custom properties

### Spacing & Layout
- Generous padding on sections (py-20, pb-32)
- Max-width containers (max-w-7xl, max-w-3xl)
- Rounded corners (rounded-3xl for cards)
- Hover effects with smooth transitions

### Animation Patterns
- Smooth fade-ins with Motion
- Staggered entrance animations
- Pulsing background orbs (infinite loop)
- Typewriter key press simulation
- Floating papers with rotation and drift
- Hover scale and translation effects

## Content Guidelines

### App Page Copy
**Heading**: "co-creator of stories" (with "of stories" in primary color)

**Description**: "Inspired by how children learn to write, the app 'shows, not tells' how to use words, build sentences, and form stories — through playful models like one sentence at a time or build a character. Let kids lead, and let AI assist. Make writing feel like play."

### Team Page Copy
**Tagline**: "Creators. Thinkers. Makers."

### Privacy Policy
- COPPA compliant
- Focus on child privacy protection
- Clear parental rights information
- Contact: ying@ficta.ai

## Asset Management

### Images
- Logo: Dragon character (PNG from Figma)
- Typewriter: Vintage typewriter illustration (PNG from Figma)
- Team photo: Founder photo (PNG from Figma)

All images are imported via `figma:asset/` paths and should be preserved.

### Icons
- From Lucide React library
- Used icons: Apple, Smartphone, Users, Sparkles, Star, Instagram, Twitter, Linkedin

## Development Notes

### Protected Files
- `/components/figma/ImageWithFallback.tsx` - Do not modify

### Best Practices
1. Use ImageWithFallback component for new images (not img tag)
2. Preserve all Figma asset imports
3. Follow existing animation patterns from Motion
4. Maintain color consistency via CSS variables
5. Keep typography system from globals.css
6. Use existing shadcn/ui components when possible

### Responsive Design
- Mobile-first approach
- Typewriter animation hidden on mobile (`hidden lg:block`)
- Navigation labels collapse on mobile
- Grid layouts adjust with Tailwind breakpoints

## Running the Project

This project is built for Figma Make environment. The standard React development workflow applies:

1. Components are loaded from the `/components` directory
2. Main entry point is `/App.tsx` (default export required)
3. Styling uses Tailwind v4.0 with custom tokens in `styles/globals.css`
4. Assets load from `figma:asset/` paths

## Future Considerations

Potential enhancements for future development:
- Add more team members as the company grows
- Consider adding app screenshots carousel
- Potential blog/resources section
- Multi-language support
- Accessibility enhancements (ARIA labels, keyboard nav)

## Contact

For questions about this codebase, contact the Ficta team at ying@ficta.ai

---

**Last Updated**: October 27, 2025  
**Version**: 1.0  
**Status**: Production Ready
