import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = ({ progress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-light dark:bg-dark">
      <motion.div
        className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-primary dark:bg-primaryDark"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
      <motion.p
        className="mt-4 text-dark dark:text-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Loading... {progress}%
      </motion.p>
    </div>
  );
};

export default LoadingPage;
