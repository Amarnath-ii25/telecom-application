import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TelecomPage from './pages/TelecomPage';
import { agentService } from './services/agent.service';

const App: React.FC = () => {
  useEffect(() => {
    const token = import.meta.env.VITE_AGENT_TOKEN;
    if (token) {
      agentService.setToken(token);
    } else {
      console.warn('No token found in environment variables');
    }

    // Hide or adjust the chat tooltip popup (“Hi, how can I help you?”)
    const interval = setInterval(() => {
      const widget = document.querySelector('nerd-chat-widget') as any;
      if (widget && widget.shadowRoot) {
        const tooltip = widget.shadowRoot.querySelector('.nerd-chat-widget-tooltip');
        if (tooltip) {
          // ❌ Hide completely
          tooltip.style.display = 'none';

          // ✅ Or adjust position instead of hiding (uncomment below lines if you prefer repositioning)
          // tooltip.style.bottom = '100px';
          // tooltip.style.right = '50px';
          // tooltip.style.backgroundColor = '#1a1a1a';
          // tooltip.style.color = '#fff';

          clearInterval(interval);
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/telecom" element={<TelecomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
