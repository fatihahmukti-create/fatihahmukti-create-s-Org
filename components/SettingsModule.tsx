import React from 'react';
import { Settings, Globe } from 'lucide-react';
import { Language } from '../types';

interface SettingsModuleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
}

const SettingsModule: React.FC<SettingsModuleProps> = ({ language, setLanguage, t }) => {
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

      <div className="p-4 flex-1">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-4">
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
           <p className="text-xs text-slate-400">KidoAI v1.1.0</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsModule;
