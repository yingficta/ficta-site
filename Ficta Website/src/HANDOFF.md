# Developer Handoff Document

## Project Status: Production Ready

This document provides implementation-specific details for developers working with the Ficta website codebase.

## Current State (October 27, 2025)

### Recently Completed
1. **Typewriter Hero Animation** - Animated typewriter scene with floating story papers
2. **Content Updates** - Streamlined copy focusing on educational approach
3. **Team Section** - Simplified team tagline to "Creators. Thinkers. Makers."
4. **Design Refinements** - Reduced font sizes, simplified navigation

### Removed Features
- Google Play download button (iOS-only app)
- User testimonials section
- "Designed for Creativity" features section
- Multiple team members (currently showing only founder)

## Technical Architecture

### Component Hierarchy

```
App.tsx (root)
├── Logo (fixed top-left)
├── Product.tsx (activeView === 'product')
│   ├── Hero Section
│   │   ├── Animated Background (orbs)
│   │   ├── Left Content
│   │   │   ├── Heading
│   │   │   ├── Description
│   │   │   └── App Store Button
│   │   └── Right Content
│   │       ├── Typewriter Image
│   │       ├── Typing Animation
│   │       ├── Floating Papers
│   │       └── Ambient Sparkles
│   └── (Screenshots section removed)
├── TeamAndPolicy.tsx (activeView === 'teamandpolicy')
│   ├── Team Section
│   │   ├── Tagline
│   │   └── Team Member Card
│   │       ├── Avatar
│   │       ├── Name & Role
│   │       ├── Description
│   │       └── Social Links
│   └── Privacy Policy Section
│       └── Policy Content Card
└── BottomNav.tsx (fixed bottom)
    ├── App Button
    └── Team and Policy Button
```

### State Management

**View Routing** (in App.tsx):
```tsx
const [activeView, setActiveView] = useState<'product' | 'teamandpolicy'>('product');
```
- Simple state-based routing
- No React Router needed
- Passed to BottomNav as props
- Determines which page component renders

**Animation State** (in Product.tsx):
```tsx
const [papers, setPapers] = useState<Array<{ id: number; text: string; delay: number }>>([]);
const [nextId, setNextId] = useState(0);
```
- Manages floating paper queue
- Interval-based paper generation (3 seconds)
- Keeps last 5 papers in view
- Each paper has unique ID and story text

### Key Animations

#### 1. Floating Papers (Product.tsx, lines 210-295)
**Lifecycle**:
1. Generated every 3 seconds via `useEffect` interval
2. Starts from typewriter position
3. Floats upward and sideways
4. Fades in, stays visible, then fades out
5. Exits and is removed from array

**Animation Parameters**:
- Duration: 8 seconds
- Y travel: 100 → -400px (500px total)
- Rotation: Alternates left/right based on index
- Opacity sequence: [0, 1, 1, 0.7, 0]

**Performance Notes**:
- Only 5 papers rendered at once
- Uses AnimatePresence for exit animations
- Transform-based (GPU accelerated)

#### 2. Typing Simulation (Product.tsx, lines 174-207)
**Implementation**:
- Invisible div over typewriter keys
- 5 small circles simulating key presses
- Staggered animation (0.1s delay each)
- Creates typing rhythm effect

**Animation**:
- Each circle: y: [0, 3, 0], opacity: [0, 1, 0]
- Duration: 0.3s
- Repeat delay: 1.5s
- Coordinated with typewriter bounce

#### 3. Background Orbs (Product.tsx, lines 74-113)
**Pattern**:
- 3 orbs in different positions
- Infinite pulsing animation
- Staggered delays (0, 1, 2 seconds)
- Scale: [1, 1.2, 1] or [1.2, 1, 1.2]
- Opacity: varies
- Duration: 4 seconds

**Colors**:
- Top-left: primary/20
- Bottom-right: secondary/20
- Center: accent/20

#### 4. Ambient Sparkles (Product.tsx, lines 299-343)
**Elements**:
- 3 floating sparkle/star icons
- Different positions and sizes
- Slow, smooth float animations
- 4-7 second durations
- Infinite repeat

### Data Structures

#### Team Members (TeamAndPolicy.tsx, lines 6-15)
```tsx
interface TeamMember {
  name: string;
  role: string;
  image: string; // Figma asset path
  linkedin?: string;
  twitter?: string;
  description: string;
}
```

Currently one member (Ying Dong). Array structure allows easy expansion.

#### Story Beginnings (Product.tsx, lines 39-46)
```tsx
const stories = [
  "Once upon a time...",
  "In a magical land...",
  "A brave dragon soared...",
  "The adventure begins...",
  "Stories come alive...",
  "Dreams take flight..."
];
```

Cycles through these texts for floating papers.

### Asset Management

#### Figma Assets (Imported)
```tsx
// App.tsx
import logoImage from "figma:asset/9b57b1f721b7529f390f9b7efdeb42384e37b266.png";

// Product.tsx
import typewriterImage from "figma:asset/7b4b926981c8f2b5834b29675e0eb4faf27cc08d.png";

// TeamAndPolicy.tsx
import yingDongImage from "figma:asset/d92992a735857595aeb9bf21070812a7f561e673.png";
```

