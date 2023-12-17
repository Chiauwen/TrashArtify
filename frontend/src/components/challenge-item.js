// ChallengeItem.js
import React, { useState } from 'react';

const ChallengeItem = ({ challenge, onVote }) => {
  const [votes, setVotes] = useState(0);

  const handleVote = () => {
    setVotes(prevVotes => prevVotes + 1);
    onVote(challenge.id);
  };

  return (
    <li>
      <img src={challenge.image} alt={`Challenge ${challenge.id}`} />
      <p>{challenge.description}</p>
      <p>Votes: {votes}</p>
      <button onClick={handleVote}>Vote</button>
    </li>
  );
}

export default ChallengeItem;
