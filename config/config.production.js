const CommonConfig = require("./config.common");

const config = {
    ...CommonConfig,
    ...{},
    baseUrl: "https://api.wearesho.com",
};

module.exports = config;
