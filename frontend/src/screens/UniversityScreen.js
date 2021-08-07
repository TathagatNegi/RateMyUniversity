import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUniversityDetails } from '../actions/universityActions';

const UniversityScreen = ({ match }) => {
  const dispatch = useDispatch();

  const universityDetails = useSelector((state) => state.universityDetails);
  const { loading, error, university } = universityDetails;

  useEffect(() => {
    dispatch(listUniversityDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
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
              <ListGroup.Item>
                Description: {university.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default UniversityScreen;
