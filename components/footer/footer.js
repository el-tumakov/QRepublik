import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <section className={styles.section && styles.support}>
        <h3 className={styles.title}>Поддержка</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>
                Показания для ношения Медицинского удостоверения
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Условия предоставления услуг</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Политика файлов Cookie</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Политика конфиденциальности</a>
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.section && styles.researches}>
        <h3 className={styles.title}>О исследованиях</h3>
        <Link href="#">
          <a className={styles.link}>
            Исследования осуществляются при грантовой поддержке Фонда Сколково,
            а также Фонда Содействия Инновациям
          </a>
        </Link>
      </section>
      <section className={styles.section && styles.about}>
        <h3 className={styles.title}>О компании</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Войти</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Регистрация</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Инструкция</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Купить свой ID</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>О нас</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Частые вопросы</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>О нас пишут</a>
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.contacts}>
        <h3 className={styles.title}>Контакты</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.tel} href="tel:+79254648797">
              +7 925 464 8797
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.email} href="mailto:info@qrepublik.com">
              info@qrepublik.com
            </a>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Сотрудничество</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="#">
              <a className={styles.link}>Резидент Сколково</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.companies}>
          <li className={styles.skolkovo}>
            <a href="#">
              <Image
                className={styles.company}
                src="/images/skolkovo.png"
                alt="Логотип центра Сколково"
                width={76.5}
                height={60}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className={styles.company}
                src="/images/innovations.png"
                alt="Логотип фонда содействия инновациям"
                width={76.5}
                height={60}
              />
            </a>
          </li>
        </ul>
        <ul className={styles.social}>
          <li>
            <a
              className={styles.instagram}
              href="#"
              aria-label="Наш инстаграм"
            ></a>
          </li>
          <li>
            <a className={styles.vk} href="#" aria-label="Наш вконтакте"></a>
          </li>
          <li>
            <a
              className={styles.facebook}
              href="#"
              aria-label="Наш фейсбук"
            ></a>
          </li>
          <li>
            <a className={styles.twitter} href="#" aria-label="Наш твиттер"></a>
          </li>
        </ul>
      </section>
      <p className={styles.copyright}>Авторские права © 2021 Республика</p>
    </div>
  </footer>
);

export default Footer;
