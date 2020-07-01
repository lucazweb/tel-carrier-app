import React from 'react';

export const Home = () => {
  return <pre> Home </pre>;
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
