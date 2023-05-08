import { useEffect, useState } from "react";
import { createContext } from "react";

export const CryptoContext = createContext({});

export const CryptoProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState(null);
  const [searchData, setSearchData] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en"
      );
      const data = await response.json();
      console.log(data);
      setCryptoData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here
    }
  }
  async function getCryptoData(text) {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/search?query=${text}`
    );
    const json = await data.json();
    setSearchData(json.coins);
    console.log(searchData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CryptoContext.Provider value={{ cryptoData, searchData, getCryptoData }}>
      {children}
    </CryptoContext.Provider>
  );
};
