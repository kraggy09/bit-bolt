import { useContext, useState } from "react";
import searcIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import Shimmer from "./Shimmer";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const {
    getCryptoData,
    setSearchData,
    searchData,
    setCryptoData,
    setCoinSearch,
  } = useContext(CryptoContext);

  const handleInputChange = (e) => {
    let query = e.target.value;
    setSearchText(query);
    setSearchData(null);
  };

  const handleCoin = (coin) => {
    setCoinSearch(coin.id);
    setCryptoData([coin]);
    setSearchText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCryptoData(searchText);
  };

  return (
    <>
      <form className="w-full my-1 lg:my-0 lg:w-80 relative flex items-center font-nunito">
        <input
          type="text"
          className="w-full outline-0 py-2 mb-2 lg:py-0 lg:my-1 border-transparent focus:border-cyan border rounded-lg bg-gray-200 px-2"
          placeholder="Search for Coins"
          name="search"
          value={searchText}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="absolute right-1 cursor-pointer"
        >
          <img src={searcIcon} className="w-full h-auto" alt="search-icon" />
        </button>
      </form>
      {searchText.length > 0 && (
        <ul className="lg:w-96 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200 w-72 md:w-full absolute lg:top-11 top-2 md:top-5 z-50 lg:left-11 left-3 cursor-pointer overflow-x-hidden h-96 rounded-lg bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {searchData ? (
            searchData.map((coin) => (
              <div
                onClick={() => handleCoin(coin)}
                key={coin.id}
                className="flex my-2 ml-7"
              >
                <img src={coin.thumb} className="rounded-full" alt={coin.id} />
                <span className="ml-2">{coin.name}</span>
              </div>
            ))
          ) : (
            <Shimmer />
          )}
        </ul>
      )}
    </>
  );
};

export default Search;
