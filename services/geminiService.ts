import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProductRecommendation = async (userQuery: string): Promise<{ text: string; recommendedProductId?: string }> => {
  try {
    const productContext = PRODUCTS.map(p => 
      `ID: ${p.id}, Name: ${p.name}, Category: ${p.category}, Price: $${p.price}, Specs: ${p.specs.join(', ')}, Tagline: ${p.tagline}`
    ).join('\n');

    const systemPrompt = `
      You are Nusyn's expert sales assistant. We sell high-end, rugged mobile storage and PC docks.
      Brand Tone: Professional, reliable, adventurous (like Jackery meets Anker).
      
      Your Goal: Recommend the BEST product from the list below based on the user's need.
      
      Rules:
      1. Analyze the user's request.
      2. Select one specific product ID from the catalog if appropriate.
      3. Explain why you chose it in 2-3 sentences.
      4. If no product fits perfectly, give general advice on what to look for but suggest the closest match.
      5. Return your answer in JSON format ONLY.
      
      Product Catalog:
      ${productContext}
      
      Response Schema (JSON):
      {
        "message": "Your conversational response here...",
        "productId": "id-of-product-or-null"
      }
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json'
      }
    });

    const responseText = response.text;
    if (!responseText) throw new Error("No response from AI");

    const parsed = JSON.parse(responseText);
    return {
      text: parsed.message,
      recommendedProductId: parsed.productId === 'null' ? undefined : parsed.productId
    };

  } catch (error) {
    console.error("AI Error:", error);
    return {
      text: "I'm having trouble connecting to the Nusyn network right now. Please browse our catalog below!",
    };
  }
};