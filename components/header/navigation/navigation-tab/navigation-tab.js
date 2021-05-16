import {useState} from "react";
import PropTypes from "prop-types";
import styles from "./navigation-tab.module.scss";

const NavigationTab = (props) => {
  const {className, title, children} = props;
  const [isTabOpen, setTabOpen] = useState(false);

  const handleClick = () => {
    setTabOpen(!isTabOpen);
  };

  return (
    <li className={className} onClick={handleClick}>
      <div className={styles.topWrap}>
        <p className={styles.itemTitle}>{title}</p>
        <button
          className={isTabOpen ? styles.buttonClose : styles.buttonOpen}
          type="button"
          aria-label={`${isTabOpen ? "Скрыть список" : "Показать список"}`}
        ></button>
      </div>
      <div className={isTabOpen ? styles.content : styles.contentHidden}>
        {children}
      </div>
    </li>
  );
};

NavigationTab.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavigationTab;
