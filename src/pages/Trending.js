import { useContext } from "react";
import { TrendingContext } from "../context/TrendingContext";
import TrendingCoins from "../components/TrendingCoins";
import { Outlet } from "react-router-dom";

const Trending = () => {
  const { trend } = useContext(TrendingContext);
  return (
    <section className="w-[80%] h-full flex flex-col mt-16 mb-24 relative">
      <div className="flex flex-wrap w-full min-h-[60vh] justify-evenly py-8 mt-9 border border-gray-100 rounded">
        {trend &&
          trend.map((coin) => (
            <TrendingCoins data={coin.item} key={coin.item.id} />
          ))}
      </div>
      <Outlet />
    </section>
  );
};
export default Trending;
