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

// Define a simple user interface locally since we removed Firebase
export interface SimpleUser {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

const App: React.FC = () => {
  // Set default guest user immediately
  const [user] = useState<SimpleUser>({
    displayName: 'Teman Kido',
    email: 'tamu@kidoai.com',
    photoURL: null
  });

  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);
  const [language, setLanguage] = useState<Language>('id');
  
  const t = translations[language];

  // Main App Content
  const renderView = () => {
    switch (currentView) {
      case AppView.SETTINGS:
        return <SettingsModule language={language} setLanguage={setLanguage} t={t} user={user} />;
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
    <div className="h-screen w-screen bg-slate-50 flex overflow-hidden font-sans text-gray-900">
      {/* Navigation - Sidebar on Desktop, Hidden on Mobile (handled inside component) */}
      <Navigation currentView={currentView} setView={setCurrentView} language={language} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Mobile Header (Only visible on small screens) */}
        <header className="md:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm sticky top-0 z-20 border-b border-slate-100">
           <div className="flex items-center gap-2">
              <Sparkles className="text-blue-500 fill-blue-500" size={24} />
              <h1 className="text-xl font-black text-slate-800 tracking-tight">KidoAI</h1>
           </div>
           <div className="flex items-center gap-2">
              {user.photoURL ? (
                 <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full border border-slate-200" />
              ) : (
                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xs border border-blue-200">
                    {user.displayName?.charAt(0)}
                 </div>
              )}
              <div className="px-2 py-1 bg-blue-50 rounded-lg border border-blue-100">
                <span className="text-xs font-bold text-blue-600">{t.home.id_badge}</span>
              </div>
           </div>
        </header>

        {/* Desktop Header / Toolbar (Top right area) */}
        <div className="hidden md:flex justify-between items-center p-4 pr-8 bg-slate-50">
           <div className="text-slate-500 font-bold text-sm ml-4">
              Halo, {user.displayName?.split(' ')[0]}! 👋
           </div>
           <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold text-slate-600">{language === 'id' ? 'Online' : 'Online'}</span>
              <div className="h-4 w-px bg-slate-200 mx-1"></div>
              <span className="text-xs font-bold text-blue-600">{t.home.id_badge}</span>
           </div>
        </div>

        {/* Content Viewport */}
        <main className="flex-1 overflow-hidden p-0 md:p-6 md:pt-0">
           <div className="h-full w-full bg-white md:rounded-3xl md:border border-slate-200 md:shadow-sm overflow-hidden relative">
             {/* Background Decoration for Desktop */}
             <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-50/50 to-transparent -z-0 pointer-events-none"></div>
             
             {/* Render Active Module */}
             <div className="h-full relative z-10">
               {renderView()}
             </div>
           </div>
        </main>
        
        {/* Spacer for Mobile Bottom Nav */}
        <div className="h-20 md:hidden"></div>
      </div>
    </div>
  );
};

const HomeView: React.FC<{ setView: (view: AppView) => void, t: any }> = ({ setView, t }) => {
  return (
    <div className="h-full w-full overflow-y-auto">
      <div className="max-w-5xl mx-auto p-4 md:p-8">
        
        {/* Hero Section */}
        <div className="text-center py-8 md:py-12 mb-6">
          <div className="inline-flex p-4 rounded-full bg-blue-50 mb-6 shadow-sm ring-4 ring-blue-50/50 animate-bounce-slow">
             <Brain size={56} className="text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tight">{t.home.welcome}</h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t.home.subtitle}
          </p>
        </div>

        {/* Featured Card (Learning) */}
        <div className="mb-6">
          <button 
            onClick={() => setView(AppView.LEARN)}
            className="w-full bg-gradient-to-r from-teal-50 to-emerald-50 hover:from-teal-100 hover:to-emerald-100 p-6 md:p-8 rounded-3xl border-2 border-teal-100 transition-all text-left group flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0 rotate-3 group-hover:rotate-6">
               <BookOpen className="text-teal-500" size={40} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-2xl text-teal-900 mb-2">{t.home.btn_learn_title}</h3>
              <p className="text-teal-700 text-base md:text-lg">{t.home.btn_learn_desc}</p>
              <span className="inline-block mt-4 text-xs font-bold bg-teal-200 text-teal-800 px-3 py-1 rounded-full uppercase tracking-wide">
                Start Here
              </span>
            </div>
          </button>
        </div>

        {/* Grid Tools */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <button 
            onClick={() => setView(AppView.CHAT)}
            className="bg-green-50 p-5 rounded-3xl border border-green-100 hover:bg-green-100 transition text-left group hover:-translate-y-1 hover:shadow-md h-full flex flex-col"
          >
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-bold text-lg text-green-900 mb-1">{t.home.btn_chat_title}</h3>
            <p className="text-xs text-green-700 leading-snug">{t.home.btn_chat_desc}</p>
          </button>

          <button 
            onClick={() => setView(AppView.IMAGE)}
            className="bg-purple-50 p-5 rounded-3xl border border-purple-100 hover:bg-purple-100 transition text-left group hover:-translate-y-1 hover:shadow-md h-full flex flex-col"
          >
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-bold text-lg text-purple-900 mb-1">{t.home.btn_image_title}</h3>
            <p className="text-xs text-purple-700 leading-snug">{t.home.btn_image_desc}</p>
          </button>

          <button 
            onClick={() => setView(AppView.VISION)}
            className="bg-orange-50 p-5 rounded-3xl border border-orange-100 hover:bg-orange-100 transition text-left group hover:-translate-y-1 hover:shadow-md h-full flex flex-col"
          >
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="font-bold text-lg text-orange-900 mb-1">{t.home.btn_vision_title}</h3>
            <p className="text-xs text-orange-700 leading-snug">{t.home.btn_vision_desc}</p>
          </button>

          <button 
            onClick={() => setView(AppView.ETHICS)}
            className="bg-red-50 p-5 rounded-3xl border border-red-100 hover:bg-red-100 transition text-left group hover:-translate-y-1 hover:shadow-md h-full flex flex-col"
          >
            <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
              <Heart className="text-red-500 fill-red-500" size={24} />
            </div>
            <h3 className="font-bold text-lg text-red-900 mb-1">{t.home.btn_ethics_title}</h3>
            <p className="text-xs text-red-700 leading-snug">{t.home.btn_ethics_desc}</p>
          </button>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full shrink-0">
               <Sparkles className="text-yellow-300 fill-yellow-300" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2 text-blue-50">{t.home.did_you_know_title}</h3>
              <p className="text-sm md:text-base text-blue-100 leading-relaxed max-w-3xl">
                {t.home.did_you_know_desc}
              </p>
            </div>
          </div>
        </div>
        
        {/* Extra spacing for scrolling past bottom nav on mobile */}
        <div className="h-10 md:h-4"></div>
      </div>
    </div>
  );
};

export default App;