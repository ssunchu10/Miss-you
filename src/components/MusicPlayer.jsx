"use client";

import { audioSrc } from "@/data";
import { useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const MusicPlayer = forwardRef(function MusicPlayer({ musicPlaying }, ref) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Adjust the song volume here
      if (musicPlaying) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  }, [musicPlaying]);

  useImperativeHandle(ref, () => ({
    play: () => {
      if (!audioRef.current) return Promise.resolve();
      return audioRef.current.play();
    },
    pause: () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
    },
  }));

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
});

export default MusicPlayer;
