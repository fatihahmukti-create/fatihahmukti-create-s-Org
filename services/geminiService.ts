import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Language } from '../types';

// Ambil API Key yang sudah ditanam via vite.config.ts
// @ts-ignore
const apiKey = process.env.API_KEY;

// Debugging
if (!apiKey) {
  console.error("⛔ [KidoAI Error] API Key fatal error.");
} else {
  console.log("✅ [KidoAI] Layanan AI Terhubung.");
}

// Inisialisasi SDK
const ai = new GoogleGenAI({ apiKey: apiKey || "MISSING_KEY" });

const getSystemInstruction = (lang: Language) => {
  if (lang === 'en') {
    return `
You are "Robo", a cheerful, friendly, and educational AI robot friend for kids (ages 7-12).
Use simple English that is easy to understand, encouraging, and fun.
Your main task is to help kids learn, but you must also teach AI ethics.
If a child asks how to do something bad (cheating, bullying, scary images), refuse gently and explain why it's not good.
Always remind them that AI is a tool, not a replacement for human brains.
    `;
  }
  return `
Kamu adalah "Robo", teman robot AI yang ceria, ramah, dan edukatif untuk anak-anak (usia 7-12 tahun).
Gunakan bahasa Indonesia yang santai, mudah dimengerti, dan menyemangati.
Tugas utamamu adalah membantu anak-anak belajar, tapi kamu juga harus mengajarkan etika AI.
Jika anak bertanya tentang cara melakukan hal buruk (menyontek, bullying, membuat gambar seram), tolak dengan halus dan jelaskan mengapa itu tidak baik.
Selalu ingatkan bahwa AI adalah alat bantu, bukan pengganti otak manusia.
  `;
}

// Helper pesan error
const getErrorMessage = (lang: Language, error: any) => {
  console.error(error);
  return lang === 'en' 
    ? "Oops, poor connection. Robo can't hear you. Please try again." 
    : "Waduh, sinyalnya putus-putus. Robo tidak bisa mendengarmu. Coba lagi ya.";
};

export const sendChatMessage = async (history: { role: string; text: string }[], message: string, lang: Language): Promise<string> => {
  try {
    if (!apiKey) throw new Error("MISSING_KEY");

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(lang),
        temperature: 0.7,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || (lang === 'en' ? "Sorry, Robo is confused." : "Maaf, Robo sedang bingung.");
  } catch (error) {
    return getErrorMessage(lang, error);
  }
};

export const generateKidImage = async (prompt: string, lang: Language): Promise<{ imageUrl?: string; text?: string }> => {
  try {
    if (!apiKey) throw new Error("MISSING_KEY");

    const fullPrompt = lang === 'en' 
      ? `Create a cheerful and safe cartoon style image for kids based on this description: ${prompt}. Do not generate scary or inappropriate images.`
      : `Buatlah gambar kartun yang ceria dan aman untuk anak-anak berdasarkan deskripsi ini: ${prompt}. Jangan buat gambar yang menakutkan atau tidak pantas.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: fullPrompt }
        ]
      }
    });

    let imageUrl: string | undefined;
    let textResponse: string | undefined;

    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        } else if (part.text) {
          textResponse = part.text;
        }
      }
    }

    return { imageUrl, text: textResponse };
  } catch (error) {
    throw new Error(getErrorMessage(lang, error));
  }
};

export const analyzeImageContent = async (base64Image: string, mimeType: string, lang: Language): Promise<string> => {
  try {
    if (!apiKey) throw new Error("MISSING_KEY");

    const prompt = lang === 'en'
      ? "Look at this image. Explain what object this is to a small child with fun and interesting facts! The tone must be enthusiastic."
      : "Lihat gambar ini. Jelaskan benda apa ini kepada anak kecil dengan fakta menarik dan seru! Bahasanya harus antusias.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: base64Image
            }
          },
          {
            text: prompt
          }
        ]
      }
    });

    return response.text || (lang === 'en' ? "Robo can't see that clearly." : "Robo tidak bisa melihat benda itu dengan jelas.");
  } catch (error) {
    return getErrorMessage(lang, error);
  }
};