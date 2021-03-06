import Link from "next/link";
import stylesSlide from "../slide.module.scss";
import styles from "./slide-sport.module.scss";

const SlideSport = () => (
  <div className={styles.slide}>
    <h2 className={stylesSlide.title}>
      ID для спорта <span className={stylesSlide.accent}>и жизни</span>
    </h2>
    <p className={stylesSlide.description}>
      Хорошо выглядит и говорит о вашем образе жизни — плюс исследования
      докажут, что люди, которые носят QRepublik ID, значительно умнее тех, кто
      этого не делает
    </p>
    <Link href="#">
      <a className={stylesSlide.link}>Подробнее</a>
    </Link>
    <table className={stylesSlide.table}>
      <tbody className={stylesSlide.tableBody}>
        <tr className={stylesSlide.rowOne}>
          <th className={stylesSlide.tableTitle} scope="row">
            специалистов ищут медицинский идентификатор во время чрезвычайных
            ситуаций
          </th>
          <td className={stylesSlide.tableValue}>
            95
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowTwo}>
          <th className={stylesSlide.tableTitle} scope="row">
            смотрят на запястье пациента, чтобы найти медицинское удостоверение
            личности сразу после приезда
          </th>
          <td className={stylesSlide.tableValue}>
            75
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowThree}>
          <th className={stylesSlide.tableTitle} scope="row">
            ищут медицинский идентификатор на шее пациента
          </th>
          <td className={stylesSlide.tableValue}>
            68
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideSport;
