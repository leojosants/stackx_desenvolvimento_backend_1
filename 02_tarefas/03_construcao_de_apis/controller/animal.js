import { promises as fs } from 'fs';

const jsonFileConfiguration = {
    path: String('../database/data.json'),
    indentation: 2,
    replacer: null,
};

const readAnimal = async () => {
    try {
        const data = await fs.readFile(jsonFileConfiguration.path, 'utf-8');
        console.log(data)

        if (data.length === 0) {
            return [];
        }

        return JSON.parse(data);
    }
    catch (error) {
        console.error('Erro ao ler o arquivo:', error);
        return [];
    }
}

const createAnimal = async (request, response) => {
    const {
        animal_name,
        animal_type,
        animal_color,
        animal_breed,
        animal_description,
    } = request.body;

    const animal = {
        animal_id: Date.now(),
        animal_name: String(animal_name).toLowerCase(),
        animal_type: String(animal_type).toLowerCase(),
        animal_color: String(animal_color).toLowerCase(),
        animal_breed: String(animal_breed).toLowerCase(),
        animal_description: String(animal_description).toLowerCase(),
    };

    const data = await readAnimal();

    data.push(animal);

    await fs.writeFile(
        jsonFileConfiguration.path,
        JSON.stringify(data, jsonFileConfiguration.replacer, jsonFileConfiguration.indentation)
    );

    return response.status(201).send(
        { message: 'Registro criado com sucesso!', animal }
    );
};

const readAllAnimal = async (request, response) => {
    const data = await readAnimal();

    if (data.length === 0) {
        return response.status(404).send(
            { message: 'Nenhum registro cadastrado!' }
        );
    }

    return response.status(200).send(
        { message: 'Registros cadastrados', data }
    );
}

const readAnimalById = async (request, response) => {
    const id = Number(request.params.id);

    const data = await readAnimal();

    const filteredData = data.filter(
        (item) => item.animal_id !== id
    );

    if (filteredData.length < data.length) {
        const item = data.find(
            (item) => item.animal_id === id
        );
        return response.status(200).send(
            { message: 'Dados do registro', item }
        );
    }
    else {
        return response.status(404).send(
            { message: `Registro com id ${id} não encontrado!` }
        );
    }
}

const updateAnimalById = async (request, response) => {
    const id = Number(request.params.id);
    const updatedData = request.body;
    const data = await readAnimal();

    const index = data.findIndex(
        (item) => item.animal_id === id
    );

    if (index !== -1) {
        data[index] = {
            ...data[index],
            ...updatedData,
        };

        await fs.writeFile(
            jsonFileConfiguration.path,
            JSON.stringify(data, jsonFileConfiguration.replacer, jsonFileConfiguration.indentation)
        );

        return response.status(200).send(
            { message: `Registro de id ${id} atualizado!` }
        );
    }
    else {
        return response.status(404).send(
            { message: `Registro de id ${id} não encontrado!` }
        );
    }
}

const deleteAnimalById = async (req, res) => {
    const id = Number(req.params.id);
    const data = await readAnimal();

    const filteredData = data.filter(
        (item) => item.animal_id !== id
    );

    if (filteredData.length < data.length) {
        await fs.writeFile(
            jsonFileConfiguration.path,
            JSON.stringify(filteredData, jsonFileConfiguration.replacer, jsonFileConfiguration.indentation)
        );

        return res.status(200).send(
            { message: `Registro de id ${id} excluído!` }
        );
    }
    else {
        return res.status(404).send(
            { message: 'Registro não encontrado!' }
        );
    }
}

export {
    createAnimal,
    readAllAnimal,
    readAnimalById,
    updateAnimalById,
    deleteAnimalById,
}