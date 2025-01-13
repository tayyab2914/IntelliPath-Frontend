import { useCallback, useEffect, useState } from 'react';

const IS_BLIND_MODE_ENABLED = true
const useSpeech = () => {
  const [femaleVoice, setFemaleVoice] = useState(null);

  const fetchVoices = useCallback(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    const femaleVoices = voices.filter(voice => voice.name.toLowerCase().includes('female'));
    setFemaleVoice(femaleVoices[0] || voices[0]);
  }, []);

  useEffect(() => {
    fetchVoices();
    window.speechSynthesis.onvoiceschanged = fetchVoices;
  }, [fetchVoices]);

  const speakWord = useCallback((word) => {
    if (!IS_BLIND_MODE_ENABLED) return; // Don't speak if blind mode is not enabled

    console.log(word)
    const synth = window.speechSynthesis;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(word);
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    synth.speak(utterance);
  }, [femaleVoice, IS_BLIND_MODE_ENABLED]);

  return { speakWord };
};

export default useSpeech;