**Important**: These paths must be preserved exactly. They reference assets from Figma Make's asset system.

#### Component Assets
```tsx
import { ImageWithFallback } from "./figma/ImageWithFallback";
```
**Protected component** - do not modify or recreate.

### Styling Approach

#### Tailwind Usage
- Utility-first classes
- No custom Tailwind config (using v4.0 with globals.css)
- Design tokens in CSS variables
- Typography system managed in globals.css

#### Critical Rules
1. **No font-size classes** unless explicitly requested
   - Example: Don't add `text-xl`, `text-2xl`
   - Reason: Typography system in globals.css
2. **No font-weight classes** unless necessary
   - Example: Avoid `font-bold`, `font-semibold`
3. **Use CSS variables** for colors
   - `bg-primary` not `bg-[#8FD3DC]`
4. **Preserve existing classes** when editing

#### Common Patterns
```tsx
// Card hover effect
className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"

// Glassmorphic surface
className="bg-white/80 backdrop-blur-xl"

// Active button state
className={`${isActive ? 'bg-primary text-white' : 'hover:bg-accent text-muted-foreground'}`}
```

### Motion (Framer Motion) Patterns

#### Import
```tsx
import { motion, AnimatePresence } from "motion/react";
```

**Note**: This is Motion (not "Framer Motion"). The old name is deprecated.

#### Common Patterns

**Fade In on Mount**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

**Staggered Children**:
```tsx
transition={{ delay: 0.1 * index }}
```

**Infinite Loop**:
```tsx
<motion.div
  animate={{ scale: [1, 1.2, 1] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
```

**Exit Animation**:
```tsx
<AnimatePresence>
  {items.map(item => (
    <motion.div
      key={item.id}
      exit={{ opacity: 0, y: -500 }}
    >
  ))}
</AnimatePresence>
```

### Responsive Breakpoints

#### Desktop-Only Elements
- Typewriter animation: `className="hidden lg:block"`
- Navigation labels: `${isActive ? 'inline' : 'hidden sm:inline'}`

#### Grid Layouts
- `grid lg:grid-cols-2`: Single column mobile, two columns desktop

#### Text Alignment
- `text-center lg:text-left`: Centered mobile, left-aligned desktop

#### Spacing
- `px-6 lg:px-12`: 24px mobile, 48px desktop

## File-by-File Breakdown

### App.tsx (34 lines)
**Purpose**: Root component and view router

**Exports**: Default export (required)

**State**: 
- `activeView`: Current page view

**Key Elements**:
- Fixed logo in top-left
- Conditional rendering of Product/TeamAndPolicy
- BottomNav with state handlers

**Customization Points**:
- Add new views by extending type union
- Modify logo behavior
- Add global layout elements

### Product.tsx (350 lines)
**Purpose**: Main app showcase page

**Exports**: Named export `Product`

**State**:
- `papers`: Array of floating papers
- `nextId`: Paper ID counter

**Effects**:
- Interval for paper generation (3s)
- Cleanup on unmount

**Sections**:
1. Hero (lines 72-347)
   - Animated background (74-113)
   - Left content (115-148)
   - Right animation (150-344)

**Customization Points**:
- Change story texts (lines 39-46)
- Adjust animation timings
- Modify App Store link
- Add/remove decorative elements

### TeamAndPolicy.tsx (256 lines)
**Purpose**: Combined team and privacy policy page

**Exports**: Named export `TeamAndPolicy`

**Data**:
- `teamMembers` array (lines 6-15)
- Static policy content (lines 136-249)

**Sections**:
1. Team (lines 30-112)
   - Tagline (37-39)
   - Member grid (42-110)
2. Privacy Policy (lines 115-253)
   - Card container (125-251)
   - Structured sections

**Customization Points**:
- Add team members to array
- Update policy content
- Modify card styles
- Add new sections

### BottomNav.tsx (47 lines)
**Purpose**: Floating bottom navigation

**Exports**: Named export `BottomNav`

**Props**:
```tsx
interface BottomNavProps {
  activeView: 'product' | 'teamandpolicy';
  onViewChange: (view: 'product' | 'teamandpolicy') => void;
}
```

**Nav Items** (lines 9-12):
- Product → "App" with Smartphone icon
- TeamAndPolicy → "Team and policy" with Users icon

**Customization Points**:
- Add new navigation items
- Change icons
- Modify styling
- Adjust positioning

### styles/globals.css (193 lines)
**Purpose**: Design system tokens and base styles

**Structure**:
1. Google Fonts import (line 1)
2. CSS variables (lines 5-44)
3. Dark mode (lines 46-81)
4. Tailwind theme (lines 83-122)
5. Base styles (lines 124-132)
6. Typography system (lines 138-188)

**Critical Variables**:
```css
--primary: #8FD3DC
--secondary: #DC988F
--background: #fefcfb
--foreground: #1a1a1a
```

