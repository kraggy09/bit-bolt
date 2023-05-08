const Shimmer = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden">
      {Array(5)
        .fill("")
        .map((index) => {
          return (
            <div
              key={index}
              className="relative w-[95%] rounded-lg  h-7 my-1 animate-pulse bg-gray-300 backdrop-blur-sm"
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
