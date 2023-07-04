import { Link } from "react-router-dom";
import mainLogo from "../assets/logo.svg";
const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute left-2 md:left-[1.5rem] flex items-center top-2  md:top-[1.5rem]"
    >
      <img src={mainLogo} className="" alt="Bit-Bolt" />
      <span className="text-lg md:text-xl text-cyan ">BitBolt</span>
    </Link>
  );
};

export default Logo;
