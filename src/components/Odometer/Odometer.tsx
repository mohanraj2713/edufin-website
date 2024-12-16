import React, { useEffect, useState } from "react";
import OdometerStyles from "./Odometer.module.css";

type OdometerProps = {
  number: number;
  digits: number;
};

const Odometer: React.FC<OdometerProps> = ({ number, digits }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  // Handle updating the number with a smooth transition within 2 seconds
  useEffect(() => {
    const duration = 100; // Total time for animation in milliseconds (2 seconds)
    const start = currentNumber;
    const end = number;
    const difference = end - start;
    const steps = 100; // Total number of steps for the transition
    const stepDuration = duration / steps; // Time per step

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      const newNumber = start + (difference * currentStep) / steps;
      setCurrentNumber(Math.floor(newNumber));

      if (currentStep >= steps) {
        clearInterval(interval); // Stop the interval once the target is reached
      }
    }, stepDuration);

    return () => clearInterval(interval); // Cleanup on component unmount or number change
  }, [number, currentNumber]);

  return (
    <div className={`${OdometerStyles["odometer"]}`}>
      {String(currentNumber)
        .padStart(digits, "0") // Ensure 5 digits are always displayed
        .split("")
        .map((digit, index) => (
          <div className={`${OdometerStyles["digit"]}`} key={index}>
            <div
              className={`fs-24 fs-sm-16 fw-bold ${OdometerStyles["odometer-number"]}`}
            >
              {digit}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Odometer;
