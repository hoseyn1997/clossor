import AppContent from "../components/commons/BodyContext/AppContent";
import Guide from "../components/pages/Home/Guide";
import SwiperJs from "../components/pages/Home/Swiper/SwiperJs";
import TopCourses from "../components/pages/Home/TopCourses";

export default function Home() {
  return (
    <>
      <SwiperJs />
      <AppContent>
        <TopCourses />
        <Guide />
      </AppContent>
    </>
  );
}
