import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Step step={step} setStep={setStep} />
      <Counter step={step} count={count} setCount={setCount} />
      {count !== 0 && <Today setCount={setCount} />}
    </div>
  );
}

function Step({ step, setStep }) {
  return (
    <div className="settings vertical">
      <span>Step: {step}</span>
      <input
        type="range"
        value={step}
        min={1}
        max={31}
        onChange={(e) => setStep(Number(e.target.value))}
      />
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
        <span>
          Count:{" "}
          <input
            className="count"
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {isNaN(count)
            ? "Input Error"
            : count === 0
            ? "Today is "
            : count > 0
            ? count === 1
              ? `${count} day from today is `
              : `${count} days from today is `
            : count === -1
            ? `${Math.abs(count)} day ago was `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>
          {date.toDateString() === "Invalid Date" ? "" : date.toDateString()}
        </span>
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
