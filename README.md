# MB Web Boilerplate

A modern Next.js 15 boilerplate with React 19, TypeScript, Tailwind CSS v4, ESLint v9, Supabase, and Drizzle ORM.

## 🚀 Features

- **Next.js 15** - Latest version with App Router
- **React 19** - Latest React features
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Latest Tailwind with new syntax
- **ESLint v9** - Modern flat config format
- **Supabase** - Backend-as-a-Service with PostgreSQL
- **Drizzle ORM** - Type-safe database operations
- **Authentication** - Built-in user management
- **Row Level Security** - Database-level security policies
- **shadcn/ui** - Beautiful, accessible UI components

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Supabase Auth with SSR support
- **Styling**: Tailwind CSS v4 with modern syntax
- **Linting**: ESLint v9 with Next.js rules
- **UI Components**: shadcn/ui with Radix UI primitives

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mboss37/mb-web-boilerplate.git
   cd mb-web-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```

## 🔧 Supabase Setup

1. **Create a Supabase project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Get your database connection string**
   - Go to Settings > Database
   - Copy the connection string
   - Replace `[YOUR-PASSWORD]` with your database password

3. **Set up Row Level Security (RLS)**
   - The schema includes RLS policies for secure data access
   - Users can only access their own data
   - Public read access for published content

## 🗄️ Database Operations

### Generate migrations
```bash
npm run db:generate
```

### Push schema changes
```bash
npm run db:push
```

### Run migrations
```bash
npm run db:migrate
```

### Open Drizzle Studio
```bash
npm run db:studio
```

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
├── lib/
│   ├── db/               # Database configuration
│   │   ├── schema.ts     # Drizzle ORM schema
│   │   └── index.ts      # Database connection
│   └── supabase/         # Supabase clients
│       ├── client.ts     # Client-side client
│       ├── server.ts     # Server-side client
│       └── middleware.ts # Session management
├── components/
│   └── ui/               # shadcn/ui components
├── drizzle/              # Generated migrations
├── drizzle.config.ts     # Drizzle configuration
├── components.json       # shadcn/ui configuration
└── middleware.ts         # Next.js middleware
```

## 🔐 Authentication

The boilerplate includes:

- **Server-side authentication** with Supabase SSR
- **Client-side authentication** for interactive components
- **Middleware** for session management
- **Protected routes** (configurable)
- **User profiles** with automatic creation

### Using Authentication

```typescript
// Server Component
import { createClient } from '@/lib/supabase/server'

export default async function ProtectedPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect('/login')
  }
  
  return <div>Hello {user.email}</div>
}
```

```typescript
// Client Component
'use client'
import { createClient } from '@/lib/supabase/client'

export default function LoginForm() {
  const supabase = createClient()
  
  const handleSignIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: 'user@example.com',
      password: 'password'
    })
  }
  
  return <button onClick={handleSignIn}>Sign In</button>
}
```

## 🎨 Styling & UI Components

### Tailwind CSS v4
Built with Tailwind CSS v4 using the new syntax:

```css
@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

### shadcn/ui Components
The boilerplate includes a comprehensive set of pre-built UI components:

- **Form Elements**: Button, Input, Label, Form
- **Layout**: Card, Badge, Avatar
- **Navigation**: Navigation Menu, Dropdown Menu
- **Data Display**: Table, Dialog
- **Utilities**: All components are fully accessible and customizable

#### Adding More Components
To add additional shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add select
npx shadcn@latest add tabs
npx shadcn@latest add toast
```

## 📝 Database Schema

The boilerplate includes example tables:

- **profiles** - User profiles linked to Supabase auth
- **posts** - Blog/content posts with authors
- **tags** - Content categorization
- **post_tags** - Many-to-many relationship

All tables include:
- UUID primary keys
- Timestamps (created_at, updated_at)
- Proper foreign key relationships
- Row Level Security policies

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 🔒 Security Features

- **Row Level Security (RLS)** on all tables
- **Authentication required** for protected routes
- **User isolation** - users can only access their own data
- **Secure session management** with HTTP-only cookies

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
