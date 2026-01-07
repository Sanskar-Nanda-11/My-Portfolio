import { useEffect, useRef, useState } from "react";

/* ===============================
   MULTI-LANGUAGE WELCOME DATA
================================ */

const welcomes = [
  { text: "Welcome", state: "English (Pan India)" },
  { text: "स्वागत है", state: "Hindi (North India)" },
  { text: "স্বাগতম", state: "West Bengal (Bengali)" },
  { text: "வணக்கம்", state: "Tamil Nadu (Tamil)" },
  { text: "స్వాగతం", state: "Andhra Pradesh / Telangana (Telugu)" },
  { text: "स्वागत आहे", state: "Maharashtra (Marathi)" },
  { text: "સ્વાગત છે", state: "Gujarat (Gujarati)" },
  { text: "ಸ್ವಾಗತ", state: "Karnataka (Kannada)" },
  { text: "സ്വാഗതം", state: "Kerala (Malayalam)" },
  { text: "ਸੁਆਗਤ ਹੈ", state: "Punjab (Punjabi)" },
  { text: "ସ୍ୱାଗତ", state: "Odisha (Odia)" },
  { text: "স্বাগতম", state: "Assam (Assamese)" },
  { text: "خوش آمدید", state: "Urdu (J&K / Telangana)" },
  { text: "स्वागत", state: "Goa (Konkani)" },
  { text: "ꯁ꯭ꯋꯥꯒꯠ", state: "Manipur (Meitei)" },
  { text: "बराय", state: "Assam (Bodo)" },
  { text: "स्वागत", state: "Jammu (Dogri)" },
  { text: "خوش آمدید", state: "Kashmir (Kashmiri)" },
  { text: "स्वागत अछि", state: "Bihar (Maithili)" },
  { text: "ᱥᱣᱟᱜᱟᱛ", state: "Jharkhand / Odisha (Santali)" },
  { text: "स्वागत", state: "Sindhi Community" },
  { text: "स्वागत छ", state: "Sikkim / Darjeeling (Nepali)" }
];

export default function IntroOverlay() {
  /* ===============================
     STATE
  ================================ */

  const [wordIndex, setWordIndex] = useState(0);
  const [langText, setLangText] = useState("");
  const [stateText, setStateText] = useState("");
  const [typingLanguage, setTypingLanguage] = useState(true);

  const [showLoader, setShowLoader] = useState(true);
  const [showTitle, setShowTitle] = useState(false);
  const [hideTitle, setHideTitle] = useState(false);

  const charIndex = useRef(0);
  const stateCharIndex = useRef(0);

  /* ===============================
     TYPEWRITER LOGIC (LANG + STATE)
  ================================ */

  useEffect(() => {
    if (!showLoader) return;

    const current = welcomes[wordIndex];
    let timer;

    if (typingLanguage) {
      if (charIndex.current < current.text.length) {
        timer = setTimeout(() => {
          setLangText((p) => p + current.text[charIndex.current++]);
        }, 80);
      } else {
        timer = setTimeout(() => setTypingLanguage(false), 300);
      }
    } else {
      if (stateCharIndex.current < current.state.length) {
        timer = setTimeout(() => {
          setStateText((p) => p + current.state[stateCharIndex.current++]);
        }, 50);
      } else {
        timer = setTimeout(() => {
          setLangText("");
          setStateText("");
          charIndex.current = 0;
          stateCharIndex.current = 0;
          setTypingLanguage(true);

          if (wordIndex + 1 >= welcomes.length) {
            exitLoader();
          } else {
            setWordIndex((i) => i + 1);
          }
        }, 700);
      }
    }

    return () => clearTimeout(timer);
  }, [langText, stateText, typingLanguage, wordIndex, showLoader]);

  /* ===============================
     EXIT LOADER → FINAL TITLE
  ================================ */

  function exitLoader() {
    setTimeout(() => {
      setShowLoader(false);
      setShowTitle(true);

      setTimeout(() => {
        setHideTitle(true);
        setTimeout(() => setShowTitle(false), 1000);
      }, 2500);
    }, 900);
  }

  /* ===============================
     RENDER
  ================================ */

  if (!showLoader && !showTitle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center
                    bg-gradient-to-br from-orange-500 via-white to-green-600
                    bg-[length:300%_300%] animate-tricolor">

      {showLoader && (
        <div className="text-center text-slate-900 font-sans">
          <h1 className="text-4xl font-bold min-h-[3.5rem]">
            {langText}
          </h1>
          <p className="mt-2 text-sm opacity-80 min-h-[1.2rem]">
            {stateText}
          </p>
        </div>
      )}

      {showTitle && (
        <h1
          className={`text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-orange-500 to-green-600
            bg-clip-text text-transparent
            transition-all duration-1000 transform
            ${hideTitle ? "-translate-y-5 opacity-0" : "translate-y-10 opacity-100"}`}
        >
          Welcome to Sanskar’s Portfolio
        </h1>
      )}
    </div>
  );
}
