import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Wind, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function CakePage({ onBack }) {
  const [blown, setBlown] = useState(false);

  const blowCandle = () => {
    setBlown(true);

    confetti({
      particleCount: 350,
      spread: 180,
      origin: { y: 0.55 },
      colors: ["#ffffff", "#fecdd3", "#fb7185", "#f43f5e", "#be123c"],
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="
        absolute
        inset-0
        overflow-y-auto
        bg-gradient-to-br
        from-[#4a001f]
        via-[#800f2f]
        to-[#2b0010]
      "
    >
      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        className="
          fixed
          top-4
          left-4
          md:top-6
          md:left-6
          z-50
          flex
          items-center
          gap-2
          text-pink-200
          hover:text-white
          transition
        "
      >
        <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        Kembali
      </button>

      {/* BG GLOW */}
      <div
        className="
          absolute
          w-[220px]
          h-[220px]
          md:w-[500px]
          md:h-[500px]
          bg-pink-500/10
          blur-3xl
          rounded-full
          left-0
          top-0
        "
      />

      <div
        className="
          absolute
          w-[220px]
          h-[220px]
          md:w-[500px]
          md:h-[500px]
          bg-rose-200/10
          blur-3xl
          rounded-full
          right-0
          bottom-0
        "
      />

      {/* HEART RAIN */}
      {blown &&
        [...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "-20vh",
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: "120vh",
              rotate: 360,
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              text-lg
              md:text-2xl
            "
          >
            ❤️
          </motion.div>
        ))}

      {/* BALLOONS */}
      {blown &&
        [...Array(10)].map((_, i) => (
          <motion.div
            key={`b-${i}`}
            initial={{
              y: "120vh",
              x: `${Math.random() * 100}vw`,
            }}
            animate={{
              y: "-120vh",
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              text-3xl
              md:text-5xl
            "
          >
            🎈
          </motion.div>
        ))}

      <div
        className="
          min-h-screen
          flex
          flex-col
          justify-center
          items-center
          px-4
          py-20
          md:px-6
          text-center
        "
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-bold
            text-white
            mb-8
            md:mb-12
          "
        >
          Birthday Cake 🎂
        </motion.h1>

        {/* CAKE */}
        <div className="relative mb-10 md:mb-16">
          {/* CANDLE */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              -top-20
              md:-top-28
              z-20
            "
          >
            <AnimatePresence>
              {!blown && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.2, 1],
                    y: [0, -3, 0],
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.5,
                  }}
                  className="
                    text-2xl
                    md:text-3xl
                  "
                >
                  🔥
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {blown && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: -40,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="
                    text-2xl
                    md:text-3xl
                  "
                >
                  ☁️
                </motion.div>
              )}
            </AnimatePresence>

            <div
              className="
                w-3
                h-14
                md:w-4
                md:h-20
                bg-white
                rounded-full
                mx-auto
              "
            />
          </div>

          {/* TOP */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              w-28
              h-14
              md:w-40
              md:h-20
              bg-pink-200
              rounded-xl
              border-b-8
              border-pink-300
              mx-auto
              shadow-xl
            "
          />

          {/* MIDDLE */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
            }}
            className="
              w-44
              h-16
              md:w-60
              md:h-24
              bg-pink-300
              rounded-xl
              border-b-8
              border-pink-400
              mx-auto
              -mt-2
              shadow-xl
            "
          />

          {/* BOTTOM */}
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              w-64
              h-20
              md:w-80
              md:h-28
              bg-rose-400
              rounded-xl
              border-b-8
              border-rose-500
              mx-auto
              -mt-2
              shadow-2xl
            "
          />
        </div>

        <AnimatePresence mode="wait">
          {!blown ? (
            <motion.div
              key="wish"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <h2
                className="
                  text-2xl
                  md:text-3xl
                  text-white
                  font-bold
                  mb-4
                "
              >
                Make A Wish ✨
              </h2>

              <p
                className="
                  text-pink-200
                  mb-8
                  max-w-md
                  text-sm
                  md:text-base
                "
              >
                Pejamkan mata, buat harapan terbaikmu, lalu tiup lilinnya...
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={blowCandle}
                className="
                  flex
                  items-center
                  gap-2
                  bg-white
                  text-[#800f2f]
                  px-5
                  py-3
                  md:px-8
                  md:py-4
                  rounded-full
                  font-bold
                  shadow-2xl
                  text-sm
                  md:text-base
                "
              >
                <Wind className="w-4 h-4 md:w-5 md:h-5" />
                Tiup Lilin
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              >
                <Heart
                  fill="currentColor"
                  className="
                    w-16
                    h-16
                    md:w-20
                    md:h-20
                    text-pink-300
                    mx-auto
                    mb-6
                  "
                />
              </motion.div>

              <h2
                className="
                  text-3xl
                  sm:text-4xl
                  md:text-6xl
                  font-bold
                  text-white
                  mb-4
                "
              >
                Happy Birthday ❤️
              </h2>

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  md:text-4xl
                  text-pink-200
                  mb-6
                "
              >
                Winarningsih Julianti
              </h3>

              <p
                className="
                  max-w-2xl
                  mx-auto
                  text-pink-100
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                "
              >
                Semoga semua doa yang kamu panjatkan hari ini dikabulkan,
                semua harapanmu menjadi kenyataan, dan hidupmu selalu
                dipenuhi cinta, kesehatan, kebahagiaan, serta keberkahan
                yang tidak pernah habis.
              </p>

              <div
                className="
                  mt-8
                  md:mt-10
                  text-pink-200
                  text-sm
                  md:text-base
                "
              >
                With Love ❤️
                <br />
                <span className="font-bold">
                  Syed M Hafiz F
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}