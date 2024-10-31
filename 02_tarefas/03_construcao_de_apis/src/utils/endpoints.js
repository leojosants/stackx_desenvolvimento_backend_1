export const endpoints = {
    createAnimal: String('/api/animals/create-animal'),
    readAllAnimals: String('/api/animals/read-all-animals'),
    readAnimalById: String('/api/animals/read-animal/:id'),
    updateAnimalById: String('/api/animals/update-animal/:id'),
    deleteAnimalById: String('/api/animals/delete-animal/:id'),
};