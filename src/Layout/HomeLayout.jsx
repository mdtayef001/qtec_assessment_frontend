import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <header className=" sticky top-0 z-50 bg-white shadow-md">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
