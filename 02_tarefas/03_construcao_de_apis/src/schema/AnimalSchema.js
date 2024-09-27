import Joi from 'joi';

const AnimalSchema = Joi.object(
    {
        animal_name: Joi
            .string()
            .min(3)
            .max(30)
            .required(),

        animal_type: Joi
            .string()
            .min(3)
            .max(30)
            .required(),

        animal_color: Joi
            .string()
            .min(3)
            .max(30)
            .required(),

        animal_breed: Joi
            .string()
            .min(3)
            .max(30)
            .required(),

        animal_description: Joi
            .string()
            .min(30)
            .max(100)
            .required(),
    }
);

export default AnimalSchema;