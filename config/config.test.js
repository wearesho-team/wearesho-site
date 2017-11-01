const CommonConfig = require("./config.common");

const config = {
    ...CommonConfig,
    ...{
        baseUrl: "http://localhost:3000"
    },
};

module.exports = config;
