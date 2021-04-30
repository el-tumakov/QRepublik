import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

const Header = () => {
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
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="#">
              <a className={styles.link}>Как это работает</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a className={styles.link}>Купить свой ID</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="#">
              <a className={styles.link}>О нас</a>
            </Link>
          </li>
        </ul>
      </nav>
      <button className={styles.locale} type="button" aria-label="Выбрать язык">
        RU
      </button>
      <ul className={styles.loginList}>
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
    </header>
  );
};

export default Header;
