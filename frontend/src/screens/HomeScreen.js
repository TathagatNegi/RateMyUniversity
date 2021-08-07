import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import University from '../components/University';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUniversity } from '../actions/universityActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const universityList = useSelector((state) => state.universityList);
  const { loading, error, universities } = universityList;

  useEffect(() => {
    dispatch(listUniversity());
  }, [dispatch]);

  return (
    <>
      <h1>Top Rated Universities</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {universities.map((uni) => (
            <Col key={uni._id} sm={12} md={6} lg={4} xl={3}>
              <University university={uni} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
