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

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'getting-started', label: 'Getting Started' },
  { id: 'structure', label: 'Structure' },
  { id: 'features', label: 'Features' },
  { id: 'components', label: 'Components' },
  { id: 'api', label: 'API' },
] as const

type SectionId = typeof NAV_SECTIONS[number]['id']

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('overview')

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
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-wide">MB Web Boilerplate</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="hidden gap-1 md:flex">
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
            <ModeToggle />
            <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm">GitHub</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="space-y-16">
        {/* Hero */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mx-auto mb-4 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Build faster with a modern Next.js 15 boilerplate
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-muted-foreground">
            React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, and Drizzle ORM — curated and wired up with sensible defaults.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg" onClick={() => scrollToSection('getting-started')}>Get Started</Button>
            <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline">View on GitHub</Button>
            </a>
          </div>
        </section>

        <Separator />

        {/* Overview */}
        <section id="overview" className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p className="text-muted-foreground">A concise snapshot of the stack</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Next.js 15', badge: 'App Router' },
              { title: 'React 19', badge: 'Concurrent' },
              { title: 'TypeScript', badge: 'Strict' },
              { title: 'Tailwind v4', badge: 'Modern CSS' },
              { title: 'shadcn/ui', badge: 'Components' },
              { title: 'Supabase', badge: 'Auth + DB' },
              { title: 'Drizzle ORM', badge: 'Type-safe SQL' },
              { title: 'ESLint v9', badge: 'Flat config' },
            ].map((item) => (
              <Card key={item.title} className="hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{item.badge}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Getting Started */}
        <section id="getting-started" className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold">Getting Started</h2>
            <p className="text-muted-foreground">Install, run, and customize in minutes</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Start</CardTitle>
                <CardDescription>Clone and run locally</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="rounded-md bg-muted p-4 text-sm leading-7">
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
                <CardDescription>Optional Supabase + DB</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Copy .env.example → .env.local and add keys to enable Supabase and DB features.</p>
                <p>The app runs without credentials; auth/database features are auto-disabled.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Structure */}
        <section id="structure" className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold">Project Structure</h2>
            <p className="text-muted-foreground">Clean directories for real apps</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Directory Layout</CardTitle>
              <CardDescription>Key folders at a glance</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="max-h-[420px] overflow-auto rounded-md bg-muted p-4 text-sm">
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
        <section id="features" className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold">Features</h2>
            <p className="text-muted-foreground">Everything you need to ship</p>
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
                  <CardTitle className="text-base">{f.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator />

        {/* Components */}
        <section id="components" className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold">Component Showcase</h2>
            <p className="text-muted-foreground">A curated set of UI primitives</p>
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
                  <CardTitle className="text-base">{c.title}</CardTitle>
                  <CardDescription>{c.hint}</CardDescription>
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
        <section id="api" className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold">API Routes</h2>
            <p className="text-muted-foreground">Next.js 15 Route Handlers</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Endpoints</CardTitle>
              <CardDescription>Built-in examples to get you started</CardDescription>
            </CardHeader>
            <CardContent>
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
                    <TableCell className="font-medium">/api/hello</TableCell>
                    <TableCell><Badge variant="outline">GET</Badge> <Badge variant="outline">POST</Badge></TableCell>
                    <TableCell>Sample endpoint</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">/api/users</TableCell>
                    <TableCell><Badge variant="outline">GET</Badge> <Badge variant="outline">POST</Badge></TableCell>
                    <TableCell>User management (mocked)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">/api/auth</TableCell>
                    <TableCell><Badge variant="outline">POST</Badge> <Badge variant="outline">DELETE</Badge></TableCell>
                    <TableCell>Auth via Supabase</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 pb-20 pt-8">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle>Ready to build?</CardTitle>
              <CardDescription>Your foundation is set. Start shipping.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center gap-3">
              <Button size="lg" onClick={() => scrollToSection('getting-started')}>Get Started</Button>
              <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline">GitHub</Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}