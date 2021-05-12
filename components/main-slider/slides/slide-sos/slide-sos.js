import Link from "next/link";
import stylesSlide from "../slide.module.scss";
import styles from "./slide-sos.module.scss";

const SlideSos = () => (
  <div className={styles.slide}>
    <h2 className={stylesSlide.title}>
      Тревожная <span className={stylesSlide.accent}>кнопка</span>
    </h2>
    <p className={stylesSlide.description}>
      Вы создаете свой собственый план реагирования. Каждая ситуация
      индивидуальна и не всегда требует, чтобы к вам подъехали пожарная служба
      или скорая помощь. Мы отправим члена семьи или службу экстренной помощи в
      зависимости от каждой конкретной ситуации
    </p>
    <Link href="/detail-sos">
      <a className={stylesSlide.link}>Подробнее</a>
    </Link>
    <table className={stylesSlide.table}>
      <tbody className={stylesSlide.tableBody}>
        <tr className={stylesSlide.rowOne}>
          <th className={stylesSlide.tableTitle} scope="row">
            человек находится в возрасте старше трудоспособного
          </th>
          <td className={stylesSlide.tableValue}>
            39
            <sup styles={stylesSlide.valueType}>млн</sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowTwo}>
          <th className={stylesSlide.tableTitle} scope="row">
            почти половина травм, полученных в результате падения, приводит к
            потере качества жизни
          </th>
          <td className={stylesSlide.tableValue}>
            49
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
        <tr className={stylesSlide.rowThree}>
          <th className={stylesSlide.tableTitle} scope="row">
            травм должны быть прооперированы в течении 24-48 часов
          </th>
          <td className={stylesSlide.tableValue}>
            95
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideSos;
