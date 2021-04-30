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

export default Arrow;
