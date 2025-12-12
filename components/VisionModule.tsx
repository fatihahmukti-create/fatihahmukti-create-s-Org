import React, { useState, useRef } from 'react';
import { analyzeImageContent } from '../services/geminiService';
import { Camera, Search, X } from 'lucide-react';
import { Language } from '../types';

interface VisionModuleProps {
  language: Language;
  t: any;
}

const VisionModule: React.FC<VisionModuleProps> = ({ language, t }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('');
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedImage(result);
        setMimeType(file.type);
        setAnalysis(''); // Reset previous analysis
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    setLoading(true);
    // Remove header data URI scheme for API
    const base64Data = selectedImage.split(',')[1];
    
    const result = await analyzeImageContent(base64Data, mimeType, language);
    setAnalysis(result);
    setLoading(false);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    setSelectedImage(null);
    setAnalysis('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="flex flex-col h-full bg-orange-50 rounded-xl shadow-inner border border-orange-100 overflow-y-auto">
      <div className="bg-white p-4 border-b border-orange-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
            <Search className="text-orange-600" />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">{t.vision.title}</h2>
            <p className="text-xs text-gray-500">{t.vision.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col items-center gap-4 flex-1">
        
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileSelect} 
          accept="image/*" 
          className="hidden" 
        />

        {!selectedImage ? (
           <div 
             onClick={triggerFileInput}
             className="w-full aspect-video bg-white border-2 border-dashed border-orange-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 transition-colors group"
           >
             <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
               <Camera className="text-orange-500 w-8 h-8" />
             </div>
             <p className="text-orange-800 font-bold">{t.vision.upload_text}</p>
             <p className="text-orange-400 text-xs mt-1">{t.vision.upload_sub}</p>
           </div>
        ) : (
          <div className="w-full relative rounded-2xl overflow-hidden shadow-md border-2 border-orange-200">
             <img src={selectedImage} alt="Preview" className="w-full h-auto max-h-64 object-cover" />
             <button 
               onClick={clearImage}
               className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-red-500 hover:bg-white shadow-sm"
             >
               <X size={16} />
             </button>
          </div>
        )}

        {selectedImage && !analysis && (
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl shadow-md hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                {t.vision.loading_text}
              </>
            ) : (
              <>
                <Search size={20} />
                {t.vision.btn_analyze}
              </>
            )}
          </button>
        )}

        {analysis && (
          <div className="bg-white p-4 rounded-2xl border border-orange-200 w-full shadow-sm animate-fade-in-up">
            <h3 className="font-bold text-orange-600 mb-2 flex items-center gap-2">
              <Search size={16} /> {t.vision.report_title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">{analysis}</p>
          </div>
        )}

        <div className="mt-auto bg-white p-3 rounded-xl border border-orange-100 text-xs text-gray-500 text-center w-full">
          {t.vision.disclaimer}
        </div>
      </div>
    </div>
  );
};

export default VisionModule;
