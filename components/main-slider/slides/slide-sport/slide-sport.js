import Link from "next/link";
import stylesSlide from "../slide.module.scss";
import styles from "./slide-sport.module.scss";

const SlideSport = () => (
  <div className={styles.slide}>
    <h2 className={stylesSlide.title}>
      ID для спорта <span className={stylesSlide.accent}>и жизни</span>
    </h2>
    <p className={stylesSlide.description}>
      Хорошо выглядит и говорит о вашем образе жизни — не говоря уже о том, что
      исследования вероятно докажут, что люди, которые носят QRepublik ID,
      значительно умнее тех, кто этого не делает
    </p>
    <Link href="#">
      <a className={stylesSlide.link}>Подробнее</a>
    </Link>
    <table className={stylesSlide.table}>
      <tbody className={stylesSlide.tableBody}>
        <tr className={stylesSlide.titlesRow}>
          <th className={stylesSlide.titleOne} scope="col">
            специалистов ищут медицинский идентификатор во время чрезвычайных
            ситуаций
          </th>
          <th className={stylesSlide.titleTwo} scope="col">
            смотрят на запястье пациента, чтобы найти медицинское удостоверение
            личности сразу после приезда
          </th>
          <th className={stylesSlide.titleThree} scope="col">
            ищут медицинский идентификатор на шее пациента
          </th>
        </tr>
        <tr className={stylesSlide.valuesRow}>
          <td className={stylesSlide.valueOne}>
            95
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
          <td className={stylesSlide.valueTwo}>
            75
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
          <td className={stylesSlide.valueThree}>
            68
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideSport;