**Typography**:
- Automatic sizing for h1-h4, p, label, button, input
- Only applies when no Tailwind text classes present
- Based on CSS custom properties

**Customization Points**:
- Adjust color values
- Modify type scale
- Update font family
- Add new design tokens

## Common Tasks

### Adding a New Page View

1. **Create component** in `/components`:
```tsx
export function NewPage() {
  return (
    <div className="min-h-screen pb-32 pt-20">
      {/* Content */}
    </div>
  );
}
```

2. **Update type** in App.tsx:
```tsx
const [activeView, setActiveView] = useState<'product' | 'teamandpolicy' | 'newpage'>('product');
```

3. **Add to nav** in BottomNav.tsx:
```tsx
const navItems = [
  { id: 'product' as const, label: 'App', icon: Smartphone },
  { id: 'teamandpolicy' as const, label: 'Team and policy', icon: Users },
  { id: 'newpage' as const, label: 'New Page', icon: YourIcon },
];
```

4. **Render in App.tsx**:
```tsx
{activeView === 'newpage' && <NewPage />}
```

### Adding a Team Member

Update `teamMembers` array in TeamAndPolicy.tsx:
```tsx
const teamMembers = [
  {
    name: "Ying Dong",
    role: "Co-founder",
    image: yingDongImage,
    linkedin: "https://www.linkedin.com/in/dongying/",
    twitter: "https://twitter.com/yingatcambridge",
    description: "..."
  },
  {
    name: "New Member",
    role: "Role",
    image: newMemberImage, // Import at top
    linkedin: "...",
    description: "..."
  }
];
```

Import new image:
```tsx
import newMemberImage from "figma:asset/[hash].png";
```

### Updating Copy

**App tagline** (Product.tsx, line 37):
```tsx
<p className="text-muted-foreground max-w-xl mx-auto lg:mx-0">
  Your new copy here
</p>
```

**Team tagline** (TeamAndPolicy.tsx, line 37):
```tsx
<p className="text-muted-foreground text-left mt-20 text-[24px]">
  Your new copy here
</p>
```

### Adjusting Animations

**Speed up papers**:
```tsx
transition={{ duration: 6 }} // Was 8
```

**More frequent papers**:
```tsx
const interval = setInterval(() => {
  // ...
}, 2000); // Was 3000
```

**Slower orb pulse**:
```tsx
transition={{
  duration: 6, // Was 4
  repeat: Infinity,
  ease: "easeInOut"
}}
```

## Known Constraints

### Environment
- **Figma Make platform** - specific runtime environment
- **No Node server** - frontend only
- **Asset system** - must use `figma:asset/` paths
- **No file system access** - all assets must be imported

### Performance
- **Mobile consideration** - animations hidden on small screens
- **Paper limit** - max 5 floating papers at once
- **Transform-based** - animations use GPU-accelerated properties

### Browser Support
- **Modern browsers only** - ES6+, CSS Grid, Backdrop Filter
- **No IE11** - uses modern features

## Testing Checklist

When making changes, verify:

- [ ] Desktop layout (1920x1080)
- [ ] Tablet layout (768px width)
- [ ] Mobile layout (375px width)
- [ ] Logo clickable and returns to App page
- [ ] Navigation switches views correctly
- [ ] Active nav state shows correctly
- [ ] Animations play smoothly (60fps)
- [ ] Papers generate every 3 seconds
- [ ] App Store link opens in new tab
- [ ] Social links work (LinkedIn, Twitter)
- [ ] Hover states work on all interactive elements
- [ ] Privacy policy is readable
- [ ] Images load correctly
- [ ] No console errors

## Debugging Tips

### Animation not showing
- Check `hidden lg:block` class
- Verify viewport width > 1024px
- Check Motion component syntax
- Look for JavaScript errors

### Papers not floating
- Check `useEffect` dependencies
- Verify interval is created
- Check console for errors
- Ensure `papers` state updating

### Colors wrong
- Verify CSS variables in globals.css
- Check Tailwind class names
- Ensure no inline styles overriding
- Check theme configuration

### Layout breaks on mobile
- Check responsive classes (lg:, md:, sm:)
- Verify grid breakpoints
- Test with actual device
- Use browser dev tools responsive mode

## Future Development

### Planned Features
- Blog/Resources section
- App screenshots carousel
- More team members
- Multi-language support

### Technical Debt
- Add comprehensive TypeScript types
- Implement error boundaries
- Add loading states
- Improve accessibility (ARIA)
- Add analytics tracking
- Optimize images

### Potential Refactors
- Extract animation configurations
- Create reusable card component
- Centralize copy in constants file
- Add Storybook for components
- Implement E2E tests

## Support

### Questions?
Contact: ying@ficta.ai

### Documentation
- README.md - Project overview
- DESIGN_SYSTEM.md - Design specs
- COMPONENT_GUIDE.md - Component details

---

**Last Updated**: October 27, 2025  
**Prepared By**: Figma Make AI  
**Status**: Ready for Handoff
