import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0));

  const voting = () => {
    setVote((prevVotes) => {
      const copyValue = [...prevVotes];
      copyValue[selected] += 1;
      return copyValue;
    });
  };

  const randomNumberGen = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const indexBestOne = vote.reduce(
    (maxIndex, currentValue, currentIndex, arr) =>
      currentValue > arr[maxIndex] ? currentIndex : maxIndex,
    0
  );

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <span>{vote[selected]} </span>
      <button onClick={voting}>vote</button>
      <button onClick={randomNumberGen}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexBestOne]}</p>
      <p>has {vote[indexBestOne]} votes</p>
    </div>
  );
};

export default App;
