const TableComponent = () => {
  return (
    <div className="mt-9 flex flex-col border border-gray-100">
      <table className="w-full table-auto">
        <thead className=" text-base text-gray-100 border-b border-gray-100">
          <tr>
            <th className="py-1">Asset</th>
            <th className="py-1">Name</th>
            <th className="py-1">Price</th>
            <th className="py-1">Total Volume</th>
            <th className="py-1">Market Cap Changes</th>
            <th className="py-1">1H</th>
            <th className="py-1">24H</th>
            <th className="py-1">7D</th>
          </tr>
        </thead>
        <tbody className="text-base border-b hover:bg-gray-200 last:border-b-0 cursor-pointer">
          <td className="py-3">Asset</td>
          <td className="py-3">Name</td>
          <td className="py-3">Price</td>
          <td className="py-3">Total Volume</td>
          <td className="py-3">Market Cap Changes</td>
          <td className="py-3">1H</td>
          <td className="py-3">24H</td>
          <td className="py-3">7D</td>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
