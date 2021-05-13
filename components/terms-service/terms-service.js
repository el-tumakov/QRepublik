import styles from "./terms-service.module.scss";

const TermsService = () => (
  <section className={styles.terms}>
    <div className={styles.wrap}>
      <h1 className={styles.title}>
        Условия предоставления <span className={styles.accent}>услуг</span>
      </h1>
      <p>
        Публичная оферта об использовании онлайн-сервиса для предоставления или
        обмена медицинской информацией между пользователями, службами экстренной
        помощи, лицами оказывающими помощь и медицинскими организациями в
        Обществе с ограниченной ответственностью «Республика» (пользовательское
        соглашение)
      </p>
      <div>
        <h2 className={styles.subTitle}>Общие положения</h2>
        <p>
          Настоящий документ является официальным предложением (далее – Оферта)
          Общества с ограниченной ответственностью «Республика» (ИНН
          7731400617), в дальнейшем именуемого «Общество», в лице генерального
          директора Сенкевича Александра Леонидовича, действующей на основании
          Устава, и содержит все существенные условия использовании
          онлайн-сервиса для предоставления или обмена медицинской информацией
          между пользователями, службами экстренной помощи и медицинскими
          организациями (далее – Сервис) лицами, предоставившими сведения о себе
          (персональные данные) с использованием регистрационной формы на сайте
          Общества в сети Интернет по адресу https://qrepublik.com с целью
          создания и использования Персональной электронной медицинской карты
          (далее – Пользователи).
        </p>
        <p>
          Данная Оферта является официальным документом и публикуется на сайте
          Общества по адресу https://qrepublik.com (далее – Сайт).
        </p>
        <p>
          Заполняя размещенную на Сайте регистрационную форму и данные в Личном
          Кабинете, предоставляя свои персональные данные Обществу, Пользователи
          подтверждают принятие указанных в Условиях предоставления услуг
          Сервиса и дают согласие на обработку своих персональных данных в
          соответствии с Настоящей Политикой конфиденциальности, размещенной на
          Сайте по адресу https://qrepublik.com.
        </p>
      </div>
      <div>
        <h2 className={styles.subTitle}>Термины и определения</h2>
        <p>
          Доступ к персональным данным – ознакомление определенных лиц, служб
          экстренной помощи, лиц оказывающих помощь (в том числе работников
          Общества) с персональными данными субъектов, обрабатываемыми
          Обществом, при условии сохране ния конфиденциальности этих сведений.
        </p>
        <p>
          Информационная система персональных данных – совокупность содержащихся
          в базах данных персональных данных и обеспечивающих их обработку
          информационных технологий и технических средств. В Оферте под
          информационной системой персональных данных понимается Сайт в
          совокупности с программным комплексом QRepublik, базой данных, в
          которой находятся персональные данные Пользователей.
        </p>
        <p>
          Конфиденциальность персональных данных – обязанность лиц, получивших
          доступ к персональным данным, не раскрывать третьим лицам и не
          распространять персональные данные без согласия субъекта персональных
          данных, если иное не предусмотрено законодательством Российской
          Федерации (далее – законодательство).
        </p>
        <p>
          Медицинская помощь – комплекс мероприятий, направленных на поддержание
          и (или) восстановление здоровья и включающих в себя предоставление
          медицинских услуг.
        </p>
        <p>
          Медицинская услуга – медицинское вмешательство или комплекс
          медицинских вмешательств, направленных на профилактику, диагностику и
          лечение заболеваний, медицинскую реабилитацию и имеющих
          самостоятельное законченное значение.
        </p>
        <p>
          Обработка персональных данных – любое действие (операция) или
          совокупность действий (операций), совершаемых с использованием средств
          автоматизации или без использования таких средств с персональными
          данными, включая сбор, запись, систематизацию, накопление, хранение,
          уточнение (обновление, изменение), извлечение, использование, передачу
          (распространение, предоставление, доступ), обезличивание,
          блокирование, удаление, уничтожение персональных данных.
        </p>
        <p>
          Персональная электронная медицинская запись (ПЭМЗ) – любая медицинская
          запись, сохраненная на электронном носителе. ПЭМЗ привязана к
          конкретному электронному хранилищу, характеризуется моментом
          размещения в этом хранилище. В Оферте под ПЭМЗ будет пониматься
          запись, сделанная в ПЭМК.
        </p>
        <p>
          Персональная электронная медицинская карта (ПЭМК) – совокупность
          электронных персональных медицинских записей, поступивших из различных
          источников и относящихся к одному Пользователю, который осуществляет
          их сбор, управление ими, а также определяет права доступа к ним. В
          Оферте под ПЭМК будет пониматься ПЭМК, созданная Пользователем на
          Сайте.
        </p>
        <p>
          Персональные данные – любая информация, относящаяся прямо или косвенно
          к определенному или определяемому физическому лицу (субъекту
          персональных данных).
        </p>
        <p>
          Пользователь – дееспособное физическое лицо, достигшее 18 лет,
          заполнившее регистрационную форму на Сайте, акцептовавшее тем самым
          Оферту и получившее доступ к Сайту и размещенному на нем Сервису для
          сбора, хранения и самостоятельного управления информацией о своем
          здоровье с целью обмена медицинской информацией между Пользователями
        </p>
        <p>
          Предоставление персональных данных – действия, направленные на
          раскрытие персональных данных определенному лицу или определенному
          кругу лиц.
        </p>
        <p>
          Простая электронная подпись – электронная подпись, которая посредством
          использования кодов, паролей или иных средств подтверждает факт
          формирования электронной подписи определенным лицом. В Оферте под
          простой электронной подписью понимается логин (адрес электронной
          почты, Email) в совокупности с паролем, указанные Пользователем при
          регистрации, либо иные формы регистрации на Сайте Регистрационная
          форма – веб-форма на Сайте, используя которую Пользователи
          предоставляют Обществу персональные данные, предусмотренные формой, и
          акцептуют Оферту.
        </p>
        <p>
          Сайт – совокупность программ для электронных вычислительных машин и
          иной информации, содержащейся в информационной системе, доступ к
          которой обеспечивается посредством информационно-телекоммуникационной
          сети интернет по доменным именам и (или) по сетевым адресам,
          позволяющим идентифицировать сайты в сети интернет. В Оферте под
          Сайтом будет пониматься сайт Общества https://qrepublik.com
        </p>
        <p>
          Сведения о состоянии здоровья (медицинская информация, информация о
          здоровье) – анамнез сведений о результатах медицинского обследования,
          наличии заболевания, об установленном диагнозе и о прогнозе развития
          заболевания, методах оказания медицинской помощи, связанном с ними
          риске, возможных видах медицинского вмешательства, его последствиях и
          результатах оказания медицинской помощи.
        </p>
        <p>
          Специальные категории персональных данных– сведения, касающиеся
          расовой, национальной принадлежности, политических взглядов,
          религиозных или философских убеждений, состояния здоровья.
        </p>
        <p>
          Страница сайта в сети интернет (интернет-страница) – часть сайта в
          сети интернет, доступ к которой осуществляется по указателю,
          состоящему из доменного имени и символов, определенных владельцем
          сайта в сети интернет. В договоре под интернет-страницами будут
          пониматься страницы Сайта.
        </p>
        <p>
          Субъект персональных данных – физическое лицо, к которому относятся
          персональные данные. Уничтожение персональных данных – действия, в
          результате которых становится невозможным восстановить содержание
          персональных данных в информационной системе персональных данных и
          (или) в результате которых уничтожаются материальные носители
          персональных данных.
        </p>
        <p>
          Электронная подпись – информация в электронной форме, которая
          присоединена к другой информации в электронной форме (подписываемой
          информации) или иным образом связана с такой информацией и которая
          используется для определения лица, подписывающего информацию.
        </p>
      </div>
      <div>
        <h2 className={styles.subTitle}>
          Краткое описание Сервиса для обмена медицинской информацией между
          Пользователями, Службами экстренной помощи, лицами оказывающими помощь
          и Медицинскими организациями
        </h2>
        <p>
          Сервис предназначен для информационного взаимодействия
          зарегистрированного Пользователя с иными зарегистрированными и
          незарегистрированными Пользователями по обмену сохранённой
          пользовательской информацией в различных целях, не противоречащих
          законодательству Российской Федерации и стран СНГ. Сервис создает
          площадку электронного взаимодействия Пользователей, Служб экстренной
          помощи, Врачей и Медицинских организаций и предоставляет Пользователю
          следующие основные возможности:
        </p>
        <p>
          Предоставление основной информации, в том числе и информации
          медицинского характера, сохраняемой непосредственно самим
          пользователем через Личный кабинет, лицам, оказывающим помощь, а также
          службам экстренной помощи; Cоздание и ведение персональной электронной
          медицинской карты (ПЭМК), не имеющей отношения к основным медицинским
          картам, ведущимся в лечебных учреждениях; Cостав и функциональность
          Сервиса направлены на структуризацию и упорядочение действий
          Пользователя по заботе о своем здоровье и постоянно расширяются.
        </p>
      </div>
      <div>
        <h2 className={styles.subTitle}>
          Предоставление Пользователями персональных данных Обществу
        </h2>
        <p>
          На Пользователей распространяются изложенные в Оферте условия
          использования Сервиса, размещенного на Сайте, с момента акцептования
          ими Оферты.
        </p>
        <p>
          Пользователь считается заключившим договор об использовании Сервиса
          (акцептовавшим Оферту) с момента предоставления Обществу своих
          персональных данных с использованием регистрационной формы на Сайте.
        </p>
        <p>
          Акцепт Оферты рассматривается Обществом как данное Пользователем
          (субъектом персональных данных) конкретное, информированное и
          сознательное согласие на обработку Обществом своих персональных
          данных, включая персональные данные специальных категорий – сведений о
          состоянии здоровья, которое он дает свободно, своей волей и в своем
          интересе. Данное согласие рассматривается как равнозначное согласию в
          письменной форме на бумажном носителе, содержащему собственноручную
          подпись субъекта персональных данных, поскольку дано в форме
          электронного документа, подписанного в соответствии с
          законодательством простой электронной подписью. Акцепт оферты также
          является согласием на обработку персональных данных лицами, указанными
          в разделе 3 Оферты.
        </p>
        <p>
          Персональные данные предоставляются Пользователями путем заполнения
          соответствующих полей в регистрационной форме и Личном кабинете.
        </p>
        <p>
          При регистрации Пользователь сообщает о себе достоверные данные. Не
          разрешается использование поддельных имен (никнеймов); как
          обязательные, так и опциональные поля формы регистрации должны быть
          заполнены правдиво и относиться к лицу, регистрируемому на Сервисе.
        </p>
        <p>
          Общество исходит из того, что регистрацию производит непосредственно
          сам Пользователь. Ответственность за правомерность и достоверность
          персональных данных Пользователей несет исключительно предоставившее
          их лицо. Общество не принимает на себя никаких обязательств по
          проверке персональных данных, указанных Пользователями и не берёт на
          себя ответственность за любые действия, совершённые исходя из данных,
          сохранённых Пользователем в Сервисе.
        </p>
        <p>
          Пользователь вправе создать ПЭМК на Сайте для своего родственника, в
          том числе несовершеннолетнего ребенка, или для иного лица и от имени
          этих лиц. В этом случае ответственность за правомерность создания ПЭМК
          и размещение необходимых для этого персональных данных, в том числе за
          получение на это согласия такого лица в случаях, если получение
          согласия необходимо в соответствии с законодательством, полностью
          лежит на Пользователе, создавшем ПЭМК. Общество не принимает на себя
          никаких обязанностей по проверке правомерности действий Пользователя в
          этом случае и достоверности размещаемых им на Сайте персональных
          данных иных лиц.
        </p>
      </div>
      <div>
        <h2 className={styles.subTitle}>
          Оказание предусмотренных сервисом услуг
        </h2>
        <p>
          Предусмотренные Сервисом услуги оказываются Обществом Пользователям в
          объеме и с периодичностью, определяемыми Обществом.
        </p>
        <p>
          Сервис используется только в целях заботы о здоровье Пользователя. Не
          допускается хранение и/или публикация на Сайте информации, не
          относящейся к сфере здоровья, медицины или туризма, в том числе в
          приватных областях личного архива Пользователя.
        </p>
        <p>
          Пользователь полностью контролирует принадлежащую ему информацию и
          несет ответственность за часть этой информации, созданную лично им.
          Информация, принадлежащая Пользователю, но иного авторства
          (медицинские записи, внесенные Врачами, консультации специалистов и их
          комментарии к записям), относится к сфере ответственности своих
          авторов (Врачей, Медицинских организаций). Контроль и ответственность
          Общества ограничиваются лишь соблюдением всеми участниками
          установленных Обществом правил в Оферте и иных документах,
          опубликованных (размещенных) на Сайте.
        </p>
        <p>
          Пользователь не предпринимает никаких действия, нарушающих
          законодательство, в том числе попыток взлома, завладения чужим
          паролем, несанкционированных действий от имени другого лица.
          Пользователь осознает, что такие действия влекут за собой
          предусмотренную законодательством ответственность вплоть до уголовной.
        </p>
        <p>
          Пользователь принимает Сервис «как есть» и признает отсутствие
          ответственности со стороны Общества за несоответствие функциональности
          Сервиса своим целям и/или ожиданиям.
        </p>
        <p>
          Общество вправе отказать Пользователю в предоставлении всех или части
          услуг, предусмотренных Сервисом, в случае отсутствия технической или
          иной возможности без объяснения причин.
        </p>
        <p>
          Общество самостоятельно оценивает преднамеренность и вредоносность
          действий Пользователей, нарушающих условия Оферты. Общество оставляет
          за собой право применять к нарушителям условий Оферты меры вплоть до
          ликвидации учетной записи Пользователя вместе со всей содержащейся в
          ней информацией и его ПЭМК.
        </p>
      </div>
      <div>
        <h2 className={styles.subTitle}>
          Обработка Обществом персональных данных Пользователей
        </h2>
        <p>
          Общество является оператором в отношении персональных данных
          Пользователей и при их обработке руководствуется требованиями
          законодательства, в том числе 152-ФЗ.
        </p>
        <p>
          К персональным данным Пользователя, которые обрабатываются Обществом,
          помимо указанных им в регистрационной форме, относятся сведения о
          состоянии здоровья, самостоятельно внесенные им в ПЭМК.
        </p>
        <p>
          Срок хранения персональных данных, указанных Пользователем в
          регистрационной форме и полученных Обществом порядком, указанным в
          Пользовательском соглашении, неограничен и определяется самостоятельно
          Пользователем (субъектом персональных данных).
        </p>
        <p>
          Пользователь может в любой момент расторгнуть Оферту и отозвать свое
          согласие на обработку персональных данных Обществом, направив
          заявление в письменной или электронной форме, содержащее те же
          персональные данные, которые были указаны в регистрационной форме или
          сведения об основном документе, удостоверяющем личность Пользователя.
          Отзыв Пользователем согласия на обработку его персональных данных
          Обществом означает расторжение Пользователем Оферты и влечет
          прекращение предоставления ему Сервиса со стороны Общества.
        </p>
        <p>
          Пользователь может самостоятельно прекратить хранение и обработку всех
          своих персональных данных путем удаления своего профиля, в том числе
          своей ПЭМК.
        </p>
        <p>
          Пользователь самостоятельно, с использованием своего логина и пароля,
          может изменить свои персональные данные, размещенные на Сайте, в том
          числе в ПЭМК.
        </p>
        <p>
          Общество не несет ответственности за возможное нецелевое использование
          персональных данных Пользователей, произошедшее из-за: технических
          неполадок в программном обеспечении, серверах или компьютерных сетях,
          находящихся вне контроля Общества; перебоев в работе Сайта, в том
          числе связанных с намеренным или ненамеренным использованием Сайта не
          по назначению третьими лицами.
        </p>
        <p>
          Используя Сервис, Пользователь соглашается с тем, что Общество
          оставляет за собой право использовать его персональные данные, в том
          числе содержащиеся в ПЭМК, после их обезличивания для статистических,
          научных и исследовательских целей.
        </p>
        <p>
          Общество обязуется не предоставлять никакие персональные данные
          Пользователя физическим и юридическим лицами, заявляющим о возможном
          нецелевом использовании подобной информации (рассылки
          несанкционированной рекламы, «спама», предоставлении информации другим
          лицам и тому подобное), за исключением случаев, когда предоставление
          персональных данных предусмотрено законодательством. В случае, если
          Медицинская организация или Врач сохраняют персональные данные
          Пользователя в своей собственной базе данных или иных хранилищах, в
          том числе электронных, вне Сайта, то ответственность за это и
          дальнейшие действия с персональными данными Пользователя несет
          Медицинская организация (Врач) в соответствии с Федеральным законом от
          27.07.2006 № 152- ФЗ «О персональных данных» как оператор персональных
          данных.
        </p>
        <p>
          Поскольку Общество не принимает на себя обязанности по установлению
          личности Пользователей и не проводит его, Общество не отвечает за то,
          что Пользователи являются действительно теми людьми, за кого себя
          выдают, и не несет ответственности за возможный ущерб, причиненный
          другим Пользователям или иным лицам по этой причине.
        </p>
        <p>
          В случае отзыва Пользователем согласия на обработку Обществом
          персональных данных, его персональные данные уничтожаются Обществом в
          срок, не превышающий 30 (Тридцати) дней, за исключением сведений,
          более длительное хранение которых предусмотрено законодательством,
          Общество вправе обезличить персональные данные Пользователя и
          продолжить их обработку в статистических, научных, исследовательских
          или иных целях, не нарушающих прав Пользователя.
        </p>
      </div>
      <div>
        <h2 className={styles.subTitle}>Иные условия</h2>
        <p>
          Общество по своему усмотрению вправе вносить любые изменения в Оферту
          в любое время. Информация об указанных изменениях будет размещаться на
          Сайте Общества по адресу https://qrepublik.com не менее чем за 7
          (Семь) дней до их ввода в действие.
        </p>
        <p>
          Общество оставляет за собой право приостановить или прекратить
          предоставление Сервиса в соответствии с Офертой в любое время с
          уведомлением Пользователя путем направления ему письма по электронной
          почте, смс-сообщения или размещения соответствующей информации на
          Сайте Общества по адресу https://qrepublik.com не менее чем за 1
          (Один) месяц до приостановки или прекращения оказания услуг.
        </p>
        <p>
          Информация считается направленной от имени Общества Пользователю, если
          она отправлена на адрес электронной почты или в форме смс-сообщения на
          телефонный номер, указанные Пользователем при предоставлении им
          Обществу персональных данных, или размещена им на Сайте Общества.
        </p>
      </div>
      <div>
        <h2 className={styles.subTitle}>Ответственность и разрешение споров</h2>
        <p>
          Общество несет ответственность перед Пользователем. Общество не несет
          ответственности за действия Медицинских организаций, Лиц оказывающих
          помощь и Врачей, в том числе — в случае нарушения ими законных
          интересов и прав Пользователя, как связанных, так и не связанных с
          обработкой его персональных данных.
        </p>
        <p>
          Ответственность Общества в отношении Сервиса, предоставляемого в
          рамках Оферты, ограничена требованиями законодательства.
        </p>
        <p>
          Полностью исключена ответственность Общества за здоровье Пользователя.
          Общество не должно и не может рассматриваться Пользователем как
          компетентное в частных медицинских вопросах и не участвует в процессе
          оказания медицинской помощи, выполняя только организационную и
          технологическую роль в этом процессе.
        </p>
        <p>
          Обязательства Общества об обеспечении конфиденциальности в отношении
          информации Пользователя, в том числе его персональных данных, не
          распространяется на небезопасные действия самого Пользователя, такие,
          как передача пароля иным лицам, оставление сохраненной авторизации на
          чужом компьютере, использование для доступа к Сервису пароля,
          известного другим лицам, и т.п.
        </p>
        <p>
          Споры и претензии между Пользователем и другими лицами, участвующим в
          предоставлении предусмотренных Сервисом услуг (в том числе самим
          Обществом) разрешаются Обществом, если спорный вопрос входит в его
          компетенцию. При невозможности урегулирования спор между Обществом и
          Пользователем спор подлежит разрешению в порядке, предусмотренном
          законодательством. Споры профессиональной медицинской тематики не
          входят в компетенцию Общества.
        </p>
      </div>
    </div>
  </section>
);

export default TermsService;