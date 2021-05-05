import {useState, useEffect} from "react";
import Sticky from "react-stickynode";
import PropTypes from "prop-types";
import styles from "./arrow.module.scss";

const MOBILE_WIDTH = 970;

const Arrow = (props) => {
  const {next, onClick} = props;
  const [isMobileWidth, setMobileWidth] = useState(false);
  const [innerHeight, setInnerHeight] = useState(0);

  const resizeHandler = () => {
    setMobileWidth(window.innerWidth < MOBILE_WIDTH);
  };

  useEffect(() => {
    setMobileWidth(window.innerWidth < MOBILE_WIDTH);
    setInnerHeight(window.innerHeight);

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <Sticky
      className={next ? styles.wrapNext : styles.wrapPrev}
      enabled={isMobileWidth}
      top={innerHeight - 100}
      bottomBoundary="#main-slider"
    >
      <button
        className={next ? styles.next : styles.prev}
        type="button"
        aria-label={`Листать слайды ${next ? "вперед" : "назад"}`}
        onClick={onClick}
      ></button>
    </Sticky>
  );
};

Arrow.propTypes = {
  next: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Arrow;
