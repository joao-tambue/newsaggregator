import { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "lucide-react";

import { testimonials } from "../data/testimonials";
import { aboutSections } from "../data/aboutContent";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length - 1);

  const handleNextPaper = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="text-black/80">
      <div className="max-w-4xl mx-auto px-2 py-12 font-mono">
        {/* Intro */}
        <section>
          <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
            About News Aggregator
          </h1>

          <p className="text-lg mb-8">
            <strong>News Aggregator</strong> is a news platform designed to gather
            information from various reliable sources in one place, organized
            into categories such as sports, technology, politics, and more.
          </p>
        </section>

        {/* Dynamic Sections */}
        {aboutSections.map(({ id, title, icon: Icon, paragraphs }) => (
          <section key={id} className="mt-20 ">
            <Icon size={50} className="mx-auto mb-2" />
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>

            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-lg mt-4 max-w-4xl mx-auto"
              >
                {text}
              </p>
            ))}
          </section>
        ))}

        {/* Testimonials */}
        <section className="h-screen flex items-center justify-center">
          <div
            className="relative w-[500px] h-[300px]"
            onClick={handleNextPaper}
          >
            {testimonials.map((paper, index) => (
              <motion.div
                key={paper.id}
                className="absolute w-full h-full bg-white shadow-lg border border-black p-6 flex flex-col justify-center cursor-pointer"
                style={{
                  rotate: index * 3 - 6,
                  top: index * 3,
                  left: index * 3,
                  zIndex: index === currentIndex ? 10 : index,
                  opacity: index <= currentIndex ? 1 : 0,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: index <= currentIndex ? 1 : 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Box className="w-10 h-10 mb-2" />
                <h2 className="text-lg font-bold">{paper.title}</h2>
                <p className="text-sm mt-2">{paper.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
