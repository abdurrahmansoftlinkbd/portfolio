import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <nav className="bg-default text-white font-inter shadow-md sticky top-0 z-50 py-1">
        <Navbar></Navbar>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default MainLayout;
