import React, { useState } from 'react';

const Table = ({ columns, data }) => {
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const filteredItem = data.filter((row) =>
    columns.some(
      (column) =>
        row[column.accessor]
          .toString()
          .toLowerCase()
          .indexOf(searchItem.toLowerCase()) > -1
    )
  );

  return (
    <div className='table-container'>
      <input
        type="text"
        placeholder="Search..."
        value={searchItem}
        onChange={handleSearch}
        style={{ padding: '8px', width: '50%'}}
      />
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredItem.map((row) => (
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
