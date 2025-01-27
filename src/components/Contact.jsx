import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
        opacity: 0,
      }}
      animate={{ x: 0,opacity:1 }}
      transition={{ duration: 0.3 }}
      exit={{
        y: "-100vw",
      }}
      className="bg-yellow-600 h-screen flex justify-center items-center"
    >
      Contact
    </motion.div>
  );
};

export default Contact;
