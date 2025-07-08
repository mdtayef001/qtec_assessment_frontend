import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

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
          <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-40">
            <h1 className="text-5xl font-bold text-white text-center">
              Welcome to ShopEase
            </h1>
            <p className="text-xl text-center text-white mt-4 font-medium">
              Discover amazing products at unbeatable prices
            </p>
            <ul className="flex items-center list-disc justify-center gap-8 mt-6 text-white text-sm font-semibold">
              <li>Free Shipping</li>
              <li>30-Day Returns</li>
              <li>24/7 Support</li>
            </ul>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-40">
            <h1 className="text-5xl font-bold text-white text-center">
              Welcome to ShopEase
            </h1>
            <p className="text-xl text-center text-white mt-4 font-medium">
              Discover amazing products at unbeatable prices
            </p>
            <ul className="flex items-center list-disc justify-center gap-8 mt-6 text-white text-sm font-semibold">
              <li>Free Shipping</li>
              <li>30-Day Returns</li>
              <li>24/7 Support</li>
            </ul>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-40">
            <h1 className="text-5xl font-bold text-white text-center">
              Welcome to ShopEase
            </h1>
            <p className="text-xl text-center text-white mt-4 font-medium">
              Discover amazing products at unbeatable prices
            </p>
            <ul className="flex items-center list-disc justify-center gap-8 mt-6 text-white text-sm font-semibold">
              <li>Free Shipping</li>
              <li>30-Day Returns</li>
              <li>24/7 Support</li>
            </ul>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
