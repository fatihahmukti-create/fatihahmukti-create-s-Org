"use client";
import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  async function kirim() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResult(data.result);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>AI App</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Tulis pertanyaan..."
        rows={5}
        style={{ width: "100%" }}
      />

      <br /><br />

      <button onClick={kirim}>Kirim</button>

      <p>{result}</p>
    </div>
  );
}
