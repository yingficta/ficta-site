# Component Reference Guide

Detailed documentation for all custom components in the Ficta website.

## Table of Contents
1. [App.tsx](#apptsx)
2. [Product.tsx](#producttsx)
3. [TeamAndPolicy.tsx](#teamandpolicytsx)
4. [BottomNav.tsx](#bottomnavtsx)
5. [Shared Patterns](#shared-patterns)
6. [shadcn/ui Components](#shadcnui-components)

---

## App.tsx

**Path**: `/App.tsx`  
**Type**: Root Component  
**Export**: Default

### Purpose
Main application component that handles view routing and persistent UI elements (logo, navigation).

### Props
None (root component)

### State

```tsx
const [activeView, setActiveView] = useState<'product' | 'teamandpolicy'>('product');
```

| State | Type | Initial | Purpose |
|-------|------|---------|---------|
| `activeView` | `'product' \| 'teamandpolicy'` | `'product'` | Controls which page is displayed |

### Structure

```tsx
<div className="min-h-screen">
  {/* Fixed Logo */}
  <div className="fixed top-8 left-8 z-40">
    <a onClick={() => setActiveView('product')}>
      <img src={logoImage} />
      <span>FICTA</span>
    </a>
  </div>

  {/* Conditional Page Rendering */}
  <main>
    {activeView === 'product' && <Product />}
    {activeView === 'teamandpolicy' && <TeamAndPolicy />}
  </main>

  {/* Fixed Navigation */}
  <BottomNav activeView={activeView} onViewChange={setActiveView} />
</div>
```

### Key Classes

| Element | Classes | Purpose |
|---------|---------|---------|
| Container | `min-h-screen` | Full viewport height |
| Logo wrapper | `fixed top-8 left-8 z-40` | Fixed top-left position |
| Logo image | `w-12 h-12 group-hover:scale-110 transition-transform duration-300` | Dragon with hover effect |
| Wordmark | `text-2xl tracking-tight` | "FICTA" text |

### Behavior

**Logo Click**:
- Returns to Product page
- Implemented as state change, not navigation
- Smooth transition (no page reload)

**View Switching**:
- Controlled by BottomNav clicks
- Unmounts previous view, mounts new view
- State persists across switches

### Customization

**Add new view**:
```tsx
// 1. Update type
type View = 'product' | 'teamandpolicy' | 'newview';

// 2. Add conditional render
{activeView === 'newview' && <NewView />}

// 3. Update BottomNav navItems
```

**Change default view**:
```tsx
const [activeView, setActiveView] = useState<View>('teamandpolicy');
```

---

## Product.tsx

**Path**: `/components/Product.tsx`  
**Type**: Page Component  
**Export**: Named (`Product`)

### Purpose
Main app showcase page featuring animated hero section with typewriter and floating story papers.

### Props
None

### State

```tsx
const [papers, setPapers] = useState<Array<{ id: number; text: string; delay: number }>>([]);
const [nextId, setNextId] = useState(0);
```

| State | Type | Purpose |
|-------|------|---------|
| `papers` | `Array<{id: number, text: string, delay: number}>` | Queue of floating papers |
| `nextId` | `number` | Auto-incrementing ID for papers |

### Constants

**Story Texts** (line 39):
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

### Effects

**Paper Generation** (lines 52-67):
```tsx
useEffect(() => {
  const interval = setInterval(() => {
    setPapers(prev => {
      const newPaper = {
        id: nextId,
        text: stories[nextId % stories.length],
        delay: 0
      };
      setNextId(n => n + 1);
      return [...prev.slice(-4), newPaper]; // Keep last 5
    });
  }, 3000); // Every 3 seconds

  return () => clearInterval(interval);
}, [nextId]);
```

**How it works**:
1. Interval triggers every 3 seconds
2. Creates new paper with incremental ID
3. Selects story text using modulo
4. Adds to end of array
5. Keeps only last 5 papers (removes oldest)
6. Cleanup on unmount

### Structure

```tsx
<div className="min-h-screen pb-32">
  <section className="relative min-h-screen flex items-center">
    {/* Animated Background Orbs */}
    <div className="absolute inset-0 -z-10">
      <motion.div /* Primary orb */ />
      <motion.div /* Secondary orb */ />
      <motion.div /* Accent orb */ />
    </div>

    <div className="max-w-7xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left: Text Content */}
        <motion.div>
          <h1>co-creator of stories</h1>
          <p>Description...</p>
          <Button>App Store</Button>
        </motion.div>

        {/* Right: Typewriter Animation */}
        <motion.div className="hidden lg:block">
          <img /* Typewriter */ />
          <motion.div /* Typing simulation */ />
          <AnimatePresence>
            {papers.map(/* Floating papers */)}
          </AnimatePresence>
          <motion.div /* Sparkles */ />
        </motion.div>
      </div>
    </div>
  </section>
</div>
```

### Animations

#### Background Orbs (lines 74-113)

**Primary Orb** (top-left):
```tsx
<motion.div
  className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

**Variations**:
- Secondary (bottom-right): `scale: [1.2, 1, 1.2]`, delay: 1s
- Accent (center): `scale: [1, 1.3, 1]`, delay: 2s

#### Typing Simulation (lines 174-207)

**Key Press Effect**:
```tsx
{[0, 1, 2, 3, 4].map((i) => (
  <motion.div
    className="w-2 h-2 bg-foreground/30 rounded-full"
    animate={{
      y: [0, 3, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 1.5,
      delay: i * 0.1, // Stagger
    }}
  />
))}
```

**Creates**:
- 5 small dots over typewriter keys
- Simulates key presses
- Staggered timing for rhythm
- Continuous loop

#### Floating Papers (lines 210-295)

**Paper Component**:
```tsx
<motion.div
  className="absolute w-48 bg-white/90 backdrop-blur-sm shadow-2xl"
  initial={{
    y: 100,
    x: '-50%',
    opacity: 0,
    rotate: 0,
    scale: 0.8,
  }}
  animate={{
    y: -400 - (index * 40), // Stack papers
    x: `${-50 + (index % 2 === 0 ? 10 : -10) * (index + 1)}%`, // Drift sideways
    opacity: [0, 1, 1, 0.7, 0], // Fade sequence
    rotate: [(index % 2 === 0 ? 5 : -5), (index % 2 === 0 ? -3 : 3)], // Wobble
    scale: [0.8, 1, 1, 1, 0.95],
  }}
  exit={{
    opacity: 0,
    y: -500,
  }}
  transition={{
    duration: 8,
    ease: "easeOut",
  }}
>
  {/* Paper content */}
</motion.div>
```

**Paper Content**:
- Header lines (decorative)
- Story text (from `stories` array)
- Animated text lines (appear progressively)
- Sparkle icon

**Timeline** (8 seconds):
- 0-1s: Rise and fade in
- 1-6s: Visible, drifting
- 6-8s: Fade out
- Individual text elements animate in during first 2s

#### Ambient Sparkles (lines 299-343)

**Pattern**:
```tsx
<motion.div
  className="absolute top-20 right-10"
  animate={{
    y: [-15, 15, -15],
    rotate: [0, 180, 360],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <Sparkles className="w-8 h-8 text-primary/30" />
</motion.div>
```

**3 Elements**:
1. Top-right: Sparkles, 6s duration
2. Bottom-right: Sparkles, 7s duration, 2s delay
3. Left-center: Star (filled), 4s duration

### Responsive Behavior

**Desktop (lg+)**:
- Two-column grid
- Typewriter animation visible
- Full animations

**Mobile/Tablet**:
- Single column
- Typewriter animation hidden (`hidden lg:block`)
- Text centered (`text-center lg:text-left`)
- Only background orbs visible

### Performance Considerations

**Optimizations**:
- Max 5 papers rendered
- Transform-based animations (GPU)
- Hidden on mobile (saves resources)
- Cleanup intervals on unmount

**Potential Issues**:
- Many simultaneous animations on low-end devices
- Consider reduced motion preference

### Customization Points

**Adjust paper frequency**:
```tsx
}, 2000); // Was 3000 (faster)
}, 5000); // Was 3000 (slower)
```

**Change story texts**:
```tsx
const stories = [
  "Your new text...",
  "Another story...",
];
```

**Modify paper count**:
```tsx
return [...prev.slice(-9), newPaper]; // Keep 10 instead of 5
```

**Speed up animations**:
```tsx
transition={{ duration: 6 }} // Was 8 for papers
transition={{ duration: 3 }} // Was 4 for orbs
```

---

## TeamAndPolicy.tsx

**Path**: `/components/TeamAndPolicy.tsx`  
**Type**: Page Component  
**Export**: Named (`TeamAndPolicy`)

### Purpose
Combined page showing team members and privacy policy. COPPA-compliant policy for child-focused app.

### Props
None

### Constants

**Team Members** (lines 6-15):
```tsx
interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ying Dong",
    role: "Co-founder",
    image: yingDongImage,
    linkedin: "https://www.linkedin.com/in/dongying/",
    twitter: "https://twitter.com/yingatcambridge",
    description: "..."
  }
];
```

### Structure

```tsx
<div className="min-h-screen pb-32 pt-20">
  {/* Team Section */}
  <section className="px-6 lg:px-12 py-20">
    <div className="max-w-7xl mx-auto">
      {/* Tagline */}
      <motion.div>
        <p>Creators. Thinkers. Makers.</p>
      </motion.div>

      {/* Team Grid */}
      <div className="flex justify-start">
        {teamMembers.map((member, index) => (
          <motion.div /* Team card */>
            <div /* Avatar */ />
            <div /* Name & Role */ />
            <p /* Description */ />
            <div /* Social Links */ />
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* Privacy Policy Section */}
  <section className="px-6 lg:px-12 py-12">
    <motion.div /* Policy card */>
      {/* Policy content */}
    </motion.div>
  </section>
</div>
```

### Team Card Component

**Structure**:
```tsx
<motion.div
  className="group bg-card border border-border/50 rounded-3xl p-8 
             hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 
             max-w-3xl w-full"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1 * index }}
>
  {/* Hover background */}
  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5" />
  
  <div className="relative">
    {/* Avatar + Info */}
    <div className="flex gap-6">
      <img className="w-32 h-32 rounded-2xl" />
      <div>
        <h3>{name}</h3>
        <p className="text-primary">{role}</p>
      </div>
    </div>

    {/* Description */}
    <p>{description}</p>

    {/* Social Links */}
    <div className="flex gap-3">
      <a /* LinkedIn */ />
      <a /* Twitter */ />
    </div>
  </div>
</motion.div>
```

**Features**:
- Staggered entrance (0.1s * index)
- Hover lift effect (-2px translate)
- Shadow increase on hover
- Primary background tint on hover
- Avatar scales on hover
- Social icons: rounded circles with hover state

### Privacy Policy Section

**Card Structure**:
```tsx
<motion.div
  className="group bg-white rounded-3xl overflow-hidden 
             border border-border/50 hover:shadow-2xl 
             transition-all duration-300 hover:-translate-y-2"
>
  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5" />
  
  <div className="px-3 py-6 md:px-4 md:py-8 lg:px-4 lg:py-10 
                  max-w-4xl mx-auto text-base text-black">
    {/* Policy sections */}
  </div>
</motion.div>
```

**Content Sections**:
1. Header (title, effective date)
2. Introduction
3. Information We Collect
4. How We Use User Data
5. Data Retention
6. Data Security
7. Children's Privacy (COPPA)
8. Parental Rights
9. Revocation & Deletion
10. Policy Changes
11. Contact Information

**Typography**:
- All text: `text-base text-black` (explicit)
- Headings: `text-base mb-4 text-black`
- Lists: `list-disc pl-6 space-y-2`
- Links: `text-black hover:text-black/80 underline`

**Special Styling**:
- Black text on white (high contrast for readability)
- Structured spacing (space-y-8)
- Responsive padding
- Max-width for optimal reading (max-w-4xl)

### Animations

**Tagline Entrance**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  className="max-w-3xl mb-20"
>
  <p className="text-muted-foreground text-left mt-20 text-[24px]">
    Creators. Thinkers. Makers.
  </p>
</motion.div>
```

**Team Cards**:
- Staggered by index
- 0.1s delay between each
- Currently only 1 card (will stagger when more added)

**Policy Card**:
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2 }}
```

### Customization Points

**Add team member**:
```tsx
const teamMembers = [
  // Existing member
  {
    name: "New Person",
    role: "Developer",
    image: newImage, // Import at top
    linkedin: "https://...",
    twitter: "https://...",
    description: "Bio here..."
  }
];
```

**Update tagline**:
```tsx
<p className="text-muted-foreground text-left mt-20 text-[24px]">
  New tagline here.
</p>
```

**Modify policy**:
- Edit content directly (lines 136-249)
- Maintain structure and styling
- Update effective date
- Keep contact email current

**Change card layout**:
```tsx
// Grid instead of flex
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
```

---

## BottomNav.tsx

**Path**: `/components/BottomNav.tsx`  
**Type**: UI Component  
**Export**: Named (`BottomNav`)

### Purpose
Fixed floating navigation bar at bottom of screen. Primary navigation between App and Team/Policy pages.

### Props

```tsx
interface BottomNavProps {
  activeView: 'product' | 'teamandpolicy';
  onViewChange: (view: 'product' | 'teamandpolicy') => void;
}
```

| Prop | Type | Required | Purpose |
|------|------|----------|---------|
| `activeView` | `'product' \| 'teamandpolicy'` | Yes | Current active view |
| `onViewChange` | `(view) => void` | Yes | Callback when view changes |

### Navigation Items

```tsx
const navItems = [
  { id: 'product' as const, label: 'App', icon: Smartphone },
  { id: 'teamandpolicy' as const, label: 'Team and policy', icon: Users },
];
```

**Structure**:
- `id`: View identifier (matches activeView type)
- `label`: Display text
- `icon`: Lucide icon component

### Structure

```tsx
<nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
  <div className="bg-white/80 backdrop-blur-xl rounded-full 
                  shadow-2xl border border-border/50 px-4 py-2">
    <div className="flex items-center gap-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.id;
        
        return (
          <button
            onClick={() => onViewChange(item.id)}
            className={`
              px-6 py-3 rounded-full transition-all duration-300
              ${isActive 
                ? 'bg-primary text-white shadow-lg' 
                : 'hover:bg-accent text-muted-foreground hover:text-foreground'
              }
            `}
          >
            <div className="flex items-center gap-2">
              <Icon className="w-5 h-5" />
              <span className={`${isActive ? 'inline' : 'hidden sm:inline'}`}>
                {item.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  </div>
</nav>
```

### Styling Details

**Container** (nav):
- `fixed bottom-8 left-1/2 -translate-x-1/2`: Centered at bottom
- `z-50`: Above all other content

**Background**:
- `bg-white/80`: Semi-transparent white
- `backdrop-blur-xl`: Glassmorphism effect
- `rounded-full`: Pill shape
- `shadow-2xl`: Strong shadow (floating effect)
- `border border-border/50`: Subtle border

**Buttons**:
- `px-6 py-3`: Comfortable touch targets
- `rounded-full`: Pill-shaped
- `transition-all duration-300`: Smooth state changes
- `gap-2`: Space between icon and label

**Active State**:
- `bg-primary`: Cyan background
- `text-white`: White text
- `shadow-lg`: Elevated shadow
- Label always visible

**Inactive State**:
- No background (transparent)
- `text-muted-foreground`: Gray text
- `hover:bg-accent`: Peachy hover
- `hover:text-foreground`: Dark text on hover
- Label hidden on mobile (`hidden sm:inline`)

### Responsive Behavior

**Desktop (sm+)**:
- All labels visible
- Icons + text

**Mobile**:
- Active label visible
- Inactive labels hidden
- Icons only

### Accessibility

**Current**:
- Semantic `<nav>` element
- `<button>` elements (keyboard accessible)
- Clear active state

**Could Add**:
- `aria-label` on nav
- `aria-current="page"` on active button
- Keyboard shortcuts
- Focus indicators

### Customization Points

**Add navigation item**:
```tsx
import { NewIcon } from "lucide-react";

const navItems = [
  { id: 'product' as const, label: 'App', icon: Smartphone },
  { id: 'teamandpolicy' as const, label: 'Team and policy', icon: Users },
  { id: 'newpage' as const, label: 'New Page', icon: NewIcon },
];
```

**Change position**:
```tsx
// Top instead of bottom
className="fixed top-8 left-1/2 -translate-x-1/2 z-50"

// Right side
className="fixed bottom-8 right-8 z-50"
```

**Modify active color**:
```tsx
${isActive 
  ? 'bg-secondary text-white shadow-lg' // Peachy instead of cyan
  : '...'
}
```

**Always show labels**:
```tsx
<span>{item.label}</span> // Remove conditional classes
```

---

## Shared Patterns

### Motion Entrance Animation

**Standard Pattern**:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

**With Delay**:
```tsx
transition={{ duration: 0.8, delay: 0.2 }}
```

**Staggered**:
```tsx
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index }}
  >
))}
```

### Card Hover Effect

**Standard Pattern**:
```tsx
<motion.div
  className="group bg-card border border-border/50 rounded-3xl p-8 
             hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 
             relative overflow-hidden"
