import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import Navigation from "./navigation/navigation";

const Header = () => {
  const [isNavigationHidden, setNavigationHidden] = useState(true);

  const handleClick = () => {
    setNavigationHidden(!isNavigationHidden);
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/images/logo.svg"
              alt="Логотип компании QRepublik"
              width={129}
              height={25}
            />
          </a>
        </Link>
        <Navigation isHidden={isNavigationHidden} />
        <button
          className={styles.locale}
          type="button"
          aria-label="Выбрать язык"
        >
          RU
        </button>
        <button
          className={isNavigationHidden ? styles.menu : styles.menuOpened}
          type="button"
          aria-label="Показать меню"
          onClick={handleClick}
        ></button>
      </div>
    </header>
  );
};

export default Header;
