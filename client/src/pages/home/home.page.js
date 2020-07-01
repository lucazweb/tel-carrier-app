import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';
import { getNumbers } from '../../store/numbers';

export const HomePage = ({ getNumbers, data }) => {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <Row center="xs" style={{ marginTop: 48 }}>
      <Col xs={10}></Col>
    </Row>
  );
};

const mapStateToProps = ({ numbers: { data: numbers } }) => {
  return {
    numbers,
  };
};

const mapDispatch = {
  getNumbers,
};

export const Home = connect(mapStateToProps, mapDispatch)(HomePage);
