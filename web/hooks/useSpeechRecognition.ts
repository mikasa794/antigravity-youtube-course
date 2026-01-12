import { useState, useEffect, useCallback } from 'react';

export interface UseSpeechRecognitionProps {
    onResult?: (transcript: string) => void;
    onEnd?: () => void;
    lang?: string;
    continuous?: boolean;
}

export function useSpeechRecognition({
    onResult,
    onEnd,
    lang = 'en-US',
    continuous = false,
}: UseSpeechRecognitionProps = {}) {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [supported, setSupported] = useState(false);

    // Reference to recognition instance
    const [recognition, setRecognition] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition =
                (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

            if (SpeechRecognition) {
                setSupported(true);
                const reco = new SpeechRecognition();
                reco.lang = lang;
                reco.continuous = continuous;
                reco.interimResults = true;
                setRecognition(reco);
            } else {
                setSupported(false);
                setError('Speech Recognition not supported in this browser.');
            }
        }
    }, [lang, continuous]);

    useEffect(() => {
        if (!recognition) return;

        recognition.onstart = () => {
            setIsListening(true);
            setError(null);
        };

        recognition.onresult = (event: any) => {
            let finalTranscript = '';
            let interimTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            const current = finalTranscript || interimTranscript;
            setTranscript(current);
            if (onResult) onResult(current);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech Recognition Error:', event.error);
            setError(event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
            if (onEnd) onEnd();
        };
    }, [recognition, onResult, onEnd]);

    const startListening = useCallback(() => {
        if (recognition && !isListening) {
            try {
                recognition.start();
            } catch (e) {
                console.error("Already started", e);
            }
        }
    }, [recognition, isListening]);

    const stopListening = useCallback(() => {
        if (recognition && isListening) {
            recognition.stop();
        }
    }, [recognition, isListening]);

    const resetTranscript = useCallback(() => {
        setTranscript('');
    }, []);

    return {
        isListening,
        transcript,
        error,
        supported,
        startListening,
        stopListening,
        resetTranscript
    };
}
