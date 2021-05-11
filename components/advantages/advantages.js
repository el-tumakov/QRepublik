import styles from "./advantages.module.scss";

const Advantages = () => (
  <section className={styles.advantages}>
    <h2 className="visually-hidden">Наши преимущества</h2>
    <p className={styles.title}>
      Почему <span className={styles.accent}>QRepublik</span>
    </p>
    <ul className={styles.list}>
      <li className={styles.data}>
        <h3 className={styles.itemTitle}>Управляйте данными</h3>
        <p className={styles.description}>
          Данные, отображаемые в случае сканирования ID, вносятся через личный
          кабинет на сайте QRepublik.
        </p>
      </li>
      <li className={styles.technology}>
        <h3 className={styles.itemTitle}>
          Уникальные технологии QRepublik Key и QRepublik AI
        </h3>
        <p className={styles.description}>
          Хранение и передача данных соответствует международным стандартам и
          законам.
        </p>
      </li>
      <li className={styles.users}>
        <h3 className={styles.itemTitle}>Для кого</h3>
        <p className={styles.description}>
          Технология экстренного ID актуальна для всех, кто может оказаться в
          беде без возможности подробно рассказать о себе
        </p>
      </li>
    </ul>
  </section>
);

export default Advantages;
