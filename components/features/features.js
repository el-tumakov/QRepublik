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
          Доступ к профилю за пару секунд, сообщите, кто вы, с кем связаться и
          как спасти вашу жизнь
        </li>
        <li className={styles.health}>
          Может передавать медицинскому персоналу информацию о состоянии
          здоровья или аллергии
        </li>
        <li className={styles.accessibility}>
          Ваш медицинский профиль, доступен в любое время и в любом месте
        </li>
        <li className={styles.information}>
          Максимально полный набор информации для экстренных служб
        </li>
      </ul>
    </div>
  </section>
);

export default Features;
