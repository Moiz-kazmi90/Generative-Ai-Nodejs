import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const resp = await ai.models.generateContent({
      model: "gemini-2.0-flash-001", // sahi model name dekh lo docs mein
      contents: "Explain recursion simply.",
    });
    console.log("Response:", resp.text);
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
