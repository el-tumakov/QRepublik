import Link from "next/link";
import styles from "./about.module.scss";

const About = () => (
  <section className={styles.about}>
    <div className={styles.wrap}>
      <div className={styles.descriptionWrap}>
        <h2 className={styles.title}>
          О <span className={styles.accent}>нас</span>
        </h2>
        <p>
          Компания ООО «Республика», работающая под брендом QRepublik с офисами
          в Москве и Страсбурге, резидент биомедицинского кластера Сколково
          занимается технологиями идентификации человека в экстренных ситуациях.
          Продуктами компании пользуются более 500 тысяч человек по всему миру.
        </p>
        <p>
          Технологии QRepublik сфокусированы
          <br /> на проблеме нехватки информации о человеке в экстренной
          ситуации для оказания помощи и работают как медицинский и
          туристический идентификатор на 24 языках.
        </p>
        <Link href="#">
          <a className={styles.link}>Подробнее</a>
        </Link>
      </div>
    </div>
  </section>
);

export default About;
