import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_GET_USER_ATTRIBUTE } from "../../../apis/CoreApis";

const useSpeech = () => {
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
    (word) => {
        console.log(isBlindModeEnabled,isVoicesReady)
      if (!isBlindModeEnabled || !isVoicesReady) return; // Ensure voices are ready and blind mode is enabled

      const synth = window.speechSynthesis;
      synth.cancel(); // Cancel any ongoing speech

      const utterance = new SpeechSynthesisUtterance(word);
      if (femaleVoice) {
        utterance.voice = femaleVoice; // Use selected voice
      }
      synth.speak(utterance); // Speak the word
    },
    [isBlindModeEnabled, isVoicesReady, femaleVoice]
  );

  return { speakWord };
};

export default useSpeech;
