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
            company="Mindtide.ai"
            companyLink="https://test.buzzcraft.io/"
            time="October 2024 - Present"
            address="San Francisco, USA"
            work="Developed BuzzCraft, a social media automation platform for content creation and scheduling. Enhanced platform responsiveness by 25% using FastAPI and Vue.js. Optimized API endpoints, boosting social media data integration by 20%. Built a real-time post scheduling feature with calendar view, increasing user engagement."
          />
          <Details
            position="Fundraising Internship"
            company="Tare Zameen Foundation"
            companyLink="https://drive.google.com/file/d/1NMgkP6GVVV3980W-eciZ89OfV6viuxrX/view?usp=sharing"
            time="July 2024 - August 2024"
            address="Shanti Colony, Delhi-110047, India"
            work="Developed strong communication and organizational skills by coordinating events, reaching out to potential donors, and creating compelling campaigns to raise awareness for causes I cared about, through this experience, I gained a deeper understanding of the importance of persistence, strategic planning"
          />
          <Details
            position="Freelance Web Developer"
            company="Freelance"
            companyLink="#"
            time="July 2023 - August 2024"
            address="Remote"
            work="Developed responsive e-commerce websites using React.js, Tailwind CSS, and Redux Toolkit. Integrated payment gateways like Stripe and implemented SEO best practices, increasing sales and traffic by 30% and 40%, respectively. Designed custom admin dashboards to enhance data management efficiency for clients."
          />
          <Details
            position="Junior Web developer"
            company="Eazygrad"
            companyLink="https://www.eazygrad.com"
            time="Jan 2023 - June 2023"
            address="Remote"
            work="Worked on a team responsible for developing new features for building student Portal, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
