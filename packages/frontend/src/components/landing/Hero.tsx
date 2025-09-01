'use client';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gray-900 text-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 opacity-80"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
          Code at the Speed of Thought
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          The multi-modal AI assistant that turns voice, sketches, and natural language into clean, production-ready code.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
          Start Building for Free
        </button>
      </div>
    </section>
  );
};

export default Hero;