"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Shapes3DLoader = ({ progress = 0 }) => {
  const [loadingText, setLoadingText] = useState("Loading 3D Assets");
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const cubeVariants = {
    animate: {
      rotateX: [0, 360],
      rotateY: [0, 360],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const sphereVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-light/50 to-light/20 dark:from-dark/50 dark:to-dark/20 rounded-lg border border-dark/10 dark:border-light/10">
      {/* 3D-like loading animation */}
      <div className="relative mb-6">
        {/* Animated cube */}
        <motion.div
          variants={cubeVariants}
          animate="animate"
          className="w-16 h-16 border-2 border-primary dark:border-primaryDark"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.1) 70%)",
            transformStyle: "preserve-3d"
          }}
        />
        
        {/* Floating spheres */}
        <motion.div
          variants={sphereVariants}
          animate="animate"
          className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/60 dark:bg-primaryDark/60"
        />
        <motion.div
          variants={sphereVariants}
          animate="animate"
          className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-primary/40 dark:bg-primaryDark/40"
          transition={{ delay: 0.5 }}
        />
      </div>

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-lg font-semibold text-dark dark:text-light mb-2">
          {loadingText}{dots}
        </h3>
        <p className="text-sm text-dark/70 dark:text-light/70">
          Preparing interactive 3D experience
        </p>
        {progress > 0 && (
          <p className="text-xs text-primary dark:text-primaryDark mt-1 font-medium">
            {Math.round(progress)}% loaded
          </p>
        )}
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="mt-6 w-40 h-2 bg-dark/20 dark:bg-light/20 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-primary dark:bg-primaryDark rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: progress > 0 ? `${progress}%` : "30%" }}
          transition={{
            duration: progress > 0 ? 0.3 : 2,
            repeat: progress > 0 ? 0 : Infinity,
            ease: progress > 0 ? "easeOut" : "easeInOut"
          }}
        />
      </motion.div>

      {/* Subtle particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 dark:bg-primaryDark/30 rounded-full"
            initial={{
              x: Math.random() * 300,
              y: Math.random() * 200,
              opacity: 0
            }}
            animate={{
              y: [null, -50],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Shapes3DLoader;