import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingBalloons from "./components/FloatingBalloons";
import SparklesBackground from "./components/SparklesBackground";
import FloatingHearts from "./components/FloatingHearts";
import MusicPlayer from "./components/MusicPlayer";
import GiftBox from "./components/GiftBox";
import {
  Gift,
  Heart,
  Music2,
  VolumeX,
  Mail,
  Flower2,
  Cake,
} from "lucide-react";
import confetti from "canvas-confetti";

import MessagePage from "./pages/MessagePage";
import FlowerPage from "./pages/FlowerPage";
import CakePage from "./pages/CakePage";

export default function App() {
  const [page, setPage] = useState("cover");
  const [giftOpened, setGiftOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (musicOn) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [musicOn]);

  const openGift = () => {
    setGiftOpened(true);

    confetti({
      particleCount: 250,
      spread: 180,
      origin: { y: 0.5 },
      colors: ["#ffffff", "#fecdd3", "#fb7185", "#f43f5e", "#be123c"],
    });

    setTimeout(() => {
      setPage("main");
    }, 2200);
  };

  return (
    <div className="fixed inset-0 overflow-hidden text-white">
      {/* AUDIO */}
      <audio ref={audioRef} loop src="/audio/happy-birthday.mp3" />

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4a001f] via-[#800f2f] to-[#2b0010]" />

      {/* BLUR BLOBS */}
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl -top-40 -left-20" />
      <div className="absolute w-[400px] h-[400px] bg-rose-200/10 rounded-full blur-3xl bottom-0 right-0" />

      <SparklesBackground />
      <FloatingBalloons />
      <FloatingHearts />
      <MusicPlayer />
      <GiftBox />

      {/* MUSIC BUTTON */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="absolute top-6 right-6 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 hover:scale-105 transition"
      >
        {musicOn ? <Music2 size={20} /> : <VolumeX size={20} />}
      </button>

      <AnimatePresence mode="wait">
        {/* ================= COVER ================= */}

        {page === "cover" && (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center px-6"
          >
            {!giftOpened ? (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, -6, 6, 0],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="mb-8"
                >
                  <Gift
                    className="
                      w-30 h-30
                      md:w-40 md:h-40
                      lg:w-53 lg:h-53
                      mx-auto
                      text-pink-200
                      drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]
                    "
                  />
                </motion.div>

                <motion.h1
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  Happy Birthday ❤️
                </motion.h1>

                <p className="text-pink-200 text-lg md:text-xl mb-10">
                  Sebuah hadiah spesial untuk
                </p>

                <h2 className="text-3xl md:text-5xl font-serif italic text-pink-100 mb-12">
                  Winarningsih Julianti
                </h2>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={openGift}
                  className="
                    bg-white
                    text-[#800f2f]
                    px-10
                    py-4
                    rounded-full
                    font-bold
                    shadow-2xl
                  "
                >
                  Buka Hadiah 🎁
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -180,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                  }}
                >
                  <Heart
                    fill="currentColor"
                    className="
                      w-28 h-28
                      sm:w-36 sm:h-36
                      md:w-44 md:h-44
                      lg:w-56 lg:h-56
                      text-pink-300
                      mx-auto
                    "
                  />
                </motion.div>

                <h2 className="text-5xl font-bold mt-8">Surprise! ❤️</h2>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* ================= MAIN MENU ================= */}

        {page === "main" && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="
      absolute
      inset-0
      overflow-y-auto
      flex
      flex-col
      items-center
      px-4
      py-16
      md:px-8
      md:justify-center
    "
          >
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
        text-3xl
        sm:text-4xl
        md:text-6xl
        lg:text-7xl
        font-bold
        text-center
        mb-2
      "
            >
              Happy Birthday
            </motion.h1>

            <h2
              className="
        text-pink-200
        text-lg
        sm:text-xl
        md:text-3xl
        italic
        text-center
        mb-8
        md:mb-14
      "
            >
              Winarningsih Julianti ❤️
            </h2>

            {/* MENU */}
            <div
              className="
        w-full
        max-w-6xl
        grid
        grid-cols-1
        md:grid-cols-3
        gap-5
        md:gap-8
      "
            >
              {/* LETTER */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setPage("message")}
                className="
          cursor-pointer
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-3xl
          p-6
          md:p-10
          text-center
          shadow-2xl
        "
              >
                <Mail
                  className="
            w-12 h-12
            md:w-20 md:h-20
            mx-auto
            mb-4
            md:mb-6
            text-pink-200
          "
                />

                <h3
                  className="
            text-xl
            md:text-2xl
            font-bold
            mb-2
          "
                >
                  Love Letter
                </h3>

                <p className="text-sm md:text-base text-pink-100">
                  Sebuah pesan spesial untukmu
                </p>
              </motion.div>

              {/* FLOWER */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setPage("flower")}
                className="
          cursor-pointer
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-3xl
          p-6
          md:p-10
          text-center
          shadow-2xl
        "
              >
                <Flower2
                  className="
            w-12 h-12
            md:w-20 md:h-20
            mx-auto
            mb-4
            md:mb-6
            text-pink-200
          "
                />

                <h3
                  className="
            text-xl
            md:text-2xl
            font-bold
            mb-2
          "
                >
                  Forever Flower
                </h3>

                <p className="text-sm md:text-base text-pink-100">
                  Bunga yang tak pernah layu
                </p>
              </motion.div>

              {/* CAKE */}
              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => setPage("cake")}
                className="
          cursor-pointer
          backdrop-blur-xl
          bg-white/10
          border
          border-white/20
          rounded-3xl
          p-6
          md:p-10
          text-center
          shadow-2xl
        "
              >
                <Cake
                  className="
            w-12 h-12
            md:w-20 md:h-20
            mx-auto
            mb-4
            md:mb-6
            text-pink-200
          "
                />

                <h3
                  className="
            text-xl
            md:text-2xl
            font-bold
            mb-2
          "
                >
                  Birthday Cake
                </h3>

                <p className="text-sm md:text-base text-pink-100">
                  Make a wish ✨
                </p>
              </motion.div>
            </div>

            {/* FOOTER */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="
        mt-8
        md:mt-14
        text-center
        text-pink-200
        text-sm
        md:text-base
      "
            >
              With Love ❤️
              <br />
              <span className="font-bold">Syed M Hafiz F</span>
            </motion.div>
          </motion.div>
        )}

        {page === "message" && <MessagePage onBack={() => setPage("main")} />}

        {page === "flower" && <FlowerPage onBack={() => setPage("main")} />}

        {page === "cake" && <CakePage onBack={() => setPage("main")} />}
      </AnimatePresence>
    </div>
  );
}
