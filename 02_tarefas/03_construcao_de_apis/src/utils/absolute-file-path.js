import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const relativeFilePath = '../database/data.json';
export const absoluteFilePath = path.join(__dirname, relativeFilePath);