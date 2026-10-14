import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Heart } from "lucide-react";

export default function MessagePage({ onBack }) {
  const letterVariants = {
    hidden: {
      y: 150,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        x: -100,
      }}
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
      {/* Background Blur */}
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
          w-[220px]
          h-[220px]
          md:w-[400px]
          md:h-[400px]
          bg-rose-200/10
          blur-3xl
          rounded-full
          bottom-0
          right-0
        "
      />

      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "110vh",
            x: `${Math.random() * 100}vw`,
            opacity: 0,
          }}
          animate={{
            y: "-120vh",
            opacity: [0, 1, 1, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
          className="
            absolute
            text-pink-300
            text-lg
            md:text-xl
            pointer-events-none
          "
        >
          ❤️
        </motion.div>
      ))}

      {/* Back Button */}
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

      {/* Content */}
      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          px-4
          py-20
          md:px-6
        "
      >
        <div
          className="
            relative
            w-full
            max-w-3xl
            flex
            justify-center
          "
        >
          {/* Envelope */}
          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="absolute bottom-0 z-10"
          >
            <div
              className="
                relative
                w-[220px]
                sm:w-[260px]
                md:w-[420px]
                h-[150px]
                sm:h-[180px]
                md:h-[220px]
              "
            >
              {/* Body */}
              <div
                className="
                  absolute
                  inset-0
                  bg-rose-100
                  rounded-xl
                  shadow-2xl
                "
              />

              {/* Flap */}
              <motion.div
                initial={{
                  rotateX: 0,
                }}
                animate={{
                  rotateX: 180,
                }}
                transition={{
                  delay: 0.5,
                  duration: 1,
                }}
                style={{
                  transformOrigin: "top",
                }}
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-[80px]
                  md:h-[120px]
                  bg-rose-200
                  rounded-t-xl
                  z-20
                "
              />

              {/* Seal */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  z-30
                "
              >
                <div
                  className="
                    bg-rose-500
                    rounded-full
                    p-2
                    md:p-3
                    shadow-xl
                  "
                >
                  <Heart
                    fill="white"
                    className="
                      w-5
                      h-5
                      md:w-7
                      md:h-7
                      text-white
                    "
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Letter */}
          <motion.div
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            className="
              relative
              z-40
              w-full
              max-w-2xl
              bg-gradient-to-b
              from-rose-50
              to-white
              text-gray-800
              rounded-3xl
              border
              border-white/50
              backdrop-blur-sm
              shadow-[0_20px_80px_rgba(0,0,0,0.35)]
              p-5
              sm:p-6
              md:p-10
            "
          >
            {/* Top Decoration */}
            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-3
                bg-gradient-to-r
                from-rose-300
                via-pink-200
                to-rose-300
                rounded-t-3xl
              "
            />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="text-center mb-6 md:mb-8"
            >
              <Heart
                fill="#e11d48"
                className="
                  w-10
                  h-10
                  md:w-14
                  md:h-14
                  mx-auto
                  text-rose-600
                  mb-4
                "
              />

              <h1
                className="
                  text-xl
                  sm:text-2xl
                  md:text-4xl
                  font-serif
                  font-bold
                  text-rose-700
                "
              >
                Untuk Winarningsih Julianti ❤️
              </h1>
            </motion.div>

            {/* Letter Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2.5,
                duration: 1,
              }}
              className="
                space-y-4
                md:space-y-6
                text-sm
                sm:text-base
                md:text-xl
                leading-7
                md:leading-relaxed
                font-serif
                text-gray-700
              "
            >
              <p>
                Selamat ulang tahun untuk seseorang yang sangat spesial dalam
                hidupku. ❤️
              </p>

              <p>
                Hari ini bukan hanya tentang bertambahnya usia, tetapi juga
                tentang bertambahnya kenangan indah, kebahagiaan, dan harapan
                yang akan menemani perjalananmu ke depan.
              </p>

              <p>
                Aku berharap setiap langkah yang kamu ambil dipenuhi dengan
                keberkahan, kesehatan, dan kebahagiaan yang tidak pernah habis.
              </p>

              <p>
                Semoga semua impian yang selama ini kamu simpan, semua doa yang
                kamu panjatkan, dan semua harapan yang kamu perjuangkan dapat
                terwujud satu per satu.
              </p>

              <p>
                Terima kasih karena telah menjadi pribadi yang begitu luar
                biasa, penuh kebaikan, perhatian, dan mampu membawa banyak warna
                indah dalam hidupku.
              </p>

              <p>
                Tetaplah menjadi dirimu yang selalu kuat, selalu cantik, dan
                selalu mampu membuat dunia di sekitarmu terasa lebih hangat.
              </p>

              <div className="text-center py-6 md:py-8">
                <p
                  className="
                    text-xl
                    md:text-3xl
                    font-bold
                    text-rose-700
                    italic
                  "
                >
                  Happy Birthday ❤️
                </p>

                <p className="mt-3 text-gray-600">
                  Semoga hari ini menjadi awal dari tahun yang penuh
                  kebahagiaan.
                </p>
              </div>

              <div className="text-right pt-6 border-t border-rose-100">
                <p className="text-gray-500">With Love,</p>

                <p
                  className="
                    text-lg
                    md:text-2xl
                    font-bold
                    text-rose-700
                    mt-2
                  "
                >
                  Syed M Hafiz F ❤️
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
