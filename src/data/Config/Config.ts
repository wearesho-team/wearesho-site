import {ConfigInterface} from "./ConfigInterface";

export const Config: ConfigInterface = {
    baseUrl: "http://localhost:3000",
    links: {
        behance: "#",
        github: "https://github.com/wearesho-team",
        linkedin: "https://ru.linkedin.com/company/студия-«шо-»",
    },
    location: {
        city: "Kharkiv",
        coordinates: {
            lat: 50.02699,
            lng: 36.22604,
        },
        country: "Ukraine",
    },
    mail: "office@wearesho.com",
    phone: 380660249402,
    foundationDate: new Date("August 7, 2014 00:00:00"),
    reCaptchaApiKey: undefined,
    mapApiKey: undefined,
};

switch (process.env.NODE_ENV) {
    case "production":
        Object.assign(Config, {
            baseUrl: "https://api.wearesho.com",
        });
        break;
}
