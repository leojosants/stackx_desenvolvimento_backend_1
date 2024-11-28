const express = require("express");
const cors = require("cors");
const sqlit3 = require("sqlite3").verbose()
const app = express();
const port = 3000;


const db = new sqlit3.Database("database/db.db");

db.serialize(
    () => {
        db.run(
            `CREATE TABLE IF NOT EXISTS profiles(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                age INT
            )`
        );
    }
);

let profilesList = [];

const utils = {
    replaceOnListByIndex: (list, index, newData) => {
        const listCopy = [...list];
        listCopy[index] = newData;
        return listCopy;
    },
};

const endpoints = {
    home: "/",
    getProfileById: "/:id",
    addProfile: "/add_profile",
    removeProfileById: "/remove_profile/:id",
    updateProfileById: "/update_profile/:id",
};

const statusCode = {
    _200: 200,
    _201: 201,
    _404: 404,
    _406: 406,
};

function getUserById(id) {
    return new Promise(
        (resolve, reject) => {
            db.get(
                "SELECT * FROM profiles WHERE id = ?", [id], (err, row) => {
                    console.log("row", row)
                    row ? row : undefined;
                }
            );
        }
    );
};

app.use(
    cors()
);

// retornar perfis
app.get(
    endpoints.home, (req, res) => {
        db.serialize(
            () => {
                db.all(
                    "SELECT * FROM profiles", (err, rows) => {
                        return res
                            .status(statusCode._200)
                            .send(rows);
                    }
                );
            }
        );
    }
);

// criar novo perfil
app.post(
    endpoints.addProfile, (req, res) => {
        const { name, age } = req.query;

        if (!name) {
            return res
                .status(statusCode._406)
                .send({ message: "O nome é obrigatório" });
        }

        db.serialize(
            () => {
                db.run(`
                    INSERT INTO profiles(name, age) 
                    VALUES('${name}', ${age ? `'${age}'` : "NULL"})
                `);

                db.all(
                    "SELECT * FROM profiles ORDER BY id DESC LIMIT 1", (err, row) => {
                        return res
                            .status(statusCode._201)
                            .send(row);
                    }
                );
            }
        );
    }
);

// retornar perfil por id
app.get(
    endpoints.getProfileById, (req, res) => {
        const { id } = req.params;
        const userProfile = getUserById(id);
        console.log(userProfile);

        // if (!profilesList[id]) {
        //     return res
        //         .status(statusCode._404)
        //         .send({ message: `Nenhum registro encontrado com id '${id}'` });
        // }

        return res
            .status(statusCode._200)
            .send({});
    }
);

// atualizar perfil por id
app.put(
    endpoints.updateProfileById, (req, res) => {
        const { id } = req.params;
        let userProfile = profilesList[id];

        if (!userProfile) {
            return res
                .status(statusCode._404)
                .send({ message: `Nenhum registro encontrado com id '${id}'` });
        }

        userProfile = {
            ...userProfile,
            ...req.query,
        };

        profilesList = utils.replaceOnListByIndex(profilesList, id, userProfile);

        return res
            .status(statusCode._200)
            .send(userProfile);
    }
);

// remover perfil por if
app.delete(
    endpoints.removeProfileById, (req, res) => {
        const { id } = req.params;
        let userProfile = profilesList[id];

        if (!userProfile) {
            return res
                .status(statusCode._404)
                .send({ message: "Not Found" });
        }

        profilesList = profilesList.filter(
            (_item, index) => index !== Number(id)
        );

        return res
            .status(statusCode._200)
            .send(profilesList);
    }
);

app.listen(
    port, () => {
        console.log(`Servidor executando em http://localhost:${port}`);
    }
);