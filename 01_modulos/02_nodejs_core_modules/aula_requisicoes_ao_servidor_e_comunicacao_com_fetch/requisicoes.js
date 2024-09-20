import { json } from "express";

const nome = 'Leonardo';
const url = 'http://localhost:1234';

const resultGet = await fetch(
    `${url}/${nome}`,
    { method: 'GET' },
);
console.log(
    await resultGet.text()
);

const resultPost = await fetch(
    `${url}/`,
    {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(
            {
                "nome": "Leo",
                "idade": 40,
                "cidade": "sjdr"
            }
        ),
    },
);
console.log(
    resultPost.status
);
console.log(
    await resultPost.text()
);