// Common TypeScript types for the boilerplate

// User types
export interface User {
  id: string;
  email: string;
  fullName?: string;
  username?: string;
  avatarUrl?: string;
  website?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Database types
export interface DatabaseConfig {
  url: string;
  ssl: boolean;
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Re-export all types for easy importing
export * from './auth';
export * from './database';
export * from './api';
