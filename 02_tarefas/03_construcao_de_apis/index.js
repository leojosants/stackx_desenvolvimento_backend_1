import express from 'express';
import validateAnimal from './middlewares/validate-animal.js';
import {
    createAnimal,
    deleteAnimalById,
    readAllAnimal,
    readAnimalById,
    updateAnimalById,
} from './controller/animal.js';

(
    () => {
        const app = express();
        const port = Number(3000);

        const endpoints = {
            createAnimal: String('/animals'),
            readAllAnimals: String('/animals'),
            readAnimalById: String('/animals/:id'),
            updateAnimalById: String('/animals/:id'),
            deleteAnimalById: String('/animals/:id'),
        };

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