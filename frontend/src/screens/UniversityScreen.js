import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const UniversityScreen = ({ match }) => {
  const [university, setUniversity] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/universities/${match.params.id}`);

      setUniversity(data);
    };

    fetchProduct();
  }, [match]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={university.image} alt={university.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{university.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={university.rating}
                text={`${university.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Location: {university.location}</ListGroup.Item>
            <ListGroup.Item>
              Description: {university.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default UniversityScreen;
