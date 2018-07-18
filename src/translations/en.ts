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
                base: "Complex",
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
                    title: "We implement:",
                    items: {
                        1: "«On a turnkey basis» on-line crediting service",
                    }
                },
                lower: {
                    title: "We will be engaged in:",
                    items: {
                        1: "web-site development",
                        2: "branding and design",
                        3: "ERP and CRM-system formation",
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
                subTitle: "of cooperation with such financial companies:",
                items: [
                    "NIKO Holding",
                    "INFINANCE"
                ]
            }
        }
    },
    bobraCSPage: {
        subTitle: "BobraCS is a credit system for automation of microlender's business processes",
        articles: {
            upper: {
                title: "It automates the following processes:",
                item: {
                    1: "issue of online/offline credits by banks and microlenders",
                    2: "scoring modeling with use of computer-aided learning",
                    3: "soft-collection and debt restructurisation",
                    4: "analysis of business effectiveness.",
                },
            },
            lower: {
                title: "It includes the following integrations:",
                item: {
                    1: "credit bureaus: БКИ, МБКИ, ПВБКИ",
                    2: "payment systems: Platon, iPay",
                    3: "terminals: iBox, EasyPay, City24, TYME",
                    4: "CPA: SalesDoubler, LoanGate, Admitad, Doaffiliate, PrimeLead.",
                },
            },
        },
        statistics: {
            item1: {
                text1: "financial operations",
                text2: "every day",
            },
            item2: {
                text1: "processed applications",
                text2: "for 2 years",
            },
        },
        details: {
            link: "Contact us",
            text: "for further details.",
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
