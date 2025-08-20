# SVG Usage Guide

This boilerplate provides several ways to work with SVGs without additional configuration:

## 1. Icons - Use Lucide React (Recommended)

```tsx
import { Home, Settings, User } from 'lucide-react';

export function MyComponent() {
  return (
    <div>
      <Home className="h-5 w-5" />
      <Settings size={20} />
      <User className="h-6 w-6 text-primary" />
    </div>
  );
}
```

Browse all available icons at: https://lucide.dev/icons

## 2. Inline SVGs

For custom SVGs, paste them directly into your JSX:

```tsx
export function Logo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
  );
}
```

## 3. SVG Files as Images

For complex illustrations or logos:

```tsx
import Image from 'next/image';

export function Hero() {
  return (
    <Image
      src="/logo.svg"
      alt="Company Logo"
      width={200}
      height={50}
      priority
    />
  );
}
```

## 4. SVG as Background

Use SVGs in CSS:

```css
.hero {
  background-image: url('/pattern.svg');
}
```

## When to Add @svgr/webpack

Only consider adding SVG imports if you:
- Have many custom SVG icons that need component props
- Need to dynamically change SVG colors/paths
- Are migrating from a codebase that uses SVG imports

To add it later:
```bash
npm install --save-dev @svgr/webpack
```

Then uncomment the webpack config in `next.config.ts`.
