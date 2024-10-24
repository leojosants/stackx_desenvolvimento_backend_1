import { promises as fs } from 'fs';
import { formatJsonFile } from '../utils/format-json-file.js';
import { checkExistenceOrCreateFile } from '../utils/check-existence-or-create-file.js';
import { absoluteFilePath } from '../utils/absolute-file-path.js';
import { loadAnimal } from '../utils/load-animal.js';

(
    () => {
        checkExistenceOrCreateFile();
    }
)();

const createAnimal = async (request, response) => {
    const bodyData = {
        ...request.body
    };

    const updatedData = {
        animal_id: Date
            .now(),

        animal_name: String(bodyData.animal_name)
            .toLowerCase()
            .trim(),

        animal_type: String(bodyData.animal_type)
            .toLowerCase()
            .trim(),

        animal_color: String(bodyData.animal_color)
            .toLowerCase()
            .trim(),

        animal_breed: String(bodyData.animal_breed)
            .toLowerCase()
            .trim(),

        animal_description: String(bodyData.animal_description)
            .toLowerCase()
            .trim(),
    };

    const data = await loadAnimal();

    data.push(updatedData);

    await fs.writeFile(
        absoluteFilePath,
        formatJsonFile(data)
    );

    return response
        .status(201)
        .send({ message: 'Registro criado com sucesso!', updatedData });
};

const readAllAnimal = async (request, response) => {
    const data = await loadAnimal();

    if (data.length === 0) {
        return response
            .status(404)
            .send({ message: 'Nenhum registro cadastrado!' });
    }

    return response
        .status(200)
        .send({ message: 'Registros cadastrados', data });
}

const readAnimalById = async (request, response) => {
    const id = Number(
        request.params.id
    );

    const data = await loadAnimal();

    const filteredData = data.filter(
        (item) => item.animal_id !== id
    );

    if (filteredData.length < data.length) {
        const item = data.find(
            (item) => item.animal_id === id
        );

        return response
            .status(200)
            .send({ message: 'Dados do registro', item });
    }

    return response
        .status(404)
        .send({ message: `Registro com id '${id}' não encontrado!` });
}

const updateAnimalById = async (request, response) => {
    const id = Number(
        request.params.id
    );

    const bodyData = {
        ...request.body
    };

    const updatedData = {
        animal_name: String(bodyData.animal_name)
            .toLowerCase()
            .trim(),

        animal_type: String(bodyData.animal_type)
            .toLowerCase()
            .trim(),

        animal_color: String(bodyData.animal_color)
            .toLowerCase()
            .trim(),

        animal_breed: String(bodyData.animal_breed)
            .toLowerCase()
            .trim(),

        animal_description: String(bodyData.animal_description)
            .toLowerCase()
            .trim(),
    };

    const data = await loadAnimal();

    const index = data.findIndex(
        (item) => item.animal_id === id
    );

    if (index !== -1) {
        data[index] = {
            ...data[index],
            ...updatedData,
        };

        await fs.writeFile(
            absoluteFilePath,
            formatJsonFile(data)
        );

        return response
            .status(200)
            .send({ message: `Registro de id '${id}' atualizado!` });
    }

    return response
        .status(404)
        .send({ message: `Registro de id '${id}' não encontrado!` });
}

const deleteAnimalById = async (request, response) => {
    const id = Number(
        request.params.id
    );

    const data = await loadAnimal();

    const filteredData = data.filter(
        (item) => item.animal_id !== id
    );

    if (filteredData.length < data.length) {
        await fs.writeFile(
            absoluteFilePath,
            formatJsonFile(filteredData)
        );

        return response
            .status(200)
            .send({ message: `Registro de id '${id}' excluído!` });
    }

    return response
        .status(404)
        .send({ message: `Registro de id '${id}'não encontrado!` });
}

export {
    createAnimal,
    readAllAnimal,
    readAnimalById,
    updateAnimalById,
    deleteAnimalById,
}