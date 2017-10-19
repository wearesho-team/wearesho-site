import {NameRange} from "../models/common/Rules";
import {translate} from "../helpers/translate";

translate.registerTranslations("ru", {
    header: {
        newProject: "Новый проект"
    },
    mainPage: {
        title: {
            mainOne: {
                base: "Здесь ваши",
                additions: {
                    1: "смелые",
                    2: "смелые2",
                    3: "смелые3"
                }
            },
            mainTwo: {
                base: "идеи превращаются",
                additions: {
                    1: "в IT-продукт",
                    2: "в IT-продукт2",
                    3: "в IT-продукт3"
                }
            }
        },
        articles: {
            whatWeDo: {
                title: "Реализуем высокотехнологичные проекты",
                items: {
                    1: "разработка сайтов",
                    2: "брендинг и дизайн",
                    3: "формирование ERP и CRM-систем",
                    4: "аналитика и реклама",
                    5: "техническая поддержка проектов"
                }
            },
            howLong: {
                title: "Более 3 лет",
                subTitle: "профессионального сотрудничества с финансовыми компаниями:",
                items: [
                    "NIKO Holding",
                    "INFINANCE"
                ]
            }
        }
    },
    contactPage: {
        title: "Партнерство",
        form: {
            title: "Свяжитесь с нами",
            subTitle: "или укажите контактные данные в форме ниже. Наши специалисты ответят на все вопросы.",
            placeholders: {
                name: "Ваше имя",
                phone: "Телефон",
                mail: "Эл.почта"
            },
            time: {
                title: "Мы ценим ваше время",
                subTitle: "Укажите удобное вам время для обсуждения проекта:",
                from: "с",
                to: "до"
            }
        },
        contacts: {
            title: "Контакты",
        },
        support: {
            title: "Техническая поддержка",
            subTitle: "партнеров Cтудии"
        },
        location: {
            title: "Локация",
        }
    },
    buttons: {
        send: "Отправить",
        sending: "Отправка",
        cooperate: "Сотрудничать"
    },
    hashTags: {
        autodealer: "#автодилер",
        logistics: "#логистика",
        finances: "#финансы",
        crediting: "#кредитование"
    },
    validation: {
        incorrect: {
            phone: "Некорректный телефон",
            mail: "Некорректный E-Mail",
            name: `Латиница/кириллица от ${NameRange.min} до ${NameRange.max} символов`,
            time: "Некорректное время"
        },
        empty: "Обязательно для заполнения"
    },
    Kharkiv: "Харьков",
    Ukraine: "Украина",
});
