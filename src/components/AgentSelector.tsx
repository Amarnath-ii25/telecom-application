import React, { useState, useEffect } from "react";
import type { Agent } from "../types/agent.types";
import { agentService } from "../services/agent.service";
import "../css/AgentSelector.css";
import { NerdChatWidget } from "nerdagent-chat-widget-react";

interface AgentSelectorProps {
  categoryId: number;
  categoryName: string;
  onAgentSelect?: (agent: Agent | null) => void;
}

const AgentSelector: React.FC<AgentSelectorProps> = ({
  categoryId,
  categoryName,
  onAgentSelect,
}) => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAgents();
  }, [categoryId]);

  const fetchAgents = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedAgents = await agentService.fetchAgentsByCategory(
        categoryId
      );
      setAgents(fetchedAgents);
    } catch (err) {
      setError("Failed to load agents. Please try again.");
      console.error("Error loading agents:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAgentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const agentId = parseInt(event.target.value);
    const agent = agents.find((a) => a.id === agentId) || null;
    setSelectedAgent(agent);
    if (onAgentSelect) onAgentSelect(agent);
  };

  if (loading) {
    return (
      <div className="agent-selector-container">
        <div className="agent-selector-loading">
          <div className="spinner"></div>
          <p>Loading agents...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="agent-selector-container">
        <div className="agent-selector-error">
          <p>{error}</p>
          <button onClick={fetchAgents} className="retry-button">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="agent-selector-container">
      <div className="agent-selector-content">
        <div className="agent-selector-header">
          <h2 className="agent-selector-title">{categoryName} Agents</h2>
          <p className="agent-selector-subtitle">
            Select an agent to view details and interact
          </p>
        </div>

        <div className="agent-selector-dropdown">
          <label htmlFor="agent-select" className="dropdown-label">
            Choose Agent:
          </label>
          <select
            id="agent-select"
            value={selectedAgent?.id || ""}
            onChange={handleAgentChange}
            className="agent-dropdown"
          >
            <option value="">-- Select an Agent --</option>
            {agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))}
          </select>
        </div>

        {selectedAgent && (
          <>
            {/* <div className="agent-details">
              <div className="agent-details-header">
                <h3>{selectedAgent.name}</h3>
                <span className={`agent-status ${selectedAgent.status}`}>
                  {selectedAgent.status}
                </span>
              </div>
              <p className="agent-description">{selectedAgent.description}</p>
              <div className="agent-meta">
                <div className="meta-item">
                  <span className="meta-label">Model:</span>
                  <span className="meta-value">{selectedAgent.model_id}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Orchestration:</span>
                  <span className="meta-value">
                    {selectedAgent.agent_orchestration_system}
                  </span>
                </div>
                {selectedAgent.is_super_agent && (
                  <div className="meta-item">
                    <span className="super-agent-badge">Super Agent</span>
                  </div>
                )}
              </div>
            </div> */}

            {/* 👇 Chat Widget appears here when an agent is selected */}
            <div className="agent-chat-widget">
              <NerdChatWidget
                apiKey=""
                agentId={selectedAgent.id.toString()}
                agentName={selectedAgent.name}
                position="bottom-right"
              />
            </div>
          </>
        )}

        {/* {!selectedAgent && agents.length > 0 && (
          <div className="agent-placeholder">
            <p>Select an agent to view details</p>
          </div>
        )} */}

        {agents.length === 0 && (
          <div className="no-agents">
            <p>No active agents available in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentSelector;
