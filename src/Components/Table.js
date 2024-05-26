import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <div className='table-container'>
        <table>
        <thead>
            <tr>
            {columns.map((column) => (
                <th key={column.accessor}>{column.header}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row) => (
            <tr key={row.plugID}>
                {columns.map((column) => (
                <td key={column.accessor}>{row[column.accessor]}</td>
                ))}
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default Table;
