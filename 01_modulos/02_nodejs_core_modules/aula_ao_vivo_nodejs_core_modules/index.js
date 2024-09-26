import Express from 'express';
import { createItem, deleteItem, readItemById, readItems, updateItem } from './business-rules.js';

const server = Express();
const port = Number(1234);

const endpoints = {
    create_new: String('/items'),
    search_all: String('/items'),
    search_by_id: String('/items').concat('/:id'),
    update_by_id: String('/items').concat('/:id'),
    delete_by_id: String('/items').concat('/:id'),
};

server.use(
    Express.json()
);

// criar novo produto
server.post(
    endpoints.create_new, (request, response) => {
        const item = request.body;

        if (item['item'] == undefined) {
            return response.status(400).json(
                { message: 'Campo item é obrigatório!' }
            );
        }

        const newItem = createItem(item);

        return response.status(201).json(newItem);
    }
);

// buscar todos os produtos
server.get(
    endpoints.search_all, (request, response) => {
        const items = readItems();

        if (items.length === 0) {
            return response.status(200).json(
                { message: 'Não há items salvo até o momento!' }
            );
        }

        return response.status(200).json(items);
    }
);

// buscar um único produto por is
server.get(
    endpoints.search_by_id, (request, response) => {
        const id = request.params.id;
        const item = readItemById(id);

        if (item) {
            return response.status(200).json(item);
        }

        return response.status(404).json(
            { message: `Item de id ${id}, não encontrado!` }
        );
    }
);

// atualizar um único produto
server.put(
    endpoints.update_by_id, (request, response) => {
        const id = request.params.id;
        const updatedItem = request.body;
        const item = updateItem(id, updatedItem);

        if (item) {
            return response.status(200).json(item);
        }

        return response.status(404).json(
            { message: `Item de id ${id} não encontrado!` }
        );
    }
);

// deletar um único produto
server.delete(
    endpoints.delete_by_id, (request, response) => {
        const id = request.params.id;
        const item = deleteItem(id);

        if (item) {
            return response.status(200).json(
                { message: `Item de id ${id} deletado!` }
            );
        }

        return response.status(404).json(
            { message: `Item de id ${id} não encontrado!` }
        );
    }
);

server.listen(
    port, () => {
        console.log(
            `Servidor executando em http://localhost:${port}`
        );
    }
);