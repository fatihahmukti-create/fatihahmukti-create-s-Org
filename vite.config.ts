import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Cast process to any to avoid TS errors
  const env = loadEnv(mode, (process as any).cwd(), '');

  // STRATEGI PENCARIAN API KEY:
  // 1. Cek Environment Variable System (Vercel)
  // 2. Cek file .env lokal
  const apiKey = process.env.VITE_API_KEY || process.env.API_KEY || env.VITE_API_KEY || env.API_KEY;

  // Log status ke terminal saat build (supaya ketahuan di logs Vercel)
  console.log(`[Vite Build] API Key status: ${apiKey ? 'Found ✅' : 'Missing ❌'}`);

  return {
    plugins: [react()],
    define: {
      // 1. Mencegah error "process is not defined" di browser
      'process.env': {},
      
      // 2. Tanam API Key langsung ke dalam kode sebagai string
      // Ini akan mengganti semua 'process.env.API_KEY' di kode menjadi nilai asli "AIza..."
      'process.env.API_KEY': JSON.stringify(apiKey),
      
      // 3. Cadangan: Tanam juga ke import.meta.env.VITE_API_KEY (standar Vite)
      'import.meta.env.VITE_API_KEY': JSON.stringify(apiKey)
    }
  };
});