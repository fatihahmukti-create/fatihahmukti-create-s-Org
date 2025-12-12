import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// API KEY GEMINI (Untuk Otak AI)
// Pastikan ini adalah key AIzaSyAv5nNnbGyKj_7wNNJTlooO1utZLFxxm_k
const HARDCODED_KEY = "AIzaSyAv5nNnbGyKj_7wNNJTlooO1utZLFxxm_k";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      // Menanam API Key langsung ke dalam kode saat Build
      // Vite akan mengganti 'process.env.API_KEY' dengan string kunci di atas secara literal
      'process.env.API_KEY': JSON.stringify(HARDCODED_KEY),
      
      // Mencegah crash jika library lain memanggil object process
      'process.env': {}
    }
  };
});