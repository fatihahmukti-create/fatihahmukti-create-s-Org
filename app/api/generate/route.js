import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  const { prompt } = await req.json();

  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: prompt,
  });

  return new Response(
    JSON.stringify({ result: response.text }),
    { headers: { "Content-Type": "application/json" } }
  );
}
