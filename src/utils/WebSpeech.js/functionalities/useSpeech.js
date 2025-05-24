import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_GET_USER_ATTRIBUTE } from "../../../apis/CoreApis";

const useSpeech = (options = {}) => {
  const { isInSpeechMode = false } = options; // Default to false if not provided

  const [femaleVoice, setFemaleVoice] = useState(null);
  const { token, blind_mode, isLoggedIn, rerender_app } = useSelector((state) => state.authToken);
  const [isBlindModeEnabled, setIsBlindModeEnabled] = useState(blind_mode);
  const [isVoicesReady, setIsVoicesReady] = useState(false);

  // Fetch voices and select a female voice
  const fetchVoices = useCallback(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    
    // If voices are not ready, wait for the onvoiceschanged event to trigger
    if (voices.length === 0) {
      synth.onvoiceschanged = () => fetchVoices();
      return;
    }

    const femaleVoices = voices.filter((voice) =>
      voice.name.toLowerCase().includes("female")
    );
    setFemaleVoice(femaleVoices[0] || voices[0]); // Select the first female voice or fallback
    setIsVoicesReady(true); // Mark voices as ready
  }, []);

  // Fetch blind mode settings
  const fetchSettings = useCallback(async () => {
    if (!isLoggedIn) return;

    try {
      const response = await API_GET_USER_ATTRIBUTE(token);
      setIsBlindModeEnabled(response?.is_blindmode || false); // Update state based on API response
    } catch (error) {
      console.error("Failed to fetch user settings:", error);
    }
  }, [isLoggedIn, token, rerender_app]);
useEffect(() => {
  fetchVoices();
  fetchSettings();

  return () => {
    window.speechSynthesis.cancel(); // Stop speaking on unmount
  };
}, [fetchVoices, fetchSettings]);


  // Function to break large text into smaller chunks at each period.
  const chunkText = (text) => {
    // Split text at each period (.) followed by a space to separate sentences
    console.log(text)
    const sentences = text.split(".").map(sentence => sentence.trim()).filter(Boolean);
    console.log(sentences)
    return sentences;
  };

  // Speak a word
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
      synth.cancel(); // Cancel any ongoing speech

      const sentences = chunkText(text); // Split text into sentences

      sentences.forEach((sentence, index) => {
        const utterance = new SpeechSynthesisUtterance(sentence + "."); // Add the period back to each chunk
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }

        // Queue the speech chunks in sequence
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
