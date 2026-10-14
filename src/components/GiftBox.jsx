import { motion } from "framer-motion";

export default function GiftBox({ onOpen }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onOpen}
      className="cursor-pointer"
    >
      <motion.div
        animate={{
          rotate: [0, -5, 5, 0],
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="text-[80px] md:text-[180px]"
      >
        🎁
      </motion.div>
    </motion.div>
  );
}
