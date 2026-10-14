import { motion } from "framer-motion";

export default function FloatingBalloons() {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "120vh",
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: "-120vh",
          }}
          transition={{
            duration: 15 + Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
            delay: i,
          }}
          className="absolute text-5xl opacity-70 pointer-events-none"
        >
          🎈
        </motion.div>
      ))}
    </>
  );
}
