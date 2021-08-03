import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/universities');

      setUniversities(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Top Rated Universities</h1>
      <Row>
        {universities.map((university) => (
          <Col key={university._id} sm={12} md={6} lg={4} xl={3}>
            <Product university={university} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
