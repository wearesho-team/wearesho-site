import {NameRange} from "../models/common/Rules";
import {translate} from "../helpers/translate";

translate.registerTranslations("en", {
    header: {
        newProject: "New project"
    },
    mainPage: {
        title: {
            mainOne: {
                base: "Here your",
                additions: {
                    1: "bold",
                    2: "bold2",
                    3: "bold3"
                }
            },
            mainTwo: {
                base: "ideas turn into",
                additions: {
                    1: "IT-product",
                    2: "IT-product2",
                    3: "IT-product3"
                }
            }
        },
        articles: {
            whatWeDo: {
                title: "We realize high-tech projects",
                items: {
                    1: "website development",
                    2: "branding and design",
                    3: "formation of ERP and CRM-systems",
                    4: "analytics and advertising",
                    5: "technical support of projects"
                }
            },
            howLong: {
                title: "More than 3 years",
                subTitle: "professional cooperation with financial companies:",
            }
        }
    },
    contactPage: {
        title: "Partnership",
        form: {
            titleExtended: "Contact us or fill out the contact information on the form. Our specialists will answer all your questions.",
            title: "Contact us",
            placeholders: {
                name: "Your name",
                phone: "Phone",
                mail: "Email"
            },
            time: {
                title: "We appreciate your time",
                subTitle: "Specify the time you need to discuss the project:",
                from: "from",
                to: "to"
            }
        },
        contacts: {
            title: "Contacts",
        },
        support: {
            title: "Technical support",
            subTitle: "partners of the Studio"
        },
        location: {
            title: "Location",
        }
    },
    buttons: {
        send: "Send",
        sending: "Sending",
        cooperate: "Cooperate"
    },
    hashTags: {
        autodealer: "#autodealer",
        logistics: "#logistics",
        finances: "#finances",
        crediting: "#crediting"
    },
    validation: {
        incorrect: {
            phone: "Incorrect phone",
            mail: "Incorrect E-Mail",
            name: `Latin/Cyrillic letters from ${NameRange.min} to ${NameRange.max} characters`,
            time: "Incorrect time"
        },
        empty: "Required"
    },
    Kharkiv: "Kharkiv",
    Ukraine: "Ukraine",
});
