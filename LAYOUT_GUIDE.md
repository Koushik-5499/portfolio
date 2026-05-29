# Hero Section Layout Guide

## ✅ Updated Layout: Text Left, Video Right

Your Hero section now features a **split-screen layout** that showcases both your content and video perfectly.

## 📐 Layout Structure

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  TEXT CONTENT          │         VIDEO             │
│  (Left Side)           │      (Right Side)         │
│                        │                           │
│  • Badge               │                           │
│  • Name                │      Your Avatar          │
│  • Typewriter          │      Video Playing        │
│  • Subtitle            │      Clearly Visible      │
│  • CTA Buttons         │                           │
│  • Social Links        │                           │
│                        │                           │
│  [Scroll Indicator]    │    [Audio Button]         │
└─────────────────────────────────────────────────────┘
```

## 🎨 Design Details

### Text Content (Left Side)
- **Position**: Left-aligned, max-width 2xl (672px)
- **Padding**: Responsive (6 on mobile, 12 on desktop)
- **Background**: Solid dark gradient for perfect readability
- **Content**:
  - Available badge with pulse animation
  - Large name heading (5xl → 7xl responsive)
  - Typewriter animation (xl → 3xl responsive)
  - Two subtitle lines
  - Three CTA buttons (Projects, Resume, Contact)
  - Two social icons (GitHub, LinkedIn)

### Video (Right Side)
- **Position**: Full-screen background
- **Visibility**: Clearly visible on right side
- **Gradient**: Dark left → transparent right
- **Features**:
  - Auto-play (muted by default)
  - Looping
  - Responsive scaling
  - Audio toggle button (bottom-right)

## 🎯 Gradient Strategy

### Primary Gradient (Left to Right)
```css
from-[#0a0a0f] via-[#0a0a0f]/95 to-transparent
```
- **Left**: Solid dark (#0a0a0f) - Perfect text contrast
- **Middle**: 95% dark - Smooth transition
- **Right**: Transparent - Video fully visible

### Secondary Gradient (Top to Bottom)
```css
from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/50
```
- **Top**: 80% dark - Subtle darkening
- **Middle**: Transparent - Clear video
- **Bottom**: 50% dark - Cinematic effect

## 📱 Responsive Behavior

### Desktop (lg+)
- Text: Left side, max-width 672px
- Video: Clearly visible on right 60% of screen
- Buttons: Horizontal layout
- Font sizes: Maximum (7xl heading, 3xl typewriter)

### Tablet (md)
- Text: Left side, max-width 672px
- Video: Visible on right side
- Buttons: Wrap if needed
- Font sizes: Medium (6xl heading, 3xl typewriter)

### Mobile (sm)
- Text: Left-aligned, full width
- Video: Background (still visible)
- Buttons: Stack vertically
- Font sizes: Smaller (5xl heading, xl typewriter)

## 🎬 Video Visibility

### How Video Stays Visible
1. **Gradient stops at middle**: Text area is dark, video area is transparent
2. **Object-cover**: Video scales to fill entire background
3. **No grid overlay on right**: Clean video presentation
4. **Subtle bottom gradient**: Doesn't obscure video content

### Video Controls
- **Audio button**: Bottom-right corner
- **Auto-play**: Starts muted for browser compatibility
- **Loop**: Continuous playback
- **Responsive**: Scales on all devices

## 🔧 Customization Options

### Make Video More Visible
Reduce left gradient opacity:
```tsx
from-[#0a0a0f]/90 via-[#0a0a0f]/80 to-transparent
```

### Make Text Area Wider
Increase max-width:
```tsx
<div className="max-w-3xl"> {/* was max-w-2xl */}
```

### Adjust Split Point
Change gradient via point:
```tsx
from-[#0a0a0f] via-[#0a0a0f]/95 via-40% to-transparent
// via-40% = gradient transitions at 40% width
```

### Move Content Vertically
Add padding-top:
```tsx
<div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
```

## ✨ Visual Result

**Left Side (40% width)**:
- ✅ Solid dark background
- ✅ Perfect text readability
- ✅ All content clearly visible
- ✅ Professional presentation

**Right Side (60% width)**:
- ✅ Video clearly visible
- ✅ Your avatar prominently displayed
- ✅ No text obstruction
- ✅ Clean, professional look

## 🚀 Testing

Run the dev server to see the layout:
```bash
npm run dev
```

Open http://localhost:3000 and you'll see:
- Text content on the left side
- Your avatar video clearly visible on the right
- Smooth gradient transition between them
- Audio control in bottom-right corner

The layout works perfectly on all screen sizes while maintaining the premium, futuristic aesthetic!
