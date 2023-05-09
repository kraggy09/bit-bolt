import { useContext, useRef } from "react";
import Search from "./Search";
import submit from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
const Filters = () => {
  const { setCurrency, setSortBy } = useContext(CryptoContext);

  let currencyRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    console.log(val);
    setSortBy(val);
  };
  return (
    <div className="border-2 relative top-0 flex items-center justify-around border-gray-100 w-full h-12">
      <Search />
      <div>
        <form className="flex relative" onSubmit={handleSubmit}>
          <label htmlFor="currency" className="font-bold mx-2">
            Currency:
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            className="w-24 border pl-3 focus:border-cyan outline-0 rounded-lg bg-gray-200"
          />
          <button className="font-bold absolute right-0 ">
            <img src={submit} alt="submit" />
          </button>
        </form>
      </div>
      <div>
        <label>
          <span className="font-bold mr-2">Sort By:</span>
          <select className="bg-gray-200 px-2" onClick={handleSort}>
            {/* (market_cap_asc,
              market_cap_desc,
              volume_asc,
              volume_desc,
              id_asc,
              id_desc)
              */}
            <option value="market_cap_asc">Market Cap Asscending</option>
            <option value="market_cap_desc">Market Cap Descending</option>
            <option value="volume_asc">Volume Asscending</option>
            <option value="volume_desc">Volume Descending</option>
            <option value="id_asc">ID Asscending</option>
            <option value="id_desc">ID Descending</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filters;
