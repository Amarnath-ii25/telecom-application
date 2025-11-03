import { API_CONFIG } from "../config/api.config";
import type { Category, ApiResponse } from "../types/agent.types";

class CategoryService {
  private readonly baseUrl: string;
  private readonly authToken: string;
  private categoriesCache: Category[] | null = null;

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
    this.authToken = API_CONFIG.AUTH_TOKEN;
  }

  private getHeaders(): HeadersInit {
    return {
      Accept: "application/json",
      Authorization: `Bearer ${this.authToken}`,
      "Content-Type": "application/json",
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP ${response.status}: ${errorText || response.statusText}`
      );
    }

    const data = await response.json();

    if (data.status_code !== 200) {
      throw new Error(data.error || "An error occurred while fetching data");
    }

    return data;
  }

  async fetchCategories(): Promise<Category[]> {
    if (this.categoriesCache) {
      return this.categoriesCache;
    }

    try {
      const params = new URLSearchParams({
        limit: API_CONFIG.DEFAULT_PARAMS.LIMIT.toString(),
        offset: API_CONFIG.DEFAULT_PARAMS.OFFSET.toString(),
      });

      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.ENDPOINTS.CATEGORIES}?${params}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      );

      const data = await this.handleResponse<ApiResponse<Category>>(response);
      this.categoriesCache = data.data?.items || [];

      return this.categoriesCache;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw new Error(
        error instanceof Error
          ? `Failed to fetch categories: ${error.message}`
          : "Failed to fetch categories"
      );
    }
  }

  async getCategoryById(categoryId: number): Promise<Category | null> {
    try {
      const categories = await this.fetchCategories();
      return categories.find((cat) => cat.id === categoryId) || null;
    } catch (error) {
      console.error("Error getting category by ID:", error);
      return null;
    }
  }

  async getCategoryByName(categoryName: string): Promise<Category | null> {
    try {
      const categories = await this.fetchCategories();
      return (
        categories.find(
          (cat) => cat.name.toLowerCase() === categoryName.toLowerCase()
        ) || null
      );
    } catch (error) {
      console.error("Error getting category by name:", error);
      return null;
    }
  }

  clearCache(): void {
    this.categoriesCache = null;
  }
}

export const categoryService = new CategoryService();
