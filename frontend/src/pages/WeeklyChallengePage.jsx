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
    description: 'Required Material',
  },
  {
    id: 2,
    image: challenge2,
    description: 'Description for Challenge 2',
  },
  {
    id: 3,
    image: challenge3,
    description: 'Description for Challenge 3',
  },
  {
    id: 4,
    image: challenge4,
    description: 'Description for Challenge 4',
  },
];

const weeklyChallengesData = [
  {
    id: 1,
    image: uchallenge1,
    description: 'Description for Challenge 3',
  },
  {
    id: 2,
    image: uchallenge2,
    description: 'Description for Challenge 4',
  },
  {
    id: 3,
    image: uchallenge3,
    description: 'Description for Challenge 4',
  },
];

const ChallengeList = ({ challenges, onVote }) => {
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {challenges.map((challenge) => (
        <ChallengeItem key={challenge.id} challenge={challenge} onVote={onVote} />
      ))}
    </Row>
  );
};

const ChallengeItem = ({ challenge, onVote }) => {
  const [votes, setVotes] = useState(0);

  const handleVote = () => {
    setVotes((prevVotes) => prevVotes + 1);
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
          <Button variant="primary" onClick={handleVote}>
            Try Now
          </Button>
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
          <ChallengeList challenges={topChallengesData} onVote={handleVote} />
        </div>

        <div className="week-challenge">
          <h2>Weekly Challenges</h2>
          <ChallengeList challenges={weeklyChallengesData} onVote={handleVote} />
          <hr />
        </div>
      </Container>
    </div>
  );
};

export default WeeklyChallengePage;
