const UserModel = require("../models/UserModel");
const axios = require("axios");

exports.fetchUsers = async (request, response) => {
    try {
        const random_user_api = "https://randomuser.me/api/";
        const resp = await axios.get(random_user_api);
        const userData = resp.data.results[0];

        const newUser = new UserModel(
            {
                name: `${userData.name.first} ${userData.name.last}`,
                email: userData.email,
                dob: userData.dob.date,
                age: userData.dob.age,
                picture: userData.picture.large,
            }
        );

        await newUser.save();

        response.redirect("/");
    }
    catch (error) {
        console.error(
            "Erro ao buscar dados na API", error
        );

        response
            .status(500)
            .send("Erro ao adicionar novo usuário!");
    }
}