import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

export const useScrambleText = (finalText: string, delay: number = 0) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let frame: number;
    let iteration = 0;
    let loopTimeout: ReturnType<typeof setTimeout>;
    const FRAMES_PER_CHAR = 4;
    const totalFrames = finalText.length * FRAMES_PER_CHAR + finalText.length;
    const PAUSE_BETWEEN_LOOPS = 2000; // ms settled before re-scrambling

    const animate = () => {
      setDisplayText(
        finalText
          .split("")
          .map((char, i) => {
            if (char === " " || char === "," || char === "." || char === "!") return char;
            if (i < iteration / FRAMES_PER_CHAR) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration++;

      if (iteration < totalFrames) {
        frame = requestAnimationFrame(animate);
      } else {
        // Settled — wait then restart
        setDisplayText(finalText);
        loopTimeout = setTimeout(() => {
          iteration = 0;
          frame = requestAnimationFrame(animate);
        }, PAUSE_BETWEEN_LOOPS);
      }
    };

    const startTimeout = setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(loopTimeout);
      cancelAnimationFrame(frame);
    };
  }, [finalText, delay]);

  return displayText;
};