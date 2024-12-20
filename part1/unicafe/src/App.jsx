import { useState } from 'react';

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const calculateAverage = () => {
    if (total === 0) return 0;
    return (good * 1 + bad * -1) / total;
  };

  const calculatePositive = () => {
    const total = good + neutral + bad;
    if (total === 0) return 0;
    return (good / total) * 100;
  };

  if (total === 0) {
    return (
      <div>
        <p>No feedback collected</p>
      </div>
    );
  }

  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total} </p>
      <p>average {calculateAverage()}</p>
      <p>positive {calculatePositive()} %</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
