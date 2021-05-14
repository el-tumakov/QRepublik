import Link from "next/link";
import styles from "./id.module.scss";

const Id = () => (
  <section className={styles.id}>
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          QRepublik <span className={styles.accent}>ID</span>
        </h1>
        <p className={styles.description}>
          Умный неэлектронный экстренный ID, рассказывающий о человеке в
          ситуациях, когда требуется помощь
        </p>
        <div className={styles.links}>
          <Link href="#">
            <a className={styles.buy}>Купить</a>
          </Link>
          <Link href="#">
            <a className={styles.activation}>Активация ID</a>
          </Link>
        </div>
      </div>
      <ul className={styles.list}>
        <li className={styles.item1}>
          <p className={styles.itemSubTitle}>
            Носимое неэлектронное устройство с QR-кодом, связанным с личным
            кабинетом
          </p>
          <p className={styles.itemDescription}>
            Рассказывает критическую информацию о человеке в экстренной ситуации
            из личного профиля по скану QR-кода
          </p>
        </li>
        <li className={styles.item2}>
          <h2 className={styles.itemTitle}>Управляйте своими данными</h2>
          <p className={styles.itemSubTitle}>
            Один аккаунт - несколько профилей
          </p>
          <p className={styles.itemDescription}>
            QRepublik хранит несколько кирпичей информации, которые не сливаются
            ни во что личное - только несвязанные фрагменты данных без
            персонализации
          </p>
        </li>
        <li className={styles.item3}>
          <h2 className={styles.itemTitle}>Встроенные функции</h2>
          <p className={styles.itemSubTitle}>
            Пользуйтесь встроенными сервисами
          </p>
          <p className={styles.itemDescription}>
            Система QMS деперсонализированно подбирает для Вас актуальные
            функции и сервисы, доступные в Личном кабинете
          </p>
        </li>
        <li className={styles.item4}>
          <h2 className={styles.itemTitle}>Для кого</h2>
          <p className={styles.itemSubTitle}>Это для каждого</p>
          <p className={styles.itemDescription}>
            Технология экстренного ID актуальна для всех, кто может оказаться в
            беде без возможности подробно рассказать о себе: люди в возрасте,
            люди с ограниченными возможностями, любители активного отдыха и
            туристы, часто сталкивающиеся с языковым барьером, а QRepublik ID
            переводит информацию на 24 языка
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default Id;
