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
  apiKey: string | undefined;
  id: number;
  name: string;
  description: string;
  status: "active" | "inactive";
  instruction: string;
  tool_id: number[];
  clone_from_id: number | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  clientid: string;
  is_private: boolean | null;
  category_id: number;
  is_super_agent: boolean;
  agent_orchestration_system: string;
  collaborator_agents: number[];
  model_provider: number;
  model_id: string;
  guardrail_id: string | null;
  config: Record<string, any> | null;
  knowledgebase_ids: number[] | null;
  deployment_pattern_config: any;
  chat_builder_config_id: number | null;
  deployed_agent_config: any;
  pii_keywords: string | null;
  guardrails: any[];
  chatbuilder_config: any;
  isSystemTheme: boolean;
  isCustomTheme: boolean;
  isClientTheme: boolean;
  category: Category;
  client_info: any;
}

export interface ApiResponse<T> {
  status_code: number;
  message: string;
  data: {
    items: T[];
    total: number;
    limit: number;
    offset: number;
  };
  error: string | null;
}
