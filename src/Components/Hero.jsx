import { Swiper, SwiperSlide } from "swiper/react";
import heroBg from '../../public/headphone.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { ShoppingCartIcon } from "lucide-react";

const Hero = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
      <SwiperSlide>
        <section className="bg-red-200 md:py-40 py-20 px-4 lg:flex items-center justify-center">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold text-black ">
                Welcome to ShopEase
              </h1>
              <p className="text-xl text-black mt-4 font-medium">
                Discover amazing products at unbeatable prices
              </p>
              <ul className="flex items-center  gap-6 lg:gap-8 mt-6 text-black text-sm font-semibold">
                <li>Free Shipping</li>
                <li>30-Day Returns</li>
                <li>24/7 Support</li>
              </ul>
              <button
              className=" bg-blue-500 hover:bg-blue-300 text-white transition-colors p-2 mt-6 flex justify-center items-center gap-2 rounded-lg cursor-pointer"
              >
              <span>
                <ShoppingCartIcon />
              </span>
              Add to cart
              </button>
          </div>
            <div>
                <img src={heroBg} alt="" />
            </div>
        </section>
      </SwiperSlide>
        <SwiperSlide>
<section className="bg-red-200 md:py-40 py-20 px-4 lg:flex items-center justify-center">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold text-black ">
                Welcome to ShopEase
              </h1>
              <p className="text-xl text-black mt-4 font-medium">
                Discover amazing products at unbeatable prices
              </p>
              <ul className="flex items-center  gap-6 lg:gap-8 mt-6 text-black text-sm font-semibold">
                <li>Free Shipping</li>
                <li>30-Day Returns</li>
                <li>24/7 Support</li>
              </ul>
              <button
              className=" bg-blue-500 hover:bg-blue-300 text-white transition-colors p-2 mt-6 flex justify-center items-center gap-2 rounded-lg cursor-pointer"
              >
              <span>
                <ShoppingCartIcon />
              </span>
              Add to cart
              </button>
          </div>
            <div>
                <img src={heroBg} alt="" />
            </div>
        </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-red-200 md:py-40 py-20 px-4 lg:flex items-center justify-center">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold text-black ">
                Welcome to ShopEase
              </h1>
              <p className="text-xl text-black mt-4 font-medium">
                Discover amazing products at unbeatable prices
              </p>
              <ul className="flex items-center  gap-6 lg:gap-8 mt-6 text-black text-sm font-semibold">
                <li>Free Shipping</li>
                <li>30-Day Returns</li>
                <li>24/7 Support</li>
              </ul>
              <button
              className=" bg-blue-500 hover:bg-blue-300 text-white transition-colors p-2 mt-6 flex justify-center items-center gap-2 rounded-lg cursor-pointer"
              >
              <span>
                <ShoppingCartIcon />
              </span>
              Add to cart
              </button>
          </div>
            <div>
                <img src={heroBg} alt="" />
            </div>
        </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
