import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const combined = good + neutral + bad;
  const average = (good - bad) / combined || 0;
  const positive = (good / combined) * 100 || 0;
  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} setter={setGood} text="good" />
      <Button value={neutral} setter={setNeutral} text="netural" />
      <Button value={bad} setter={setBad} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        combined={combined}
        average={average === 0 ? 0 : average}
        positive={positive === 0 ? 0 : positive}
      />
    </div>
  );
};

export default App;
