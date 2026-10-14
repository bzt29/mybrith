import { useEffect, useRef } from "react";

export default function MusicPlayer({ playing }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return <audio ref={audioRef} loop src="/audio/happy-birthday.mp3" />;
}
