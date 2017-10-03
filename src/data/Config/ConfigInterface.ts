export interface ConfigInterface {
    location: {
        city: string,
        country: string,
        coordinates: {
            lat: number,
            lng: number
        }
    },
    links: {
        behance: string,
        linkedin: string,
        github: string,
    }
    mapApiKey: string,
    mail: string,
    reCaptchaApiKey: string,
    phone: number
}
