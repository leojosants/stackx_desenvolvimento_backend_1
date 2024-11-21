const axios = require("axios");

const random_user_api = axios.create(
    { baseURL: "https://randomuser.me/api/" }
);

module.exports = random_user_api;