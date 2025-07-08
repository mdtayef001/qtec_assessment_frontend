import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomeLayout = () => {
  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HomeLayout;
