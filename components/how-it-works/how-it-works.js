import styles from "./how-it-works.module.scss";

const HowItWorks = () => (
  <section className={styles.howItWorks}>
    <div className={styles.wrap}>
      <h2 className={styles.title} id="how-it-works">
        Как это <span className={styles.accent}>работает?</span>
      </h2>
      <ul className={styles.list}>
        <li className={styles.signUp}>
          <h3 className={styles.itemTitle}>Войдите или зарегистрируйтесь</h3>
          <p className={styles.description}>
            Войдите, если у вас уже есть профиль на QRepublik или создайте новый
            аккаунт, если нет. Вы можете использовать для этого свой e-mail,
            телефон или соцсеть.
          </p>
        </li>
        <li className={styles.addInfo}>
          <h3 className={styles.itemTitle}>Заполните ваш профиль</h3>
          <p className={styles.description}>
            Максимально подробно внесите все необходимые данные это позволит
            предоставить дополнительную информацию о вашем здоровье.
            <br />
            Вы можете можете скачать ваш
            <br /> QR код — бесплатно
          </p>
        </li>
        <li className={styles.addProducts}>
          <h3 className={styles.itemTitle}>Привяжите продукты</h3>
          <p className={styles.description}>
            QRepublik к вашему профилю.
            <br />
            Привязывайте браслеты, насадки для часов и другое к профилю,
            количество не ограничено. Это классно!
          </p>
        </li>
        <li className={styles.familyProfile}>
          <h3 className={styles.itemTitle}>Семейный профиль</h3>
          <p className={styles.description}>
            Добавьте членов вашей семью и управляйте ими со своего аккаунта.
          </p>
        </li>
        <li className={styles.data}>
          <h3 className={styles.itemTitle}>Управляйте данными</h3>
          <p className={styles.description}>
            Управляйте данными через личный кабинет. Вы можете упавлять всеми
            данными ваших профилей. Добавляйте, изменяйте или удаляйте свои
            данные в любое время. Сохранённая информация отображается, при
            сканировании вашего QR кода.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default HowItWorks;
