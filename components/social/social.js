import PropTypes from "prop-types";
import styles from "./social.module.scss";

const Social = (props) => {
  const {onClick} = props;

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <ul className={styles.social}>
      <li>
        <a
          className={styles.instagram}
          href="#"
          aria-label="Наш инстаграм"
          onClick={handleClick}
        ></a>
      </li>
      <li>
        <a
          className={styles.vk}
          href="#"
          aria-label="Наш вконтакте"
          onClick={handleClick}
        ></a>
      </li>
      <li>
        <a
          className={styles.facebook}
          href="#"
          aria-label="Наш фейсбук"
          onClick={handleClick}
        ></a>
      </li>
      <li>
        <a
          className={styles.twitter}
          href="#"
          aria-label="Наш твиттер"
          onClick={handleClick}
        ></a>
      </li>
    </ul>
  );
};

Social.propTypes = {
  onClick: PropTypes.func,
};

export default Social;
