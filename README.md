# MB Web Boilerplate 🚀

A modern, production-ready Next.js 15 boilerplate with React 19, TypeScript, Tailwind CSS v4, Supabase, Drizzle ORM, and shadcn/ui components.

## ✨ Features

- **🚀 Next.js 15** - Latest App Router with React 19 and Server Components
- **🎨 Tailwind CSS v4** - Modern CSS framework with latest features
- **🔐 Supabase Integration** - Authentication, database, and real-time features
- **🗄️ Drizzle ORM** - Type-safe SQL operations with excellent performance
- **🧩 shadcn/ui** - Beautiful, accessible UI components
- **⚡ TypeScript** - Full type safety throughout the application
- **🔒 ESLint v9** - Modern code quality and consistency
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **🌙 Dark Mode** - Built-in theme switching support
- **📊 API Routes** - Ready-to-use API endpoints with proper structure

## 🏗️ Project Structure

```
mb-web-boilerplate/
├── 📁 app/                          # Next.js 15 App Router
│   ├── 📁 api/                      # API Routes (Route Handlers)
│   │   ├── 📁 auth/                 # Authentication endpoints
│   │   ├── 📁 hello/                # Sample API endpoint
│   │   └── 📁 users/                # User management endpoints
│   ├── 📄 globals.css               # Global styles & Tailwind CSS
│   ├── 📄 layout.tsx                # Root layout component
│   └── 📄 page.tsx                  # Home page
├── 📁 components/                    # Reusable UI components
│   └── 📁 ui/                       # shadcn/ui components
│       ├── 📄 avatar.tsx
│       ├── 📄 badge.tsx
│       ├── 📄 button.tsx
│       ├── 📄 card.tsx
│       ├── 📄 dialog.tsx
│       ├── 📄 dropdown-menu.tsx
│       ├── 📄 form.tsx
│       ├── 📄 input.tsx
│       ├── 📄 label.tsx
│       ├── 📄 navigation-menu.tsx
│       └── 📄 table.tsx
├── 📁 config/                        # Configuration files
│   ├── 📄 app.ts                     # App configuration
│   ├── 📄 database.ts                # Database configuration
│   └── 📄 index.ts                   # Config exports
├── 📁 constants/                      # Application constants
│   ├── 📄 api.ts                     # API routes & endpoints
│   ├── 📄 routes.ts                  # Route definitions
│   └── 📄 index.ts                   # Constants exports
├── 📁 hooks/                          # Custom React hooks
│   ├── 📄 useAuth.ts                 # Authentication hook
│   ├── 📄 useDatabase.ts             # Database operations hook
│   └── 📄 index.ts                   # Hooks exports
├── 📁 lib/                           # Utility libraries
│   ├── 📁 db/                        # Database layer
│   │   ├── 📄 index.ts               # Database connection
│   │   └── 📄 schema.ts              # Drizzle ORM schema
│   ├── 📁 supabase/                  # Supabase integration
│   │   ├── 📄 client.ts              # Client-side Supabase
│   │   ├── 📄 middleware.ts          # Supabase middleware
│   │   └── 📄 server.ts              # Server-side Supabase
│   └── 📄 utils.ts                   # Utility functions
├── 📁 styles/                         # Additional styles
│   └── 📄 components.css             # Custom component styles
├── 📁 types/                          # TypeScript type definitions
│   └── 📄 index.ts                   # Type exports
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

2. **Create custom components** in `components/ui/`

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
- [Supabase](https://supabase.com/) - Backend as a service
- [Drizzle ORM](https://orm.drizzle.team/) - Type-safe SQL ORM
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/mb-web-boilerplate/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/mb-web-boilerplate/discussions)
- **Email**: your-email@example.com

---

**Made with ❤️ by [Your Name]**

*Star this repository if it helped you! ⭐*
