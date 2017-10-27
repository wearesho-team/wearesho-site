import {EnvConfig} from "../config.env";

module.exports = {
    links: {
        behance: "#",
        github: "https://github.com/wearesho-team",
        linkedin: "https://ru.linkedin.com/company/студия-«шо-»",
    },
    location: {
        city: "Kharkiv",
        coordinates: {
            lat: 49.98081,
            lng: 36.25272,
        },
        country: "Ukraine",
    },
    mail: "office@wearesho.com",
    phone: 380660249402,
    ...EnvConfig
};
