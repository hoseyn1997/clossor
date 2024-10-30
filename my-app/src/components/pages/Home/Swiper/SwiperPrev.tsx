import { useSwiper } from "swiper/react";

export default function SwiperPrev() {
  const swiper = useSwiper();
  return (
    <div
      className="swiper-navigation-btn right-2"
      onClick={() => swiper.slideNext()}
    >
      <i className="bi bi-arrow-right-circle-fill shadow-2xl rounded-full"></i>
    </div>
  );
}
