import {useState} from "react";
import Input from "./input/input";
import styles from "./cooperation.module.scss";

const Cooperation = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [inn, setInn] = useState("");
  const [phone, setPhone] = useState("");
  const [site, setSite] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className={styles.cooperation}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>
          Подать заявку на <span className={styles.accent}>сотрудничество</span>
        </h1>
        <p>
          Для начала сотрудничества и получения оптовых цен, Вы можете связаться
          с нами:
        </p>
        <ul>
          <li>Заполните форму, и в ближайшее время менеджер свяжется с Вами</li>
          <li>
            <a href="tel:+79254648797">Позвоните</a> по телефону +7 925 464 8797
            и менеджер предложит все возможные варианты сотрудничества
          </li>
        </ul>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>Информация о клиенте</h2>
          <div className={styles.inputsWrap}>
            <Input
              id="cooperation-name"
              label="Ваше имя"
              type="text"
              placeholder="Имя"
              value={name}
              onChange={setName}
            />
            <Input
              id="cooperation-lastname"
              label="Ваша фамилия"
              type="text"
              placeholder="Фамилия"
              value={lastname}
              onChange={setLastname}
            />
            <Input
              id="cooperation-email"
              label="Ваша электронная почта"
              type="email"
              placeholder="Электронная почта"
              value={email}
              onChange={setEmail}
            />
            <Input
              id="cooperation-company"
              label="Название вашей компании"
              type="text"
              placeholder="Компания"
              value={company}
              onChange={setCompany}
            />
            <Input
              id="cooperation-inn"
              label="Ваш ИНН или номер плательщика НДС"
              type="number"
              placeholder="ИНН или номер плательщика НДС"
              value={inn}
              onChange={setInn}
            />
            <Input
              id="cooperation-phone"
              label="Ваше номер телефона"
              type="tel"
              placeholder="Телефонный номер"
              value={phone}
              onChange={setPhone}
            />
            <Input
              id="cooperation-site"
              label="Ваш сайта"
              type="text"
              placeholder="Интернет сайт"
              value={site}
              onChange={setSite}
            />
            <Input
              id="cooperation-note"
              label="Ваши примечания"
              type="text"
              placeholder="Примечания"
              value={note}
              onChange={setNote}
            />
          </div>
          <button className={styles.submit} type="submit">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default Cooperation;
