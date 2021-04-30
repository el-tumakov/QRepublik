import Slider from "react-slick";
import SlideMedical from "./slides/slide-medical/slide-medical";
import SlideSport from "./slides/slide-sport/slide-sport";
import SlideChildren from "./slides/slide-children/slide-children";
import SlideSos from "./slides/slide-sos/slide-sos";
import Arrow from "./arrow/arrow";
import styles from "./main-slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  return (
    <section className={styles.mainSlider}>
      <h2 className="visually-hidden">Типы QRepublik ID</h2>
      <Slider prevArrow={<Arrow />} nextArrow={<Arrow next />}>
        <SlideMedical />
        <SlideSport />
        <SlideChildren />
        <SlideSos />
      </Slider>
    </section>
  );
};

export default MainSlider;
