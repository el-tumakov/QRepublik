import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
  const [isNavigationHidden, setNavigationHidden] = useState(true);

  const handleClick = () => {
    setNavigationHidden(!isNavigationHidden);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
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
        <ul
          className={
            isNavigationHidden ? styles.navList : styles.navListVisible
          }
        >
          <li className={styles.navItem}>
            <Link href="/#how-it-works">
              <a className={styles.link}>Как это работает</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#braslets">
              <a className={styles.link}>Купить свой ID</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/#about">
              <a className={styles.link}>О нас</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.locale} type="button" aria-label="Выбрать язык">
        RU
      </button>
      <ul
        className={
          isNavigationHidden ? styles.loginList : styles.loginListVisible
        }
      >
        <li>
          <Link href="#">
            <a className={styles.button}>Зарегистрироваться</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className={styles.buttonSignUp}>Войти</a>
          </Link>
        </li>
      </ul>
      <button
        className={styles.menu}
        type="button"
        aria-label="Показать меню"
        onClick={handleClick}
      ></button>
    </header>
  );
};

export default Header;
