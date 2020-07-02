import React from 'react';
import { Pagination } from './pagination.component';

export const Table = ({
  columns,
  datasource,
  handleParams,
  handleSelect,
  handleDisabledRow,
}) => {
  const handleClick = (data) => {
    if (handleSelect) {
      handleSelect(data);
    }
  };

  const Row = ({ data, onClick, disabled }) => {
    return (
      <tr style={{ color: disabled ? '#4caf50' : '#666' }} onClick={onClick}>
        {data &&
          data.map(({ rowData }, i) => {
            return rowData && <td key={i}>{rowData}</td>;
          })}
      </tr>
    );
  };

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {columns &&
              columns.map((col, index) => (
                <th key={index} scope="col">
                  {col.title}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {datasource &&
            datasource.map((item, index) => {
              const disabled = handleDisabledRow
                ? handleDisabledRow(item)
                : false;

              const rowData = Object.keys(item).reduce((acc, current) => {
                return [...acc, { rowData: handleParams(current, item) }];
              }, []);
              return (
                <Row
                  key={index}
                  onClick={() => handleClick(item)}
                  data={rowData}
                  disabled={disabled}
                />
              );
            })}
        </tbody>
      </table>

      <Pagination />
    </>
  );
};
