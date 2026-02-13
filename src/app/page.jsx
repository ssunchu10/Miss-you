"use client";

import { useState } from "react";
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

  const goNext = () => setStep((s) => Math.min(s + 1, 5));

  const screens = [
    <Loader key="loader" onNext={goNext} />,
    <WelcomeScreen key="welcome" onNext={goNext} />,
    <MissCounterScreen key="counter" onNext={goNext} />,
    <MessageScreen key="message" onNext={goNext} />,
    <MemoriesScreen key="memories" onNext={goNext} />,
    <FinalScreen key="final" />,
  ];

  return (
    <div className="relative min-h-screen">
      <BackgroundAnimation />
      <MusicPlayer musicPlaying={step > 0} />
      {screens[step]}
    </div>
  );
}
