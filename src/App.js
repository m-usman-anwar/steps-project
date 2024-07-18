import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1); // setStep is receiving the value of step in s and then using this s to decrement the value of step
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1); // setStep is receiving the value of step in s and then using this s to increment the value of step
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button onClick={handlePrevious}>👈 Previous</Button>
            <Button onClick={handleNext}>Next 👉</Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <button
      style={{ backgroundColor: "#7950f2", color: "#fff" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
