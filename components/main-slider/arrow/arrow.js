import PropTypes from "prop-types";
import styles from "./arrow.module.scss";

const Arrow = (props) => {
  const {next, onClick} = props;

  return (
    <button
      className={next ? styles.next : styles.prev}
      type="button"
      aria-label={`Листать слайды ${next ? "вперед" : "назад"}`}
      onClick={onClick}
    ></button>
  );
};

Arrow.propTypes = {
  next: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Arrow;
