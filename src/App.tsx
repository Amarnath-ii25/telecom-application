import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import { NerdChatWidget } from 'nerdagent-chat-widget-react';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const config = {
    apiKey: 'DT_WLT_wwMv4dPJKhZCVabzVB8maWuw8Nz3bFfTse6QViE',
    agentId: '31',
    agentName: 'Support Agent',
    agentRole: 'Customer Support',
    primaryColor: '#2d3e50',
    accentColor: '#4e8cff',
    welcomeMessage: 'Hi! How can I help you today?',
    placeholderText: 'Type your message...',
    // 👇 Cast fixes the TypeScript error for WidgetPosition
    position:
      'bottom-right' as unknown as import('nerdagent-chat-widget-react').WidgetPosition,
    width: '350',
    height: '500',
    showMinimizeButton: true,
    showTimestamps: true,
    enableFileUpload: false,
    enableSpeech: false,
    showPoweredBy: true,
  };

  const handleMessageSent = (event: any) => {
    console.log('Message sent:', event);
  };

  const handleWidgetOpened = () => {
    console.log('Chat widget opened');
  };

  const handleWidgetClosed = () => {
    console.log('Chat widget closed');
    setIsChatOpen(false);
  };

  return (
    <div className="app">
      {/* Main Page */}
      <HomePage />

      {/* Floating Chat Icon */}
      {!isChatOpen && (
        <button
          className="chat-toggle-btn"
          onClick={() => setIsChatOpen(true)}
          aria-label="Open Chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Widget (appears when clicked) */}
      {isChatOpen && (
        <NerdChatWidget
          apiKey={config.apiKey}
          agentId={config.agentId}
          agentName={config.agentName}
          agentRole={config.agentRole}
          primaryColor={config.primaryColor}
          accentColor={config.accentColor}
          welcomeMessage={config.welcomeMessage}
          placeholderText={config.placeholderText}
          position={config.position}
          width={config.width}
          height={config.height}
          showMinimizeButton={config.showMinimizeButton}
          showTimestamps={config.showTimestamps}
          enableFileUpload={config.enableFileUpload}
          enableSpeech={config.enableSpeech}
          showPoweredBy={config.showPoweredBy}
          onMessageSent={handleMessageSent}
          onWidgetOpened={handleWidgetOpened}
          onWidgetClosed={handleWidgetClosed}
        />
      )}
    </div>
  );
};

export default App;
