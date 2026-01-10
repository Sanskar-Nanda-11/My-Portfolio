import { useEffect, useRef, useState } from "react";

/* ===============================
   MULTI-LANGUAGE WELCOME DATA
================================ */

const welcomes = [
  { text: "Welcome", state: "English (Pan India)" },
  { text: "स्वागत है", state: "Hindi (North India)" },
  // { text: "স্বাগতম", state: "West Bengal (Bengali)" },
  // { text: "வணக்கம்", state: "Tamil Nadu (Tamil)" },
  // { text: "స్వాగతం", state: "Andhra Pradesh / Telangana (Telugu)" },
  // { text: "स्वागत आहे", state: "Maharashtra (Marathi)" },
  // { text: "સ્વાગત છે", state: "Gujarat (Gujarati)" },
  // { text: "ಸ್ವಾಗತ", state: "Karnataka (Kannada)" },
  // { text: "സ്വാഗതം", state: "Kerala (Malayalam)" },
  // { text: "ਸੁਆਗਤ ਹੈ", state: "Punjab (Punjabi)" },
  { text: "ସ୍ୱାଗତ", state: "Odisha (Odia)" },
];

export default function IntroOverlay({ onFinish }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [langText, setLangText] = useState("");
  const [stateText, setStateText] = useState("");
  const [typingLanguage, setTypingLanguage] = useState(true);

  const charIndex = useRef(0);
  const stateCharIndex = useRef(0);

  /* ===============================
     TYPEWRITER ENGINE
================================ */

  useEffect(() => {
    const current = welcomes[wordIndex];
    let timer;

    if (typingLanguage) {
      if (charIndex.current < current.text.length) {
        timer = setTimeout(() => {
          setLangText((p) => p + current.text[charIndex.current++]);
        }, 80);
      } else {
        timer = setTimeout(() => setTypingLanguage(false), 250);
      }
    } else {
      if (stateCharIndex.current < current.state.length) {
        timer = setTimeout(() => {
          setStateText((p) => p + current.state[stateCharIndex.current++]);
        }, 40);
      } else {
        timer = setTimeout(() => {
          setLangText("");
          setStateText("");
          charIndex.current = 0;
          stateCharIndex.current = 0;
          setTypingLanguage(true);

          if (wordIndex + 1 >= welcomes.length) {
            finishIntro();
          } else {
            setWordIndex((i) => i + 1);
          }
        }, 600);
      }
    }

    return () => clearTimeout(timer);
  }, [langText, stateText, typingLanguage, wordIndex]);

  /* ===============================
     FINISH INTRO
================================ */

  function finishIntro() {
    setTimeout(() => {
      onFinish(); // 🔑 tell App to unmount loader
    }, 900);
  }

  /* ===============================
     RENDER
================================ */

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-gradient-to-br from-orange-500 via-white to-green-600
        bg-[length:300%_300%] animate-tricolor
        select-none
      "
    >
      <div className="text-center text-slate-900 font-sans">
        <h1 className="text-4xl md:text-5xl font-extrabold min-h-[3.5rem]">
          {langText}
        </h1>
        <p className="mt-2 text-sm opacity-80 min-h-[1.2rem]">
          {stateText}
        </p>
      </div>
    </div>
  );
}
