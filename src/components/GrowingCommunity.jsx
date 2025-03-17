import React, { useEffect, useState, useRef } from "react";

const AnimatedStat = ({ value, isVisible }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2500;
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCurrentValue(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const startAnimation = (timestamp) => {
      start = timestamp;
      requestAnimationFrame(step);
    };

    requestAnimationFrame(startAnimation);
  }, [value, isVisible]);

  return (
    <h2 className="mb-4 text-4xl font-bold md:text-6xl">{currentValue}</h2>
  );
};

const GrowingCommunity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(observerRef.current);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);
  const imagePath = import.meta.env.VITE_PATH || "/";
  return (
    <div
      ref={observerRef}
      className="relative py-12 md:py-20  text-white bg-center bg-cover max-w-[90%] md:max-w-[80%] mx-auto rounded-3xl shadow-2xl"
      style={{
        backgroundImage: `url('./${imagePath}/news-bg.jpg')`,
      }}
    >
      <div className="container z-10 px-4 mx-auto text-center">
        <h1 className="mb-6 text-2xl font-bold md:mb-8 md:text-4xl">
          We are here to turn your networking into growth.
        </h1>
        <p className=""></p>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-start justify-center ">
              <AnimatedStat value={2000} isVisible={isVisible} />
              <span className="text-2xl md:text-4xl">+</span>
            </div>
            <p className="text-base md:text-lg md:w-full max-w-[90%] mx-auto">
              Professionals available to bring your project to life.
            </p>
          </div>

          <div>
            <div className="flex items-start justify-center ">
              <AnimatedStat value={1000} isVisible={isVisible} />
              <span className="text-2xl md:text-4xl">+</span>
            </div>
            <p className="text-base md:text-lg md:w-full max-w-[90%] mx-auto">
              Scope of Work documents delivered for clarity and success.
            </p>
          </div>
          <div>
            <div className="flex items-start justify-center ">
              <AnimatedStat value={500} isVisible={isVisible} />
              <span className="text-2xl md:text-4xl">+</span>
            </div>
            <p className="text-base md:text-lg md:w-full max-w-[90%] mx-auto">
              Tools and resources shared to support your growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowingCommunity;
