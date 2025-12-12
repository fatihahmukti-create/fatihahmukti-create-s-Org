import React from 'react';
import { Settings, Globe, User as UserIcon, Zap, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { SimpleUser } from '../App';
import { getActiveKeyMasked } from '../services/geminiService';

interface SettingsModuleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
  user: SimpleUser | null;
}

const SettingsModule: React.FC<SettingsModuleProps> = ({ language, setLanguage, t, user }) => {
  
  return (
    <div className="flex flex-col h-full bg-slate-50 rounded-xl shadow-inner border border-slate-200 overflow-y-auto">
      <div className="bg-white p-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
            <Settings className="text-slate-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">{t.settings.title}</h2>
            <p className="text-xs text-gray-500">{t.settings.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 space-y-4">
        
        {/* System Status Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl shadow-sm border border-green-100">
           <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-full">
                <Zap size={20} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-green-800">Sistem AI</h3>
                <p className="text-xs text-green-600">Status Koneksi</p>
              </div>
           </div>
           <div className="bg-white/60 rounded-xl p-3 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500">Kunci Aktif:</span>
              <div className="flex items-center gap-1.5">
                 <ShieldCheck size={14} className="text-green-500" />
                 <code className="text-xs font-mono bg-white px-2 py-1 rounded border border-green-200 text-green-700">
                   {getActiveKeyMasked()}
                 </code>
              </div>
           </div>
        </div>

        {/* Account Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
           <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-100 p-2 rounded-full">
                <UserIcon size={20} className="text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Akun Kamu</h3>
                <p className="text-xs text-gray-400">Info Profil</p>
              </div>
           </div>
           
           <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
              {user?.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
              ) : (
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
                  {user?.displayName ? user.displayName.charAt(0) : 'U'}
                </div>
              )}
              <div className="overflow-hidden">
                <p className="font-bold text-slate-800 truncate">{user?.displayName || 'User'}</p>
                <p className="text-xs text-slate-500 truncate">{user?.email}</p>
              </div>
           </div>
           <div className="mt-2 text-[10px] text-slate-400 text-center bg-slate-50 p-2 rounded-lg">
             Mode Tamu (Tanpa Login)
           </div>
        </div>

        {/* Language Section */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
           <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <Globe size={20} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-700">{t.settings.language_label}</h3>
                <p className="text-xs text-gray-400">{t.settings.language_desc}</p>
              </div>
           </div>

           <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => setLanguage('id')}
                className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                  language === 'id' 
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold' 
                  : 'border-slate-100 hover:border-slate-300 text-slate-500'
                }`}
              >
                <span className="text-2xl">🇮🇩</span> Indonesia
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`p-3 rounded-xl border-2 transition-all flex items-center justify-center gap-2 ${
                  language === 'en' 
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold' 
                  : 'border-slate-100 hover:border-slate-300 text-slate-500'
                }`}
              >
                <span className="text-2xl">🇺🇸</span> English
              </button>
           </div>
        </div>

        <div className="text-center mt-8 opacity-50">
           <p className="text-xs text-slate-400">KidoAI v1.3.1 - Vercel Edition</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsModule;