import type { Agent, AgentResponse } from '../types/agent.types';
import { API_CONFIG } from '../constants/categories';

export class AgentService {
  private static instance: AgentService;
  private token: string;
  public API_BASE_URL = API_CONFIG.BASE_URL;;

  private constructor() {
    this.token = localStorage.getItem('authToken') || '';
  }

  public static getInstance(): AgentService {
    if (!AgentService.instance) {
      AgentService.instance = new AgentService();
    }
    return AgentService.instance;
  }

  public setToken(token: string): void {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  private buildQueryParams(params: Record<string, any>): string {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, String(value));
      }
    });
    return queryParams.toString();
  }

  public async fetchAgentsByCategory(
    categoryId: number,
    additionalParams?: Partial<typeof API_CONFIG.DEFAULT_PARAMS>
  ): Promise<Agent[]> {
    try {
      const params = {
        ...API_CONFIG.DEFAULT_PARAMS,
        ...additionalParams,
        category_id: categoryId
      };

      const queryString = this.buildQueryParams(params);
      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AGENTS}?${queryString}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: AgentResponse = await response.json();
      
      // Filter only active agents
      return data.data.items.filter(agent => agent.status === 'active');
    } catch (error) {
      console.error('Error fetching agents:', error);
      throw error;
    }
  }

  public async fetchAgentById(agentId: number): Promise<Agent | null> {
    try {
      const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.AGENTS}${agentId}/`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'Authorization': `Bearer ${this.token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching agent by ID:', error);
      throw error;
    }
  }
}

export const agentService = AgentService.getInstance();