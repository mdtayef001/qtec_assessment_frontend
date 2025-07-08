import { Route, Routes } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";

const S_Routes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default S_Routes;
