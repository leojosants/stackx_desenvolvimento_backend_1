import Express from 'express';

const server = Express();
const port = 1234;

server.use(
    Express.json()
);

// server.get(
//     '/', (req, res) => {
//         res.send('<h1>NodeJs</h1>');
//     }
// );

// server.get(
//     '/', (req, res) => {
//         res.status(404).send(req.query);
//     }
// );

// server.get(
//     '/nome', (req, res) => {
//         res.send('<h1>Leo</h1>');
//     }
// );

server.get(
    '/:nome', (req, res) => {
        res
            .status(200)
            .send(
                req.params
            );
    }
);

server.post(
    '/', (req, res) => {
        const { nome, idade, cidade } = req.body;

        if (!nome || !idade || !cidade) {
            return res.status(400).send("Preencha todos os dados!");
        }

        const valorRetorno = `Nome: ${nome} - Idade: ${idade} - Cidade:${cidade}`;
        res.status(200).send(valorRetorno);
    }
);

server.listen(
    port, () => {
        console.log(`Servidor executando na porta ${port}`);
    }
);