import Link from "next/link";
import styles from "./breadcrumbs.module.scss";

const Breadcrumbs = (props) => {
  const {children} = props;

  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.wrap}>
        <Link href="/">
          <a className={styles.mainLink}>Главная</a>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Breadcrumbs;
