"use client";
import React, { useState, useEffect } from "react";

// Helper function to format time as HH:MM:SS
const formatTime = (timeInSeconds: number): string => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

const Timer24Hours: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => {
        // If time reaches 0, reset to 24 hours (86400 seconds)
        if (prevTime <= 0) {
          return 24 * 60 * 60;
        }
        return prevTime - 1;
      });
    }, 1000); // Update every second

    // Clean up interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div className="text-xl font-mono font-bold text-red-500">
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default Timer24Hours;
