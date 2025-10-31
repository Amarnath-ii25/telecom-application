// types/agent.types.ts

export interface Category {
  id: number;
  name: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface Agent {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'inactive';
  instruction: string;
  tool_id: number[];
  clone_from_id: number | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  clientid: string;
  is_private: boolean | null;
  category_id: number;
  is_super_agent: boolean | null;
  agent_orchestration_system: string;
  collaborator_agents: number[];
  model_provider: number;
  model_id: string;
  category: Category;
}

export interface AgentResponse {
  status_code: number;
  message: string;
  data: {
    items: Agent[];
    total: number;
    limit: number;
    offset: number;
  };
  error: null | string;
}

export interface CategoryTile {
  id: number;
  name: string;
  displayName: string;
  description: string;
  icon: string;
  route: string;
}