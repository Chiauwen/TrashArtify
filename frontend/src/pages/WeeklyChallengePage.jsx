import React, { useState } from 'react';
import { Header } from '../components';
import Container from 'react-bootstrap/Container';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './WeeklyChallengePage.css';
import challenge1 from '../assets/challenge1.jpg';
import challenge2 from '../assets/challenge2.png';
import challenge3 from '../assets/challenge3.jpg';
import challenge4 from '../assets/challenge4.jpg';
import uchallenge1 from '../assets/user-challenge1.jpg';
import uchallenge2 from '../assets/user-challenge2.png';
import uchallenge3 from '../assets/user-challenge3.jpg';

const topChallengesData = [
  {
    id: 1,
    image: challenge1,
    description: 'Required Material: plastics bottle and paper',
  },
  {
    id: 2,
    image: challenge2,
    description: 'Required Material: plastics bottle and aluminium can',
  },
  {
    id: 3,
    image: challenge3,
    description: 'Required Material: newspaper',
  },
  {
    id: 4,
    image: challenge4,
    description: 'Required Material: plastic bottle and aluminium can',
  },
];

const weeklyChallengesData = [
  {
    id: 1,
    image: uchallenge1,
    description: 'Vase',
  },
  {
    id: 2,
    image: uchallenge2,
    description: 'Newspaper handmade flower',
  },
  {
    id: 3,
    image: uchallenge3,
    description: 'coloring paper',
  },
];

const ChallengeList = ({ challenges, isTopChallenge, onVote, votes }) => {
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {challenges.map((challenge) => (
        <ChallengeItem
          key={challenge.id}
          challenge={challenge}
          isTopChallenge={isTopChallenge}
          onVote={onVote}
          votes={votes}
        />
      ))}
    </Row>
  );
};

const ChallengeItem = ({ challenge, isTopChallenge, onVote, votes }) => {
  const [localVotes, setLocalVotes] = useState(0);

  const handleVote = () => {
    setLocalVotes((prevVotes) => prevVotes + 1);
    onVote(challenge.id);
  };

  return (
    <Col className="col">
      <Card>
        <Card.Img
          variant="top"
          src={challenge.image}
          style={{ objectFit: 'cover', width: '100%', height: '300px' }}
        />
        <Card.Body>
          <Card.Title>{challenge.name}</Card.Title>
          <Card.Text>{challenge.description}</Card.Text>
          <Card.Text>{challenge.price}</Card.Text>
          {isTopChallenge ? (
            <Button variant="primary">View Steps</Button>
          ) : (
            <>
              <Button variant="primary" onClick={handleVote}>
                Vote Now
              </Button>
              <p>Total Votes: {votes[challenge.id] || 0}</p>
            </>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

const WeeklyChallengePage = () => {
  const [votes, setVotes] = useState({});

  const handleVote = (challengeId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [challengeId]: (prevVotes[challengeId] || 0) + 1,
    }));
  };

  return (
    <div className="weekly-challenge">
      <Header />

      <Container>
        <div className="top-challenge">
          <h2>Top Challenges this Week</h2>
          <ChallengeList challenges={topChallengesData} isTopChallenge={true} />
        </div>

        <div className="week-challenge">
          <h2>Weekly Challenges Handcraft</h2>
          <ChallengeList
            challenges={weeklyChallengesData}
            onVote={handleVote}
            isTopChallenge={false}
            votes={votes}
          />
          <hr />
        </div>
      </Container>
    </div>
  );
};

export default WeeklyChallengePage;
