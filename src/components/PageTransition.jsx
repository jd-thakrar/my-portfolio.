import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -50, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 50, y: 0 }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.4, type: 'easeInOut' }}
      className="page-wrapper container"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
