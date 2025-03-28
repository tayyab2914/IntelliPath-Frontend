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

  // Initialize voices and settings
  useEffect(() => {
    fetchVoices();
    window.speechSynthesis.onvoiceschanged = fetchVoices;

    fetchSettings(); // Fetch blind mode settings only when logged in
  }, [fetchVoices, fetchSettings]);

  // Speak a word
  const speakWord = useCallback(
    (text) => {
      console.log("Blind Mode:", isBlindModeEnabled, "Voices Ready:", isVoicesReady, "Speech Mode:", isInSpeechMode);
  
      if (!isInSpeechMode) {
        if (!isBlindModeEnabled || !isVoicesReady) return;
      }
  
      if (typeof text !== "string") {
        console.error("speakWord expects a string but received:", text);
        return;
      }
  
      const synth = window.speechSynthesis;
      synth.cancel(); // Cancel any ongoing speech
  
      console.log(text);
  
      const chunkSize = 100; // Maximum length per chunk
      const words = text.split(" "); // Split by space
      const sentences = [];
      let currentSentence = "";
  
      words.forEach((word) => {
        if ((currentSentence + word).length <= chunkSize) {
          currentSentence += (currentSentence ? " " : "") + word;
        } else {
          sentences.push(currentSentence);
          currentSentence = word;
        }
      });
  
      if (currentSentence) {
        sentences.push(currentSentence);
      }
  
      sentences.forEach((sentence, index) => {
        const utterance = new SpeechSynthesisUtterance(sentence);
        if (femaleVoice) {
          utterance.voice = femaleVoice;
        }
  
        // Queue the speech chunks in sequence
        utterance.onend = () => {
          if (index < sentences.length - 1) {
            const nextUtterance = new SpeechSynthesisUtterance(sentences[index + 1]);
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
