import styles from "./about-full.module.scss";

const AboutFull = () => (
  <section className={styles.about}>
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        О <span className={styles.accent}>Нас</span>
      </h1>
      <div className={styles.textWrap}>
        <div className={styles.leftSide}>
          <p>
            Резидент биомедицинского кластера Сколково, компания ООО
            «Республика», работающая под брендом QRepublik с офисами в Москве и
            Страсбурге, занимается технологиями экстренной идентификации
            человека в экстренных ситуациях. Продуктами компании пользуются
            более 500 тысяч человек по всему миру. Технологии QRepublik
            сфокусированы на проблеме нехватки информации о человеке в
            экстренной ситуации для оказания помощи и работают в сферах
            медицинского и туристического идентификатора на множестве языков
            мира.
          </p>
        </div>
        <div className={styles.rightSide}>
          <p>
            Особенностью компании являются технологии деперсонализации QRepublik
            Кеү, позволяющей защищённо хранить медицинские данные с возможностью
            их предоставления, а также QRepublik AI - уникальной системы
            обработки и интерпретации мультиязычной медицинской информации.
          </p>
          <p>
            Работа с QRepublik - это стык технологичности, гибкости и социальной
            ответственности, наши продукты спасают жизни.
          </p>
        </div>
      </div>
      <figure className={styles.quoteWrap}>
        <h2 className={styles.letterTitle}>Письмо основателей</h2>
        <blockquote className={styles.quote}>
          «С нашей технологией медицина становится не только медициной лечения
          больных людей, но и прежде всего медициной сопровождения. Мы
          разрабатываем доступные и удобные технологии для тех, кто может
          оказаться в ситуации, где каждый бит может спасти жизнь человеку.»
        </blockquote>
        <figcaption className={styles.author}>
          Александр Сенкевич{" "}
          <span className={styles.authorPost}>
            Генеральный директор QRepublik
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default AboutFull;
