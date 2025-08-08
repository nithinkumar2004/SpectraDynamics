
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const getProductInfo = async (productName: string, question: string): Promise<string> => {
    try {
        const result = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `A customer is asking about our product: "${productName}". Their question is: "${question}". Please provide a clear and helpful answer.`,
            config: {
                 systemInstruction: "You are an expert AI assistant for Spectra Dynamics, a company that manufactures medical devices in India. Your tone should be professional, helpful, and reassuring. Provide concise, factual information. Do not make up medical claims. Format your response using basic markdown for readability (like bullet points or bold text).",
            }
        });

        return result.text;
    } catch (error) {
        console.error("Error fetching from Gemini API:", error);
        return "I'm sorry, I encountered an issue while retrieving the information. Please check your connection or try again later.";
    }
};
