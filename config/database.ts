// Database configuration

export const databaseConfig = {
  // Supabase configuration
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  },
  
  // Database connection
  connection: {
    url: process.env.DATABASE_URL!,
    ssl: process.env.NODE_ENV === 'production',
    maxConnections: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  },
  
  // Migration settings
  migrations: {
    directory: './drizzle',
    prefix: 'supabase',
  },
  
  // Schema settings
  schema: {
    public: 'public',
    auth: 'auth',
    storage: 'storage',
  },
} as const;

// Validate required environment variables
export function validateDatabaseConfig() {
  const required = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'DATABASE_URL',
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}
