import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "100vh",
            left: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: "-120vh",
            opacity: [0, 1, 1, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 8,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
          className="absolute text-pink-300 text-xl"
        >
          ❤️
        </motion.div>
      ))}
    </>
  );
}
