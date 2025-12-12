import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// API KEY DARI USER
const HARDCODED_KEY = "AIzaSyAv5nNnbGyKj_7wNNJTlooO1utZLFxxm_k";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      // Menanam API Key langsung ke dalam kode saat Build
      // Ini menjamin key terbaca di Vercel tanpa perlu setting Dashboard
      'process.env.API_KEY': JSON.stringify(HARDCODED_KEY),
      
      // Mencegah crash jika library lain memanggil process
      'process.env': {}
    }
  };
});