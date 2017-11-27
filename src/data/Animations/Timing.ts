const showingDelay = ((window as any).hideTimeout || 2000) * 4;
const typingDelay = showingDelay + 500;

export const Timing = {
    desktop: {
        mainPage: {
            tittle: {
                delay: showingDelay,
                duration: 2000,
                caretTimeout: undefined
            },
            articles: {
                whatWeDo: {
                    delay: typingDelay,
                    duration: undefined,
                    caretTimeout: 500
                },
                howLong: {
                    delay: typingDelay + 500,
                    duration: undefined,
                    caretTimeout: 500
                }
            },
            items: {
                servicesList: {
                    delay: typingDelay + 750,
                    duration: undefined,
                    caretTimeout: 500
                },
                subTittle: {
                    delay: typingDelay + 1000,
                    duration: undefined,
                    caretTimeout: 500
                },
                clientsList: {
                    delay: typingDelay + 1300,
                    duration: 3500,
                    caretTimeout: undefined
                }
            }
        },
        partnershipPage: {
            slider: {
                delay: showingDelay,
                duration: 1000,
                caretTimeout: undefined
            }
        }
    },
    mobile: {
        mainPage: {
            tittle: {
                delay: 0,
                duration: 0,
                caretTimeout: 0
            },
            articles: {
                whatWeDo: {
                    delay: showingDelay,
                    duration: 2000,
                    caretTimeout: undefined
                },
                howLong: {
                    delay: showingDelay,
                    duration: 2000,
                    caretTimeout: undefined
                }
            },
            items: {
                servicesList: {
                    delay: typingDelay,
                    duration: undefined,
                    caretTimeout: 500
                },
                subTittle: {
                    delay: showingDelay,
                    duration: 2000,
                    caretTimeout: undefined
                },
                clientsList: {
                    delay: showingDelay,
                    duration: 2000,
                    caretTimeout: undefined
                }
            }
        },
        partnershipPage: {
            slider: {
                delay: 0,
                duration: 0,
                caretTimeout: 0
            }
        }
    }
};
