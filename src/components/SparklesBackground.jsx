import { motion } from "framer-motion";

export default function SparklesBackground() {
  return (
    <>
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 3,
          }}
        />
      ))}
    </>
  );
}
