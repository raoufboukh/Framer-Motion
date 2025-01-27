import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{
        x: "-100vw",
        opacity: 0,
      }}
      animate={{ x: 0,
        opacity: 1
       }}
      transition={{duration: .3}}
      exit={{
        y: "-100vw",
      }}
      className="h-screen bg-red-600 flex justify-center items-center"
    >
      Home
    </motion.div>
  );
}
