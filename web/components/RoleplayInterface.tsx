import React, { useState, useEffect, useRef } from 'react';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { Mic, MicOff, X, Volume2, Cpu, RotateCcw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface RoleplayInterfaceProps {
    persona: 'Joey' | 'Conan';
    context: string;
    onClose: () => void;
}

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

export function RoleplayInterface({ persona, context, onClose }: RoleplayInterfaceProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // TTS State
    const [isSpeaking, setIsSpeaking] = useState(false);

    // STT Hook
    const {
        isListening,
        transcript,
        startListening,
        stopListening,
        resetTranscript,
        supported: sttSupported
    } = useSpeechRecognition({
        onResult: (result) => {
            // Optional: Real-time preview of what user is saying? 
        },
        onEnd: () => {
            // Auto-submit when recognition ends? Or wait for manual stop?
            // Native API often stops on silence. Let's wait for logic in handleStop.
        }
    });

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initial Greeting
    useEffect(() => {
        if (messages.length === 0) {
            const initialMsg = persona === 'Joey'
                ? "How you doin'? You gonna eat that?"
                : "The truth is always one! What did you observe?";
            setMessages([{ role: 'assistant', content: initialMsg }]);
            speak(initialMsg);
        }
    }, [persona]);

    // --- TTS Logic ---
    const speak = (text: string) => {
        if (typeof window === 'undefined') return;

        // Stop any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        // Select Voice
        const voices = window.speechSynthesis.getVoices();
        // Try to find a good English voice
        const voice = voices.find(v => v.name.includes('Google US English')) ||
            voices.find(v => v.lang.startsWith('en')) ||
            voices[0];

        if (voice) utterance.voice = voice;

        // Pitch/Rate adjustments for persona
        if (persona === 'Joey') {
            utterance.pitch = 0.9; // Lower
            utterance.rate = 0.9;  // Slower/Chill
        } else {
            utterance.pitch = 1.2; // Kid
            utterance.rate = 1.1;  // Fast
        }

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    };

    // --- Interaction Logic ---
    const handleToggleListen = () => {
        if (isListening) {
            stopListening();
            // On stop, if we have transcript, send it
            if (transcript.trim()) {
                handleSubmit(transcript);
            }
        } else {
            resetTranscript();
            startListening();
        }
    };

    // Handle manual Stop or Auto-stop logic fallout
    useEffect(() => {
        // If hook says listening stopped, and we have transcript, maybe user paused too long.
        // But native behavior is tricky. Let's rely on explicit toggle for submission mostly, 
        // or let user click "Send" if we added one. 
        // For "Push-to-Talk" vibe, user clicks Mic to start, clicks again to Send.
        // The handleToggleListen covers this.
    }, [isListening]);


    const handleSubmit = async (userText: string) => {
        if (!userText.trim()) return;

        // Add User Message
        const newHistory = [...messages, { role: 'user' as const, content: userText }];
        setMessages(newHistory);
        setIsProcessing(true);

        try {
            const response = await fetch('/api/chat/roleplay', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: newHistory,
                    persona,
                    context
                }),
            });

            if (!response.body) throw new Error("No stream");

            // Stream Reader
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let aiText = '';

            // Add Placeholder for AI
            setMessages(prev => [...prev, { role: 'assistant', content: '...' }]);

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value);
                // Groq/OpenAI format is SSE "data: {...}" usually.
                // But my API implementation might just pipe raw stream or use AI SDK?
                // Wait, my API implementation uses `response.body`. 
                // Groq API returns SSE stream. I need to parse "data: " lines if I blindly piped it.
                // Let's adjust logic: simpler to just wait for full if parsing SSE is annoying manually.
                // Or assume my API parses it? My API code: `return new Response(response.body, ...)` -> direct pipe.
                // So I receive native OpenAI SSE stream.
                // Parsing SSE manually here briefly:

                const lines = chunk.split('\n');
                for (const line of lines) {
                    if (line.startsWith('data: ') && line !== 'data: [DONE]') {
                        try {
                            const json = JSON.parse(line.slice(6));
                            const token = json.choices[0]?.delta?.content || '';
                            aiText += token;
                            // Update UI live
                            setMessages(prev => {
                                const last = prev[prev.length - 1];
                                if (last.role === 'assistant') {
                                    return [...prev.slice(0, -1), { ...last, content: aiText }];
                                }
                                return prev;
                            });
                        } catch (e) {
                            // ignore incomplete JSON
                        }
                    }
                }
            }

            setIsProcessing(false);
            speak(aiText);

        } catch (e) {
            console.error(e);
            setIsProcessing(false);
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-[#1a1b26] border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">

                {/* Header */}
                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-purple-500/10 to-transparent">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold border-2 
                ${persona === 'Joey' ? 'bg-orange-500/20 border-orange-500 text-orange-400' : 'bg-blue-500/20 border-blue-500 text-blue-400'}`}>
                            {persona === 'Joey' ? '🍕' : '👓'}
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg">{persona}</h3>
                            <p className="text-xs text-white/50">AI Roleplay • Powered by Llama 3</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-white/50 hover:text-white p-2 rounded-full hover:bg-white/10">
                        <X size={20} />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed 
                  ${msg.role === 'user'
                                    ? 'bg-purple-600 text-white rounded-tr-none'
                                    : 'bg-white/10 text-white/90 rounded-tl-none border border-white/5'}`}>
                                {msg.content === '...' ? (
                                    <span className="animate-pulse">Thinking...</span>
                                ) : (
                                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                                )}
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Controls */}
                <div className="p-6 border-t border-white/10 bg-[#15161e]">

                    {/* Transcript Preview */}
                    <div className="h-8 mb-4 flex items-center justify-center text-white/60 text-sm italic">
                        {isListening ? (transcript || "Listening...") : (isProcessing ? "Analyzing..." : "Tap mic to speak")}
                    </div>

                    <div className="flex items-center justify-center gap-6">

                        {/* Reset/Clear Button */}
                        <button
                            onClick={() => setMessages([])}
                            className="p-3 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                            title="Restart Conversation"
                        >
                            <RotateCcw size={20} />
                        </button>

                        {/* Main Mic Button */}
                        <button
                            onClick={handleToggleListen}
                            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg relative
                  ${isListening
                                    ? 'bg-red-500 shadow-red-500/50 scale-110 animate-pulse'
                                    : isProcessing
                                        ? 'bg-yellow-500/20 text-yellow-500 cursor-wait'
                                        : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/30 hover:scale-105'
                                }`}
                            disabled={isProcessing}
                        >
                            {isListening ? <MicOff size={32} /> : (isProcessing ? <Cpu className="animate-spin" size={32} /> : <Mic size={32} />)}

                            {/* Ripple Effect Ring */}
                            {isListening && (
                                <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-50"></div>
                            )}
                        </button>

                        {/* Playing Indicator */}
                        <div className={`p-3 rounded-full transition-colors ${isSpeaking ? 'text-green-400 bg-green-400/10' : 'text-white/30'}`}>
                            <Volume2 size={24} className={isSpeaking ? 'animate-bounce' : ''} />
                        </div>

                    </div>

                    <p className="text-center text-xs text-white/30 mt-4">
                        {sttSupported ? "Browser Speech Recognition Active" : "Speech Recognition NOT Supported in this browser"}
                    </p>

                </div>

            </div>
        </div>
    );
}
