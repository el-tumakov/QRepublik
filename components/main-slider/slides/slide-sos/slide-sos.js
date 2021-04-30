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
    <Link href="#">
      <a className={stylesSlide.link}>Подробнее</a>
    </Link>
    <table className={stylesSlide.table}>
      <tbody className={stylesSlide.tableBody}>
        <tr className={stylesSlide.titlesRow}>
          <th className={stylesSlide.titleOne} scope="col">
            человек находится в возрасте старше трудоспособного
          </th>
          <th className={stylesSlide.titleTwo} scope="col">
            почти половина травм, полученных в результате падения, приводит к
            потере качества жизни
          </th>
          <th className={stylesSlide.titleThree} scope="col">
            травм должны быть прооперированы в течении 24-48 часов
          </th>
        </tr>
        <tr className={stylesSlide.valuesRow}>
          <td className={stylesSlide.valueOne}>
            39
            <sup styles={stylesSlide.valueType}>млн</sup>
          </td>
          <td className={stylesSlide.valueTwo}>
            49
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
          <td className={stylesSlide.valueThree}>
            95
            <sup styles={stylesSlide.valueType}>%</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SlideSos;
