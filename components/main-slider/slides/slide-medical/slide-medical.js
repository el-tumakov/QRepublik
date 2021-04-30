import Link from "next/link";
import stylesSlide from "../slide.module.scss";
import styles from "./slide-medical.module.scss";

const SlideMedical = () => (
  <div className={styles.slide}>
    <h2 className={stylesSlide.title}>
      Медицинский <span className={stylesSlide.accent}>ID</span>
    </h2>
    <p className={stylesSlide.description}>
      Медицинский ID — неэлектронные браслеты
      <br /> для экстренных ситуаций, легко обновляются, экономичны и
      привлекательны, предоставят дополнительную информацию о вашем здоровье
    </p>
    <Link href="#">
      <a className={stylesSlide.link}>Подробнее</a>
    </Link>
    <table className={stylesSlide.table}>
      <tbody className={stylesSlide.tableBody}>
        <tr className={stylesSlide.titlesRow}>
          <th className={stylesSlide.titleOne} scope="col">
            пожилым требуется помощь при ходьбе, и лишь 8% остаются в пределах
            дома
          </th>
          <th className={stylesSlide.titleTwo} scope="col">
            людей старше 60 лет падают минимум раз в год, и около 54% получают
            серьезные травмы
          </th>
          <th className={stylesSlide.titleThree} scope="col">
            людей после 60 лет страдают старческим слабоумием
          </th>
        </tr>
        <tr className={stylesSlide.valuesRow}>
          <td className={stylesSlide.valueOne}>
            50
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
          <td className={stylesSlide.valueTwo}>
            33
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
          <td className={stylesSlide.valueThree}>
            15
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideMedical;
