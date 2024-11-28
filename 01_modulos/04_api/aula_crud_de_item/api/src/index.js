const express = require("express");
const cors = require("cors");
const db = require('../src/config/database');

const app = express();
const port = 3000;

const endpoints = {
    home: "/",
    getProfileById: "/:id",
    addProfile: "/add_profile",
    removeProfileById: "/remove_profile/:id",
    updateProfileById: "/update_profile/:id",
};

const statusCode = {
    // OK é uma resposta padrão que indica que uma solicitação HTTP foi bem-sucedida.
    _200: 200,

    // Created é uma resposta que indica que uma solicitação foi bem-sucedida e resultou na criação de um novo recurso no servidor. 
    _201: 201,

    // Not Found é uma resposta comum que indica que o servidor não conseguiu encontrar o recurso solicitado pelo cliente.
    _404: 404,

    // Not Acceptable é uma resposta de erro do cliente que indica que o servidor não pode fornecer uma resposta que corresponda às características de conteúdo solicitadas pelo cliente, conforme especificado nos cabeçalhos da solicitação. 
    _406: 406,
};

function getUserById(id) {
    return new Promise(
        (resolve, reject) => {
            db.get(
                "SELECT * FROM profiles WHERE id = ?", [id], (err, row) => {
                    resolve(row ? row : undefined);
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
                        if (rows.length === 0) {
                            return res
                                .status(statusCode._200)
                                .send({ message: "Não há dados registrados no momento!" });
                        }

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
                    VALUES('${name}', ${age ? `${Number(age)}` : "NULL"})
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
    endpoints.getProfileById, async (req, res) => {
        const { id } = req.params;
        const userProfile = await getUserById(id);

        if (!userProfile) {
            return res
                .status(statusCode._404)
                .send({ message: `Nenhum registro encontrado com id '${id}'` });
        }

        return res
            .status(statusCode._200)
            .send(userProfile);
    }
);

// atualizar perfil por id
app.put(
    endpoints.updateProfileById, async (req, res) => {
        const { id } = req.params;
        const { name, age } = req.query;
        const userProfile = await getUserById(id);

        if (!userProfile) {
            return res
                .status(statusCode._404)
                .send({ message: `Nenhum registro encontrado com id '${id}'` });
        };

        if (!name) {
            return res
                .status(statusCode._406)
                .send({ message: "O nome é obrigatório" });
        };

        if (!age) {
            return res
                .status(statusCode._406)
                .send({ message: "A idade é obrigatório" });
        };

        db.serialize(
            () => {
                const attributes = new Array();

                name && attributes.push(
                    `name = '${name}'`
                );

                age && attributes.push(
                    `age = ${Number(age)}`
                );

                db.run(
                    `UPDATE profiles SET ${attributes.join(", ")} WHERE id = ${id}`
                );

                db.all(
                    `SELECT * FROM profiles WHERE id = ${id}`, (err, row) => {
                        return res
                            .status(statusCode._200)
                            .send(row);
                    }
                );
            }
        );
    }
);

// remover perfil por if
app.delete(
    endpoints.removeProfileById, async (req, res) => {
        const { id } = req.params;
        const userProfile = await getUserById(id);

        if (!userProfile) {
            return res
                .status(statusCode._404)
                .send({ message: `Nenhum registro encontrado com id '${id}'` });
        };

        db.serialize(
            () => {
                db.run(
                    `DELETE FROM profiles WHERE id = ${id}`
                )
            }
        );

        db.all(
            "SELECT * FROM profiles", (err, rows) => {
                return res
                    .status(statusCode._200)
                    .send(rows);
            }
        );
    }
);

app.listen(
    port, () => {
        console.log(`Servidor executando em http://localhost:${port}`);
    }
);