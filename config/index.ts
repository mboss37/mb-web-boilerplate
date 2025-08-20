// Export all configuration

export * from './app';
export * from './database';

// Default configuration
export const defaultConfig = {
  app: {
    name: 'MB Web Boilerplate',
    version: '1.0.0',
  },
  database: {
    maxConnections: 20,
    idleTimeoutMillis: 30000,
  },
} as const;
