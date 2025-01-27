import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{
        x: "-100vw",
        opacity: 0,
      }}
      animate={{ x: 0,
        opacity:1
       }}
      transition={{ duration: 0.3 }}
      exit={{
        y: "-100vw",
      }}
      className="bg-green-500 h-screen flex justify-center items-center"
    >
      Projects
    </motion.div>
  );
};

export default Projects;

