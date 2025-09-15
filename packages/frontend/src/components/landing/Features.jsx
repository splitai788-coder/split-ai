"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Memory That Remembers",
    description: "It keeps context of components, decisions, and threads, so follow-ups land in the right file without re-explaining. Targeted, contextual recall means fewer repeats, cleaner handoffs, and smoother flow across sessions.",
    image: "/brain.gif",
    align: "left",
    backText: "Split AI’s conversational memory recalls components, decisions, and naming so follow‑ups like “add a footer to the last page” target the right code instantly, raising continuity and lowering churn.",
  },
  {
    title: "Build 55% Faster",
    description: "Go from idea to code in minutes with AI that speeds up the boring parts so shipping feels effortless. Independent tests show AI-assisted devs complete tasks up to 55% faster—now that pace is the default.",
    image: "/circle.gif",
    align: "right",
    backText: "Split AI turns voice and sketches into runnable code, then pairs that with AI suggestions to shrink build times dramatically, echoing measured productivity gains seen with AI pair‑programming tools in controlled studies."
  },
  {
    title: "Real-Time AI Pairing",
    description: "Code together while an AI teammate proposes fixes, tests, and docs—right in the live session. Teams move faster with fewer context switches and quicker progress on real codebases.",
    image: "/real-time.gif",
    align: "left",
    backText: "Real‑Time AI Pairing Collaborate in the same file while an AI teammate proposes merges, tests fixes, and documents changes, a pattern shown to boost throughput and participation on teams using AI assistance."
  }
];

const FeatureCard = ({ feature }) => {
  return (
    <motion.div
      className="relative w-full h-[350px] rounded-2xl cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{ rotateY: 180 }}
      // --- 1. SMOOTHER SPRING ANIMATION ---
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
    >
      {/* Front of the card */}
      <div style={{ backfaceVisibility: 'hidden' }} className="absolute w-full h-full">
        <div className="p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl h-full">
            <div className="bg-black rounded-xl h-full flex items-center justify-center p-8">
                <Image 
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={300}
                    className="w-auto h-auto max-h-full max-w-full rounded-lg"
                />
            </div>
        </div>
      </div>
      
      {/* Back of the card */}
      <div 
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} 
        className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1"
      >
        {/* --- 2. CORRECTED TEXT STYLING --- */}
        <div className="bg-black w-full h-full rounded-xl p-8">
            <p className="text-lg text-gray-300 text-left leading-relaxed">
              {feature.backText}
            </p>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why Split AI?</h2>
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${feature.align === 'right' ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2">
                <FeatureCard feature={feature} />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;