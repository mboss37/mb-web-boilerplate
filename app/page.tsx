'use client';

import { useState } from "react";
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
import { Separator } from "@/components/ui/separator"

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      {/* Navigation Menu */}
      <section className="container mx-auto px-4 pb-8">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="grid w-full grid-cols-5">
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                onClick={() => scrollToSection('overview')}
                className={activeSection === 'overview' ? 'bg-accent' : ''}
              >
                🚀 Overview
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <a 
                      href="#overview" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('overview')}
                    >
                      <div className="text-sm font-medium leading-none">Welcome</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get started with your Next.js 15 boilerplate
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#tech-stack" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('tech-stack')}
                    >
                      <div className="text-sm font-medium leading-none">Tech Stack</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore all technologies included
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                onClick={() => scrollToSection('structure')}
                className={activeSection === 'structure' ? 'bg-accent' : ''}
              >
                🏗️ Structure
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <a 
                      href="#structure" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('structure')}
                    >
                      <div className="text-sm font-medium leading-none">Project Structure</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Understand the directory organization
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#getting-started" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('getting-started')}
                    >
                      <div className="text-sm font-medium leading-none">Getting Started</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Quick setup instructions
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                onClick={() => scrollToSection('components')}
                className={activeSection === 'components' ? 'bg-accent' : ''}
              >
                🧩 Components
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <a 
                      href="#components" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('components')}
                    >
                      <div className="text-sm font-medium leading-none">UI Components</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore all available shadcn/ui components
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#component-examples" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('component-examples')}
                    >
                      <div className="text-sm font-medium leading-none">Examples</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        See components in action
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                onClick={() => scrollToSection('api')}
                className={activeSection === 'api' ? 'bg-accent' : ''}
              >
                📡 API Routes
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <a 
                      href="#api" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('api')}
                    >
                      <div className="text-sm font-medium leading-none">API Endpoints</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Available API routes and endpoints
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#api-usage" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('api-usage')}
                    >
                      <div className="text-sm font-medium leading-none">Usage Examples</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        How to use the API endpoints
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger 
                onClick={() => scrollToSection('features')}
                className={activeSection === 'features' ? 'bg-accent' : ''}
              >
                ✨ Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <a 
                      href="#features" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('features')}
                    >
                      <div className="text-sm font-medium leading-none">Core Features</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        What's included in your boilerplate
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a 
                      href="#advanced-features" 
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      onClick={() => scrollToSection('advanced-features')}
                    >
                      <div className="text-sm font-medium leading-none">Advanced Features</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Production-ready capabilities
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>

      {/* Content Sections */}
      <div className="space-y-16">
        {/* Overview Section */}
        <section id="overview" className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Welcome to Your Next.js 15 Boilerplate</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              This boilerplate provides everything you need to build modern, scalable web applications. 
              From authentication to database management, we've got you covered.
            </p>
          </div>

          {/* Tech Stack Grid */}
          <div id="tech-stack" className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Next.js 15</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">App Router</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">React 19</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Latest Features</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">TypeScript</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Type Safe</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Tailwind CSS v4</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Modern CSS</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Supabase</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Backend as a Service</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Drizzle ORM</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Type Safe SQL</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">shadcn/ui</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Beautiful Components</Badge>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">ESLint v9</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">Code Quality</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Quick Start */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>🚀 Quick Start</CardTitle>
              <CardDescription>Get up and running in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                <p># Clone and install</p>
                <p>git clone https://github.com/yourusername/mb-web-boilerplate.git</p>
                <p>cd mb-web-boilerplate</p>
                <p>npm install</p>
                <br/>
                <p># Start development</p>
                <p>npm run dev</p>
              </div>
              <Button className="w-full">Start Building Now</Button>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Structure Section */}
        <section id="structure" className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Project Structure</h2>
            <p className="text-lg text-muted-foreground">
              Understanding the organization of your boilerplate project
            </p>
          </div>

          {/* Directory Tree */}
          <Card>
            <CardHeader>
              <CardTitle>📁 Project Directory Structure</CardTitle>
              <CardDescription>Complete overview of all directories and files</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-6 font-mono text-sm overflow-x-auto">
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
            </CardContent>
          </Card>

          {/* Directory Explanations */}
          <div id="getting-started" className="grid md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>📁 Key Directories Explained</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div><strong>app/</strong> - Next.js 15 App Router with API routes</div>
                <div><strong>components/</strong> - Reusable UI components (shadcn/ui)</div>
                <div><strong>lib/</strong> - Core utilities, database, and Supabase setup</div>
                <div><strong>hooks/</strong> - Custom React hooks for common operations</div>
                <div><strong>types/</strong> - TypeScript type definitions</div>
                <div><strong>config/</strong> - Application configuration files</div>
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

        <Separator />

        {/* Components Section */}
        <section id="components" className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Component Showcase</h2>
            <p className="text-lg text-muted-foreground">
              Explore all available shadcn/ui components with examples
            </p>
          </div>

          <div id="component-examples" className="space-y-8">
            {/* Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Various button styles and variants</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 flex-wrap">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </CardContent>
            </Card>

            {/* Cards */}
            <Card>
              <CardHeader>
                <CardTitle>Cards</CardTitle>
                <CardDescription>Content containers with headers and descriptions</CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Form Elements */}
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>Input fields and labels for forms</CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
                <CardDescription>Status indicators and labels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 flex-wrap">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Avatar */}
            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
                <CardDescription>User profile images with fallbacks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
              </CardContent>
            </Card>

            {/* Table */}
            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
                <CardDescription>Data display in organized rows and columns</CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Dialog */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
                <CardDescription>Modal dialogs for user interactions</CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Navigation Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu</CardTitle>
                <CardDescription>Dropdown navigation with content</CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Dropdown Menu */}
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
                <CardDescription>Context menus and dropdowns</CardDescription>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* API Routes Section */}
        <section id="api" className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">API Routes</h2>
            <p className="text-lg text-muted-foreground">
              Ready-to-use API endpoints with Next.js 15 Route Handlers
            </p>
          </div>

          {/* API Overview */}
          <Card>
            <CardHeader>
              <CardTitle>📡 Available API Endpoints</CardTitle>
              <CardDescription>All endpoints are built with Next.js 15 Route Handlers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">/api/hello</CardTitle>
                    <CardDescription>Sample endpoint</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">GET, POST</Badge>
                    <p className="text-sm mt-2">Simple hello world endpoint for testing</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">/api/users</CardTitle>
                    <CardDescription>User management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">GET, POST</Badge>
                    <p className="text-sm mt-2">Create and retrieve users</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">/api/auth</CardTitle>
                    <CardDescription>Authentication</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">POST, DELETE</Badge>
                    <p className="text-sm mt-2">Sign in, sign up, and sign out</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* API Usage Examples */}
          <div id="api-usage" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>💻 API Usage Examples</CardTitle>
                <CardDescription>How to use the included API endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Fetch Users</h4>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p>const response = await fetch('/api/users');</p>
                      <p>const users = await response.json();</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Create User</h4>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p>const newUser = await fetch('/api/users', {'{'}</p>
                      <p>  method: 'POST',</p>
                      <p>  headers: {'{'} 'Content-Type': 'application/json' {'}'},</p>
                      <p>  body: JSON.stringify({'{'}</p>
                      <p>    email: 'user@example.com',</p>
                      <p>    fullName: 'John Doe'</p>
                      <p>  {'}'})</p>
                      <p>{'}'});</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Authentication</h4>
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <p>const auth = await fetch('/api/auth', {'{'}</p>
                      <p>  method: 'POST',</p>
                      <p>  headers: {'{'} 'Content-Type': 'application/json' {'}'},</p>
                      <p>  body: JSON.stringify({'{'}</p>
                      <p>    email: 'user@example.com',</p>
                      <p>    password: 'password',</p>
                      <p>    action: 'signin'</p>
                      <p>  {'}'})</p>
                      <p>{'}'});</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* API Structure */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>🏗️ API Structure</CardTitle>
              <CardDescription>How the API routes are organized</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                <p>app/api/</p>
                <p>├── auth/</p>
                <p>│   └── route.ts          # Authentication endpoints</p>
                <p>├── hello/</p>
                <p>│   └── route.ts          # Sample endpoint</p>
                <p>└── users/</p>
                <p>    └── route.ts          # User management</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Each API route uses Next.js 15 Route Handlers with proper HTTP method handling, 
                error handling, and TypeScript types.
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Features Section */}
        <section id="features" className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Features & Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Everything included in your boilerplate
            </p>
          </div>

          {/* Core Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>🚀 Next.js 15</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Latest App Router with React 19, Server Components, and streaming.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>🎨 Tailwind CSS v4</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Modern CSS framework with the latest features and optimizations.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>🔐 Supabase Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Built-in authentication, database, and real-time subscriptions.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>🗄️ Drizzle ORM</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Type-safe SQL operations with excellent TypeScript support.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>🧩 shadcn/ui</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Beautiful, accessible components built with Radix UI and Tailwind CSS.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>⚡ TypeScript</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Full TypeScript support with strict type checking and IntelliSense.</p>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Features */}
          <div id="advanced-features">
            <Card>
              <CardHeader>
                <CardTitle>🔧 Advanced Features</CardTitle>
                <CardDescription>Production-ready capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Authentication & Security</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Supabase Auth with SSR support</li>
                      <li>• Row Level Security (RLS)</li>
                      <li>• Protected routes</li>
                      <li>• Session management</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Database & ORM</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• PostgreSQL with Supabase</li>
                      <li>• Type-safe Drizzle ORM</li>
                      <li>• Migration system</li>
                      <li>• Database studio</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Development Experience</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• ESLint v9 configuration</li>
                      <li>• TypeScript strict mode</li>
                      <li>• Hot reloading</li>
                      <li>• Error boundaries</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">UI & Styling</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Responsive design</li>
                      <li>• Dark mode support</li>
                      <li>• Custom CSS variables</li>
                      <li>• Component variants</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Getting Started */}
          <Card className="max-w-2xl mx-auto mt-8">
            <CardHeader>
              <CardTitle>🎯 Ready to Get Started?</CardTitle>
              <CardDescription>Your boilerplate is ready to use</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground">
                This boilerplate includes everything you need to build production-ready applications. 
                Just add your Supabase credentials and start building!
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg">Start Building</Button>
                <Button variant="outline" size="lg">View on GitHub</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
