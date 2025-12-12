import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ChatModule from './components/ChatModule';
import ImageModule from './components/ImageModule';
import VisionModule from './components/VisionModule';
import EthicsModule from './components/EthicsModule';
import LearningModule from './components/LearningModule';
import SettingsModule from './components/SettingsModule';
import { AppView, Language } from './types';
import { Sparkles, Brain, Heart, BookOpen } from 'lucide-react';
import { translations } from './utils/translations';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [language, setLanguage] = useState<Language>('id');
  
  const t = translations[language];

  const renderView = () => {
    switch (currentView) {
      case AppView.SETTINGS:
        return <SettingsModule language={language} setLanguage={setLanguage} t={t} />;
      case AppView.LEARN:
        return <LearningModule setView={setCurrentView} language={language} t={t} />;
      case AppView.CHAT:
        return <ChatModule language={language} t={t} />;
      case AppView.IMAGE:
        return <ImageModule language={language} t={t} />;
      case AppView.VISION:
        return <VisionModule language={language} t={t} />;
      case AppView.ETHICS:
        return <EthicsModule language={language} t={t} />;
      case AppView.HOME:
      default:
        return <HomeView setView={setCurrentView} t={t} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="flex-1 max-w-md mx-auto w-full bg-white shadow-2xl overflow-hidden relative sm:my-4 sm:rounded-[2rem] sm:border-8 sm:border-white">
        {/* Header decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-100 to-white -z-0 rounded-t-[2rem]"></div>
        
        {/* Main Content Area */}
        <main className="h-full flex flex-col p-4 pt-6 pb-24 relative z-10">
          <div className="flex items-center justify-between mb-4 px-2">
            <h1 className="text-2xl font-black text-blue-600 tracking-tight flex items-center gap-2">
              <Sparkles className="text-yellow-400 fill-yellow-400" size={24} />
              KidoAI
            </h1>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
               <span className="text-xs font-bold text-blue-600">{t.home.id_badge}</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-hidden rounded-xl bg-white">
            {renderView()}
          </div>
        </main>

        <Navigation currentView={currentView} setView={setCurrentView} language={language} />
      </div>
    </div>
  );
};

const HomeView: React.FC<{ setView: (view: AppView) => void, t: any }> = ({ setView, t }) => {
  return (
    <div className="h-full flex flex-col overflow-y-auto pb-4">
      <div className="text-center py-6">
        <div className="inline-block p-4 rounded-full bg-blue-50 mb-4 animate-bounce-slow">
           <Brain size={48} className="text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.home.welcome}</h2>
        <p className="text-gray-500 text-sm px-6">
          {t.home.subtitle}
        </p>
      </div>

      <div className="px-4 mb-4">
        <button 
          onClick={() => setView(AppView.LEARN)}
          className="w-full bg-teal-50 p-5 rounded-2xl border-2 border-teal-100 hover:bg-teal-100 transition text-left group flex items-center gap-4 shadow-sm"
        >
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
             <BookOpen className="text-teal-500" size={28} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-teal-800">{t.home.btn_learn_title}</h3>
            <p className="text-xs text-teal-600 mt-1">{t.home.btn_learn_desc}</p>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4">
        <button 
          onClick={() => setView(AppView.CHAT)}
          className="bg-green-50 p-4 rounded-2xl border border-green-100 hover:bg-green-100 transition text-left group"
        >
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="font-bold text-green-800">{t.home.btn_chat_title}</h3>
          <p className="text-[10px] text-green-600 mt-1">{t.home.btn_chat_desc}</p>
        </button>

        <button 
          onClick={() => setView(AppView.IMAGE)}
          className="bg-purple-50 p-4 rounded-2xl border border-purple-100 hover:bg-purple-100 transition text-left group"
        >
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
            <span className="text-2xl">🎨</span>
          </div>
          <h3 className="font-bold text-purple-800">{t.home.btn_image_title}</h3>
          <p className="text-[10px] text-purple-600 mt-1">{t.home.btn_image_desc}</p>
        </button>

        <button 
          onClick={() => setView(AppView.VISION)}
          className="bg-orange-50 p-4 rounded-2xl border border-orange-100 hover:bg-orange-100 transition text-left group"
        >
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
            <span className="text-2xl">🔍</span>
          </div>
          <h3 className="font-bold text-orange-800">{t.home.btn_vision_title}</h3>
          <p className="text-[10px] text-orange-600 mt-1">{t.home.btn_vision_desc}</p>
        </button>

        <button 
          onClick={() => setView(AppView.ETHICS)}
          className="bg-red-50 p-4 rounded-2xl border border-red-100 hover:bg-red-100 transition text-left group"
        >
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
            <Heart className="text-red-500 fill-red-500" size={20} />
          </div>
          <h3 className="font-bold text-red-800">{t.home.btn_ethics_title}</h3>
          <p className="text-[10px] text-red-600 mt-1">{t.home.btn_ethics_desc}</p>
        </button>
      </div>

      <div className="mt-6 mx-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-white opacity-20 rounded-full"></div>
        <h3 className="font-bold text-lg mb-1 relative z-10">{t.home.did_you_know_title}</h3>
        <p className="text-xs text-blue-100 leading-relaxed relative z-10">
          {t.home.did_you_know_desc}
        </p>
      </div>
    </div>
  );
};

export default App;
