import { useState } from 'react';

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

const AnecdoteDisplay = ({ anecdote, votes }) => (
  <div>
    <p>{anecdote}</p>
    <p>Has {votes} votes</p>
  </div>
);

const MostVoted = ({ anecdotes, votes }) => {
  const maxVotes = Math.max(...votes);
  const maxVoteIndex = votes.indexOf(maxVotes);

  if (votes.every((vote) => vote === 0)) {
    return <h2>No most popular vote is known yet</h2>;
  }
  return (
    <>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[maxVoteIndex]}</p>
      <p>Has {maxVotes} votes</p>
    </>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleAnecdoteVote = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <AnecdoteDisplay anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleAnecdoteVote} text="Vote" />
      <Button handleClick={handleNextAnecdote} text="Next Anecdote" />
      <MostVoted anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
