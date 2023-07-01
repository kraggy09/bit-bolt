import { useContext, useRef } from "react";
import arrow from "../assets/pagination-arrow.svg";
import submit from "../assets/submit-icon.svg";
import { CryptoContext } from "../context/CryptoContext";
const Pagination = () => {
  let { setPerPage } = useContext(CryptoContext);
  const PageFilter = () => {
    const inputRef = useRef(null);

    const handlePerPage = (e) => {
      e.preventDefault();
      let val = inputRef.current.value;
      if (val !== 0) {
        setPerPage(val);
        inputRef.current.value = val;
      }
    };
    return (
      <form className="flex relative mr-14" onSubmit={handlePerPage}>
        <label htmlFor="page" className="font-bold mx-2">
          PerPage:
        </label>
        <input
          type="number"
          name="page"
          min={1}
          max={250}
          ref={inputRef}
          className="w-24 border pl-3 focus:border-cyan outline-0 rounded-lg bg-gray-200"
        />
        <button className="font-bold absolute right-0 ">
          <img src={submit} alt="submit" />
        </button>
      </form>
    );
  };

  let { currentPage, setCurrentPage, tPage, cryptoData, perPage } =
    useContext(CryptoContext);
  let totalPage = Math.ceil(tPage / perPage);
  const right = () => {
    if (currentPage === totalPage) {
      return null;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const multiRight = () => {
    if (currentPage + 3 >= totalPage) {
      setCurrentPage(totalPage);
    } else {
      setCurrentPage(currentPage + 3);
    }
  };
  const left = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const multiLeft = () => {
    if (currentPage - 3 <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 2);
    }
  };
  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex justify-center items-center">
        <PageFilter />
        <ul className="flex">
          {currentPage > 1 ? (
            <li className="text-2xl mx-2">
              <button onClick={left}>
                <img src={arrow} className="rotate-180 w-8 h-8" alt="left" />
              </button>
            </li>
          ) : null}
          {currentPage > 1 ? (
            <li className="flex items-centerjustify-center mx-1 rounded-full">
              <button onClick={multiLeft}>...</button>
            </li>
          ) : null}
          {currentPage > 1 ? (
            <li
              className={`flex items-center hover:bg-cyan text-gray-200 justify-center mx-1 rounded-full bg-gray-100 w-8 h-8`}
            >
              <button className="w-full h-full" onClick={left}>
                {currentPage - 1}
              </button>
            </li>
          ) : null}

          <li className="flex items-center bg-cyan text-gray-200 justify-center mx-1 rounded-full  w-8 h-8">
            <button disabled className="w-full h-full">
              {currentPage}
            </button>
          </li>
          {currentPage < totalPage ? (
            <li className="flex items-center hover:bg-cyan text-gray-200 justify-center mx-1 rounded-full bg-gray-100 w-8 h-8">
              <button className="w-full h-full" onClick={right}>
                {currentPage + 1}
              </button>
            </li>
          ) : null}

          {currentPage < totalPage ? (
            <li className="flex items-centerjustify-center mx-1 rounded-full">
              <button onClick={multiRight}>...</button>
            </li>
          ) : null}

          {currentPage === totalPage - 1 ? null : currentPage < totalPage ? (
            <li className="flex items-center hover:bg-cyan text-gray-200 justify-center mx-1 rounded-full bg-gray-100 w-8 h-8">
              <button
                onClick={() => {
                  setCurrentPage(totalPage);
                }}
                className="w-full h-full"
              >
                {totalPage}
              </button>
            </li>
          ) : null}
          {currentPage < totalPage ? (
            <li>
              <button onClick={right}>
                <img src={arrow} className=" w-8 h-8 mx-2" alt="right" />
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
