import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { SaveBtn } from "../components/TableComponent";
import { StorageContext } from "../context/StorageContext";
import { CryptoContext } from "../context/CryptoContext";

const Saved = () => {
  const { savedData } = useContext(StorageContext);
  const { currency } = useContext(CryptoContext);

  return (
    <section className="w-[80%] h-full mt-16 mb-24 relative">
      <div className="w-full min-h-[60vh] py-8 mt-9 border border-gray-100 rounded">
        {savedData ? (
          <table className="w-full table-auto">
            <thead className=" text-base text-gray-100 border-b border-gray-100">
              <tr>
                <th className="py-1">Asset</th>
                <th className="py-1 md:table-cell hidden">Name</th>
                <th className="py-1">Price</th>
                <th className="py-1 md:table-cell hidden">Total Volume</th>
                <th className="py-1 lg:table-cell hidden">
                  Market Cap Changes
                </th>
                <th className="py-1 lg:table-cell hidden">1H</th>
                <th className="py-1 lg:table-cell hidden">24H</th>
                <th className="py-1 lg:table-cell hidden">7D</th>
              </tr>
            </thead>
            <tbody>
              {savedData.map((data) => {
                return (
                  <tr
                    key={data.id}
                    className="text-base border-b  hover:text-cyan hover:bg-gray-200 last:border-b-0 cursor-pointer"
                  >
                    <td className="py-3 flex items-center uppercase">
                      <SaveBtn data={data} />
                      <img
                        src={data.image}
                        className="w-[2.2rem] rounded-full  h-[2.2rem] mx-2"
                        alt={data.name}
                      />
                      <span>
                        <Link to={`/${data.id}`} className="cursor-pointer">
                          {data.symbol}
                        </Link>
                      </span>
                    </td>
                    <td className="py-3 capitalize md:table-cell hidden">
                      <Link to={`/${data.id}`} className="cursor-pointer">
                        {data.name}
                      </Link>
                    </td>
                    <td className="py-3">
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: currency,
                      }).format(data.current_price)}
                    </td>
                    <td className="py-3 md:table-cell hidden">
                      {data.total_volume}
                    </td>
                    <td
                      className={
                        data.market_cap_change_percentage_24h > 0
                          ? "text-green lg:table-cell hidden py-3"
                          : "text-red lg:table-cell hidden py-3"
                      }
                    >
                      {data.market_cap_change_percentage_24h}%
                    </td>
                    <td
                      className={
                        data.price_change_percentage_1h_in_currency > 0
                          ? "text-green lg:table-cell hidden py-3"
                          : "text-red lg:table-cell hidden py-3"
                      }
                    >
                      {Number(
                        data.price_change_percentage_1h_in_currency
                      ).toFixed(3)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_24h_in_currency > 0
                          ? "text-green lg:table-cell hidden py-3"
                          : "text-red lg:table-cell hidden py-3"
                      }
                    >
                      {Number(
                        data.price_change_percentage_24h_in_currency
                      ).toFixed(3)}
                    </td>
                    <td
                      className={
                        data.price_change_percentage_7d_in_currency > 0
                          ? "text-green lg:table-cell hidden py-3"
                          : "text-red lg:table-cell hidden py-3"
                      }
                    >
                      {Number(
                        data.price_change_percentage_7d_in_currency
                      ).toFixed(3)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1 className="min-h-[60vh] text-lg text-cyan flex items-center justify-center">
            No Saved Coins
          </h1>
        )}
      </div>
      <Outlet />
    </section>
  );
};
export default Saved;
