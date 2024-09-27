import { promises as fs } from 'fs';
import { absoluteFilePath } from "./absolute-file-path.js";

export const loadAnimal = async () => {
    try {
        const data = await fs.readFile(absoluteFilePath, 'utf-8');

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