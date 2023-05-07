import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <main className="w-full h-full flex flex-col items-center text-center font-nunito text-white content-center relative">
      <div className="bg-gray-300 w-screen h-screen fixed -z-10" />
      <Logo />
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Home;
