import React from 'react';
import { AppView, Language } from '../types';
import { Home, MessageCircle, Image as ImageIcon, Camera, BookOpen, Settings } from 'lucide-react';
import { translations } from '../utils/translations';

interface NavigationProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  language: Language;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView, language }) => {
  const t = translations[language].nav;

  const navItems = [
    { view: AppView.HOME, icon: Home, label: t.home, color: 'text-blue-500' },
    { view: AppView.LEARN, icon: BookOpen, label: t.learn, color: 'text-teal-500' },
    { view: AppView.CHAT, icon: MessageCircle, label: t.chat, color: 'text-green-500' },
    { view: AppView.IMAGE, icon: ImageIcon, label: t.image, color: 'text-purple-500' },
    { view: AppView.VISION, icon: Camera, label: t.vision, color: 'text-orange-500' },
    { view: AppView.SETTINGS, icon: Settings, label: t.settings, color: 'text-slate-500' },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t-2 border-blue-100 px-2 py-2 pb-6 shadow-lg z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => setView(item.view)}
            className={`flex flex-col items-center p-1.5 transition-all duration-300 min-w-[3rem] ${
              currentView === item.view ? 'transform -translate-y-2 scale-110' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <div className={`p-2 rounded-full ${currentView === item.view ? 'bg-blue-50 shadow-md' : ''}`}>
              <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={2.5} />
            </div>
            <span className={`text-[9px] font-bold mt-1 ${currentView === item.view ? 'text-gray-800' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
