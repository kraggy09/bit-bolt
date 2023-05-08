import Search from "./Search";
const Filters = () => {
  return (
    <div className="border-2 relative top-0 flex items-center justify-around border-gray-100 w-full h-12">
      <Search />
      <div>Currency</div>
      <div>Sorting</div>
    </div>
  );
};

export default Filters;
