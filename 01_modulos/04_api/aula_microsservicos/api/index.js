const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;


const endpoints = {
    home: "/",
    otherRequest: "/other_request",
};

app.use(
    cors()
);

app.get(
    endpoints.home, (req, res) => {
        const name = req.query.name;
        res.send(
            { title: `Hello, ${name}!` }
        );
    }
);

app.get(
    endpoints.otherRequest, (req, res) => {
        res.send(
            { title: "Here you have another request!" }
        );
    }
);

app.listen(
    port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    }
);