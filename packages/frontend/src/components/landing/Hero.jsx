import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white pt-20">
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">SPLIT AI</h1>
        <p className="text-lg text-gray-300 mb-4">
          A Multimodal Intelligent Developing Environment
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Sketch-to-Code
        </h2>
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