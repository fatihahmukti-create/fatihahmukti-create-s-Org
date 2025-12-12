import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/geminiService';
import { ChatMessage, Language } from '../types';
import { Send, Bot, User } from 'lucide-react';

interface ChatModuleProps {
  language: Language;
  t: any;
}

const ChatModule: React.FC<ChatModuleProps> = ({ language, t }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  // Initialize message on mount or language change if empty
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: '1', role: 'model', text: t.chat.initial_msg }]);
    }
  }, [t]);

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await sendChatMessage(history, userMsg.text, language);

    const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-blue-50 rounded-xl overflow-hidden shadow-inner border border-blue-100">
      <div className="bg-white p-4 border-b border-blue-100 flex items-center gap-2">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <Bot className="text-green-600" />
        </div>
        <div>
          <h2 className="font-bold text-gray-800">{t.chat.title}</h2>
          <p className="text-xs text-gray-500">{t.chat.subtitle}</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white rounded-br-none shadow-md'
                  : 'bg-white text-gray-700 border border-blue-100 rounded-bl-none shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                 {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                 <span>{msg.role === 'user' ? t.chat.user : t.chat.bot}</span>
              </div>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-blue-100">
              <div className="text-xs text-gray-400 mb-1">{t.chat.loading}</div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-blue-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.chat.placeholder}
            className="flex-1 p-3 border-2 border-blue-100 rounded-xl focus:outline-none focus:border-blue-400 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md active:scale-95 transform"
          >
            <Send size={20} />
          </button>
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-2">
          {t.chat.reminder}
        </p>
      </div>
    </div>
  );
};

export default ChatModule;
