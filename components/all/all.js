import styles from "./all.module.scss";

const All = () => (
  <section className={styles.all}>
    <h1 className="visually-hidden">Работа с данными QRepublik</h1>
    <div className={styles.wrap}>
      <ul className={styles.list}>
        <li className={styles.itemLanguages}>
          <h2 className={styles.itemTitle}>
            QRepublik <span className={styles.accent}>понимает данные</span>
          </h2>
          <p className={styles.itemDescription}>
            Когда что-то медицинское сохраняется, QRepublik переводит текст на
            24 языках
          </p>
        </li>
        <li className={styles.itemTranslate}>
          <h2 className={styles.itemTitle}>Переводы</h2>
          <p className={styles.itemDescription}>
            Когда вы находитесь за границей QRepublik говорит за вас на местном
            языке без отправки данных третьим лицам
          </p>
        </li>
        <li className={styles.itemValidation}>
          <h2 className={styles.itemTitle}>Утверждение</h2>
          <p className={styles.itemDescription}>
            Поскольку QRepublik понимает данные, он также проверяет являются ли
            такие данные правильными (полными и не имеют конфликта в соединении)
          </p>
        </li>
        <li className={styles.itemAnalysis}>
          <h2 className={styles.itemTitle}>Анализ</h2>
          <p className={styles.itemDescription}>
            Структурированные медицинские данные важны для исследований
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default All;
