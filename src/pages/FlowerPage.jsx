import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, Heart } from "lucide-react";
import confetti from "canvas-confetti";

export default function FlowerPage({ onBack }) {
  const [showLove, setShowLove] = useState(false);

  const sendLove = () => {
    setShowLove(true);

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
      colors: ["#ffb3c6", "#fb7185", "#f43f5e", "#ffffff", "#fecdd3"],
    });

    setTimeout(() => {
      setShowLove(false);
    }, 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{ duration: 0.8 }}
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

      {/* BACKGROUND BLOBS */}
      <div
        className="
          absolute
          w-[220px]
          h-[220px]
          md:w-[400px]
          md:h-[400px]
          bg-pink-500/10
          blur-3xl
          rounded-full
          top-0
          left-0
        "
      />

      <div
        className="
          absolute
          w-[250px]
          h-[250px]
          md:w-[500px]
          md:h-[500px]
          bg-rose-300/10
          blur-3xl
          rounded-full
          bottom-0
          right-0
        "
      />

      {/* FALLING PETALS */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "-10vh",
            x: `${Math.random() * 100}vw`,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            rotate: 360,
            x: [
              `${Math.random() * 100}vw`,
              `${Math.random() * 100}vw`,
            ],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
          className="
            absolute
            text-lg
            md:text-2xl
            opacity-70
            pointer-events-none
          "
        >
          🌸
        </motion.div>
      ))}

      {/* LOVE BURST */}
      <AnimatePresence>
        {showLove && (
          <>
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  scale: 0,
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  scale: 1.5,
                  opacity: 0,
                  x: (Math.random() - 0.5) * 800,
                  y: (Math.random() - 0.5) * 800,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  text-3xl
                  md:text-4xl
                  pointer-events-none
                  z-50
                "
              >
                ❤️
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <div
        className="
          min-h-screen
          flex
          flex-col
          items-center
          justify-center
          px-4
          py-20
          md:px-6
          text-center
        "
      >
        {/* TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            text-3xl
            sm:text-4xl
            md:text-6xl
            font-bold
            text-white
            mb-3
          "
        >
          Forever Flower 🌹
        </motion.h1>

        <p
          className="
            text-pink-200
            italic
            text-sm
            sm:text-base
            md:text-xl
            mb-8
            md:mb-12
          "
        >
          Untuk seseorang yang selalu spesial ❤️
        </p>

        {/* BOUQUET */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          className="relative mb-8 md:mb-12"
        >
          <div
            className="
              absolute
              inset-0
              bg-pink-500/20
              blur-3xl
              rounded-full
              scale-150
            "
          />

          <div
            className="
              relative
              text-[120px]
              sm:text-[150px]
              md:text-[260px]
            "
          >
            💐
          </div>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            w-full
            max-w-2xl
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-5
            sm:p-6
            md:p-8
            text-white
            shadow-2xl
          "
        >
          <h2
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              font-bold
              mb-4
            "
          >
            Untuk Winarningsih Julianti ❤️
          </h2>

          <p
            className="
              text-pink-100
              leading-relaxed
              text-sm
              sm:text-base
              md:text-lg
            "
          >
            Bunga ini mungkin hanya bunga virtual, tetapi doa dan perasaannya
            nyata. Semoga hidupmu selalu dipenuhi warna-warni kebahagiaan
            seperti indahnya bunga yang sedang mekar.
          </p>

          <p
            className="
              mt-4
              md:mt-6
              text-pink-200
              italic
              text-sm
              sm:text-base
              md:text-lg
            "
          >
            "Seperti bunga yang selalu tumbuh ke arah cahaya, semoga kamu selalu
            menemukan kebahagiaan dalam setiap langkahmu."
          </p>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={sendLove}
          className="
            mt-8
            md:mt-10
            flex
            items-center
            gap-2
            md:gap-3
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
          <Sparkles className="w-4 h-4 md:w-5 md:h-5" />

          Send Love

          <Heart className="w-4 h-4 md:w-5 md:h-5" />
        </motion.button>

        {/* FOOTER */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
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
        </motion.div>
      </div>
    </motion.div>
  );
}
