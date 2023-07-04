import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="lg:mt-16 lg:w-[40%] mt-20 w-[80%] flex justify-around align-middle border border-cyan rounded-lg">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `${
            isActive
              ? `bg-cyan text-gray-300 font-bold hover:text-gray-200`
              : `text-gray-100  bg-gray-200`
          } hover:text-cyan rounded w-full m-2.5`;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `${
            isActive
              ? `bg-cyan text-gray-300 font-bold hover:text-gray-200`
              : `text-gray-100  bg-gray-200`
          } hover:text-cyan rounded w-full m-2.5`;
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `${
            isActive
              ? `bg-cyan text-gray-300 font-bold hover:text-gray-200`
              : `text-gray-100  bg-gray-200`
          } hover:text-cyan rounded w-full m-2.5`;
        }}
      >
        Saved
      </NavLink>
    </nav>
  );
};
export default NavBar;
