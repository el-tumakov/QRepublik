import PropTypes from "prop-types";
import Link from "next/link";
import NavigationTab from "./navigation-tab/navigation-tab";
import Social from "../../social/social";
import styles from "./navigation.module.scss";

const Navigation = (props) => {
  const {isHidden} = props;

  return (
    <nav className={isHidden ? styles.navigation : styles.navigationVisible}>
      <ul className={styles.list}>
        <li className={styles.main}>
          <Link href="/">
            <a className={styles.mainLink}>Главная</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#how-it-works">
            <a className={styles.link}>Как это работает</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#braslets">
            <a className={styles.link}>Купить свой ID</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/#about">
            <a className={styles.link}>О нас</a>
          </Link>
        </li>
        <NavigationTab className={styles.support} title="Поддержка">
          <ul className={styles.tabList}>
            <li className={styles.tabItem}>
              <Link href="/indications-for-wearing">
                <a className={styles.tabLink}>
                  Показания для ношения Медицинского удостоверения
                </a>
              </Link>
            </li>
            <li className={styles.tabItem}>
              <Link href="/terms-service">
                <a className={styles.tabLink}>Условия предоставления услуг</a>
              </Link>
            </li>
            <li className={styles.tabItem}>
              <Link href="/cookie-police">
                <a className={styles.tabLink}>Политика файлов Cookie</a>
              </Link>
            </li>
            <li className={styles.tabItem}>
              <Link href="/privacy-police">
                <a className={styles.tabLink}>Политика конфиденциальности</a>
              </Link>
            </li>
          </ul>
        </NavigationTab>
        <NavigationTab className={styles.about} title="О компании">
          <ul className={styles.tabList}>
            <li className={styles.tabItem}>
              <Link href="#">
                <a className={styles.tabLink}>Инструкция</a>
              </Link>
            </li>
            <li className={styles.tabItem}>
              <Link href="/faq">
                <a className={styles.tabLink}>Частые вопросы</a>
              </Link>
            </li>
            <li className={styles.tabItem}>
              <Link href="/press">
                <a className={styles.tabLink}>О нас пишут</a>
              </Link>
            </li>
          </ul>
        </NavigationTab>
        <NavigationTab className={styles.contacts} title="Контакты">
          <ul className={styles.tabList}>
            <li className={styles.tabItem}>
              <a className={styles.tel} href="tel:+79254648797">
                +7 925 464 8797
              </a>
            </li>
            <li className={styles.tabItem}>
              <a className={styles.email} href="mailto:info@qrepublik.com">
                info@qrepublik.com
              </a>
            </li>
            <li className={styles.tabItem}>
              <Link href="/cooperation">
                <a className={styles.tabLink}>Сотрудничество</a>
              </Link>
            </li>
          </ul>
        </NavigationTab>
        <li className={styles.signIn}>
          <Link href="#">
            <a className={styles.signInLink}>Зарегистрироваться</a>
          </Link>
        </li>
        <li className={styles.signUp}>
          <Link href="#">
            <a className={styles.signUpLink}>Войти</a>
          </Link>
        </li>
      </ul>
      <div className={styles.social}>
        <p className={styles.socialText}>Мы в социальных сетях</p>
        <div className={styles.socialListWrap}>
          <Social />
        </div>
      </div>
      <p className={styles.copyright}>Авторские права © 2021 Республика</p>
    </nav>
  );
};

Navigation.propTypes = {
  isHidden: PropTypes.bool.isRequired,
};

export default Navigation;
