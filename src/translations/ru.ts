import {NameRange} from "../models/common/Rules";
import {translate} from "../helpers/translate";
// tslint:disable:max-line-length
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
                }
            },
            mainTwo: {
                base: "идеи превращаются",
                additions: {
                    1: "в IT-продукт",
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
                subTitle: "сотрудничества с финансовыми компаниями:",
                items: [
                    "NIKO Holding",
                    "INFINANCE"
                ]
            }
        },

    },
    contactPage: {
        title: "Партнерство",
        form: {
            titleExtended: "Свяжитесь с нами или укажите данные в форме. Наши специалисты ответят на все вопросы.",
            title: "Свяжитесь с нами",
            placeholders: {
                name: "Ваше имя",
                phone: "Телефон",
                mail: "Эл.почта",
                comment: "Комментарий"
            },
            time: {
                title: "Мы ценим ваше время",
                subTitle: "Укажите удобное время для обсуждения проекта:",
                from: "с",
                to: "до"
            },
            submit: {
                success: {
                    thanks: "спасибо за проявленный интерес к Студии.",
                    callBack: "Мы обязательно перезвоним Вам в указанное время:",

                },
                fail: {
                    text: "к сожалению инфоромация не отправлена. Пожалуйста, свяжитесь с нами по телефону или напишите на почту.",
                },
                withRespect: "С уважением, команда Студии"
            },
        },
        support: {
            subTitle: "партнеров Cтудии"
        },
        location: {
            title: "Локация",
        }
    },
    errorPage: {
        text1: "Данная страница",
        text2: "не найдена",
        text3: "вы можете перейти",
        text4: "на главную",
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
            name: `от ${NameRange.min} до ${NameRange.max} букв`,
            time: "Некорректное время"
        },
        empty: {
            phone: "Введите телефон",
            mail: "Введите E-Mail",
            name: "Введите имя",
        }
    },
    slider: {
        support: "Техническая поддержка",
        PR: "PR",
        dev: "dev",
        desgn: "desgn"
    },
    Kharkiv: "Харьков",
    Ukraine: "Украина",
    SHO: "ШО",
});
