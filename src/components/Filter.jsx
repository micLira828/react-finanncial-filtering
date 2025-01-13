const Filter = ({ filters, onFilterChange }) => {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Start Date</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={filters.startDate}
              onChange={(e) => onFilterChange('startDate', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Date</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={filters.endDate}
              onChange={(e) => onFilterChange('endDate', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Min Revenue</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={filters.minRevenue}
              onChange={(e) => onFilterChange('minRevenue', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Max Revenue</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={filters.maxRevenue}
              onChange={(e) => onFilterChange('maxRevenue', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Min Net Income</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={filters.minNetIncome}
              onChange={(e) => onFilterChange('minNetIncome', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Max Net Income</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={filters.maxNetIncome}
              onChange={(e) => onFilterChange('maxNetIncome', e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Filter;