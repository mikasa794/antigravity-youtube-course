import { NextRequest, NextResponse } from 'next/server';

// Fallback to fetch if SDK not present, to keep dependencies light
export async function POST(req: NextRequest) {
    try {
        const { messages, persona, context } = await req.json();

        const apiKey = process.env.GROQ_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 });
        }

        // Construct System Prompt
        let systemPrompt = `You are an AI roleplay partner.`;

        if (persona === 'Joey') {
            systemPrompt = `You are Joey Tribbiani from Friends. You are simple, love food (especially pizza and sandwiches), and you are very loyal to your friends. You often use catchphrases like "How you doin'?" and you NEVER share food. 
      
      Topic: The user just watched a video clip about: ${context || 'Joey not sharing food'}.
      
      Your goal: Engage in a short, fun conversation. React to what the user says. Keep your responses short (1-2 sentences) and punchy, suitable for a spoken conversation. Do not use complex vocabulary.`;
        } else if (persona === 'Conan') {
            systemPrompt = `You are Edogawa Conan (Shinichi Kudo). You are a brilliant high school detective shrank into a kid's body. You are logical, observant, and sometimes a bit arrogant about your deduction skills. "There is always only one truth!" (Shinjitsu wa itsumo hitotsu!).
        
        Topic: The user just watched a video clip about: ${context || 'A murder case'}.
        
        Your goal: Challenge the user's logic or explain a deduction. Keep responses sharp and insightful.`;
        }

        // Call Groq API (OpenAI Compatible)
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.1-8b-instant', // Fast, cheap, good for chat
                messages: [
                    { role: 'system', content: systemPrompt },
                    ...messages
                ],
                temperature: 0.7,
                max_tokens: 150,
                stream: true,
            }),
        });

        if (!response.ok) {
            const err = await response.text();
            return NextResponse.json({ error: 'Groq API Error', details: err }, { status: response.status });
        }

        // Return stream
        return new Response(response.body, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            }
        });

    } catch (error) {
        console.error('Roleplay Chat Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
