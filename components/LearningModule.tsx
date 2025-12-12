import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { AppView, Language } from '../types';
import { getLearningChapters } from '../utils/translations';

interface LearningModuleProps {
  setView: (view: AppView) => void;
  language: Language;
  t: any;
}

const LearningModule: React.FC<LearningModuleProps> = ({ setView, language, t }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const chapters = getLearningChapters(language);

  const toggleChapter = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderContent = (chapter: any) => {
    const { type, data } = chapter;
    switch (type) {
      case 'intro':
        return (
          <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{__html: data.p1}} />
            <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
              <strong>{data.box_title}</strong>
              <p className="mt-1">{data.box_desc}</p>
            </div>
            <p>{data.p2}</p>
          </div>
        );
      case 'how':
        return (
          <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <p dangerouslySetInnerHTML={{__html: data.p1}} />
            <ul className="list-disc pl-5 space-y-1">
              <li>{data.l1}</li>
              <li>{data.l2}</li>
            </ul>
            <div className="bg-blue-50 p-3 rounded-xl border border-blue-200">
              <strong>{data.box_title}</strong>
              <p className="mt-1">{data.box_desc}</p>
            </div>
          </div>
        );
      case 'types':
        return (
          <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <p>{data.p1}</p>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg border border-green-100 cursor-pointer hover:bg-green-100 transition" onClick={() => setView(AppView.CHAT)}>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg shadow-sm">🤖</div>
                <div><span className="font-bold text-green-700 block text-xs">{data.t1}</span><span className="text-[10px]">{data.d1}</span></div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-purple-50 rounded-lg border border-purple-100 cursor-pointer hover:bg-purple-100 transition" onClick={() => setView(AppView.IMAGE)}>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg shadow-sm">🎨</div>
                <div><span className="font-bold text-purple-700 block text-xs">{data.t2}</span><span className="text-[10px]">{data.d2}</span></div>
              </div>
              <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg border border-orange-100 cursor-pointer hover:bg-orange-100 transition" onClick={() => setView(AppView.VISION)}>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-lg shadow-sm">👁️</div>
                <div><span className="font-bold text-orange-700 block text-xs">{data.t3}</span><span className="text-[10px]">{data.d3}</span></div>
              </div>
            </div>
          </div>
        );
      case 'ethics':
        return (
          <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
            <p className="font-bold text-red-600">{data.warning}</p>
            <p>{data.p1}</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-red-500">
              <li><strong>{data.r1t}</strong> <span dangerouslySetInnerHTML={{__html: data.r1d}} /></li>
              <li><strong>{data.r2t}</strong> {data.r2d}</li>
              <li><strong>{data.r3t}</strong> {data.r3d}</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-center mb-3 text-xs font-bold text-gray-500">{data.footer}</p>
              <button onClick={() => setView(AppView.ETHICS)} className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white p-3 rounded-xl shadow-md font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                {data.btn}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-teal-50 rounded-xl shadow-inner border border-teal-100 overflow-y-auto">
      <div className="bg-white p-4 border-b border-teal-100 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <BookOpen className="text-teal-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">{t.learn.title}</h2>
            <p className="text-xs text-gray-500">{t.learn.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4 pb-20">
        {chapters.map((chapter) => (
          <div 
            key={chapter.id} 
            className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
              expandedId === chapter.id ? 'border-teal-300 shadow-md ring-2 ring-teal-50' : 'border-gray-100 shadow-sm'
            }`}
          >
            <button 
              onClick={() => toggleChapter(chapter.id)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${chapter.bg} rounded-full flex items-center justify-center shrink-0`}>
                  <chapter.icon className={chapter.color} size={20} />
                </div>
                <h3 className={`font-bold ${expandedId === chapter.id ? 'text-teal-700' : 'text-gray-700'}`}>
                  {chapter.title}
                </h3>
              </div>
              {expandedId === chapter.id ? (
                <ChevronUp className="text-gray-400" />
              ) : (
                <ChevronDown className="text-gray-400" />
              )}
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                expandedId === chapter.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 pt-0 border-t border-gray-50 bg-white">
                <div className="mt-4 animate-fade-in">
                  {renderContent(chapter)}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg mt-6">
          <h3 className="font-bold text-lg mb-2">{t.learn.finish_alert_title}</h3>
          <p className="text-sm opacity-90 leading-relaxed">
            {t.learn.finish_alert_desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningModule;