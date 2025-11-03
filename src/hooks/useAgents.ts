import { useState, useEffect, useCallback } from "react";
import { agentService } from "../services/agentService";
import type { Agent } from "../types/agent.types";

interface UseAgentsReturn {
  agents: Agent[];
  selectedAgent: Agent | null;
  loading: boolean;
  error: string | null;
  selectAgent: (agentId: string) => void;
  refetch: () => Promise<void>;
}

export const useAgents = (categoryId: number): UseAgentsReturn => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAgents = useCallback(async (): Promise<void> => {
    if (!categoryId) {
      setAgents([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await agentService.fetchAgentsByCategory(categoryId);
      setAgents(data);

      // Auto-select first agent if available
      if (data.length > 0 && !selectedAgent) {
        setSelectedAgent(data[0]);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);
      console.error("Error in useAgents:", err);
      setAgents([]);
    } finally {
      setLoading(false);
    }
  }, [categoryId, selectedAgent]);

  useEffect(() => {
    fetchAgents();
  }, [fetchAgents]);

  const selectAgent = useCallback(
    (agentId: string): void => {
      const agent = agents.find((a) => a.id.toString() === agentId);
      setSelectedAgent(agent || null);
    },
    [agents]
  );

  return {
    agents,
    selectedAgent,
    loading,
    error,
    selectAgent,
    refetch: fetchAgents,
  };
};
