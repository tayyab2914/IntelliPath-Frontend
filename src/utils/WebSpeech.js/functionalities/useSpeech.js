import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_GET_USER_ATTRIBUTE } from "../../../apis/CoreApis";

const useSpeech = (options = {}) => {
  const { isInSpeechMode = false } = options;

  const [femaleVoice, setFemaleVoice] = useState(null);
  const { token, blind_mode, isLoggedIn, rerender_app } = useSelector((state) => state.authToken);
  const [isBlindModeEnabled, setIsBlindModeEnabled] = useState(blind_mode);
  const [isVoicesReady, setIsVoicesReady] = useState(false);

  const fetchVoices = useCallback(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    
    if (voices.length === 0) {
      synth.onvoiceschanged = () => fetchVoices();
      return;
    }

    const femaleVoices = voices.filter((voice) =>
      voice.name.toLowerCase().includes("female")
    );
    setFemaleVoice(femaleVoices[0] || voices[0]); 
    setIsVoicesReady(true); 
  }, []);

  const fetchSettings = useCallback(async () => {
    if (!isLoggedIn) return;

    try {
      const response = await API_GET_USER_ATTRIBUTE(token);
      setIsBlindModeEnabled(response?.is_blindmode || false); 
    } catch (error) {
      console.error("Failed to fetch user settings:", error);
    }
  }, [isLoggedIn, token, rerender_app]);
useEffect(() => {
  fetchVoices();
  fetchSettings();

  return () => {
    window.speechSynthesis.cancel(); 
  };
}, [fetchVoices, fetchSettings]);


  const chunkText = (text) => {
    const sentences = text.split(".").map(sentence => sentence.trim()).filter(Boolean);
    return sentences;
  };
  const speakWord = useCallback(
    (text) => {
      if (!isInSpeechMode) {
        if (!isBlindModeEnabled || !isVoicesReady) return;
      }

      if (typeof text !== "string") {
        console.error("speakWord expects a string but received:", text);
        return;
      }

      const synth = window.speechSynthesis;
      synth.cancel(); 

      const sentences = chunkText(text); 

      sentences.forEach((sentence, index) => {
        const utterance = new SpeechSynthesisUtterance(sentence + ".");
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }

        utterance.onend = () => {
          if (index < sentences.length - 1) {
            const nextUtterance = new SpeechSynthesisUtterance(sentences[index + 1] + ".");
            if (femaleVoice) {
              nextUtterance.voice = femaleVoice;
            }
            synth.speak(nextUtterance);
          }
        };

        synth.speak(utterance);
      });
    },
    [isBlindModeEnabled, isVoicesReady, femaleVoice, isInSpeechMode]
  );

  return { speakWord };
};

export default useSpeech;
