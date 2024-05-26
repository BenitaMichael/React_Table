import React from 'react';
import './App.css';

// COMPONENTS
import Header from './Components/Header';
import Footer from './Components/Footer';
import Table from './Components/Table';

function App() {
  const data = [
    {
      "plugID": "gdcnye7",
      "plugin_name": "SportyBet",
      "plugin_location": "Nigeria",
      "plugin_stats": "active",
      "plugin_rate": "40%"
    },
    {
      "plugID": "wusolk2",
      "plugin_name": "Flashscore",
      "plugin_location": "Australia",
      "plugin_stats": "disabled",
      "plugin_rate": "20%"
    },
    {
      "plugID": "hgvuje7",
      "plugin_name": "Betway",
      "plugin_location": "Nigeria",
      "plugin_stats": "active",
      "plugin_rate": "65%"
    },
    {
      "plugID": "nvfdks6",
      "plugin_name": "Betfair",
      "plugin_location": "USA",
      "plugin_stats": "active",
      "plugin_rate": "30%"
    },
    {
      "plugID": "lxjsns4",
      "plugin_name": "Hollybets",
      "plugin_location": "South Africa",
      "plugin_stats": "disabled",
      "plugin_rate": "50%"
    },
    {
      "plugID": "ydjnxn0",
      "plugin_name": "Bet9ja",
      "plugin_location": "Nigeria",
      "plugin_stats": "disabled",
      "plugin_rate": "40%"
    }
  ];

  const columns = [
    { header: 'Plug ID', accessor: 'plugID' },
    { header: 'Plugin Name', accessor: 'plugin_name' },
    { header: 'Location', accessor: 'plugin_location' },
    { header: 'Status', accessor: 'plugin_stats' },
    { header: 'Rate', accessor: 'plugin_rate' },
  ];

  return (
    <>
      <Header />
      <Table columns={columns} data={data} />
      <Footer />
    </>
  );
}

export default App;
