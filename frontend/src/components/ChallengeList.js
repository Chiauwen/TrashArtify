// ChallengeList.js
import React from 'react';
import ChallengeItem from './challenge-item';

const ChallengeList = ({ challenges, onVote }) => {
  return (
    <div>
      <h2>Current Challenges</h2>
      <ul>
        {challenges.map(challenge => (
          <ChallengeItem key={challenge.id} challenge={challenge} onVote={onVote} />
        ))}
      </ul>
    </div>
  );
}

export default ChallengeList;
