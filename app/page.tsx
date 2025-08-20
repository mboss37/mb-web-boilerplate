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



const NAV_SECTIONS = [
  { id: 'features', label: 'Features' },
  { id: 'getting-started', label: 'Quick Start' },
] as const

type SectionId = typeof NAV_SECTIONS[number]['id']

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>('features')

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
        <div className="container mx-auto max-w-7xl flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-wide">MB Web Boilerplate</span>
          </div>



          {/* Desktop Navigation - Hidden on mobile */}
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
                      'px-2 sm:px-3 py-2 text-xs sm:text-sm rounded-md transition-colors touch-manipulation',
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
            <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer" className="hidden sm:block">
              <Button variant="outline" size="sm">GitHub</Button>
            </a>
          </div>
        </div>
      </header>

      <main className="space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero */}
        <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 xl:py-16 text-center">
          <h1 className="mx-auto mb-4 max-w-4xl text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
            Modern Next.js 15 Boilerplate
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-sm sm:text-base text-muted-foreground">
            Production-ready starter with React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, and Drizzle ORM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <Button size="lg" onClick={() => scrollToSection('getting-started')} className="w-full sm:w-auto touch-manipulation">Get Started</Button>
            <a href="https://github.com/mboss37/mb-web-boilerplate" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full">GitHub</Button>
            </a>
          </div>
        </section>

        <Separator />

        {/* Features */}
        <section id="features" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-6 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Features</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Everything you need to build production apps</p>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-center mb-6">Technology Stack</h3>
            <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-4">
              {[
                { title: 'Next.js 15', badge: 'App Router' },
                { title: 'React 19', badge: 'Concurrent' },
                { title: 'TypeScript', badge: 'Strict' },
                { title: 'Tailwind v4', badge: 'Modern CSS' },
                { title: 'shadcn/ui', badge: 'Components' },
                { title: 'Supabase', badge: 'Auth + DB' },
                { title: 'Drizzle ORM', badge: 'Type-safe SQL' },
                { title: 'Production Ready', badge: 'Optimized' },
              ].map((item) => (
                <Card key={item.title} className="hover:shadow-sm text-center transition-all duration-200">
                  <CardHeader>
                    <CardTitle className="text-sm sm:text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
                title: 'UI Components',
                desc: 'shadcn/ui with Tailwind CSS v4 and dark mode support.',
              },
              {
                title: 'Type Safety',
                desc: 'Strict TypeScript across the app and database layer.',
              },
              {
                title: 'Production Ready',
                desc: 'SEO optimization, error handling, and security headers.',
              },
              {
                title: 'Developer Experience',
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
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Ready to get started? Jump to the quick start guide below
            </p>
            <Button 
              onClick={() => scrollToSection('getting-started')} 
              className="touch-manipulation"
              size="lg"
            >
              Get Started →
            </Button>
          </div>
        </section>

        <Separator />

        {/* Getting Started */}
        <section id="getting-started" className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-6 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold">Getting Started</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Install, run, and customize in minutes</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Get up and running in seconds</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="rounded-md bg-muted p-3 sm:p-4 text-xs sm:text-sm leading-6 sm:leading-7 overflow-x-auto whitespace-pre-wrap sm:whitespace-pre">
{`git clone https://github.com/mboss37/mb-web-boilerplate
cd mb-web-boilerplate
npm install
npm run dev`}
              </pre>
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground text-center">
                <a href="https://github.com/mboss37/mb-web-boilerplate#readme" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                  View full documentation →
                </a>
              </p>
            </CardContent>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 mt-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-semibold">MB Web Boilerplate</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Modern, production-ready Next.js 15 starter with everything you need to build amazing web applications.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="font-medium">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="#features" 
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('features')
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#getting-started" 
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('getting-started')
                    }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Get Started
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/mboss37/mb-web-boilerplate#readme" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className="font-medium">Built With</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Next.js 15</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS v4</li>
                <li>shadcn/ui</li>
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-3">
              <h3 className="font-medium">Connect</h3>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/mboss37/mb-web-boilerplate" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 MB Web Boilerplate. Made with ❤️ for the Next.js community.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                <a href="#" className="hover:text-foreground transition-colors">License</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}