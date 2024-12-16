import { useEffect, useState } from "react";
import StepsToApplyStyles from "./StepsToApply.module.css";

type StepsToApplyProps = {
  steps: {
    number: number;
    title: string;
    description: string;
  }[];
};

const StepsToApply: React.FC<StepsToApplyProps> = (props) => {
  const { steps } = props;

  // State to track which steps are active
  const [activeStep, setActiveStep] = useState<number>(-1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          return prevStep + 1; // Move to next step
        } else {
          return -1; // Reset to the first step after the last one
        }
      });
    }, 1000); // 1000ms = 1 second delay between each step activation

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [steps.length]);

  return (
    <>
      <div className="container p-0">
        <div className="py-4 text-center">
          <h2 className="fw-bold text-success">Step’s to Follow</h2>
        </div>
        <div className={`container my-5`}>
          <div className={StepsToApplyStyles["steps-container"]}>
            {steps.map((_v, _i) => (
              <div
                className={`${StepsToApplyStyles["step"]} ${
                  _i <= activeStep ? StepsToApplyStyles["active"] : ""
                }`}
                key={_i}
              >
                <div className={StepsToApplyStyles["step-number"]}>
                  {_v.number}
                </div>
                <div className={StepsToApplyStyles["step-title"]}>
                  <p className="fs-24 fw-bold">{_v.title}</p>
                  <span className="fs-16 text-dark">{_v.description}</span>
                </div>
                <div className={StepsToApplyStyles["step-line"]}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepsToApply;
