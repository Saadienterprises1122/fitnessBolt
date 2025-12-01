import { GoogleGenerativeAI } from '@google/generative-ai';
import type { AIWorkoutRequest } from '../types';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

// Initialize Gemini API
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

const generatePrompt = (request: AIWorkoutRequest) => `
  You are an elite fitness coach. Create a custom workout plan based on these details:
  - Goal: ${request.goal}
  - Level: ${request.level}
  - Duration: ${request.duration} minutes

  INSTRUCTIONS:
  1. Create a high-energy, effective workout.
  2. Keep explanations minimal. Focus on the exercises.
  3. Format strictly as requested below.

  FORMATTING RULES:
  - Do NOT use hashtags (#) or bullet points (* or -).
  - Use **Bold** for section titles.
  - Add a blank line after each section title.
  - List exercises on separate lines.

  REQUIRED STRUCTURE:
  **Workout Name** (High energy title)

  **Warm-Up**
  Exercise 1 (Duration)
  Exercise 2 (Duration)

  **Main Workout**
  Exercise 1 (Duration/Reps)
  Exercise 2 (Duration/Reps)
  Rest Reminder

  **Cool-Down**
  Stretch 1
  Stretch 2

  **Motivation**
  Short, punchy closing sentence.
`;

const generateWithOpenRouter = async (prompt: string): Promise<string> => {
  if (!OPENROUTER_API_KEY) throw new Error("OpenRouter API Key missing");

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.origin,
      "X-Title": "Bolt Fitness",
    },
    body: JSON.stringify({
      "model": "deepseek/deepseek-r1",
      "messages": [
        { "role": "user", "content": prompt }
      ]
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`Status ${response.status}: ${JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "";
};

const generateWithGemini = async (prompt: string): Promise<string> => {
  if (!genAI) throw new Error("Gemini API Key missing");

  // Using gemini-1.5-flash-001 as fallback
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-001' });
  const result = await model.generateContent(prompt);
  return result.response.text();
};

export const generateWorkoutPlan = async (request: AIWorkoutRequest): Promise<string> => {
  const prompt = generatePrompt(request);
  let errors: string[] = [];

  // 1. Try OpenRouter (DeepSeek R1)
  try {
    // Only attempt if key is present, otherwise skip to fallback
    if (OPENROUTER_API_KEY) {
      console.log("Attempting generation with OpenRouter (DeepSeek R1)...");
      const result = await generateWithOpenRouter(prompt);
      if (result) return result;
    } else {
      errors.push("OpenRouter Key missing");
    }
  } catch (error: any) {
    console.warn("OpenRouter failed, falling back to Gemini:", error);
    errors.push(`OpenRouter: ${error.message}`);
  }

  // 2. Fallback to Gemini
  try {
    console.log("Attempting generation with Gemini...");
    const result = await generateWithGemini(prompt);
    if (result) return result;
  } catch (error: any) {
    console.error("Gemini failed:", error);
    errors.push(`Gemini: ${error.message}`);
  }

  return `Failed to generate workout. \n\nDetails:\n${errors.join("\n")}`;
};
