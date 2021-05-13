import styles from "./cookie-police.module.scss";

const CookiePolice = () => (
  <section className={styles.cookie}>
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        Политика файлов <span className={styles.accent}>Cookie</span>
      </h1>
      <p>
        QRepublik уважает ваше внимание к конфиденциальности и ценит сложившиеся
        между нами отношения.
      </p>
      <p>
        На наших сайтах применяется технология сбора информации, помогающая
        улучшать ваш клиентский опыт и наши продукты и услуги. Так поступаем не
        только мы, но и многие другие компании. Cookie-файлы повышают
        эффективность веб-сайта QRepublik. С их помощью мы собираем сведения о
        том, какая информация и какие рекламные объявления наиболее полезны
        нашим посетителям.
      </p>
      <p>
        Просим вас ознакомиться с нашими методами использования cookie-файлов.
        Вы сможете задать нам любые возникшие вопросы, направив электронное
        письмо или отправив запрос по электронной почте на support@qrepublik.com
      </p>
      <p>
        Мы постарались составить настоящее Уведомление максимально простым и
        понятным языком. Однако если вы не знакомы с такими понятиями, как
        cookie-файлы, IP-адрес и браузер, вы можете сначала ознакомиться со
        значением этих ключевых терминов, перейдя по ссылке.
      </p>
      <ul className={styles.list}>
        <li>
          <h2 className={styles.itemTitle}>
            Кто собирает персональные данные?
          </h2>
          <p>
            Любые персональные данные, предоставленные компании QRepublik или
            собираемые этой компанией с помощью cookie-файлов и других
            технологий отслеживания, контролируются ООО «Республика».
          </p>
          <p>
            Используя наши веб-сайты, вы соглашаетесь с нашим порядком
            использования cookie-файлов, описанным в настоящей Политике
            cookie-файлов и в нашей Политике конфиденциальности
          </p>
        </li>
        <li>
          <h2 className={styles.itemTitle}>Что такое «cookie-файл»?</h2>
          <p>
            Cookie-файлы, веб-маяки и схожие технологии (совместно именуемые
            «cookie-файлы») — это файлы, содержащие небольшой объем информации и
            загружаемые на любое устройство с доступом в Интернет (например, на
            ваш персональный компьютер, смартфон или планшет) при каждом
            посещении веб-сайта.
          </p>
        </li>
        <li>
          <h2 className={styles.itemTitle}>
            Для чего мы используем cookie-файлы?
          </h2>
          <p>
            Мы используем cookie-файлы для повышения удобства веб-сайтов
            QRepublik, персонализации взаимодействия с нашими веб-сайтами, а
            также оптимизации наших товаров, услуг и веб-сайтов в соответствии с
            вашими интересами и потребностями. Cookie-файлы используются для
            ускорения намеченных вами действий и повышения качества вашего
            взаимодействия с веб-сайтами QRepublik.
          </p>
        </li>
        <li>
          <h2 className={styles.itemTitle}>
            Как я могу управлять cookie-файлами или удалять их?
          </h2>
          <p>Вы можете управлять своими cookie-файлами разными способами:</p>
          <p>Вы можете отозвать свое согласие;</p>
          <p>
            Вы можете отключить использование cookie-файлов QRepublik и
            сторонних cookie-файлов, изменив настройки своего браузера (чтобы
            узнать подробности, перейдите по ссылке);
          </p>
          <p>
            Вы можете отключить использование cookie-файлов QRepublik и
            сторонних cookie-файлов с помощью нашего средства управления
            cookie-файлами (чтобы узнать подробности, перейдите по ссылке).
          </p>
        </li>
        <li>
          <h2 className={styles.itemTitle}>
            Какие cookie-файлы мы используем?
          </h2>
          <p>
            Cookie-файлы, используемые на веб-сайтах QRepublik, можно разделить
            на следующие категории:
          </p>
          <p>
            Необходимые cookie-файлы. Эти cookie-файлы не позволяют
            идентифицировать вашу личность.
          </p>
          <p>
            Cookie-файлы, необходимые для повышения эффективности веб-сайта. Эти
            cookie-файлы не позволяют идентифицировать вашу личность.
          </p>
          <p>
            Cookie-файлы, используемые для расширения функциональных
            возможностей.
          </p>
          <p>
            Сведения, собираемые этими cookie-файлами, могут содержать
            персональные данные, которые вы раскрыли.
          </p>
          <p>
            Cookie-файлы, связанные с показом таргетированной рекламы и
            рекламных объявлений. Большинство разновидностей таких cookie-файлов
            отслеживают потребителей по идентификатору устройства или IP-адресу,
            поэтому они могут собирать персональные данные.
          </p>
          <p>
            Сторонние cookie-файлы. В зависимости от того, какая разновидность
            cookie-файлов используется сторонним сайтом, хранимые в этих
            cookie-файлах сведения могут содержать персональные данные.
          </p>
        </li>
      </ul>
    </div>
  </section>
);

export default CookiePolice;
