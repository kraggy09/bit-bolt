import { createContext, useEffect, useState } from "react";

export const TrendingContext = createContext({});

export const TrendingProvider = ({ children }) => {
  const [trend, setTrend] = useState();

  const getTrending = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      const data = await response.json();
      //console.log(data.coins);
      setTrend(data.coins);
    } catch (error) {
      //console.log(error);
    }
  };

  const reset = () => {
    getTrending();
  };

  useEffect(() => {
    getTrending();
  }, []);

  return (
    <TrendingContext.Provider value={{ trend, reset }}>
      {children}
    </TrendingContext.Provider>
  );
};
