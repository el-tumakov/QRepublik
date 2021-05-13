import styles from "./privacy-police.module.scss";

const PrivacyPolice = () => (
  <section className={styles.privacy}>
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        Политика <span className={styles.accent}>конфеденциальности</span>
      </h1>
      <p>
        Персональная информация пользователей, используемая и хранящаяся на
        Сервисе https://qrepublik. com, защищена Законом РФ "О персональных
        данных" (152–ФЗ).
      </p>
      <p>
        Регистрируясь на Сервисе, пользователь дает согласие на хранение и
        обработку своих персональных данных.
      </p>
      <p>
        Сервис гарантирует конфиденциальность электронной информации в случаях,
        не предусмотренных функционалом Сервиса, в числе которых отображение
        пользовательской информации в экстренных ситуациях при сканировании
        QR–кода (санкционированный доступ, которое является основной функцией
        Сервиса). Понятие "конфиденциальность" включает в себя:
      </p>
      <p>
        строгое и ясное ограничение круга лиц, имеющих доступ к персональным
        данным пользователей, и определение этого круга исключительно самим
        пользователем;
      </p>
      <p>
        неиспользование сервисом этих данных ни в каких других целях кроме
        осуществления функций Сервиса;
      </p>
      <p>
        меры защиты от несанкционированного доступа к персональной информации
        извне, включая шифрование и мониторинг. Обмен данных с веб-сайтом
        осуществляется по безопасному протоколу HTTPS.
      </p>
    </div>
  </section>
);

export default PrivacyPolice;
