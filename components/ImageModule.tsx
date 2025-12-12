import React, { useState } from 'react';
import { generateKidImage } from '../services/geminiService';
import { ImageIcon, Wand2, RefreshCw, Download } from 'lucide-react';
import { Language } from '../types';

interface ImageModuleProps {
  language: Language;
  t: any;
}

const ImageModule: React.FC<ImageModuleProps> = ({ language, t }) => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<{ imageUrl?: string; text?: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateKidImage(prompt, language);
      setResult(data);
    } catch (err) {
      setError(language === 'en' ? 'Oh no, failed to make image. Try other words!' : 'Yah, gagal membuat gambar. Coba kata lain ya!');
    } finally {
      setLoading(false);
    }
  };

  const suggestions = t.image.suggestions;

  return (
    <div className="flex flex-col h-full bg-purple-50 rounded-xl shadow-inner border border-purple-100 overflow-y-auto">
      <div className="bg-white p-4 border-b border-purple-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Wand2 className="text-purple-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">{t.image.title}</h2>
            <p className="text-xs text-gray-500">{t.image.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col items-center">
        {/* Output Area */}
        <div className="w-full aspect-square bg-white rounded-2xl border-2 border-purple-100 flex items-center justify-center mb-6 shadow-sm overflow-hidden relative group">
          {loading ? (
             <div className="text-center p-4">
               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
               <p className="text-purple-500 animate-pulse">{t.image.loading_text}</p>
             </div>
          ) : result?.imageUrl ? (
            <>
              <img src={result.imageUrl} alt="AI Generated" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <a href={result.imageUrl} download="kido-ai-art.png" className="bg-white text-purple-600 p-2 rounded-full shadow-lg font-bold flex items-center gap-2 transform hover:scale-105 transition-transform">
                   <Download size={18} /> {t.image.save}
                 </a>
              </div>
            </>
          ) : result?.text ? (
             <p className="p-4 text-center text-gray-600">{result.text}</p>
          ) : (
            <div className="text-center text-gray-400 p-4">
              <ImageIcon size={48} className="mx-auto mb-2 opacity-50" />
              <p>{t.image.empty_state}</p>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="w-full bg-white p-4 rounded-2xl shadow-sm border border-purple-100">
          <label className="block text-sm font-bold text-gray-700 mb-2">{t.image.label}</label>
          <div className="flex gap-2 mb-4">
            <input 
              type="text" 
              className="flex-1 p-3 border-2 border-purple-100 rounded-xl focus:outline-none focus:border-purple-400"
              placeholder={t.image.placeholder}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !prompt}
              className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-xl transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? <RefreshCw className="animate-spin" /> : <Wand2 />}
            </button>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">{t.image.suggestions_title}</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s: string) => (
                <button 
                  key={s} 
                  onClick={() => setPrompt(s)}
                  className="bg-purple-50 text-purple-700 text-xs px-3 py-1.5 rounded-full hover:bg-purple-100 transition-colors border border-purple-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          
          {error && <p className="text-red-500 text-sm mt-3 text-center">{error}</p>}
        </div>
        
        <div className="mt-6 bg-yellow-50 border border-yellow-200 p-3 rounded-xl flex gap-3 items-start">
           <div className="bg-yellow-400 text-white rounded-full w-6 h-6 flex-shrink-0 flex items-center justify-center text-xs font-bold">!</div>
           <p className="text-xs text-yellow-800">
             <span className="font-bold">{t.image.ethics_warning}</span> {t.image.ethics_desc}
           </p>
        </div>
      </div>
    </div>
  );
};

export default ImageModule;
