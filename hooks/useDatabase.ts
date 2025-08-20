'use client';

import { useState } from 'react';
import type { ApiResponse } from '@/types';

export function useDatabase() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const executeQuery = async <T>(
    queryFn: () => Promise<T>
  ): Promise<ApiResponse<T>> => {
    setLoading(true);
    setError(null);

    try {
      const result = await queryFn();
      return {
        success: true,
        data: result,
      };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return {
    loading,
    error,
    executeQuery,
    clearError,
  };
}
