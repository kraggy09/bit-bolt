import { useNavigate } from "react-router-dom";
const TrendingCoins = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (cryptoId) => {
    navigate(cryptoId);
  };

  return (
    <div className="lg:w-[40%] sm:w-[60%] w-[80%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40">
      {data ? (
        <>
          <h3 className="text-base flex items-center my-0?.5">
            <span className="text-gray-100 capitalize ">Name: &nbsp;</span>
            <span className="text-cyan">{data?.name}</span>
            <img
              className="w-[1?.5rem] mx-1?.5 rounded-full h-[1?.5rem]"
              src={data?.small}
              alt={data?.name}
            />
          </h3>
          <h3 className="text-base flex items-center my-0?.5">
            <span className="text-gray-100 capitalize ">
              Market Cap Rank: &nbsp;
            </span>
            <span className="text-cyan">{data?.market_cap_rank}</span>
          </h3>
          <h3 className="text-base flex flex-col md:flex-row justify-start items-start md:items-center my-0?.5">
            <span className="text-gray-100 capitalize ">
              Price (BTC): &nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              })?.format(data?.price_btc)}
            </span>
          </h3>
          <h3 className="text-base flex items-center my-0?.5">
            <span className="text-gray-100 capitalize ">Score: &nbsp;</span>
            <span className="text-cyan">{data?.score}</span>
          </h3>
          <img
            src={data?.large}
            className="absolute lg:top-2/4 top-4 lg:-right-12 -right-6 -translate-y-2/4  lg:w-[35%] w-[5rem]   h-auto rounded-full"
            alt={data?.id}
          />
        </>
      ) : null}
    </div>
  );
};

export default TrendingCoins;
