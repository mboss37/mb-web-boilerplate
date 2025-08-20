import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          MB Web Boilerplate
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A modern, production-ready Next.js 15 boilerplate with React 19, TypeScript, 
          Tailwind CSS v4, Supabase, Drizzle ORM, and shadcn/ui components.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">View Documentation</Button>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Next.js 15</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">App Router</Badge>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">React 19</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Latest Features</Badge>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Type Safe</Badge>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Tailwind CSS v4</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Modern CSS</Badge>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Supabase</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Backend as a Service</Badge>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">Drizzle ORM</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Type Safe SQL</Badge>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Beautiful Components</Badge>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-lg">ESLint v9</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Code Quality</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Structure */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Project Structure</h2>
        <div className="bg-muted rounded-lg p-6 font-mono text-sm">
          <div className="text-muted-foreground mb-4">📁 Project Directory Structure</div>
          <pre className="whitespace-pre-wrap text-foreground">
{`mb-web-boilerplate/
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
└── 📄 README.md                      # Project documentation`}
          </pre>
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>📁 Key Directories Explained</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <strong>app/</strong> - Next.js 15 App Router with API routes
              </div>
              <div>
                <strong>components/</strong> - Reusable UI components (shadcn/ui)
              </div>
              <div>
                <strong>lib/</strong> - Core utilities, database, and Supabase setup
              </div>
              <div>
                <strong>hooks/</strong> - Custom React hooks for common operations
              </div>
              <div>
                <strong>types/</strong> - TypeScript type definitions
              </div>
              <div>
                <strong>config/</strong> - Application configuration files
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>🚀 Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>1. Clone the repository</div>
              <div>2. Install dependencies: <code className="bg-muted px-2 py-1 rounded">npm install</code></div>
              <div>3. Copy <code className="bg-muted px-2 py-1 rounded">.env.example</code> to <code className="bg-muted px-2 py-1 rounded">.env.local</code></div>
              <div>4. Add your Supabase credentials</div>
              <div>5. Run <code className="bg-muted px-2 py-1 rounded">npm run dev</code></div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Component Showcase</h2>
        
        {/* Buttons */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Buttons</h3>
          <div className="flex gap-4 flex-wrap">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Cards</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the card content area.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Another Card</CardTitle>
                <CardDescription>With different content</CardDescription>
              </CardHeader>
              <CardContent>
                <p>More card content here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Third Card</CardTitle>
                <CardDescription>Last one</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Final card content.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Form Elements */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Form Elements</h3>
          <div className="max-w-md space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Badges</h3>
          <div className="flex gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </div>

        {/* Avatar */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Avatar</h3>
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Table */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Table</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell>Admin</TableCell>
                <TableCell><Badge>Active</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell>User</TableCell>
                <TableCell><Badge variant="secondary">Inactive</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* Dialog */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Dialog</h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>
                  This is a dialog description. You can put any content here.
                </DialogDescription>
              </DialogHeader>
              <p>Dialog content goes here.</p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Navigation Menu */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Navigation Menu</h3>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Introduction</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Build high-quality, accessible design systems and web apps.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Dropdown Menu */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Dropdown Menu</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>🚀 Next.js 15</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Latest App Router with React 19, Server Components, and streaming.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🎨 Tailwind CSS v4</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Modern CSS framework with the latest features and optimizations.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🔐 Supabase Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Built-in authentication, database, and real-time subscriptions.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🗄️ Drizzle ORM</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Type-safe SQL ORM with excellent TypeScript support.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>🧩 shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Beautiful, accessible components built with Radix UI and Tailwind CSS.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>⚡ TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Full TypeScript support with strict type checking and IntelliSense.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
