import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import Navigation from "./navigation/navigation";

const DESKTOP_SIZE = 1229;

const Header = () => {
  const [isNavigationHidden, setNavigationHidden] = useState(true);

  const handleClick = () => {
    setNavigationHidden(!isNavigationHidden);
  };

  const resizeHandler = () => {
    if (window.innerWidth > DESKTOP_SIZE) {
      setNavigationHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    isNavigationHidden
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");

    return () => (document.body.style.overflow = "auto");
  }, [isNavigationHidden]);

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
        <Navigation
          isHidden={isNavigationHidden}
          setNavigationHidden={setNavigationHidden}
        />
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
