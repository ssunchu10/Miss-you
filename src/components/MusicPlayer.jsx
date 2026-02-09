"use client"

import { audioSrc } from "@/data";
import { useRef, useEffect } from "react"

export default function MusicPlayer({ musicPlaying }) {
    const audioRef = useRef(null)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Adjust the song volume here
            if (musicPlaying) {
                audioRef.current.play().catch(console.error)
            } else {
                audioRef.current.pause()
            }
        }
    }, [musicPlaying])

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src={audioSrc} type="audio/mpeg" />
            </audio>
        </div>
    )
}