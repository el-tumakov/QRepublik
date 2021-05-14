import styles from "./manual.module.scss";

const Manual = () => (
  <section className={styles.manual}>
    <h1 class="visually-hidden">Инструкция QRepublik</h1>
    <div className={styles.wrap}>
      <ol className={styles.list}>
        <li className={styles.item1}>
          <h2 className={styles.itemTitle}>Сканируйте QR-код</h2>
          <p className={styles.itemDescription}>
            Откройте любое приложение — сканер QR-кодов и наведите камерой на
            код Вашего ID. Сканер должен предложить открыть web-страницу. Для
            пользователей iOS сканнер QR-кодов уже предустановлен в стандартную
            камеру.
          </p>
        </li>
        <li className={styles.item2}>
          <h2 className={styles.itemTitle}>Введите ключ ID</h2>
          <p className={styles.itemDescription}>
            Если система запросит, введите 8-символьный ключ из-под QR-кода в
            текстовое поле на экране и нажмите зелёную кнопку, чтобы продолжить.
          </p>
        </li>
        <li className={styles.item3}>
          <h2 className={styles.itemTitle}>Войдите или зарегистрируйтесь</h2>
          <p className={styles.itemDescription}>
            Войдите, если у Вас уже есть профиль на QRepublik или создайте новый
            аккаунт, если нет, Вы можете использовать для этого свой e-mail,
            телефон или соцсеть. Обратите внимание, что в случае использования
            e-mail Вам будет необходимо подтвердить его, перейдя по ссылке в
            письме от QRepublik.
          </p>
        </li>
        <li className={styles.item4}>
          <h2 className={styles.itemTitle}>Выберите профиль</h2>
          <p className={styles.itemDescription}>
            Если у Вас уже есть аккаунт на QRepublik, система предложит
            подключить Ваш ID к существующему профилю или к новому (напр. Вашего
            члена семьи), если вы планируете управлять ими с одного аккаунта.
          </p>
        </li>
        <li className={styles.item5}>
          <h2 className={styles.itemTitle}>
            Добавляйте и изменяйте свои данные
          </h2>
          <p className={styles.itemDescription}>
            Управляйте данными через личный кабинет. Добавляйте, изменяйте или
            удаляйте свои данные в любое время. Сохранённая информация
            отображается, когда Ваш ID сканирован. Обратите внимание, что
            QRepublik защищает информацию от кражи, но не несёт ответственность
            за качество и корректность данных, введённых владельцем ID. Каждая
            ошибка в таких данных может привести к тяжёлым последствиям, поэтому
            будьте внимательны при вводе.
          </p>
        </li>
      </ol>
    </div>
  </section>
);

export default Manual;
