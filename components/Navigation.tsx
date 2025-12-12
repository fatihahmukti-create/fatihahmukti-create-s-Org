import React from 'react';
import { AppView, Language } from '../types';
import { Home, MessageCircle, Image as ImageIcon, Camera, BookOpen, Settings, Sparkles } from 'lucide-react';
import { translations } from '../utils/translations';

interface NavigationProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  language: Language;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView, language }) => {
  const t = translations[language].nav;

  const navItems = [
    { view: AppView.HOME, icon: Home, label: t.home, color: 'text-blue-500', bg: 'bg-blue-50' },
    { view: AppView.LEARN, icon: BookOpen, label: t.learn, color: 'text-teal-500', bg: 'bg-teal-50' },
    { view: AppView.CHAT, icon: MessageCircle, label: t.chat, color: 'text-green-500', bg: 'bg-green-50' },
    { view: AppView.IMAGE, icon: ImageIcon, label: t.image, color: 'text-purple-500', bg: 'bg-purple-50' },
    { view: AppView.VISION, icon: Camera, label: t.vision, color: 'text-orange-500', bg: 'bg-orange-50' },
    { view: AppView.SETTINGS, icon: Settings, label: t.settings, color: 'text-slate-500', bg: 'bg-slate-50' },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-200 px-2 py-2 pb-safe shadow-lg z-50">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`flex flex-col items-center p-1.5 transition-all duration-300 min-w-[3.5rem] ${
                currentView === item.view ? 'transform -translate-y-2 scale-105' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className={`p-2 rounded-2xl transition-all ${currentView === item.view ? `${item.bg} shadow-sm` : 'bg-transparent'}`}>
                <item.icon className={`w-6 h-6 ${item.color}`} strokeWidth={currentView === item.view ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-bold mt-1 transition-colors ${currentView === item.view ? 'text-slate-800' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop Sidebar Navigation */}
      <div className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-full flex-shrink-0">
        <div className="p-6 border-b border-slate-100 flex items-center gap-2">
           <div className="bg-blue-100 p-2 rounded-xl">
             <Sparkles className="text-blue-600 fill-blue-600" size={20} />
           </div>
           <h1 className="text-xl font-black text-slate-800 tracking-tight">KidoAI</h1>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
          <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Menu</p>
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                currentView === item.view 
                  ? `${item.bg} border border-slate-100 shadow-sm` 
                  : 'hover:bg-slate-50 text-slate-500'
              }`}
            >
              <item.icon 
                className={`w-5 h-5 transition-transform group-hover:scale-110 ${currentView === item.view ? item.color : 'text-slate-400 group-hover:text-slate-600'}`} 
                strokeWidth={2.5} 
              />
              <span className={`font-bold text-sm ${currentView === item.view ? 'text-slate-800' : 'text-slate-500'}`}>
                {item.label}
              </span>
              {currentView === item.view && (
                <div className={`ml-auto w-1.5 h-1.5 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
              )}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100">
           <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-4 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-2 -top-2 w-12 h-12 bg-white/20 rounded-full blur-xl"></div>
              <p className="text-xs font-medium opacity-90 relative z-10">
                {language === 'id' ? 'Belajar itu seru!' : 'Learning is fun!'}
              </p>
              <div className="mt-2 text-[10px] opacity-70">v1.2.0</div>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;