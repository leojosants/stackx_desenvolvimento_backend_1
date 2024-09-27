import AnimalSchema from "../schema/AnimalSchema.js";
import { messages } from 'joi-translation-pt-br';

const validateAnimal = (request, response, nextFunction) => {
    const { error } = AnimalSchema.validate(request.body, { messages });

    if (error) {
        return response.status(400).send(
            { error: error.details.map(err => err.message) }
        );
    }

    nextFunction();
};

export default validateAnimal;