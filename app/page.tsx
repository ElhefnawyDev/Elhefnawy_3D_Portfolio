'use client'
import { useEffect, useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  BackgroundBoxesDemo
} from "./components";
import SimpleLoader from "./SimulatedLoader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Ensure the effect runs only on the client-side to avoid hydration issues
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Render loading state only on the client
  if (isLoading) {
    return <SimpleLoader />;
  }

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <BackgroundBoxesDemo />
    </div>
  );
}
