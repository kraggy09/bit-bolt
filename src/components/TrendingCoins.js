import { useNavigate, useParams } from "react-router-dom";
const TrendingCoins = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (cryptoId) => {
    navigate(cryptoId);
  };

  return (
    <div className="sm:w-full  md:w-[40%] mb-12 bg-gray-200 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40">
      {data ? (
        <>
          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize ">Name: &nbsp;</span>
            <span className="text-cyan">{data.name}</span>
            <img
              className="w-[1.5rem] mx-1.5 rounded-full h-[1.5rem]"
              src={data.small}
              alt={data.name}
            />
          </h3>
          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize ">
              Market Cap Rank: &nbsp;
            </span>
            <span className="text-cyan">{data.market_cap_rank}</span>
          </h3>
          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize ">
              Price in Bitcoin: &nbsp;
            </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>
          <h3 className="text-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize ">Score: &nbsp;</span>
            <span className="text-cyan">{data.score}</span>
          </h3>
          <img
            src={data.large}
            className="w-[35%] h-auto rounded-full absolute top-2/4 -right-12 -translate-y-2/4"
            alt={data.id}
          />
        </>
      ) : null}
    </div>
  );
};

export default TrendingCoins;
