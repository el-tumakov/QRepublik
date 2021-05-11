import styles from "./features.module.scss";

const Features = () => (
  <section className={styles.features}>
    <div className={styles.wrap}>
      <h2 className="visually-hidden">Наши преимущества</h2>
      <p className={styles.slogan}>
        Медицинский идентификатор создан, чтобы говорить за вас,{" "}
        <span className={styles.accent}>когда вы не можете</span>
      </p>
      <ul className={styles.list}>
        <li className={styles.time}>
          <p className={styles.description}>
            Доступ к профилю за пару секунд: сообщите кто вы, с кем связаться и
            как спасти вашу жизнь
          </p>
        </li>
        <li className={styles.health}>
          <p className={styles.description}>
            Может передавать медицинскому персоналу информацию о состоянии
            здоровья
          </p>
        </li>
        <li className={styles.accessibility}>
          <p className={styles.description}>
            Ваш медицинский профиль доступен в любое время и в любом месте
          </p>
        </li>
        <li className={styles.information}>
          <p className={styles.description}>
            Максимально полный набор информации для экстренных служб
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Features;
