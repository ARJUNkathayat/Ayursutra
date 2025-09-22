import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

// Initialize with environment variable
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

async function main(symptoms: string, age: string, gender: string) {
  const therapyList = [
  "Abhyanga", "Shirodhara", "Udvartana", "Nasya", "Karna Purana", "Akshi Tarpana",
  "Kati Basti", "Greeva Basti", "Janu Basti", "Pizhichil", "Elakizhi", "Podikizhi",
  "Njavara Kizhi", "Vamana", "Virechana", "Raktamokshana", "Basti", "Marma Therapy",
  "Lepana", "Dhanyamla Dhara"
];
  const prompt = `
  You are an experienced Ayurvedic Panchakarma doctor.
  Patient Details:
  - Age: ${age}
  - Gender: ${gender}
  - Symptoms: ${symptoms}
  
 -
  Based on Ayurvedic principles, provide a patient assessment and recommend 2-3 relevant Panchakarma therapies.
  
  IMPORTANT: 
  1. You must ONLY recommend therapies from this exact list: ${therapyList}
  2. Return ONLY a valid JSON object (no markdown, no code blocks, no extra text):
  {
    "patientSummary": "detailed patient assessment here",
    "recommendedTherapies": [
      {
        "name": "Therapy Name 1"
      },
      {
        "name": "Therapy Name 2"
      }
    ]
  }
  `;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  
  return response.text;
}

// Function to clean and parse AI response
function parseAIResponse(rawResponse: string) {
  try {
    // Remove markdown code blocks if present
    let cleanedResponse = rawResponse;
    
    // Remove `````` if present
    cleanedResponse = cleanedResponse.replace(/```json/g, "");
    cleanedResponse = cleanedResponse.replace(/```\s*/g, '');
    
    // Trim whitespace
    cleanedResponse = cleanedResponse.trim();
    
    // Parse JSON
    const parsed = JSON.parse(cleanedResponse);
    
    // Validate structure
    if (!parsed.patientSummary || !Array.isArray(parsed.recommendedTherapies)) {
      throw new Error("Invalid response structure");
    }
    
    return parsed;
  } catch (error) {
    throw new Error(`Failed to parse AI response: ${error.message}`);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { symptoms, age, gender } = body;
    
    if (!symptoms || !age || !gender) {
      return NextResponse.json(
        { error: "symptoms, age and gender are required" },
        { status: 400 }
      );
    }

    const rawResult = await main(symptoms, age, gender);
    
    // Parse and clean the AI response
    const result = parseAIResponse(rawResult);
    
    // Return the clean JSON object directly
    return NextResponse.json(result);
    
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
