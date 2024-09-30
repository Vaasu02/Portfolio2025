import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";

const monstserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      // Simulate asset loading
      for (let i = 0; i <= 100; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setProgress(i);
      }
      setLoading(false);
    };

    loadAssets();
  }, []);

  if (loading) {
    return <LoadingPage progress={progress} />;
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <title>Vasu's Portfolio - Full Stack Web Developer</title>
        <meta name="description" content="Welcome to Vasu's portfolio. Explore innovative web projects, ThreeJS visualizations, and full-stack development skills from a UIT RGPV graduate." />
        <meta name="keywords" content="Vasu portfolio, ThreeJS portfolio, UIT RGPV college, full stack web developer portfolio, React developer, Node.js developer, JavaScript expert, responsive web design, UI/UX design, web application development, software engineering projects" />
        <meta name="author" content="Vasu" />
        <meta property="og:title" content="Vasu's Portfolio - Full Stack Web Developer" />
        <meta property="og:description" content="Discover Vasu's portfolio showcasing cutting-edge web development projects, ThreeJS visualizations, and full-stack expertise. UIT RGPV graduate with a passion for innovative web solutions." />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`} /> */}
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vasu's Portfolio - Full Stack Web Developer" />
        <meta name="twitter:description" content="Explore Vasu's portfolio featuring impressive web projects, ThreeJS implementations, and full-stack development skills. UIT RGPV alumnus creating innovative digital experiences." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        {/* <link rel="canonical" href={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}${router.asPath}`} /> */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Head>
      <main className={`${monstserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
