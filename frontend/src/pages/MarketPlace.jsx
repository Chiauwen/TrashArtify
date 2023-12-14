import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import flowerpot from '../assets/flower-pot.jpg';
import jar1 from '../assets/jar-holder.jpg';
import jar2 from '../assets/jar-holder2.jpg';
import phoneholder from '../assets/phone-holder.jpg';
import basket from '../assets/basket.jpg';
import pencilcase from '../assets/pencil-case.jpg';
import flowerbottle from '../assets/flower-bottle.jpg';

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
];

const MarketPlace = () => {
  return (
    <div className="marketplace">
      <h2>Market Place</h2>
      <p>from Trash to Treasure!</p>

      <div className="browse-items">
        {productData.map((product) => (
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary">View Product</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className='select-item'>

      </div>
    </div>
  );
};

export default MarketPlace;
