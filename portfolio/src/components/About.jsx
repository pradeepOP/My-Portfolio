import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#0a192f]  pb-8 md:pb-1 pt-14">
      <div className="max-w-[1000px] mx-auto p-4  w-full h-full">
        <h1 className="inline text-4xl font-bold text-gray-300 border-b-4 border-pink-600 ">
          About Me
        </h1>
        <p className="pt-6 font-mono text-lg tracking-wide text-gray-300">
          Who Am I?
        </p>
        <p className="pt-4 text-lg leading-relaxed tracking-wider text-gray-300">
          Hey there! I'm <span className="text-lg text-pink-600">Pradeep</span>
          ,a graduate from elctronics, communication and information engineering
          and a full-stack developer with a knack for turning ideas into
          polished digital experiences.
        </p>
        <p className="pt-2 text-lg leading-relaxed tracking-wider text-gray-300 md:pt-6">
          From sleek front-end designs to robust back-end solutions, I love
          bringing projects to life through clean, efficient code. With a
          passion for learning and innovation, I stay ahead of the curve on the
          latest technologies and trends.
        </p>
        <p className="pt-2 text-lg leading-relaxed tracking-wider text-gray-300 md:pt-6">
          Collaboration is key to my process—I thrive in team environments where
          ideas flow freely and creativity knows no bounds. Let's connect and
          bring your digital vision to life!
        </p>
      </div>
    </div>
  );
};

export default About;
