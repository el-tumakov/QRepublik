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
        <tr className={stylesSlide.titlesRow}>
          <th className={stylesSlide.titleOne} scope="col">
            детей пропадает ежедневно
          </th>
          <th className={stylesSlide.titleTwo} scope="col">
            детей помогут постороннему найти котенка
          </th>
          <th className={stylesSlide.titleThree} scope="col">
            называют человека знакомым, если видят его второй раз
          </th>
        </tr>
        <tr className={stylesSlide.valuesRow}>
          <td className={stylesSlide.valueOne}>
            50
            <sup styles={stylesSlide.valueType}></sup>
          </td>
          <td className={stylesSlide.valueTwo}>
            90
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
          <td className={stylesSlide.valueThree}>
            75
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideChildren;
