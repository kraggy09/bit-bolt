import { useContext, useState } from "react";
import searcIcon from "../assets/search-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
import Shimmer from "./Shimmer";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const { getCryptoData } = useContext(CryptoContext);
  const { searchData, setCryptoData, setSearchData, setCoinSearch } =
    useContext(CryptoContext);
  if (searchText.length <= 0) {
    setSearchData(null);
  }
  const handleCoin = (coin) => {
    setCoinSearch(coin.id);
    setCryptoData([coin]);
    setSearchText("");
    console.log(coin);
  };

  return (
    <>
      <form className="w-96 relative flex items-center font-nunito">
        <input
          type="text"
          className="w-full outline-0 border-transparent focus:border-cyan border rounded-lg bg-gray-200 px-2"
          placeholder="Search for Coins"
          name="search"
          value={searchText}
          onChange={(e) => {
            e.preventDefault();
            let query = e.target.value;
            console.log(query);
            setSearchText(query);
          }}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            getCryptoData(searchText);
          }}
          className="absolute right-1 cursor-pointer"
        >
          <img src={searcIcon} className="w-full h-auto" alt="search-icon" />
        </button>
      </form>
      {searchText.length > 0 ? (
        <ul className="w-96 absolute top-11 left-11 cursor-pointer overflow-x-hidden  h-96 rounded-lg bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {searchData ? (
            searchData.map((coin) => {
              return (
                <div
                  onClick={() => {
                    handleCoin(coin);
                  }}
                  key={coin.id}
                  className="flex my-2 ml-7"
                >
                  <img
                    src={coin.thumb}
                    className="rounded-full"
                    alt={coin.id}
                  />
                  <span className="ml-2">{coin.name}</span>
                </div>
              );
            })
          ) : (
            <Shimmer />
          )}
        </ul>
      ) : (
        <div>No Coins Found</div>
      )}
    </>
  );
};
export default Search;
