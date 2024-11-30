import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Step step={step} setStep={setStep} />
      <Counter step={step} count={count} setCount={setCount} />
      <div className="Group">
        <Today setCount={setCount} />
        <Reset setStep={setStep} />
      </div>
    </div>
  );
}

function Step({ step, setStep }) {
  return (
    <div className="settings">
      <button
        onClick={() => {
          if (step > 1) setStep((s) => s - 1);
        }}
      >
        -
      </button>
      <span>Step: {step}</span>
      <button onClick={() => setStep((s) => s + 1)}>+</button>
    </div>
  );
}

function Counter({ step, count, setCount }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="settings">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? count === 1
              ? `${count} day from today is `
              : `${count} days from today is `
            : count === -1
            ? `${Math.abs(count)} day ago was `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

function Today({ setCount }) {
  return (
    <button
      onClick={() => {
        setCount(0);
      }}
      className="Today"
    >
      Back to today
    </button>
  );
}

function Reset({ setStep }) {
  return (
    <button
      onClick={() => {
        setStep(1);
      }}
      className="Reset"
    >
      Reset steps
    </button>
  );
}
