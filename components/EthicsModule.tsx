import React, { useState, useEffect } from 'react';
import { ShieldCheck, CheckCircle, XCircle, RefreshCw, Lock, Star, Play, Map, ArrowRight, ThumbsUp, ThumbsDown } from 'lucide-react';
import { getEthicsLevels } from '../utils/translations';
import { Language, EthicsLevel, QuizQuestion } from '../types';

interface EthicsModuleProps {
  language: Language;
  t: any;
}

const EthicsModule: React.FC<EthicsModuleProps> = ({ language, t }) => {
  const LEVELS = getEthicsLevels(language);
  
  // State
  const [unlockedLevelIds, setUnlockedLevelIds] = useState<number[]>([1]);
  const [activeLevel, setActiveLevel] = useState<EthicsLevel | null>(null);
  const [gameStatus, setGameStatus] = useState<'MAP' | 'PLAYING' | 'RESULT'>('MAP');
  
  // Gameplay State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Load unlocked levels from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('kido_ethics_progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          // Merge with default [1] to ensure level 1 is always open
          const uniqueIds = Array.from(new Set([...parsed, 1]));
          setUnlockedLevelIds(uniqueIds);
        }
      } catch (e) {
        console.error("Failed to load progress", e);
      }
    }
  }, []);

  const saveProgress = (newId: number) => {
    const newUnlocked = Array.from(new Set([...unlockedLevelIds, newId]));
    setUnlockedLevelIds(newUnlocked);
    localStorage.setItem('kido_ethics_progress', JSON.stringify(newUnlocked));
  };

  const startLevel = (level: EthicsLevel) => {
    setActiveLevel(level);
    setGameStatus('PLAYING');
    setCurrentQIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleAnswer = (idx: number) => {
    if (showExplanation || !activeLevel) return;
    
    setSelectedOption(idx);
    setShowExplanation(true);
    
    const isCorrect = idx === activeLevel.questions[currentQIndex].correctAnswer;
    if (isCorrect) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (!activeLevel) return;

    if (currentQIndex < activeLevel.questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setGameStatus('RESULT');
      // Unlock next level if score is sufficient
      if (score >= activeLevel.minScoreToUnlock) {
        const nextId = activeLevel.id + 1;
        if (LEVELS.find(l => l.id === nextId)) {
          saveProgress(nextId);
        }
      }
    }
  };

  const backToMap = () => {
    setGameStatus('MAP');
    setActiveLevel(null);
  };

  // --- RENDERERS ---

  const renderMap = () => (
    <div className="p-6 flex flex-col items-center gap-6">
       <div className="text-center mb-4">
         <h2 className="text-2xl font-black text-slate-800">{t.ethics.title}</h2>
         <p className="text-slate-500">{t.ethics.subtitle}</p>
       </div>

       <div className="flex flex-col gap-4 w-full max-w-md relative">
          {/* Vertical connection line */}
          <div className="absolute left-8 top-8 bottom-8 w-1 bg-slate-200 -z-0"></div>

          {LEVELS.map((level) => {
            const isUnlocked = unlockedLevelIds.includes(level.id);
            const isCompleted = unlockedLevelIds.includes(level.id + 1) || (isUnlocked && unlockedLevelIds.length > level.id); // Simple logic for 'completed' visual

            return (
              <button
                key={level.id}
                onClick={() => isUnlocked && startLevel(level)}
                disabled={!isUnlocked}
                className={`relative z-10 flex items-center gap-4 p-4 rounded-2xl border-b-4 transition-all w-full text-left
                  ${isUnlocked 
                    ? 'bg-white border-slate-200 hover:border-blue-300 hover:translate-y-1 hover:shadow-md cursor-pointer shadow-sm' 
                    : 'bg-slate-100 border-slate-200 opacity-70 cursor-not-allowed grayscale'
                  }
                `}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm
                   ${isUnlocked ? 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white' : 'bg-slate-300 text-slate-500'}
                `}>
                   {isUnlocked ? <level.icon size={32} /> : <Lock size={32} />}
                </div>
                
                <div className="flex-1">
                   <div className="flex justify-between items-center mb-1">
                     <span className={`text-xs font-bold uppercase tracking-wider ${isUnlocked ? 'text-blue-500' : 'text-slate-400'}`}>
                       {t.ethics.level} {level.id}
                     </span>
                     {isUnlocked && (
                       <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                         <Star size={10} fill="currentColor" /> {level.questions.length} XP
                       </span>
                     )}
                   </div>
                   <h3 className="font-bold text-slate-800 leading-tight mb-1">{level.title}</h3>
                   <p className="text-xs text-slate-500 line-clamp-2">{level.description}</p>
                </div>

                {isUnlocked && (
                  <div className="bg-blue-50 p-2 rounded-full text-blue-500">
                    <Play size={20} fill="currentColor" />
                  </div>
                )}
              </button>
            );
          })}
       </div>
    </div>
  );

  const renderGame = () => {
    if (!activeLevel) return null;
    const q = activeLevel.questions[currentQIndex];
    const progress = ((currentQIndex) / activeLevel.questions.length) * 100;

    return (
      <div className="flex flex-col h-full bg-white relative">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
           <button onClick={backToMap} className="p-2 hover:bg-slate-200 rounded-lg text-slate-500">
             <Map size={20} />
           </button>
           <div className="flex flex-col items-center w-full max-w-xs px-4">
             <div className="flex justify-between w-full text-[10px] font-bold text-slate-400 uppercase mb-1">
               <span>{t.ethics.question_counter} {currentQIndex + 1}</span>
               <span>{activeLevel.questions.length}</span>
             </div>
             <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
               <div className="h-full bg-blue-500 transition-all duration-500" style={{width: `${progress}%`}}></div>
             </div>
           </div>
           <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700 font-bold text-sm flex items-center gap-1 min-w-[3rem] justify-center">
             <Star size={14} fill="currentColor" /> {score}
           </div>
        </div>

        {/* Question Area */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col items-center max-w-2xl mx-auto w-full">
           
           {/* Illustration Image */}
           {q.image && (
             <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden shadow-md mb-6 bg-slate-100 shrink-0">
               <img 
                 src={q.image} 
                 alt="Question Illustration" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
           )}

           <div className="mb-6 w-full text-center">
             <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold mb-3 uppercase tracking-wide">
               {activeLevel.type === 'SORTING' ? 'Game Mode' : 'Quiz Mode'}
             </span>
             <h3 className="text-xl md:text-2xl font-black text-slate-800 leading-tight">
               {q.question}
             </h3>
             {activeLevel.type === 'SORTING' && (
               <p className="text-sm text-slate-500 mt-2">{t.ethics.game_sorting_desc}</p>
             )}
           </div>

           {/* Game Board */}
           <div className="w-full flex-1 flex flex-col justify-start gap-4">
              
              {activeLevel.type === 'SORTING' ? (
                // SORTING UI (2 Big Buttons)
                <div className="grid grid-cols-2 gap-4 h-40 md:h-48">
                   {q.options.map((opt, idx) => (
                     <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={showExplanation}
                        className={`rounded-3xl border-b-8 font-black text-lg md:text-2xl transition-all flex flex-col items-center justify-center gap-2
                          ${showExplanation 
                             ? (idx === q.correctAnswer 
                                ? 'bg-green-500 border-green-700 text-white scale-105' 
                                : idx === selectedOption 
                                   ? 'bg-red-500 border-red-700 text-white opacity-50' 
                                   : 'bg-slate-100 border-slate-300 text-slate-300 opacity-20')
                             : (idx === 0 
                                ? 'bg-blue-100 border-blue-300 text-blue-600 hover:bg-blue-200 hover:border-blue-400 active:border-b-0 active:translate-y-2' 
                                : 'bg-orange-100 border-orange-300 text-orange-600 hover:bg-orange-200 hover:border-orange-400 active:border-b-0 active:translate-y-2')
                          }
                        `}
                     >
                       {idx === 0 ? <ThumbsUp size={32} /> : <ThumbsDown size={32} />}
                       {opt}
                     </button>
                   ))}
                </div>
              ) : (
                // QUIZ UI (List Buttons)
                <div className="space-y-3">
                  {q.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      disabled={showExplanation}
                      className={`w-full p-4 rounded-xl text-left text-sm font-bold transition-all border-2 flex items-center gap-3
                        ${showExplanation 
                          ? (idx === q.correctAnswer 
                             ? 'bg-green-100 border-green-500 text-green-800' 
                             : idx === selectedOption 
                                ? 'bg-red-100 border-red-500 text-red-800' 
                                : 'bg-white border-slate-100 text-slate-300')
                          : 'bg-white border-slate-100 text-slate-600 hover:border-blue-300 hover:bg-blue-50 shadow-sm'
                        }
                      `}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border-2 shrink-0
                         ${showExplanation && idx === q.correctAnswer ? 'border-green-500 bg-green-500 text-white' : 
                           showExplanation && idx === selectedOption ? 'border-red-500 bg-red-500 text-white' : 'border-slate-200 text-slate-400'}
                      `}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      {opt}
                    </button>
                  ))}
                </div>
              )}

           </div>

           {/* Feedback Area */}
           {showExplanation && (
             <div className="mt-6 w-full animate-fade-in-up pb-6">
                <div className={`p-4 rounded-2xl border-l-4 mb-4 ${selectedOption === q.correctAnswer ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                   <div className="flex items-center gap-2 mb-2">
                     {selectedOption === q.correctAnswer ? <CheckCircle className="text-green-600" size={20} /> : <XCircle className="text-red-600" size={20} />}
                     <span className={`font-bold ${selectedOption === q.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
                       {selectedOption === q.correctAnswer ? t.ethics.correct : t.ethics.incorrect}
                     </span>
                   </div>
                   <p className="text-sm text-slate-600 leading-relaxed">{q.explanation}</p>
                </div>
                <button 
                  onClick={nextQuestion}
                  className="w-full bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-slate-700 active:scale-95 transition flex items-center justify-center gap-2"
                >
                  {t.ethics.btn_next} <ArrowRight size={18} />
                </button>
             </div>
           )}

        </div>
      </div>
    );
  };

  const renderResult = () => {
    if (!activeLevel) return null;
    const isPassed = score >= activeLevel.minScoreToUnlock;
    const percent = Math.round((score / activeLevel.questions.length) * 100);

    return (
      <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6 items-center justify-center text-center overflow-y-auto">
         <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm border border-white/50 relative overflow-hidden">
            {/* Confetti or Fail bg */}
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${isPassed ? 'from-green-400 to-emerald-500' : 'from-red-400 to-orange-500'}`}></div>

            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ring-8 ring-opacity-20 ${isPassed ? 'bg-green-100 ring-green-500' : 'bg-red-100 ring-red-500'}`}>
              {isPassed ? <ShieldCheck size={48} className="text-green-500" /> : <RefreshCw size={48} className="text-red-500" />}
            </div>

            <h2 className="text-2xl font-black text-slate-800 mb-2">{isPassed ? t.ethics.finish_title : t.ethics.incorrect}</h2>
            <p className="text-slate-500 text-sm mb-6">{isPassed ? "Level completed! You are awesome." : "Don't give up! Let's try again."}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Score</p>
                  <p className={`text-2xl font-black ${isPassed ? 'text-green-600' : 'text-red-600'}`}>{percent}%</p>
               </div>
               <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Correct</p>
                  <p className="text-2xl font-black text-slate-700">{score}/{activeLevel.questions.length}</p>
               </div>
            </div>

            {!isPassed && (
               <div className="bg-orange-50 text-orange-800 text-xs p-3 rounded-xl mb-6 border border-orange-100">
                  {t.ethics.min_score} <strong>{activeLevel.minScoreToUnlock}</strong> {t.ethics.to_unlock}
               </div>
            )}

            <div className="space-y-3">
               {isPassed && unlockedLevelIds.includes(activeLevel.id + 1) ? (
                 <button 
                   onClick={() => {
                      const nextLevel = LEVELS.find(l => l.id === activeLevel.id + 1);
                      if (nextLevel) startLevel(nextLevel);
                      else backToMap();
                   }}
                   className="w-full bg-green-500 text-white py-3 rounded-xl font-bold shadow-md hover:bg-green-600 active:scale-95 transition"
                 >
                   {t.ethics.btn_next}
                 </button>
               ) : (
                 <button 
                   onClick={() => startLevel(activeLevel)}
                   className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold shadow-md hover:bg-slate-700 active:scale-95 transition"
                 >
                   {t.ethics.btn_retry}
                 </button>
               )}
               
               <button 
                 onClick={backToMap}
                 className="w-full bg-white text-slate-600 py-3 rounded-xl font-bold border-2 border-slate-100 hover:bg-slate-50 transition"
               >
                 {t.ethics.btn_home}
               </button>
            </div>
         </div>
      </div>
    );
  };

  return (
    <div className="h-full bg-slate-50 rounded-xl shadow-inner border border-slate-200 overflow-hidden">
      {gameStatus === 'MAP' && renderMap()}
      {gameStatus === 'PLAYING' && renderGame()}
      {gameStatus === 'RESULT' && renderResult()}
    </div>
  );
};

export default EthicsModule;