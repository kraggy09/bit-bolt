import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import { CryptoProvider } from "../context/CryptoContext";
import { TrendingProvider } from "../context/TrendingContext";
import { StorageProvider } from "../context/StorageContext";

const Home = () => {
  return (
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <main className="w-full h-full flex flex-col items-center text-center font-nunito text-white content-center relative">
            <div className="bg-gray-300 w-screen h-screen fixed -z-10" />
            <Logo />
            <NavBar />
            <Outlet />
          </main>
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  );
};

export default Home;
