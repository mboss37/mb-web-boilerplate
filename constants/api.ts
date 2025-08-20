// API-related constants and configuration

export const API_ENDPOINTS = {
  // Supabase endpoints
  SUPABASE: {
    AUTH: '/auth/v1',
    REST: '/rest/v1',
    REALTIME: '/realtime/v1',
  },
  
  // External APIs
  EXTERNAL: {
    GITHUB: 'https://api.github.com',
    WEATHER: 'https://api.openweathermap.org',
  },
} as const;

// Next.js API route paths (these are the actual API endpoints in your app)
export const API_ROUTES = {
  HELLO: '/api/hello',
  USERS: '/api/users',
  AUTH: '/api/auth',
} as const;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
  TEXT: 'text/plain',
  HTML: 'text/html',
} as const;
