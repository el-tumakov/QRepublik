import Link from "next/link";
import styles from "./choice-id.module.scss";

const ChoiceId = () => (
  <section className={styles.choice}>
    <div className={styles.wrap}>
      <h2 className="visually-hidden">Подбор идентификатора</h2>
      <p className={styles.description}>
        Узнайте какой тип идендификатора подходит именно вам
      </p>
      <Link href="#">
        <a className={styles.button}>Узнать</a>
      </Link>
    </div>
  </section>
);

export default ChoiceId;
