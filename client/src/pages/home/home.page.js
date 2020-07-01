import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../../store/numbers';
import { Table } from '../../components';

export const HomePage = ({ getNumbers, numbers }) => {
  const columns = [
    { title: 'Id' },
    { title: 'Number' },
    { title: 'Monthly Price' },
    { title: 'Setup Price' },
  ];

  const handleParams = (key, data) => {
    if (key !== 'currency') {
      if (key === 'monthyPrice' || key === 'setupPrice') {
        return `${data.currency} ${data[key]}`;
      }
      return data[key];
    }
    return;
  };

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10">
          <Table
            columns={columns}
            datasource={numbers}
            handleParams={handleParams}
          />
        </div>
      </div>
    </div>
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
