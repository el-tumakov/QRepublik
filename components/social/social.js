import styles from "./social.module.scss";

const Social = () => {
  return (
    <ul className={styles.social}>
      <li>
        <a className={styles.instagram} href="#" aria-label="Наш инстаграм"></a>
      </li>
      <li>
        <a className={styles.vk} href="#" aria-label="Наш вконтакте"></a>
      </li>
      <li>
        <a className={styles.facebook} href="#" aria-label="Наш фейсбук"></a>
      </li>
      <li>
        <a className={styles.twitter} href="#" aria-label="Наш твиттер"></a>
      </li>
    </ul>
  );
};

export default Social;
