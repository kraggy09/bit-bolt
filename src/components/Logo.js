import { Link } from "react-router-dom";
import mainLogo from "../assets/logo.svg";
const Logo = () => {
  return (
    <Link
      to="/"
      className="absolute left-[1.5rem] flex items-center  top-[1.5rem]"
    >
      <img src={mainLogo} alt="Bit-Bolt" />
      <span className="text-xl text-cyan ">BitBolt</span>
    </Link>
  );
};

export default Logo;
