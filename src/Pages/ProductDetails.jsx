import { Link, useParams } from "react-router-dom";
import { products } from "../assets/products";
import { ArrowLeft, Plus, Star } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((i) => i._id === parseInt(id));
  return (
    <section className="container mx-auto mt-10">
      <button className="mb-6">
        <Link
          to={"/"}
          className="flex items-center gap-2.5 p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />{" "}
          <span className="text-sm font-semibold">Back to Products</span>
        </Link>
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-square">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              src={product.image}
              alt=""
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <p className="mb-4">{product.category}</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-4xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">(4.8/5.0)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Product Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              <h3 className="font-semibold text-gray-900">Key Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Carefully crafted design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Satisfaction guaranteed</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Fast and secure shipping</span>
                </li>
              </ul>
            </div>

            <button className="w-full bg-black hover:bg-black/90 text-white text-lg flex items-center justify-center gap-2.5 py-3 rounded-lg cursor-pointer">
              <Plus className="h-5 w-5 mr-2" />
              <span>Add to Cart - ${product.price.toFixed(2)}</span>
            </button>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl mb-2">🚚</div>
              <p className="text-sm font-medium">Free Shipping</p>
              <p className="text-xs text-gray-600">On orders over $50</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <div className="text-2xl mb-2">↩️</div>
              <p className="text-sm font-medium">Easy Returns</p>
              <p className="text-xs text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
