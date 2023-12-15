import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import flowerpot from '../assets/flower-pot.jpg'
import jar1 from '../assets/jar-holder.jpg'
import jar2 from '../assets/jar-holder2.jpg'
import phoneholder from '../assets/phone-holder.jpg'
import basket from '../assets/basket.jpg'
import pencilcase from '../assets/pencil-case.jpg'
import flowerbottle from '../assets/flower-bottle.jpg'
import { Header } from '../components'
import './MarketPlace.css'
import Container from 'react-bootstrap/Container'

const productData = [
  {
    id: 1,
    name: 'Flower Pots',
    description: 'Flower pot made with plastic bottle',
    image: flowerpot,
  },
  {
    id: 2,
    name: 'Jar Holder',
    description: 'Flower pot made with plastic bottle',
    image: jar1,
  },
  {
    id: 3,
    name: 'Phone Holder',
    description: 'Flower pot made with plastic bottle',
    image: phoneholder,
  },
  {
    id: 4,
    name: 'Basket',
    description: 'Flower pot made with plastic bottle',
    image: basket,
  },
  {
    id: 5,
    name: 'Jar Holder',
    description: 'Flower pot made with plastic bottle',
    image: jar2,
  },
  {
    id: 6,
    name: 'Pencil Case',
    description: 'Flower pot made with plastic bottle',
    image: pencilcase,
  },
  {
    id: 7,
    name: 'Creative Flower Bottle',
    description: 'Flower pot made with plastic bottle',
    image: flowerbottle,
  },
]

const MarketPlace = () => {
  return (
    <div className="marketplace">
      <Header />
      <Container>
        <h2>Market Place</h2>
        <p>from Trash to Treasure!</p>

        <Row xs={1} md={2} lg={4} className="g-4">
          {productData.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: '18rem', height: '100%' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary">VIEW PRODUCT</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>


        <div className="select-item"></div>
      </Container>
    </div>
  )
}

export default MarketPlace
