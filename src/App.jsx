/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import {motion , AnimatePresence, spring, stagger} from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  const [show, setShow] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const text = "Hello World";
  const variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        // duration: 2,
        // when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  useEffect(() => {
    // setTimeout(() => {
    //   setShow(false);
    // }, 5000);
    const handleCursor = (e) => {
      setX(e.clientX - 8);
      setY(e.clientY - 8);
      console.log(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleCursor);
  });

  const location = useLocation();
  return (
    <div className="">
      <motion.div
        animate={{ x: x, y: y }}
        className={`absolute top-0 left-0 size-4 rounded-full z-[1000] border border-black pointer-events-none`}
      ></motion.div>
      {/* <AnimatePresence>
        {show && (
          <motion.button
          transition={{duration:2}}
            exit={{ opacity: 0, x: 200 }}
            className="text-3xl text-blue-500 bg-yellow-500 p-3 shadow-xl cursor-pointer rounded-md"
          >
            Keep Coding
          </motion.button>
        )}
      </AnimatePresence> */}

      {/* <motion.button
        transition={{ duration: 2, type: "spring", stiffness: 200, mass: 2 }}
        // whileHover={{scale:1.1,textShadow: "10px 10px 10px rgb(255,255,255)"}}
        // whileTap={{scale:0.9}}
        initial={{x:100}}
        whileDrag={{scale:1.1}}
        drag='x'
        dragConstraints={{left:-200, right:300}}
        whileInView={{x:0, scale:1.3}}
        className="text-3xl font-medium bg-yellow-500 p-3 shadow-xl cursor-pointer rounded-md"
      >
        Keep Coding
      </motion.button> */}

      {/* <motion.input
        transition={{ duration: 2, type: "spring", stiffness: 200, mass: 2 }}
        whileFocus={{scale:1.2}}
        className='outline none border border-black'
        type="text"
        /> */}

      {/* <h1 className='font-medium text-3xl'>This is heading</h1>
        <motion.button
          variants={variant}
          initial='hidden'
          animate='visible'
          className="text-2xl font-medium bg-yellow-500 p-3 shadow-xl cursor-pointer rounded-md"
        >
          Keep Coding
        </motion.button> */}

      {/* <h1 className='font-medium text-3xl'>This is heading</h1>
        <motion.div
          variants={variant}
          initial='hidden'
          animate='visible'
          className=""
        >
          {[1,2,3,4].map(item => (
            <motion.h2 variants={child} key={item}>Hello World</motion.h2>
          ))}
        </motion.div> */}

      {/* <motion.div initial={{x:100}} animate={{x:0}} transition={{duration:.5, repeat:Infinity, repeatType:'mirror'}} className="py-2 p-6 bg-black text-white">Hello</motion.div> */}
      {/* <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </AnimatePresence> */}

      <motion.p
        variants={variant}
        initial="hidden"
        animate="visible"
        className="text-3xl"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={child}>
            {char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}

export default App
