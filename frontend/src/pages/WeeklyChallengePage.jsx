// CombinedWeeklyChallenge.jsx
import React, { useState } from 'react'
import { Header } from '../components'
import Container from 'react-bootstrap/Container'
import './WeeklyChallengePage.css'
import challenge1 from '../assets/challenge1.jpg'

const challengesData = [
  {
    id: 1,
    image: challenge1,
    description: 'Description for Challenge 1',
  },
  {
    id: 2,
    image: 'challenge2.jpg',
    description: 'Description for Challenge 2',
  },
]

const ChallengeItem = ({ challenge, onVote }) => {
  const [votes, setVotes] = useState(0)

  const handleVote = () => {
    setVotes((prevVotes) => prevVotes + 1)
    onVote(challenge.id)
  }

  return (
    <li>
      <img src={challenge.image} alt={`Challenge ${challenge.id}`} />
      <p>{challenge.description}</p>
      <p>Votes: {votes}</p>
      <button onClick={handleVote}>Vote</button>
    </li>
  )
}

const ChallengeList = ({ challenges, onVote }) => {
  return (
    <div className="weekly-challenge">
      <h2>Current Challenges</h2>
      <h1></h1>
      <ul>
        {challenges.map((challenge) => (
          <ChallengeItem
            key={challenge.id}
            challenge={challenge}
            onVote={onVote}
          />
        ))}
      </ul>
    </div>
  )
}

const WeeklyChallengePage = () => {
  const [votes, setVotes] = useState({})

  const handleVote = (challengeId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [challengeId]: (prevVotes[challengeId] || 0) + 1,
    }))
  }

  return (
    <div className="weekly-challenge">
      <Header />

      <Container>
        <ChallengeList challenges={challengesData} onVote={handleVote} />
        <hr />
        <h2>Top Challenges</h2>
        <ul>
          {challengesData.map((challenge) => (
            <li key={challenge.id}>
              <img src={challenge.image} alt={`Challenge ${challenge.id}`} />
              <p>{challenge.description}</p>
              <p>Votes: {votes[challenge.id] || 0}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default WeeklyChallengePage
