import { API_CONFIG } from "../config/api.config";
import type { Agent, ApiResponse } from "../types/agent.types";

class AgentService {
  private readonly baseUrl: string;
  private readonly authToken: string;

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

  async fetchAgentsByCategory(categoryId: number): Promise<Agent[]> {
    try {
      const params = new URLSearchParams({
        limit: API_CONFIG.DEFAULT_PARAMS.LIMIT.toString(),
        offset: API_CONFIG.DEFAULT_PARAMS.OFFSET.toString(),
        category_id: categoryId.toString(),
        show_null_clientid: "true",
        fetchkbsummary: "false",
      });

      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.ENDPOINTS.AGENTS}?${params}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      );

      const data = await this.handleResponse<ApiResponse<Agent>>(response);
      const agents = data.data?.items || [];

      return agents.filter((agent) => agent.status === "active");
    } catch (error) {
      console.error("Error fetching agents:", error);
      throw new Error(
        error instanceof Error
          ? `Failed to fetch agents: ${error.message}`
          : "Failed to fetch agents"
      );
    }
  }

  async fetchAgentById(agentId: number): Promise<Agent | null> {
    try {
      const response = await fetch(
        `${this.baseUrl}${API_CONFIG.ENDPOINTS.AGENTS}${agentId}`,
        {
          method: "GET",
          headers: this.getHeaders(),
        }
      );

      const data = await this.handleResponse<{ data: Agent }>(response);
      return data.data || null;
    } catch (error) {
      console.error("Error fetching agent details:", error);
      throw new Error(
        error instanceof Error
          ? `Failed to fetch agent details: ${error.message}`
          : "Failed to fetch agent details"
      );
    }
  }
}

export const agentService = new AgentService();
