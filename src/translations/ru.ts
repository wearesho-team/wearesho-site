import { NameRange } from "../models/common/Rules";
import { translate } from "../helpers/translate";
// tslint:disable:max-line-length
translate.registerTranslations("ru", {
    header: {
        newProject: "Новый проект"
    },
    mainPage: {
        title: {
            mainOne: {
                base: "Комплексные",
                additions: {
                    1: "IT-решения",
                }
            },
            mainTwo: {
                base: "для",
                additions: {
                    1: "FinTech",
                    2: "проектов",
                }
            }
        },
        articles: {
            whatWeDo: {
                upper: {
                    title: "Реализуем:",
                    items: {
                        1: "Сервис онлайн кредитования «Под Ключ»",
                    }
                },
                lower: {
                    title: "Займемся:",
                    items: {
                        1: "разработкой сайта",
                        2: "брендингом и дизайном",
                        3: "формированием ERP и CRM-системы",
                        4: "аналитикой и рекламой",
                        5: "технической поддержкой проектов"
                    }
                }
            },
            howLong: {
                title: {
                    one: "час",
                    two: "часа",
                    three: "часов"
                },
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
            title: "Техническая поддержка",
            subTitle: "партнеров Cтудии"
        },
        location: {
            title: "Локация",
        }
    },
    processPage: {
        title: "Процесс",
        subTitlePart1: "Комплекс работ по созданию",
        subTitlePart2: "IТ-продукта",
        text1: "Студия предоставляет полный комплекс работ по созданию, " +
            " внедрению и сопровождению программных решений для" +
            " автоматизации бизнес-процессов финансовых учреждений.",
        text2: "Особенности процесса обсуждаются при согласовании проекта",
        stages: {
            title: {
                planning: "Проектирование",
                design: "Дизайн",
                develop: "Разработка",
                deploy: "Развертывание",
                promotion: "Продвижение",
                support: "Тех. поддержка"
            },
            subTitle: {
                basedOnData: "на основе данных",
                sketches: "скетчи",
                prototypes: "прототипы",
                frontBack: "front & back end",
                applicationsOnServers: "приложений на серверах",
                online: "online",
                offline: "offline",
                PR: "PR",
                dev: "dev",
                dsgn: "dsgn"
            }
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
        cooperate: "Сотрудничать",
        download: "Скачать pdf"
    },
    hashTags: {
        autodealer: "#автодилер",
        logistics: "#логистика",
        finances: "#финансы",
        crediting: "#кредитование",
        consulting: "#консалтинг"

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
        dsgn: "dsgn",
        beginning: "Начало сотрудничества"
    },
    Kharkiv: "Харьков",
    Ukraine: "Украина",
    SHO: "ШО",
});
