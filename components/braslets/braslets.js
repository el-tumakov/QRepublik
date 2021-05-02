import Link from "next/link";
import Image from "next/image";
import styles from "./braslets.module.scss";

const Braslets = () => (
  <section className={styles.braslets}>
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        Купить свой <span className={styles.accent}>ID</span>
      </h2>
      <ul className={styles.list}>
        <li className={styles.itemFirst}>
          <Link href="#">
            <a className={styles.link}>
              <h3 className={styles.itemTitle}>
                Крепкий нейлоновый браслет с QR на вкладыше
              </h3>
              <div className={styles.image}>
                <Image
                  className={styles.image}
                  src="/images/braslet-1.jpg"
                  width={200}
                  height={220}
                  alt="Серый браслет средней ширины с черной фурнитурой и экраном"
                ></Image>
              </div>
              <p className={styles.price}>$23</p>
            </a>
          </Link>
        </li>
        <li className={styles.itemSecond}>
          <Link href="#">
            <a className={styles.link}>
              <h3 className={styles.itemTitle}>
                Силиконовый браслет - наш медицинский идентификатор нового
                поколения
              </h3>
              <div className={styles.image}>
                <Image
                  src="/images/braslet-2.jpg"
                  width={200}
                  height={220}
                  alt="Узкий Сиреневый браслет с золотой фурнитурой и черным экраном"
                ></Image>
              </div>
              <p className={styles.price}>$43</p>
            </a>
          </Link>
        </li>
        <li className={styles.itemThird}>
          <Link href="#">
            <a className={styles.link}>
              <h3 className={styles.itemTitle}>
                QRepublik ID Tag поддерживает технологию NFC и QR Code
              </h3>
              <div className={styles.image}>
                <Image
                  className={styles.image}
                  src="/images/braslet-3.jpg"
                  width={200}
                  height={220}
                  alt="Широкий сиреневый браслет с золотой фурнитурой и черным экраном"
                ></Image>
              </div>
              <p className={styles.price}>$46</p>
            </a>
          </Link>
        </li>
        <li className={styles.itemFourth}>
          <Link href="#">
            <a className={styles.link}>
              <h3 className={styles.itemTitle}>
                Насадки на часы, наш бестселлер
              </h3>
              <div className={styles.image}>
                <Image
                  className={styles.image}
                  src="/images/braslet-4.jpg"
                  width={200}
                  height={220}
                  alt="Узкий красный браслет с серебряной фурнитурой и черным экраном"
                ></Image>
              </div>
              <p className={styles.price}>$33</p>
            </a>
          </Link>
        </li>
      </ul>
      <Link href="#">
        <a className={styles.button}>Перейти в магазин</a>
      </Link>
    </div>
  </section>
);

export default Braslets;
