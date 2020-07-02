import React from 'react';
import { Pagination } from './pagination.component';
import { StyledTable, StyledRow } from './table.styled';

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
      <StyledRow disabled={disabled} onClick={onClick}>
        {data &&
          data.map(({ rowData }, i) => {
            return rowData && <td key={i}>{rowData}</td>;
          })}
      </StyledRow>
    );
  };

  return (
    <>
      <StyledTable>
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
      </StyledTable>

      <Pagination />
    </>
  );
};
