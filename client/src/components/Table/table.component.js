import React from 'react';
import { Pagination } from './pagination.component';

export const Table = ({ columns, datasource, handleParams }) => {
  const Row = ({ data }) => {
    return (
      <tr>
        {data &&
          data.map((item, i) => {
            return item.rowData && <td key={i}>{item.rowData}</td>;
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
              const rowData = Object.keys(item).reduce((acc, current) => {
                return [...acc, { ['rowData']: handleParams(current, item) }];
              }, []);
              return <Row key={index} data={rowData} />;
            })}
        </tbody>
      </table>

      <Pagination />
    </>
  );
};
