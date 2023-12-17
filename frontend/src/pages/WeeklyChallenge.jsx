import React, { useState } from 'react';
import {
    ChallengeList,
    Header
  } from '../components'
const challengesData = [
  { id: 1, image: 'challenge1.jpg', description: 'Description for Challenge 1' },
  { id: 2, image: 'challenge2.jpg', description: 'Description for Challenge 2' },
];

const WeeklyChallengePage = () => {
  const [votes, setVotes] = useState({});

  const handleVote = (challengeId) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [challengeId]: (prevVotes[challengeId] || 0) + 1,
    }));
  };

  return (
    <div>
      <Header />
      <ChallengeList challenges={challengesData} onVote={handleVote} />
      <hr />
      <h2>Top Challenges</h2>
      <ul>
        {challengesData.map(challenge => (
          <li key={challenge.id}>
            <img src={challenge.image} alt={`Challenge ${challenge.id}`} />
            <p>{challenge.description}</p>
            <p>Votes: {votes[challenge.id] || 0}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeeklyChallengePage;
