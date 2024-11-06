const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/home-controller");
const fetchUsersController = require("./src/controllers/fetch-users-controller");
const deleteUserController = require("./src/controllers/delete-user-controller");

const endpoints = {
    homePage: "/",
    fetchUsers: "/fetch-users",
    deleteUser: "/delete-user/:id",
};

route.get(
    endpoints.homePage, homeController.homePage
);

route.get(
    endpoints.fetchUsers, fetchUsersController.fetchUsers
);

route.get(
    endpoints.deleteUser, deleteUserController.deleteUser
);

module.exports = route;