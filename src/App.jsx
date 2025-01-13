import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Filter from './components/Filter';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    startDate: '2020',
    endDate: '2024',
    minRevenue: 0,
    maxRevenue: 1000000,
    minNetIncome: 0,
    maxNetIncome: 1000000,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/AAPL?period=annual&apikey=JpidD0rvOR3RTA2SzCZpNNVhspO5naT8`);
      const result = await response.json();
      setData(result);
      setFilteredData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      const filtered = data.filter((item) => {
        const date = parseInt(item.date.split('-')[0]);
        return (
          date >= filters.startDate &&
          date <= filters.endDate &&
          item.revenue >= filters.minRevenue &&
          item.revenue <= filters.maxRevenue &&
          item.netIncome >= filters.minNetIncome &&
          item.netIncome <= filters.maxNetIncome
        );
      });
      setFilteredData(filtered);
    };
    filterData();
  }, [filters, data]);
  

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({ ...prev, [filterName]: value }));
  };

  

  const handleSort = (column) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (column === 'date') {
        return new Date(a.date) - new Date(b.date);
      }
      return a[column] - b[column];
    });
    setFilteredData(sortedData);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Apple Annual Income Statement</h1>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;
