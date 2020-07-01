import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../../store/numbers';
import { Table, Loading } from '../../components';

export const HomePage = ({ getNumbers, loading, numbers }) => {
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
          {!loading && numbers.length > 0 ? (
            <Table
              columns={columns}
              datasource={numbers}
              handleParams={handleParams}
            />
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ ui: { loading }, numbers: { data: numbers } }) => {
  return {
    loading,
    numbers,
  };
};

const mapDispatch = {
  getNumbers,
};

export const Home = connect(mapStateToProps, mapDispatch)(HomePage);
