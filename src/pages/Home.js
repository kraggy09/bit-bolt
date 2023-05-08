import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import { CryptoProvider } from "../context/CryptoContext";

const Home = () => {
  return (
    <CryptoProvider>
      <main className="w-full h-full flex flex-col items-center text-center font-nunito text-white content-center relative">
        <div className="bg-gray-300 w-screen h-screen fixed -z-10" />
        <Logo />
        <NavBar />
        <Outlet />
      </main>
    </CryptoProvider>
  );
};

export default Home;
