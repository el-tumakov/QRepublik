import {useState} from "react";
import PropTypes from "prop-types";
import styles from "./faq-tab.module.scss";

const FaqTab = (props) => {
  const {title, children} = props;
  const [isTabOpen, setTabOpen] = useState(false);

  const handleClick = () => {
    setTabOpen(!isTabOpen);
  };

  return (
    <li className={styles.item}>
      <div className={styles.topWrap}>
        <h2 className={styles.itemTitle}>{title}</h2>
        <button
          className={isTabOpen ? styles.buttonClose : styles.buttonOpen}
          type="button"
          aria-label={`${isTabOpen ? "Скрыть ответ" : "Показать ответ"}`}
          onClick={handleClick}
        ></button>
      </div>
      <div className={isTabOpen ? styles.content : styles.contentHidden}>
        {children}
      </div>
    </li>
  );
};

FaqTab.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FaqTab;
