const CommonConfig = require("./config.common");

const config = {
    ...CommonConfig,
    ...{
        baseUrl: "/api/",
    },
};

module.exports = config;
