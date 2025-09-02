import React from "react";
import { GithubIcon } from "@/components/Icons";
import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import p1image from "../../public/images/projects/landingpage1.png";
import p2image from "../../public/images/projects/foodordering.png";
import p3image from "../../public/images/projects/zoom.png";
import p4image from "../../public/images/projects/ai.png";
import p5image from "../../public/images/projects/blog.png";
import p6image from "../../public/images/projects/chat-application.png";
import p7image from "../../public/images/projects/image.png";
import p8image from "../../public/images/projects/docbot.png";

import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt="notfound"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-rigth-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="notfound"
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <div
        // href={link} //yaha Link ko div banaya hu
        // target="_blank"
        // className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </div>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit{" "}
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Project Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title="Document RAG Chatbot with LangChain"
                img={p8image}
                summary="An AI-powered chatbot that allows users to chat with their uploaded PDF files and documents. 
            Built with FastAPI, LangChain, Groq LLM, and Pinecone vector store for Retrieval-Augmented Generation (RAG). 
            The React + Vite frontend provides a modern chat interface with real-time messaging, source document display, 
            error handling, smooth loading states, and responsive design. 
            Integrated with GitHub Actions CI/CD pipeline for automated testing, linting, and deployment, 
            ensuring reliable and production-ready builds."
                link="https://github.com/Vaasu02/DocBot-RAG-UsingLangchain"
                github="https://github.com/Vaasu02/DocBot-RAG-UsingLangchain"
                type="Featured Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProjects
                title="Movie Ticket Booking Platform with Inngest"
                img={p7image}
                summary="A full-stack movie booking platform built with React, Node.js, MongoDB, Stripe, Clerk, TMDB API, and Inngest. 
                        Features real-time seat selection and Stripe payment integration. Includes admin dashboard for managing shows, bookings, and analytics, 
                        with TMDB API integration for movie data and trailers. Implements Inngest background jobs for automated notifications and booking cleanup with responsive design."
                link="https://quickshowbooking.vercel.app"
                github="https://github.com/Vaasu02/Movie-Booking-App-With-INNGEST"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Food Ordering Application"
                img={p2image}
                summary="A feature-rich Food Ordering App using React, Tailwind CSS, Context API, React Router and Stripe payment gateway. 
                        It shows detail regarding all the items in the menu. You can easily filter and choose accordingly."
                link="https://foodisterfrontend.onrender.com/"
                github="https://github.com/Vaasu02/FOODISTER"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Chat Application"
                img={p6image}
                summary="A real-time Chat Application built with MERN, Tailwind CSS, DaisyUI, and Socket.io.
It features secure JWT-based Authentication & Authorization, online user tracking, and live messaging.
Zustand is used for global state management, with robust error handling on both client and server sides.

"
                link="https://chat-app-q3qq.onrender.com/login"
                github="https://github.com/Vaasu02/Chat-Application"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Zoom Clone"
                img={p3image}
                summary="I built a Zoom clone utilizing Clerk for authentication, with Next.js and TypeScript as the framework. Tailwind CSS was used for styling, and the video conferencing feature was implemented using the GetStream.io API."
                link="https://zoom-clonee.vercel.app/"
                github="https://github.com/Vaasu02/Zoom_Clone"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AI Chatterpillar"
                img={p4image}
                summary="ChatterPillar is an advanced AI-powered chat application developed using the GEMINI API and the MENR stack (MongoDB, Express.js, Node.js, and React). It features robust user authentication provided by Clerk, ensuring a secure and personalized chat experience."
                link="/"
                github="https://github.com/Vaasu02/PROJECT-MERN"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="BloggingHub"
                img={p5image}
                summary="A feature-rich Blog Website built using React.js, Tailwind CSS, MongoDB, and Mongoose. It allows users to register, create, and manage blog posts. The website features dynamic radial gradient backgrounds, responsive design, SEO-friendly metadata, and loading states for smooth user experience."
                link="https://bloggginghubb.onrender.com"
                github="https://github.com/Vaasu02/Blog2"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Modern UI/UX landing Page"
                img={p1image}
                summary="A feature-rich Landing page using React, Tailwind CSS. 
                        It shows detail regarding almost all the  futuristic bank. This project was created as a way to experiment with modern web development technologies, including the use of a UI library to speed up development."
                link="https://modern-design-landingpage.netlify.app/"
                github="https://github.com/Vaasu02/Modern-UI-UX-Landing-Page"
                type="Web-Design Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="SaaS Project"
                img={project1}
                summary="Working...."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
