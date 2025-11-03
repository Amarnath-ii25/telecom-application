import { useState, useEffect, useCallback } from "react";
import { categoryService } from "../services/categoryService";
import type { Category } from "../types/agent.types";
import {
  getCategoryConfig,
  type CategoryConfig,
} from "../constants/categories";

export interface CategoryWithConfig extends Category {
  config: CategoryConfig;
}

interface UseCategoriesReturn {
  categories: CategoryWithConfig[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useCategories = (): UseCategoriesReturn => {
  const [categories, setCategories] = useState<CategoryWithConfig[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async (): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Fetch categories from API
      const apiCategories: Category[] = await categoryService.fetchCategories();

      // Map API categories with their display configurations
      const categoriesWithConfig: CategoryWithConfig[] = apiCategories.map(
        (category) => ({
          ...category,
          config: getCategoryConfig(category.name),
        })
      );

      setCategories(categoriesWithConfig);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      console.error("Error in useCategories:", err);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories,
  };
};
