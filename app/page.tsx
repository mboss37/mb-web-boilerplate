import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/next.svg" alt="Logo" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">MB Web Boilerplate</h1>
                <p className="text-muted-foreground">Next.js 15 + React 19 + Supabase + Drizzle ORM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-muted/40">
        <div className="container mx-auto px-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/docs">
                        <div className="text-sm font-medium leading-none">Documentation</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Learn how to use this boilerplate effectively.
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" href="/examples">
                        <div className="text-sm font-medium leading-none">Examples</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore example implementations and patterns.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/components">
                  Components
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/database">
                  Database
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">🚀 Ready to Build</Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Modern Web Development Boilerplate
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A production-ready foundation with Next.js 15, React 19, TypeScript, Tailwind CSS v4, 
              Supabase, and Drizzle ORM. Start building your next great application.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">View on GitHub</Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">⚡</span>
                  <span>Next.js 15</span>
                </CardTitle>
                <CardDescription>
                  Latest version with App Router, React 19, and modern features
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🎨</span>
                  <span>Tailwind CSS v4</span>
                </CardTitle>
                <CardDescription>
                  Latest Tailwind with new syntax and improved performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🔐</span>
                  <span>Supabase</span>
                </CardTitle>
                <CardDescription>
                  Backend-as-a-Service with authentication and PostgreSQL
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🗄️</span>
                  <span>Drizzle ORM</span>
                </CardTitle>
                <CardDescription>
                  Type-safe database operations with excellent performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🧩</span>
                  <span>shadcn/ui</span>
                </CardTitle>
                <CardDescription>
                  Beautiful, accessible UI components built with Radix UI
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🔒</span>
                  <span>TypeScript</span>
                </CardTitle>
                <CardDescription>
                  Full type safety throughout the application
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Component Showcase</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
                <CardDescription>Input fields and buttons ready to use</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <Input type="password" placeholder="Enter your password" />
                </div>
                <div className="flex space-x-2">
                  <Button>Submit</Button>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Delete</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Display</CardTitle>
                <CardDescription>Tables and badges for content organization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                  </div>
                  <Table>
                    <TableCaption>A list of recent activities.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Activity</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Project setup</TableCell>
                        <TableCell><Badge variant="secondary">Completed</Badge></TableCell>
                        <TableCell>2024-01-15</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Database migration</TableCell>
                        <TableCell><Badge>In Progress</Badge></TableCell>
                        <TableCell>2024-01-16</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Quick Start */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Ready to Get Started?</CardTitle>
              <CardDescription>
                This boilerplate is ready to use. Just add your Supabase credentials and start building!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg text-left">
                <p className="text-sm font-mono">
                  # Clone and install<br/>
                  git clone https://github.com/mboss37/mb-web-boilerplate.git<br/>
                  cd mb-web-boilerplate<br/>
                  npm install<br/><br/>
                  # Start development<br/>
                  npm run dev
                </p>
              </div>
              <Button size="lg" className="w-full">Start Building Now</Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>Built with ❤️ using modern web technologies</p>
            <p className="text-sm mt-2">
              Next.js 15 • React 19 • TypeScript • Tailwind CSS v4 • Supabase • Drizzle ORM • shadcn/ui
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
