import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
        opacity: 0,
      }}
      animate={{ x: 0 
        , opacity:1
      }}
      transition={{ duration: 0.3 }}
      exit={{
        y: "-100vw",
      }}
      className="bg-blue-600 h-screen flex justify-center items-center"
    >
      About
    </motion.div>
  );
};

export default About;
