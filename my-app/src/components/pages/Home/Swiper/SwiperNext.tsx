import { useSwiper } from "swiper/react";

export default function SwiperNext() {
  const swiper = useSwiper();
  return (
    <div
      className="swiper-navigation-btn right-12"
      onClick={() => swiper.slidePrev()}
    >
      <i className="bi bi-arrow-left-circle-fill shadow-2xl rounded-full"></i>
    </div>
  );
}
