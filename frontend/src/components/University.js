import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const University = ({ university }) => {
  return (
    <Card
      className='my-3 p-3 rounded'
      style={{ width: '18rem', overflow: 'hidden' }}
    >
      <Link to={`/university/${university._id}`}>
        <Card.Img src={university.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/university/${university._id}`}>
          <Card.Title as='div'>
            <strong>{university.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={university.rating}
            text={`${university.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${university.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default University;
