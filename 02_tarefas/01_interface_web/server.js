require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose
    .connect(
        process.env.MONGO_URI, {}
    )
    .then(
        () => {
            console.log("Conectado ao MongoDB");
            app.emit("conectado_ao_bd");
        }
    )
    .catch(
        (err) => console.log(
            "Erro ao conectar ao MongoDB", err
        )
    );

app.set(
    "views", path.join(__dirname, "src/views")
);

app.set(
    "view engine", "ejs"
);

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);

app.use(routes);

app.on(
    "conectado_ao_bd", () => {
        app.listen(
            port, () => {
                console.log(
                    `Servidor executando em: http://localhost:${port}`
                );
            }
        );
    }
);