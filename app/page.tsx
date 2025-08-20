'use client';

import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Menu } from 'lucide-react'

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'structure', label: 'Structure' },
  { id: 'features', label: 'Features' },
  { id: 'enhancements', label: 'New Features' },
  { id: 'components', label: 'Components' },
  { id: 'api', label: 'API' },
] as const

type SectionId = typeof NAV_SECTIONS[number]['id']

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sectionIds = useMemo(() => NAV_SECTIONS.map(s => s.id), [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id as SectionId)
            }
          })
        },
        { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds])

  const scrollToSection = (id: SectionId) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-wide">MB Web Boilerplate</span>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-1">
              {NAV_SECTIONS.map(({ id, label }) => (
                <NavigationMenuItem key={id}>
                  <NavigationMenuLink
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(id)
                    }}
                    className={cn(
                      'px-3 py-2 text-sm rounded-md transition-colors',
                      activeSection === id
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    )}
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-2">
            {/* Mobile Menu */}
            <DropdownMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {NAV_SECTIONS.map(({ id, label }) => (
                  <DropdownMenuItem
                    key={id}
                    onClick={() => {
                      scrollToSection(id)
                      setMobileMenuOpen(false)
                    }}
                    className={cn(
                      activeSection === id && 'bg-accent'
                    )}
                  >
                    {label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <ModeToggle />
            <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer" className="hidden sm:block">
              <Button variant="outline" size="sm">GitHub</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="space-y-16">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="mx-auto mb-4 max-w-3xl text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Build faster with a modern Next.js 15 boilerplate
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm sm:text-base text-muted-foreground">
            React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, and Drizzle ORM — curated and wired up with sensible defaults.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button size="lg" onClick={() => scrollToSection('getting-started')} className="w-full sm:w-auto">Get Started</Button>
            <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full">View on GitHub</Button>
            </a>
          </div>
        </section>

        <Separator />

        {/* Overview */}
        <section id="overview" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Overview</h2>
            <p className="text-sm sm:text-base text-muted-foreground">A concise snapshot of the stack</p>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Next.js 15', badge: 'App Router' },
              { title: 'React 19', badge: 'Concurrent' },
              { title: 'TypeScript', badge: 'Strict' },
              { title: 'Tailwind v4', badge: 'Modern CSS' },
              { title: 'shadcn/ui', badge: 'Components' },
              { title: 'Supabase', badge: 'Auth + DB' },
              { title: 'Drizzle ORM', badge: 'Type-safe SQL' },
              { title: 'ESLint v9', badge: 'Flat config' },
              { title: 'Zod', badge: 'Env Validation' },
              { title: 'SEO Ready', badge: 'Optimized' },
              { title: 'Error Handling', badge: 'Production' },
              { title: 'Security', badge: 'Headers' },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Getting Started */}
        <section id="getting-started" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Getting Started</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Install, run, and customize in minutes</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Start</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Clone and run locally</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-3 sm:p-4 text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto">
{`git clone https://github.com/mboss37/mb-web-boilerplate
cd mb-web-boilerplate
npm install
npm run dev`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environment</CardTitle>
                <CardDescription className="text-xs sm:text-sm">Optional Supabase + DB</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p>Copy .env.example → .env.local and add keys to enable Supabase and DB features.</p>
                <p>The app runs without credentials; auth/database features are auto-disabled.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Structure */}
        <section id="structure" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Project Structure</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Clean directories for real apps</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Directory Layout</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Key folders at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="max-h-[300px] sm:max-h-[420px] overflow-auto rounded-md bg-muted p-3 sm:p-4 text-xs sm:text-sm">
{`mb-web-boilerplate/
├── app/                # App Router + pages & API routes
├── components/         # Reusable UI (shadcn/ui)
├── config/             # App & database config
├── constants/          # Routes, API constants
├── hooks/              # Custom React hooks
├── lib/                # Supabase, DB client, utilities
├── styles/             # Extra CSS
├── types/              # Shared TypeScript types
└── drizzle.config.ts   # Drizzle ORM config`}
              </pre>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Features */}
        <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Features</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Everything you need to ship</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Authentication',
                desc: 'Supabase Auth with SSR middleware and session handling.',
              },
              {
                title: 'Database',
                desc: 'PostgreSQL via Supabase + Drizzle ORM with migrations.',
              },
              {
                title: 'Styling',
                desc: 'Tailwind v4 with shadcn/ui components and theming.',
              },
              {
                title: 'Dark Mode',
                desc: 'Theme toggle powered by next-themes with system support.',
              },
              {
                title: 'Type Safety',
                desc: 'Strict TypeScript across the app and database layer.',
              },
              {
                title: 'DX',
                desc: 'ESLint v9, modern scripts, and clean project layout.',
              },
            ].map((f) => (
              <Card key={f.title} className="hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-xs sm:text-sm text-muted-foreground">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* New Features */}
        <section id="enhancements" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Enhanced Features</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Production-ready improvements</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">New</Badge>
                  Environment Validation
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Type-safe environment variables with Zod</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-3 sm:p-4 text-xs sm:text-sm overflow-x-auto">
{`import { env } from '@/lib/env';

// Type-safe & validated
const apiUrl = env.NEXT_PUBLIC_API_URL;`}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">New</Badge>
                  SEO Optimization
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Complete metadata & social cards</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p>✓ Dynamic page titles with templates</p>
                <p>✓ Open Graph & Twitter cards</p>
                <p>✓ Structured data support</p>
                <p>✓ Robot & sitemap configuration</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">New</Badge>
                  Error Handling
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Graceful error boundaries & 404 pages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p>✓ Global error boundary with recovery</p>
                <p>✓ Custom 404 page with navigation</p>
                <p>✓ Development error details</p>
                <p>✓ Production-safe error messages</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Badge variant="secondary">New</Badge>
                  Security & Performance
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Production-ready optimizations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                <p>✓ Security headers (HSTS, CSP, etc.)</p>
                <p>✓ Image optimization (AVIF, WebP)</p>
                <p>✓ Package import optimization</p>
                <p>✓ SWC minification</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Components */}
        <section id="components" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Component Showcase</h2>
            <p className="text-sm sm:text-base text-muted-foreground">A curated set of UI primitives</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Buttons', hint: 'Primary, secondary, outline' },
              { title: 'Cards', hint: 'Headers, descriptions, content' },
              { title: 'Forms', hint: 'Inputs, labels, validation-ready' },
              { title: 'Data Display', hint: 'Tables, badges, avatars' },
              { title: 'Overlays', hint: 'Dialogs, dropdowns, menus' },
              { title: 'Navigation', hint: 'NavigationMenu patterns' },
            ].map((c) => (
              <Card key={c.title}>
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">{c.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">{c.hint}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" variant="outline">Explore</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* API */}
        <section id="api" className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="mb-8 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">API Routes</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Next.js 15 Route Handlers with proper error handling</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Endpoints</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Built-in examples to get you started</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Path</TableHead>
                    <TableHead>Methods</TableHead>
                    <TableHead>Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium text-xs sm:text-sm">/api/hello</TableCell>
                    <TableCell className="space-x-1"><Badge variant="outline" className="text-xs">GET</Badge> <Badge variant="outline" className="text-xs">POST</Badge></TableCell>
                    <TableCell className="text-xs sm:text-sm">Sample endpoint</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs sm:text-sm">/api/users</TableCell>
                    <TableCell className="space-x-1"><Badge variant="outline" className="text-xs">GET</Badge> <Badge variant="outline" className="text-xs">POST</Badge></TableCell>
                    <TableCell className="text-xs sm:text-sm">User management (mocked)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-xs sm:text-sm">/api/auth</TableCell>
                    <TableCell className="space-x-1"><Badge variant="outline" className="text-xs">POST</Badge> <Badge variant="outline" className="text-xs">DELETE</Badge></TableCell>
                    <TableCell className="text-xs sm:text-sm">Auth via Supabase</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 pt-8">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Ready to build?</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Your foundation is set. Start shipping.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" onClick={() => scrollToSection('getting-started')} className="w-full sm:w-auto">Get Started</Button>
              <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full">GitHub</Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}