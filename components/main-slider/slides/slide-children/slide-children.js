import Link from "next/link";
import stylesSlide from "../slide.module.scss";
import styles from "./slide-children.module.scss";

const SlideChildren = () => (
  <div className={styles.slide}>
    <h2 className={stylesSlide.title}>
      Детский <span className={stylesSlide.accent}>ID</span>
    </h2>
    <p className={stylesSlide.description}>
      В торговом центре, в путешествии или просто на прогулке, помогите своим
      маленьким детям быть в безопасности
    </p>
    <Link href="#">
      <a className={stylesSlide.link}>Подробнее</a>
    </Link>
    <table className={stylesSlide.table}>
      <tbody className={stylesSlide.tableBody}>
        <tr className={stylesSlide.rowOne}>
          <th className={stylesSlide.tableTitle} scope="row">
            детей пропадает ежедневно
          </th>
          <td className={stylesSlide.tableValue}>
            50
            <sup styles={stylesSlide.valueType}></sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowTwo}>
          <th className={stylesSlide.tableTitle} scope="row">
            детей помогут постороннему найти котенка
          </th>
          <td className={stylesSlide.tableValue}>
            90
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowThree}>
          <th className={stylesSlide.tableTitle} scope="row">
            называют человека знакомым, если видят его второй раз
          </th>
          <td className={stylesSlide.tableValue}>
            75
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideChildren;
