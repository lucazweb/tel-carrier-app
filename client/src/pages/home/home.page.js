import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getNumbers } from '../../store/numbers';
import { Table, Loading, Modal } from '../../components';
import { DetailBox, List, ListItem } from './home.styled';
import { setAvailability, checkAvailability } from '../../services/localData';

export const HomePage = ({ getNumbers, loading, numbers }) => {
  const [selected, setSelected] = useState(null);
  const [displayEdit, setDisplayEdit] = useState(false);

  const columns = [
    { title: 'Id' },
    { title: 'Number' },
    { title: 'Monthly Price' },
    { title: 'Setup Price' },
  ];

  const handleDataFormat = (key, data) => {
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

  const handleDataEdit = (selectedData) => {
    setDisplayEdit((prevState) => !prevState);
    setSelected(selectedData);
  };

  const handleModalClose = () => {
    setDisplayEdit(false);
  };

  const handleNumberSale = (obj) => {
    console.log(obj);
    setAvailability(obj);
  };

  const SelectedDetails = ({ obj }) => {
    const data = Object.keys(obj).reduce((acc, current) => {
      return [...acc, { key: current, value: obj[current] }];
    }, []);

    const currency = obj.currency;
    const handleCurrency = (key) =>
      key === 'monthyPrice' || key === 'setupPrice';

    const titles = {
      id: 'ID',
      value: 'Number',
      monthyPrice: 'Monthy Price',
      setupPrice: 'Setup Price',
    };

    const handleKeys = (key) => titles[key];

    return (
      <List>
        {data.map((el, index) => {
          if (el.key !== 'currency') {
            const { key, value } = el;
            return (
              <ListItem key={index}>
                <strong>{handleKeys(key)}</strong>
                <span>
                  {`${handleCurrency(key) ? currency : ''} `}
                  {value}
                </span>
              </ListItem>
            );
          } else {
            return null;
          }
        })}
      </List>
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">
            {!loading ? (
              <>
                {numbers.length > 0 ? (
                  <Table
                    columns={columns}
                    datasource={numbers}
                    handleParams={handleDataFormat}
                    handleSelect={handleDataEdit}
                    handleDisabledRow={checkAvailability}
                  />
                ) : (
                  <pre>Sem resultados</pre>
                )}
              </>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      <Modal
        display={displayEdit}
        title="Purchase number"
        handleClose={handleModalClose}
        actionTitle={
          selected && checkAvailability(selected) ? 'Purchase' : 'Not avaiable'
        }
        allowAction={selected ? checkAvailability(selected) : false}
        handleAction={() => handleNumberSale(selected)}
      >
        <DetailBox>{selected && <SelectedDetails obj={selected} />}</DetailBox>
      </Modal>
    </>
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
