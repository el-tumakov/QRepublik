import Link from "next/link";
import stylesSlide from "../slide.module.scss";
import styles from "./slide-medical.module.scss";

const SlideMedical = () => (
  <div className={styles.slide}>
    <h2 className={stylesSlide.title}>
      Медицинский <span className={stylesSlide.accent}>ID</span>
    </h2>
    <p className={stylesSlide.description}>
      Медицинский ID — неэлектронные браслеты для экстренных ситуаций, легко
      обновляются, экономичны и привлекательны, предоставят дополнительную
      информацию о вашем здоровье
    </p>
    <Link href="#">
      <a className={stylesSlide.link}>Подробнее</a>
    </Link>
    <table className={stylesSlide.table}>
      <tbody className={stylesSlide.tableBody}>
        <tr className={stylesSlide.rowOne}>
          <th className={stylesSlide.tableTitle} scope="row">
            пожилым требуется помощь при ходьбе, и лишь 8% остаются в пределах
            дома
          </th>
          <td className={stylesSlide.tableValue}>
            50
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowTwo}>
          <th className={stylesSlide.tableTitle} scope="row">
            людей старше 60 лет падают минимум раз в год, и около 54% получают
            серьезные травмы
          </th>
          <td className={stylesSlide.tableValue}>
            33
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowThree}>
          <th className={stylesSlide.tableTitle} scope="row">
            людей после 60 лет страдают старческим слабоумием
          </th>
          <td className={stylesSlide.tableValue}>
            15
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideMedical;
