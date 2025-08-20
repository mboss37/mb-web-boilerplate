# MB Web Boilerplate 🚀

A modern, production-ready Next.js 15 boilerplate with React 19, TypeScript, Tailwind CSS v4, Supabase, Drizzle ORM, and shadcn/ui components.

> **📖 This README contains comprehensive documentation, project structure, and advanced features. The landing page provides a quick overview.**

## ✨ Features

- **🚀 Next.js 15** - Latest App Router with React 19 and Server Components
- **⚛️ React 19** - Latest React with concurrent features and improvements
- **🎨 Tailwind CSS v4** - Modern CSS framework with latest features
- **🔐 Supabase Integration** - Authentication, database, and real-time features
- **🗄️ Drizzle ORM** - Type-safe SQL operations with excellent performance
- **🧩 shadcn/ui** - Beautiful, accessible UI components
- **✨ Magic UI** - Animated components with Framer Motion
- **⚡ TypeScript** - Full type safety throughout the application
- **🔒 ESLint v9** - Modern code quality and consistency
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🌙 Dark Mode** - Built-in theme switching support with next-themes
- **📊 API Routes** - Ready-to-use API endpoints with proper structure
- **🔧 Zod Validation** - TypeScript-first schema validation for environment variables
- **🎭 Framer Motion** - Smooth animations and transitions
- **📱 Mobile Optimized** - Touch-friendly interactions and responsive layouts

## ✨ Magic UI Components

The boilerplate includes **Magic UI** - a collection of animated components built with Framer Motion:

### 🎭 **Available Components:**

- **Globe** - Interactive 3D WebGL globe with autorotation
- **Meteors** - Animated meteor shower background effect
- **SpinningText** - Circular text animation with customizable speed

### 🚀 **Features:**

- **Smooth Animations** - Powered by Framer Motion
- **WebGL Support** - High-performance 3D graphics
- **Customizable** - Easy to adjust timing, colors, and behavior
- **Responsive** - Works perfectly on all device sizes
- **TypeScript** - Full type safety and IntelliSense

### 📱 **Usage Examples:**

```tsx
import { Globe, Meteors, SpinningText } from '@/components/magicui'

// Interactive 3D Globe
<Globe className="w-64 h-64" />

// Animated Background
<Meteors className="absolute inset-0" />

// Circular Text Animation
<SpinningText>Next.js • React • TypeScript</SpinningText>
```

## 🌙 Dark Mode Support

The boilerplate includes comprehensive dark mode support powered by `next-themes`:

- **Three Theme Options**: Light, Dark, and System (follows OS preference)
- **Persistent Storage**: Theme choice is saved across browser sessions
- **Smooth Transitions**: Beautiful animations between theme changes
- **System Sync**: Automatically matches user's operating system theme
- **No Flash on Load**: Prevents theme flashing during page load
- **Accessible**: Screen reader friendly with proper ARIA labels

### Dark Mode Components

- **`ThemeProvider`**: Wraps the app with theme context
- **`ModeToggle`**: Beautiful theme switcher with sun/moon icons
- **Theme-aware styling**: All shadcn/ui components automatically adapt
- **CSS Variables**: Comprehensive theming system with CSS custom properties

### Usage

The theme toggle button is positioned in the top-right corner of the homepage. Users can:
1. Click the sun/moon icon to open the theme menu
2. Choose between Light, Dark, or System themes
3. See instant theme changes across the entire application

## 🏗️ Project Structure

```
mb-web-boilerplate/
├── 📁 app/                          # Next.js 15 App Router
│   ├── 📁 api/                      # API Routes (Route Handlers)
│   ├── 📄 globals.css               # Global styles & Tailwind CSS
│   ├── 📄 layout.tsx                # Root layout component
│   └── 📄 page.tsx                  # Home page
├── 📁 components/                    # Reusable UI components
│   ├── 📄 mode-toggle.tsx           # Dark mode theme switcher
│   ├── 📄 theme-provider.tsx        # Theme context provider
│   ├── 📁 magicui/                  # Magic UI animated components
│   └── 📁 ui/                       # shadcn/ui components
├── 📁 config/                        # Configuration files
├── 📁 constants/                      # Application constants
├── 📁 docs/                           # Documentation
├── 📁 hooks/                          # Custom React hooks
├── 📁 lib/                           # Utility libraries
│   ├── 📁 db/                        # Database layer
│   └── 📁 supabase/                  # Supabase integration
├── 📁 styles/                         # Additional styles
├── 📁 types/                          # TypeScript type definitions
├── 📄 .env.example                   # Environment variables template
├── 📄 components.json                 # shadcn/ui configuration
├── 📄 drizzle.config.ts              # Drizzle ORM configuration
├── 📄 eslint.config.mjs              # ESLint v9 configuration
├── 📄 middleware.ts                   # Next.js middleware
├── 📄 next.config.ts                 # Next.js configuration
├── 📄 package.json                   # Dependencies & scripts
├── 📄 postcss.config.mjs             # PostCSS configuration
└── 📄 README.md                      # Project documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mb-web-boilerplate.git
   cd mb-web-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure Supabase (Optional)**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Add your credentials to `.env.local`:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     DATABASE_URL=your_database_url
     SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
     ```

5. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

```json
{
  "dev": "next dev",           # Start development server
  "build": "next build",       # Build for production
  "start": "next start",       # Start production server
  "lint": "eslint .",          # Run ESLint
  "db:generate": "drizzle-kit generate",    # Generate database migrations
  "db:migrate": "drizzle-kit migrate",      # Run database migrations
  "db:push": "drizzle-kit push",            # Push schema to database
  "db:studio": "drizzle-kit studio"         # Open Drizzle Studio
}
```

## 🗄️ Database Setup

### With Supabase (Recommended)

1. **Create Supabase project** and get your credentials
2. **Update environment variables** with your Supabase details
3. **Generate and run migrations**:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```

### Without Supabase

The boilerplate is designed to work without Supabase credentials. Simply run:
```bash
npm run dev
```

The app will run with mock data and disabled authentication features.

## 🎨 Customization

### Adding New Components

1. **Install shadcn/ui components**:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Install Magic UI components**:
   ```bash
   npx shadcn@latest add "https://magicui.design/r/[component-name]"
   ```

3. **Create custom components** in `components/ui/`

### Enhanced UI Features

- **Interactive Icons**: Feature cards now include relevant Lucide React icons
- **Animated Backgrounds**: Magic UI components for engaging visual effects
- **Responsive Layout**: Mobile-first design with touch-friendly interactions
- **Dynamic Content**: Auto-updating year and interactive elements

### Styling

- **Global styles**: Edit `app/globals.css`
- **Component styles**: Add to `styles/components.css`
- **Tailwind config**: Modify `tailwind.config.js` if needed

### Configuration

- **App config**: Edit `config/app.ts`
- **Database config**: Modify `config/database.ts`
- **Constants**: Update files in `constants/` directory

## 📱 API Routes

The boilerplate includes several API endpoints:

- **`/api/hello`** - Sample GET/POST endpoint
- **`/api/users`** - User management (GET/POST)
- **`/api/auth`** - Authentication (POST/DELETE)

### Example API Usage

```typescript
// Fetch users
const response = await fetch('/api/users');
const users = await response.json();

// Create user
const newUser = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com', fullName: 'John Doe' })
});
```

## 🔐 Authentication

### Supabase Auth

The boilerplate includes:
- **useAuth hook** for client-side authentication
- **Server-side auth** with middleware
- **Protected routes** support
- **Session management**

### Custom Auth Implementation

```typescript
import { useAuth } from '@/hooks/useAuth';

function MyComponent() {
  const { user, loading, signIn, signOut } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  return user ? (
    <button onClick={signOut}>Sign Out</button>
  ) : (
    <button onClick={() => signIn('email', 'password')}>Sign In</button>
  );
}
```

## 🎯 Best Practices

### Code Organization

- **Components**: Keep components small and focused
- **Hooks**: Extract reusable logic into custom hooks
- **Types**: Define interfaces in `types/` directory
- **Constants**: Store magic strings in `constants/` files

### Performance

- **Server Components**: Use Server Components when possible
- **Image Optimization**: Use Next.js Image component
- **Code Splitting**: Leverage dynamic imports for large components
- **Caching**: Implement proper caching strategies

### Security

- **Environment Variables**: Never commit sensitive data
- **Input Validation**: Validate all user inputs
- **Authentication**: Implement proper auth checks
- **CORS**: Configure CORS for API routes if needed

## 🧪 Testing

### Running Tests

```bash
# Unit tests (when configured)
npm test

# E2E tests (when configured)
npm run test:e2e

# Type checking
npm run type-check
```

## 📦 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Connect repository** to Vercel
3. **Add environment variables** in Vercel dashboard
4. **Deploy automatically**

### Other Platforms

- **Netlify**: Configure build settings
- **Railway**: Add environment variables
- **Docker**: Use provided Dockerfile

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [Supabase](https://supabase.com/) - Backend as a service
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe SQL ORM
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Magic UI](https://magicui.design/) - Animated components with Framer Motion
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode and theme management
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation
- [Lucide React](https://lucide.dev/) - Beautiful icons

## 🚀 Deployment Checklist

Before deploying to production:

1. **Environment Variables**
   - Set all required environment variables in your hosting platform
   - Ensure `NODE_ENV=production` is set
   - Add your domain to `NEXT_PUBLIC_BASE_URL`

2. **Database**
   - Run migrations: `npm run db:migrate`
   - Verify database connection

3. **Images**
   - Replace the placeholder `og-image.svg` with your own image (1200x630)
   - Update allowed image domains in `next.config.ts`

4. **SEO**
   - Update metadata in `app/layout.tsx` with your information
   - Add a `robots.txt` and `sitemap.xml` to the public folder

5. **Performance**
   - Run `npm run build` locally to check for any build errors
   - Test with Lighthouse for performance scores

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/mboss37/mb-web-boilerplate/issues)
- **Discussions**: [GitHub Discussions](https://github.com/mboss37/mb-web-boilerplate/discussions)
- **Email**: mihael@bosnjak.io

---

**Made with ❤️ by Mihael Bosnjak**

*Star this repository if it helped you! ⭐*
