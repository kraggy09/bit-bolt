import { useContext, useRef } from "react";
import Search from "./Search";
import submit from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
const Filters = () => {
  const { setCurrency, setSortBy, defaults } = useContext(CryptoContext);

  let currencyRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
  };

  const handleSort = (e) => {
    e.preventDefault();
    let val = e.target.value;
    // console.log(val);
    setSortBy(val);
  };
  return (
    <div className="lg:border-2 flex-col lg:flex-row relative top-0 flex items-center justify-around border-gray-100 w-full h-12">
      <Search />

      <div className="flex flex-col md:flex-row  mb-5 lg:mb-0  lg:justify-center lg:items-center relative">
        <form
          className="flex items-center justify-center "
          onSubmit={handleSubmit}
        >
          <label htmlFor="currency" className="font-bold mx-2">
            Currency:
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            className="w-24 border pl-3 focus:border-cyan outline-0 rounded-lg bg-gray-200 mb-2 md:mb-0"
          />
          <button className="font-bold">
            <img src={submit} alt="submit" />
          </button>
        </form>
        <div className="lg:ml-10 ">
          <label>
            <span className="lg:font-bold text-md lg:text-md mr-2">
              Sort By:
            </span>
            <select className="bg-gray-200 lg:px-2" onClick={handleSort}>
              <option value="market_cap_desc">Market Cap Descending</option>
              <option value="market_cap_asc">Market Cap Asscending</option>
              <option value="volume_asc">Volume Asscending</option>
              <option value="volume_desc">Volume Descending</option>
              <option value="id_asc">ID Asscending</option>
              <option value="id_desc">ID Descending</option>
            </select>
          </label>
        </div>
        <button
          className="w-[2rem] absolute md:relative right-0  ml-4 hover:scale-110 transition-all transition-ease"
          onClick={defaults}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full fill-cyan"
            width="1em"
            height="1em"
            style={{
              msTransform: "rotate(360deg)",
              WebkitTransform: "rotate(360deg)",
              transform: "rotate(360deg)",
            }}
            viewBox="0 0 24 24"
          >
            <path d="M12 16c1.671 0 3-1.331 3-3s-1.329-3-3-3-3 1.331-3 3 1.329 3 3 3z" />
            <path d="M20.817 11.186a8.94 8.94 0 0 0-1.355-3.219 9.053 9.053 0 0 0-2.43-2.43 8.95 8.95 0 0 0-3.219-1.355 9.028 9.028 0 0 0-1.838-.18V2L8 5l3.975 3V6.002c.484-.002.968.044 1.435.14a6.961 6.961 0 0 1 2.502 1.053 7.005 7.005 0 0 1 1.892 1.892A6.967 6.967 0 0 1 19 13a7.032 7.032 0 0 1-.55 2.725 7.11 7.11 0 0 1-.644 1.188 7.2 7.2 0 0 1-.858 1.039 7.028 7.028 0 0 1-3.536 1.907 7.13 7.13 0 0 1-2.822 0 6.961 6.961 0 0 1-2.503-1.054 7.002 7.002 0 0 1-1.89-1.89A6.996 6.996 0 0 1 5 13H3a9.02 9.02 0 0 0 1.539 5.034 9.096 9.096 0 0 0 2.428 2.428A8.95 8.95 0 0 0 12 22a9.09 9.09 0 0 0 1.814-.183 9.014 9.014 0 0 0 3.218-1.355 8.886 8.886 0 0 0 1.331-1.099 9.228 9.228 0 0 0 1.1-1.332A8.952 8.952 0 0 0 21 13a9.09 9.09 0 0 0-.183-1.814z" />
            <path fill="rgba(0, 0, 0, 0)" d="M0 0h24v24H0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Filters;
