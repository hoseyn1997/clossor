import { observer } from "mobx-react-lite";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNext from "./SwiperNext";
import SwiperPrev from "./SwiperPrev";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

export default observer(function SwiperJs() {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide
          className="max-h-[50vh]"
          onClick={() => console.log("clicked")}
        >
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/c77f80528620147f950fe3cc5d188687b023878b_1729413040.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            className="w-full object-cover h-[25vh] md:h-[35vh] lg:h-[50vh]"
          />
        </SwiperSlide>
        <SwiperSlide
          className="max-h-[70vh]"
          onClick={() => console.log("clicked")}
        >
          <img
            src="https://dkstatics-public.digikala.com/digikala-adservice-banners/45e5a2e84d9617506854b113963d59357813f2a5_1728996332.jpg?x-oss-process=image/quality,q_95/format,webp"
            alt=""
            className="w-full object-cover h-[25vh] md:h-[35vh] lg:h-[50vh]"
          />
        </SwiperSlide>
        <SwiperSlide
          className="max-h-[70vh]"
          onClick={() => console.log("clicked")}
        >
          <img
            src="https://t4.ftcdn.net/jpg/07/47/57/11/360_F_747571172_7wcOc8g89v062hoTLMcyqNojMkFfVtVG.jpg"
            alt=""
            className="w-full object-cover h-[25vh] md:h-[35vh] lg:h-[50vh]"
          />
        </SwiperSlide>
        <SwiperSlide
          className="max-h-[70vh]"
          onClick={() => console.log("clicked")}
        >
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt=""
            className="w-full object-cover h-[25vh] md:h-[35vh] lg:h-[50vh]"
          />
        </SwiperSlide>
        <SwiperPrev />
        <SwiperNext />
      </Swiper>
    </div>
  );
});
