const UserModel = require("../models/UserModel");

exports.homePage = async (request, response) => {
    try {
        const users = await UserModel.find().sort({ _id: -1 });

        setTimeout(
            () => {
                response.render('index', { users });
            }, 500
        );
    }
    catch (error) {
        console.error(
            "Erro aos buscar dados no MongoDB"
        );

        response
            .status(500)
            .send("Erro aos buscar dados no banco de dados");
    }
}