>
  {/* Hover background overlay */}
  <div className="absolute inset-0 bg-primary opacity-0 
                  group-hover:opacity-5 transition-opacity duration-500" />
  
  {/* Content */}
  <div className="relative">
    {/* ... */}
  </div>
</motion.div>
```

**Effect**:
1. Card lifts 2px on hover
2. Shadow intensifies
3. Primary color tint (5% opacity)
4. Smooth 300ms transition

### Infinite Loop Animation

**Pulsing**:
```tsx
<motion.div
  animate={{
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.5, 0.3],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

**Floating**:
```tsx
<motion.div
  animate={{
    y: [-15, 15, -15],
    rotate: [0, 180, 360],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
```

### Glassmorphism

**Pattern**:
```tsx
<div className="bg-white/80 backdrop-blur-xl">
```

**Variations**:
- `bg-white/90`: More opaque
- `bg-white/70`: More transparent
- `backdrop-blur-sm`: Less blur
- `backdrop-blur-2xl`: More blur

### Responsive Grid

**Two-column desktop**:
```tsx
<div className="grid lg:grid-cols-2 gap-16 items-center">
```

**Breakpoints**:
- Mobile: 1 column
- lg (1024px+): 2 columns

### Page Container

**Pattern**:
```tsx
<div className="min-h-screen pb-32 pt-20">
  <section className="px-6 lg:px-12 py-20">
    <div className="max-w-7xl mx-auto">
      {/* Content */}
    </div>
  </section>
</div>
```

**Breakdown**:
- `min-h-screen`: Full viewport minimum
- `pb-32`: Bottom clearance for nav
- `pt-20`: Top clearance for logo
- `px-6 lg:px-12`: Responsive horizontal padding
- `py-20`: Section vertical padding
- `max-w-7xl mx-auto`: Centered, max-width container

---

## shadcn/ui Components

### Available Components

The project includes full shadcn/ui library in `/components/ui/`. Currently used:

**Button** (`/components/ui/button.tsx`):
```tsx
import { Button } from "./ui/button";

<Button size="lg" className="...">
  Download
</Button>
```

**Variants**: default, destructive, outline, secondary, ghost, link  
**Sizes**: default, sm, lg, icon

### Usage Pattern

```tsx
import { ComponentName } from "./components/ui/component-name";
```

**Available but not currently used**:
- Accordion, Alert, Avatar
- Card, Carousel, Chart
- Dialog, Drawer, Dropdown
- Form, Input, Select
- Table, Tabs, Toast
- And many more...

### Customization

shadcn components are fully customizable:
- Edit files in `/components/ui/`
- Modify default variants
- Add custom variants
- Adjust styling

**Example**:
```tsx
// In button.tsx
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        // Add custom variant
        ficta: "bg-primary hover:bg-primary/90 text-white",
      },
    },
  }
);
```

---

## Common Component Patterns

### Image Loading

**Always use ImageWithFallback**:
```tsx
import { ImageWithFallback } from "./figma/ImageWithFallback";

<ImageWithFallback
  src={imageUrl}
  alt="Description"
  className="w-full h-full object-cover"
/>
```

**Unless** image is from Figma import:
```tsx
import logoImage from "figma:asset/[hash].png";

<img src={logoImage} alt="..." />
```

### Icon Usage

```tsx
import { IconName } from "lucide-react";

<IconName className="w-5 h-5" />
<IconName className="w-5 h-5 text-primary" />
<IconName className="w-5 h-5 text-primary/30" />
```

### Link Patterns

**External link**:
```tsx
<a 
  href="https://..." 
  target="_blank" 
  rel="noopener noreferrer"
  className="..."
>
```

**Internal navigation** (via state):
```tsx
<button onClick={() => setActiveView('product')}>
```

### Social Media Links

**Pattern**:
```tsx
<a
  href="https://linkedin.com/..."
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full bg-primary/10 
             flex items-center justify-center 
             hover:bg-primary hover:text-white 
             transition-all duration-300"
>
  <Linkedin className="w-5 h-5" />
</a>
```

**Features**:
- Circular button
- Icon centered
- Hover fills with brand color
- Smooth transition

---

## TypeScript Patterns

### Props Interface

```tsx
interface ComponentProps {
  requiredProp: string;
  optionalProp?: number;
  callback: (value: string) => void;
}

export function Component({ requiredProp, optionalProp, callback }: ComponentProps) {
  // ...
}
```

### Type Unions

```tsx
type View = 'product' | 'teamandpolicy';
const [activeView, setActiveView] = useState<View>('product');
```

### Const Assertions

```tsx
const navItems = [
  { id: 'product' as const, label: 'App' },
] as const;
```

---

**Last Updated**: October 27, 2025  
**Reference Version**: 1.0  
**Completeness**: Full Component Coverage
