import { useContext, useRef, useState } from "react";
import Search from "./Search";
import submit from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
const Filters = () => {
  let currencyRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let val = currencyRef.current.value;
    setCurrency(val);
  };
  const { setCurrency } = useContext(CryptoContext);
  return (
    <div className="border-2 relative top-0 flex items-center justify-around border-gray-100 w-full h-12">
      <Search />
      <div>
        <form className="flex relative" onSubmit={handleSubmit}>
          <label htmlFor="currency" className="font-bold mx-2">
            Currency:
          </label>
          <input
            type="text"
            name="currency"
            ref={currencyRef}
            className="w-24 border pl-3 focus:border-cyan outline-0 rounded-lg bg-gray-200"
          />
          <button className="font-bold absolute right-0 ">
            <img src={submit} alt="submit" />
          </button>
        </form>
      </div>
      <div>Sorting</div>
    </div>
  );
};

export default Filters;
