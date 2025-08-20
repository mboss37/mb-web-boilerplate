// Application configuration

export const appConfig = {
  // App metadata
  name: 'MB Web Boilerplate',
  description: 'Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 + Supabase + Drizzle ORM',
  version: '1.0.0',
  
  // Environment
  env: process.env.NODE_ENV || 'development',
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  
  // URLs
  urls: {
    base: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    api: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  },
  
  // Features
  features: {
    auth: true,
    database: true,
    realtime: true,
    storage: true,
    analytics: false,
  },
  
  // Limits
  limits: {
    maxFileSize: 10 * 1024 * 1024, // 10MB
    maxUploads: 5,
    pagination: {
      default: 10,
      max: 100,
    },
  },
  
  // Security
  security: {
    sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutes
  },
} as const;

// Feature flags
export const featureFlags = {
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enableDebugMode: process.env.NODE_ENV === 'development',
  enablePerformanceMonitoring: process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE === 'true',
} as const;
