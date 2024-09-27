import express from 'express';
import validateAnimal from './src/middlewares/validate-animal.js';
import {
    createAnimal,
    deleteAnimalById,
    readAllAnimal,
    readAnimalById,
    updateAnimalById,
} from './src/crud/animal-crud.js';
import { loadAnimal } from './src/utils/load-animal.js';

(
    () => {
        const app = express();
        const port = Number(3000);

        const endpoints = {
            createAnimal: String('/api/animais'),
            readAllAnimals: String('/api/animais'),
            readAnimalById: String('/api/animais/:id'),
            updateAnimalById: String('/api/animais/:id'),
            deleteAnimalById: String('/api/animais/:id'),
        };

        loadAnimal()
            .then(
                (data) => {
                    if (data.length) {
                        // console.log('Registro(s) cadastrado(s):', data);
                    }
                    else {
                        // console.log('Nenhum registro cadastrado!')
                    }
                }
            ).catch(
                (err) => console.log(err)
            );

        app.use(
            express.json()
        );

        app.post(
            endpoints.createAnimal, validateAnimal, createAnimal,
        );

        app.get(
            endpoints.readAllAnimals, readAllAnimal,
        );

        app.get(
            endpoints.readAnimalById, readAnimalById,
        );

        app.put(
            endpoints.updateAnimalById, updateAnimalById,
        );

        app.delete(
            endpoints.deleteAnimalById, deleteAnimalById,
        );

        app.listen(
            port, () => {
                console.log(`Servidor executando em http://localhost:${port}`);
            }
        );
    }
)();