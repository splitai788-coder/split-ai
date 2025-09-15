"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 1. Import AnimatePresence

const phrases = [
  'Sketch-to-Code',
  'Themed Environment',
  'Intelligent Memory',
  'Language to Logic',
  'Pair Programming',
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Changes every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">SPLIT AI</h1>
        <p className="text-lg text-gray-300 mb-4">
          A Multimodal Intelligent Developing Environment
        </p>

        {/* 2. Wrap the changing text with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.h2
            // 3. Add a key that changes, so AnimatePresence detects the change
            key={currentPhraseIndex}
            // 4. Define the down-to-up animation
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 h-20"
          >
            {phrases[currentPhraseIndex]}
          </motion.h2>
        </AnimatePresence>

        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
            Get Started
          </button>
          <button className="bg-transparent hover:bg-white/10 text-white font-semibold py-2 px-6 border border-white/50 rounded-lg transition-colors">
            Know More
          </button>
        </div>
        <div className="flex justify-center relative top-[50]">
          <Image
            src="/robot.gif"
            alt="Split AI Robot Mascot"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;