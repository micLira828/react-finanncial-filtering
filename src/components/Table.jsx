const Table = ({ data }) => {
    return (
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Revenue</th>
            <th className="px-4 py-2 border">Net Income</th>
            <th className="px-4 py-2 border">Gross Profit</th>
            <th className="px-4 py-2 border">EPS</th>
            <th className="px-4 py-2 border">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.date}>
              <td className="px-4 py-2 border">{item.date}</td>
              <td className="px-4 py-2 border">{item.revenue}</td>
              <td className="px-4 py-2 border">{item.netIncome}</td>
              <td className="px-4 py-2 border">{item.grossProfit}</td>
              <td className="px-4 py-2 border">{item.eps}</td>
              <td className="px-4 py-2 border">{item.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  