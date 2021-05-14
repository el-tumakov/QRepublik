import styles from "./technology.module.scss";

const Technology = () => (
  <section className={styles.technology}>
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        Технологии <span className={styles.accent}>QRepublik</span>
      </h1>
      <p className={styles.description}>
        Smart технологии для жизни, исследований и анализа данных
      </p>
      <ol className={styles.list}>
        <li className={styles.item1}>
          <h2 className={styles.itemTitle}>QRepublik ID</h2>
          <p className={styles.itemDescription}>
            Неэлектронные QR-идентификаторы для экстренных ситуаций
          </p>
        </li>
        <li className={styles.item2}>
          <h2 className={styles.itemTitle}>QRepublik Key</h2>
          <p className={styles.itemDescription}>
            Система защиты данных на основе полной деперсонализации
          </p>
        </li>
        <li className={styles.item3}>
          <h2 className={styles.itemTitle}>QRepublik All</h2>
          <p className={styles.itemDescription}>
            Технология распознавания и обработки медицинской информации
          </p>
        </li>
        <li className={styles.item4}>
          <h2 className={styles.itemTitle}>КИ Мониторинг</h2>
          <p className={styles.itemDescription}>
            Система для мониторинга пациентов в клинических исследованиях
          </p>
        </li>
      </ol>
    </div>
  </section>
);

export default Technology;
