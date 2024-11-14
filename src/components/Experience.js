import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capatalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capatalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Developer Intern"
            company="MindTide.Ai"
            companyLink="https://www.mindtide.ai"
            time=" September 2024 - Present"
            address="San Francisco, USA"
            work="Working on Developing a new product for the company.For that Using stack of Python, FastAPI, React, NextJs, TailwindCSS, Docker, AWS.Developing a product called Buzzcraft for the company that is a web application that allows users to connect their social media accounts and post content on their behalf. "
          />
          <Details
            position="Fundraising Internship"
            company="Tare Zameen Foundation"
            companyLink="https://drive.google.com/file/d/1NMgkP6GVVV3980W-eciZ89OfV6viuxrX/view?usp=sharing"
            time=" July 2024 - August 2024"
            address="Shanti Colony, Delhi-110047, India"
            work="Developed strong communication and organizational skills by coordinating events, reaching out to potential donors, and creating compelling campaigns to raise awareness for causes I cared about, through this experience, I gained a deeper understanding of the importance of persistence, strategic planning"
          />
          <Details
            position="Junior Web developer"
            company="Eazygrad"
            companyLink="https://www.eazygrad.com"
            time=" May 2023 - July 2023"
            address="Remote"
            work="Worked on a team responsible for developing new features for building student Portal, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization."
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Experience;
