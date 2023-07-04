import { useEffect, useState } from "react";
import { createContext } from "react";
import { useAsyncError } from "react-router-dom";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [coinSearch, setCoinSearch] = useState("");
  const [currency, setCurrency] = useState("inr");
  const [sortBy, setSortBy] = useState("market_cap_desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [tPage, setTotalPage] = useState(250);
  const [perPage, setPerPage] = useState(10);
  const [coinData, setCoinData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [coinSearch, currency, currentPage, sortBy, perPage]);

  const defaults = () => {
    setCurrentPage(1);
    setCoinSearch("");
  };

  async function fetchData() {
    setTotalPage(13220);

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      const data = await response.json();
      //console.log(data);
      setCryptoData(data);
    } catch (error) {
      /*console.log(
        "Please try after sometime as the API is called maximum time"
      );
      */
      // Handle the error here
    }
  }
  async function getCryptoData(text) {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${text}`
    );
    const json = await data.json();
    setSearchData(json.coins);
    //console.log(searchData);
  }
  const getCoinData = async (coinid) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`
      );
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      //console.log("Error fetching data:", error);
      // Handle the error here
    }
  };

  return (
    <CryptoContext.Provider
      value={{
        cryptoData,
        searchData,
        currency,
        currentPage,
        tPage,
        perPage,
        coinData,
        setCoinSearch,
        setSortBy,
        setCryptoData,
        getCryptoData,
        setCurrency,
        setSearchData,
        setCurrentPage,
        setTotalPage,
        setPerPage,
        setCoinData,
        defaults,
        getCoinData,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
