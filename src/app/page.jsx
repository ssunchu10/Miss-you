"use client";

import { useState, useRef } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import MusicPlayer from "@/components/MusicPlayer";
import Loader from "@/components/Loader";
import WelcomeScreen from "@/components/WelcomeScreen";
import MissCounterScreen from "@/components/MissCounterScreen";
import MessageScreen from "@/components/MessageScreen";
import MemoriesScreen from "@/components/MemoriesScreen";
import FinalScreen from "@/components/FinalScreen";

export default function Page() {
  const [step, setStep] = useState(0);
  const musicRef = useRef(null);

  const goNext = () => setStep((s) => Math.min(s + 1, 5));

  // Called when user clicks the Let's Begin button on WelcomeScreen.
  // Play audio during the user gesture so browser allows autoplay with sound.
  const beginAndPlay = () => {
    if (musicRef.current && musicRef.current.play) {
      musicRef.current.play().catch(() => {
        /* ignore play errors; fallback to state-driven play */
      });
    }
    goNext();
  };

  const screens = [
    <Loader key="loader" onNext={goNext} />,
    <WelcomeScreen key="welcome" onNext={beginAndPlay} />,
    <MissCounterScreen key="counter" onNext={goNext} />,
    <MessageScreen key="message" onNext={goNext} />,
    <MemoriesScreen key="memories" onNext={goNext} />,
    <FinalScreen key="final" />,
  ];

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      <MusicPlayer ref={musicRef} musicPlaying={step > 0} />
      {screens[step]}
    </div>
  );
}
