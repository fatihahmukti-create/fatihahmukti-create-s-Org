import React, { useState, useEffect } from 'react';
import { signInWithGoogle } from '../services/firebase';
import { Sparkles, Brain, ArrowRight, AlertCircle, Copy, Info, UserPlus, LogIn } from 'lucide-react';

const LoginView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [domainToAuth, setDomainToAuth] = useState('');
  const [currentDomain, setCurrentDomain] = useState('');
  
  // State to toggle between Login and Register view text
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    // Get current domain for setup assistance with fallback
    const host = window.location.hostname || window.location.host || 'localhost';
    setCurrentDomain(host);
  }, []);

  const handleLogin = async () => {
    console.log("Login button clicked");
    if (isLoading) return;
    
    setIsLoading(true);
    setError('');
    setDomainToAuth('');
    
    try {
      await signInWithGoogle();
      // Auth state change will be handled in App.tsx
    } catch (err: any) {
      console.error("Login Error UI:", err);
      let errorMessage = 'Gagal masuk. Coba lagi ya!';
      
      // Handle specific Firebase errors
      if (err?.code === 'auth/unauthorized-domain') {
        // Try harder to get the domain
        const hostname = window.location.hostname || window.location.host;
        
        if (hostname) {
          setDomainToAuth(hostname);
          errorMessage = `Domain "${hostname}" belum terdaftar. Tambahkan domain ini di Firebase Console.`;
        } else {
          errorMessage = "Domain tidak terdeteksi. Mohon cek URL di browser Anda dan tambahkan ke Firebase.";
        }
      } else if (err?.code === 'auth/popup-closed-by-user') {
        errorMessage = 'Yah, loginnya dibatalkan. Ayo coba lagi!';
      } else if (err?.code === 'auth/popup-blocked') {
        errorMessage = 'Popup login terblokir browser. Izinkan popup untuk situs ini ya.';
      } else if (err?.message) {
        errorMessage = `Error: ${err.message}`;
      }

      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-sans overflow-y-auto">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-white/50 relative z-10">
        {/* Decorative Background Elements */}
        <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b transition-colors duration-500 ${isRegistering ? 'from-purple-400 to-pink-500' : 'from-blue-400 to-indigo-500'} z-0`}></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-white/20 rounded-full blur-xl z-0"></div>
        
        <div className="relative z-10 pt-12 pb-8 px-8 flex flex-col items-center text-center">
          {/* Logo / Icon */}
          <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 ring-4 ring-blue-100 transition-transform duration-300 hover:scale-105">
             <Brain size={48} className={isRegistering ? "text-purple-500" : "text-blue-500"} />
          </div>

          <h1 className="text-3xl font-black text-slate-800 mb-2 tracking-tight transition-all">
            {isRegistering ? 'Yuk Daftar!' : 'KidoAI'}
          </h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            {isRegistering 
              ? 'Buat akun barumu sekarang untuk mulai belajar AI yang seru!' 
              : 'Belajar AI jadi seru! Masuk dulu yuk untuk mulai petualanganmu.'}
          </p>

          <button
            onClick={handleLogin}
            disabled={isLoading}
            className={`w-full relative z-50 bg-white border-2 border-slate-100 text-slate-700 font-bold py-4 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 group cursor-pointer active:scale-95 ${isRegistering ? 'hover:border-purple-200 hover:bg-purple-50' : 'hover:border-blue-200 hover:bg-blue-50'}`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className={`w-5 h-5 border-2 border-t-transparent rounded-full animate-spin ${isRegistering ? 'border-purple-500' : 'border-blue-500'}`}></div>
                <span className="text-slate-400">Menghubungkan...</span>
              </div>
            ) : (
              <>
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-6 h-6" />
                <span>{isRegistering ? 'Daftar dengan Google' : 'Masuk dengan Google'}</span>
                <ArrowRight size={18} className={`text-slate-400 transition-all group-hover:translate-x-1 ${isRegistering ? 'group-hover:text-purple-500' : 'group-hover:text-blue-500'}`} />
              </>
            )}
          </button>
          
          {/* Toggle Login/Register Mode */}
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-2 px-4 rounded-full border border-slate-100">
            <span>{isRegistering ? 'Sudah punya akun?' : 'Belum punya akun?'}</span>
            <button 
              onClick={() => {
                setIsRegistering(!isRegistering);
                setError(''); // Clear error when switching modes
              }}
              className={`font-bold hover:underline flex items-center gap-1 ${isRegistering ? 'text-purple-600' : 'text-blue-600'}`}
            >
              {isRegistering ? 'Masuk' : 'Daftar'}
            </button>
          </div>
          
          {error && (
            <div className="mt-4 flex flex-col gap-2 w-full">
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2 text-left w-full">
                <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                <p className="text-xs text-red-600 font-medium break-words">
                  {error}
                </p>
              </div>

              {domainToAuth ? (
                 <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-left">
                   <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Copy domain ini untuk Firebase:</p>
                   <div className="flex items-center justify-between gap-2 bg-white p-2 rounded-lg border border-slate-200">
                     <code className="text-xs font-mono text-slate-700 break-all">{domainToAuth}</code>
                     <button 
                       onClick={() => navigator.clipboard.writeText(domainToAuth)}
                       className="text-blue-500 hover:text-blue-700 p-1"
                       title="Copy"
                     >
                       <Copy size={14} />
                     </button>
                   </div>
                   <p className="text-[10px] text-slate-400 mt-2">
                     Buka: Firebase Console {'>'} Auth {'>'} Settings {'>'} Authorized Domains
                   </p>
                 </div>
              ) : (
                // Fallback display if detection fails completely
                error.includes('Domain tidak terdeteksi') && (
                  <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-left">
                    <p className="text-[10px] text-slate-500">
                      <strong>Cara Manual:</strong> Lihat alamat URL di bagian atas browser Anda (contoh: <code>8080-idx-xxx.cluster.app</code>), copy alamat tersebut (tanpa https://), dan masukkan ke Firebase Console.
                    </p>
                  </div>
                )
              )}
            </div>
          )}

          {/* Setup Helper - Only shown if no error yet to help with initial setup */}
          {!error && currentDomain && !domainToAuth && (
             <div className="mt-6 p-3 bg-blue-50/50 border border-blue-100 rounded-xl text-left w-full">
               <div className="flex items-center gap-2 mb-2">
                 <Info size={14} className="text-blue-500" />
                 <p className="text-[10px] font-bold text-blue-600 uppercase">Developer Info</p>
               </div>
               <p className="text-[10px] text-slate-500 mb-1">Jika login gagal, pastikan domain ini sudah ada di Firebase:</p>
               <div className="flex items-center justify-between gap-2 bg-white/60 p-1.5 rounded-lg border border-blue-100">
                 <code className="text-[10px] font-mono text-slate-600 truncate">{currentDomain}</code>
                 <button 
                   onClick={() => navigator.clipboard.writeText(currentDomain)}
                   className="text-blue-400 hover:text-blue-600"
                   title="Copy Domain"
                 >
                   <Copy size={12} />
                 </button>
               </div>
             </div>
          )}

          <div className="mt-6 pt-6 border-t border-slate-100 w-full">
            <div className="flex justify-center gap-2 text-xs text-slate-400 uppercase font-bold tracking-widest">
              <span className="flex items-center gap-1"><Sparkles size={10} /> Aman</span>
              <span>•</span>
              <span>Edukatif</span>
              <span>•</span>
              <span>Seru</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;