import React, { useState, useEffect } from "react";
import usePaymentHistory from "../../../../../../Hooks/usePaymentHistory";

const OrderDetails = () => {
  const [payments] = usePaymentHistory();
  const steps = ['Payment Pending', 'Processing', 'Shipped', 'Delivered'];
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Check if there is payment data, and if so, move to the next step (Processing)
    if (payments?.length > 0) {
      setCurrentStep(1); // Set to 1 to indicate 'Processing' step
    }
  }, [payments]);

  const handleStepClick = (index) => {
    if (index === currentStep) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  return (
    <>
      <div>
        <ul className="steps" id="stepProgress">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step ${index <= currentStep ? 'step-primary' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OrderDetails;
