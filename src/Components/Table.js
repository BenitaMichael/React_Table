import React, { useState } from 'react';

const Table = ({ columns, data }) => {
  const [searchItem, setSearchItem] = useState('');
  const [tableData, setTableData] = useState(data);

  const handleSearch = (event) => {
    setSearchItem(event.target.value);
  };

  const handleToggle = (id) => {
    const updatedData = tableData.map((row) =>
      row.plugID === id
        ? { ...row, plugin_stats: row.plugin_stats === 'active' ? 'disabled' : 'active' }
        : row
    );
    setTableData(updatedData);
  };

  const filteredItem = tableData.filter((row) =>
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
                <td key={column.accessor}>
                  {column.accessor === 'plugin_stats' ? (
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={row[column.accessor] === 'active'}
                        onChange={() => handleToggle(row.plugID)}
                      />
                      <span className="slider"></span>
                    </label>
                  ) : (
                    row[column.accessor]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
