import {NameRange} from "../models/common/Rules";
import {translate} from "../helpers/translate";
// tslint:disable:max-line-length
translate.registerTranslations("en", {
    header: {
        newProject: "New Project"
    },
    mainPage: {
        title: {
            mainOne: {
                base: "Comprehensive",
                additions: {
                    1: "IT-solutions",
                }

            },
            mainTwo: {
                base: "for",
                additions: {
                    1: "FinTech",
                    2: "projects",
                }
            }
        },
        articles: {
            whatWeDo: {
                upper: {
                    title: "Implement:",
                    items: {
                        1: "«Turn-key» online loan service",
                    }
                },
                lower: {
                    title: "We will:",
                    items: {
                        1: "development of websites",
                        2: "branding and design",
                        3: "building of ERP and CRM-systems",
                        4: "analytics and advertising",
                        5: "technical support of projects"
                    }
                }
            },
            howLong: {
                title: {
                    one: "hours",
                    two: "hours",
                    three: "hours"
                },
                subTitle: "of cooperation with such financial companies, as",
                items: [
                    "NIKO Holding",
                    "INFINANCE"
                ]
            }
        }
    },
    bobraCSPage: {
        subTitle: "BobraCS − кредитная система для автоматизации бизнес-процессов МФО",
        articles: {
            upper: {
                title: "Автоматизирует процессы:",
                item: {
                    1: "выдачи online/offline кредитов банками и МФО",
                    2: "скорингового моделирования на базе ML",
                    3: "soft-collection и реструктуризации долга",
                    4: "анализа эффективности ведения бизнеса.",
                },
            },
            lower: {
                title: "Включает интеграции: ",
                item: {
                    1: "кредитные бюро: БКИ, МБКИ, ПВБКИ",
                    2: "платежные системы: Platon, iPay",
                    3: "терминалы: iBox, EasyPay, City24, TYME",
                    4: "CPA-сети: SalesDoubler, LoanGate, Admitad, Doaffiliate, PrimeLead.",
                },
            },
        },
        statistics: {
            item1: {
                title: "более",
                text1: "финансовых операций",
                text2: "каждый день",
            },
            item2: {
                text1: "обработанных заявок",
                text2: "за 2 года",
            },
        },
        details: {
            link: "Свяжитесь с нами",
            text: "для обсуждения делатей.",
        },
    },
    contactPage: {
        title: "Partnership",
        form: {
            titleExtended: "Contact us or complete the form. Our specialists will answer all your questions.",
            title: "Contact us",
            placeholders: {
                name: "Your name",
                phone: "Phone",
                mail: "E-mail",
                comment: "Comment"
            },
            time: {
                title: "We appreciate your time",
                subTitle: "Specify any convenient time for discussion of your project:",
                from: "from",
                to: "to"
            },
            submit: {
                success: {
                    thanks: "Thanks for your interest in our Studio",
                    callBack: "We will call you back at the specified time:",

                },
                fail: {
                    text: "Unfortunately, the information has not been sent. Please contact us by phone or write to mail.",
                },
                withRespect: "Best regards, your Studio Team"
            },
        },
        support: {
            title: "Technical support",
            subTitle: "of the Studio's partners"
        },
        location: {
            title: "Location",
        }
    },
    processPage: {
        title: "Process",
        subTitlePart1: "Development services",
        subTitlePart2: " for IT-product",
        text1: "The Studio provides a full range of services to create, " +
        " implement and maintain any software solutions for" +
        " automation of business processes in financial institutions.",
        text2: "Any process features are discussed when the project is agreed",
        stages: {
            title: {
                planning: "Project design",
                design: "Design",
                develop: "Development",
                deploy: "Deployment",
                promotion: "Promotion",
                support: "Customer support"
            },
            subTitle: {
                basedOnData: "based on data",
                sketches: "sketches",
                prototypes: "prototypes",
                frontBack: "front & back end",
                applicationsOnServers: "applications on servers",
                online: "online",
                offline: "offline",
                PR: "PR",
                dev: "dev",
                dsgn: "dsgn"
            }
        }
    },
    errorPage: {
        text1: "This page",
        text2: "not found",
        text3: "you can go",
        text4: "to the homepage ",
    },
    buttons: {
        send: "Send",
        sending: "Sending",
        cooperate: "Cooperate",
        download: "Download pdf"
    },
    hashTags: {
        autodealer: "#autodealer",
        logistics: "#logistics",
        finances: "#finances",
        crediting: "#crediting",
        consulting: "#consulting"
    },
    validation: {
        incorrect: {
            phone: "Incorrect phone",
            mail: "Incorrect E-Mail",
            name: `from ${NameRange.min} to ${NameRange.max} letters`,
            time: "Incorrect time"
        },
        empty: {
            phone: "Enter telephone",
            mail: "Enter E-Mail",
            name: "Enter name",
        }
    },
    slider: {
        support: "Technical support",
        PR: "PR",
        dev: "dev",
        dsgn: "dsgn",
        beginning: "Beginning of cooperation"
    },
    Kharkiv: "Kharkiv",
    Ukraine: "Ukraine",
    SHO: "SHO",
});
// tslint:disable-next-line
