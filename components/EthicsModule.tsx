import React, { useState } from 'react';
import { ShieldCheck, CheckCircle, XCircle, RefreshCw } from 'lucide-react';
import { getEthicsQuestions } from '../utils/translations';
import { Language } from '../types';

interface EthicsModuleProps {
  language: Language;
  t: any;
}

const EthicsModule: React.FC<EthicsModuleProps> = ({ language, t }) => {
  const ETHICS_QUESTIONS = getEthicsQuestions(language);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = ETHICS_QUESTIONS[currentQuestionIdx];

  const handleAnswer = (idx: number) => {
    if (showResult) return;
    setSelectedOption(idx);
    setShowResult(true);
    if (idx === currentQ.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < ETHICS_QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="flex flex-col h-full bg-red-50 rounded-xl shadow-inner border border-red-100 p-6 items-center justify-center text-center">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg mb-6">
           <ShieldCheck size={48} className={score === ETHICS_QUESTIONS.length ? "text-green-500" : "text-yellow-500"} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.ethics.finish_title}</h2>
        <p className="text-gray-600 mb-6">{t.ethics.correct_count} <span className="font-bold text-red-500">{score}</span> {t.ethics.from} {ETHICS_QUESTIONS.length}.</p>
        
        {score === ETHICS_QUESTIONS.length ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-xl mb-6 text-sm">
            {t.ethics.perfect_msg}
          </div>
        ) : (
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl mb-6 text-sm">
            {t.ethics.good_msg}
          </div>
        )}

        <button 
          onClick={restartQuiz}
          className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition shadow-md flex items-center gap-2"
        >
          <RefreshCw size={20} /> {t.ethics.btn_retry}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-red-50 rounded-xl shadow-inner border border-red-100 overflow-y-auto">
      <div className="bg-white p-4 border-b border-red-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <ShieldCheck className="text-red-500" />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">{t.ethics.title}</h2>
            <p className="text-xs text-gray-500">{t.ethics.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="mb-4 flex justify-between items-center">
          <span className="text-xs font-bold text-red-400 uppercase">{t.ethics.question_counter} {currentQuestionIdx + 1} / {ETHICS_QUESTIONS.length}</span>
          <div className="h-2 flex-1 mx-4 bg-red-100 rounded-full">
            <div 
              className="h-full bg-red-500 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestionIdx + 1) / ETHICS_QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-6 leading-tight">
          {currentQ.question}
        </h3>

        <div className="space-y-3 mb-6">
          {currentQ.options.map((opt, idx) => {
            let btnClass = "w-full p-4 rounded-xl text-left text-sm font-medium transition-all border-2 ";
            
            if (showResult) {
              if (idx === currentQ.correctAnswer) {
                btnClass += "bg-green-100 border-green-400 text-green-800";
              } else if (idx === selectedOption) {
                btnClass += "bg-red-100 border-red-400 text-red-800";
              } else {
                btnClass += "bg-white border-transparent opacity-50";
              }
            } else {
              btnClass += "bg-white border-transparent shadow-sm hover:border-red-200 hover:bg-red-50 text-gray-700";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={showResult}
                className={btnClass}
              >
                <div className="flex items-center gap-3">
                   <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-[10px] font-bold shrink-0
                     ${showResult && idx === currentQ.correctAnswer ? 'border-green-500 bg-green-500 text-white' : 
                       showResult && idx === selectedOption ? 'border-red-500 bg-red-500 text-white' : 'border-gray-300 text-gray-400'
                     }
                   `}>
                     {String.fromCharCode(65 + idx)}
                   </div>
                   {opt}
                </div>
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mt-auto animate-fade-in-up">
            <div className={`p-4 rounded-xl border mb-4 flex gap-3 items-start ${selectedOption === currentQ.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
               {selectedOption === currentQ.correctAnswer ? 
                 <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} /> : 
                 <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
               }
               <div>
                 <p className={`font-bold text-sm mb-1 ${selectedOption === currentQ.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
                   {selectedOption === currentQ.correctAnswer ? t.ethics.correct : t.ethics.incorrect}
                 </p>
                 <p className="text-sm text-gray-600 leading-relaxed">{currentQ.explanation}</p>
               </div>
            </div>
            <button
              onClick={nextQuestion}
              className="w-full bg-gray-800 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-gray-700 transition"
            >
              {currentQuestionIdx < ETHICS_QUESTIONS.length - 1 ? t.ethics.btn_next : t.ethics.btn_result}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EthicsModule;
