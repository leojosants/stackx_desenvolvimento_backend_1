const UserModel = require("../models/UserModel");

exports.deleteUser = async (request, response) => {
    try {
        const id = request.params.id;
        await UserModel.findByIdAndDelete(id);
        response.redirect("/");
    }
    catch (error) {
        console.error(
            "Erro ao deletar usuário!", error
        );

        response
            .status(500)
            .send("Erro ao deletar usuário!");
    }
};