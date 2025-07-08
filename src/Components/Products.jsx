import { Link } from "react-router-dom";
import { products } from "../assets/products";
import { Plus } from "lucide-react";
import ProductCart from "./ProductCart";

const Products = () => {
  return (
    <section className="container mx-auto mt-20">
      <div>
        <h1 className="text-3xl font-bold text-center">Featured Products</h1>
        <p className="text-xl font-medium text-center mt-4">
          Carefully curated collection of premium products for your lifestyle
        </p>
      </div>
      {/* all products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {products.map((item) => (
          <ProductCart item={item} key={item._id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
