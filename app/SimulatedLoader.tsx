import React, { useState, useEffect } from 'react';

const SimpleLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10; // Adjust increment value if needed
      });
    }, 300); // Adjust speed of progress

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-50">
      {/* Spinning Loader */}
      <div className="h-12 w-12 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"></div>

      {/* Progress Text */}
      <p className="text-white font-bold text-sm mt-4">{progress.toFixed(0)}%</p>
    </div>
  );
};

export default SimpleLoader;
