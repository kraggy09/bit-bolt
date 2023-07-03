import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { CryptoContext } from "./CryptoContext";

export const StorageContext = createContext({});

export const StorageProvider = ({ children }) => {
  let { currency, sortBy, perPage, currentPage } = useContext(CryptoContext);
  const [coins, setCoins] = useState([]);
  const [savedData, setSavedData] = useState();

  const saveCoins = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));
    if (oldCoins.includes(coinId)) {
      return null;
    } else {
      let newCoins = [...oldCoins, coinId];
      setCoins(newCoins);
      localStorage.setItem("coins", JSON.stringify(newCoins));
    }
  };

  const removeCoins = (coinId) => {
    let oldCoins = JSON.parse(localStorage.getItem("coins"));
    let newCoins = oldCoins.filter((coin) => coin !== coinId);
    setCoins(newCoins);
    localStorage.setItem("coins", JSON.stringify(newCoins));
  };

  useEffect(() => {
    if (coins.length > 0) {
      getSaveData(coins);
    } else {
      setSavedData();
    }
  }, [coins]);

  useLayoutEffect(() => {
    let isThere = JSON.parse(localStorage.getItem("coins")) || false;
    if (!isThere) {
      //Set Local Storage
      localStorage.setItem("coins", JSON.stringify([]));
    } else {
      //set the state with current value from the local storage
      let totalCoins = JSON.parse(localStorage.getItem("coins"));
      setCoins(totalCoins);

      if (totalCoins.length > 0) {
        getSaveData(totalCoins);
      }
    }
  }, []);

  const getSaveData = async (totalCoins = coins) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(
          ","
        )}&order=${sortBy}&per_page=${perPage}&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`
      );
      const data = await response.json();
      console.log(data);
      setSavedData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error here
    }
  };

  return (
    <StorageContext.Provider
      value={{ saveCoins, removeCoins, savedData, coins }}
    >
      {children}
    </StorageContext.Provider>
  );
};
