import Image from 'next/image';

const features = [
  {
    title: "Memory That Remembers",
    description: "It keeps context of components, decisions, and threads, so follow-ups land in the right file without re-explaining. Targeted, contextual recall means fewer repeats, cleaner handoffs, and smoother flow across sessions.",
    image: "/brain.gif",
    align: "left"
  },
  {
    title: "Build 55% Faster",
    description: "Go from idea to code in minutes with AI that speeds up the boring parts so shipping feels effortless. Independent tests show AI-assisted devs complete tasks up to 55% faster—now that pace is the default.",
    image: "/circle.gif",
    align: "right"
  },
  {
    title: "Real-Time AI Pairing",
    description: "Code together while an AI teammate proposes fixes, tests, and docs—right in the live session. Teams move faster with fewer context switches and quicker progress on real codebases.",
    image: "/real-time.gif",
    align: "left"
  }
];

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
              <div className="md:w-1/2 p-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                  <div className="bg-black rounded-xl p-8">
                      <Image 
                          src={feature.image}
                          alt={feature.title}
                          width={500}
                          height={500}
                          className="w-full h-auto rounded-lg"
                      />
                  </div>
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