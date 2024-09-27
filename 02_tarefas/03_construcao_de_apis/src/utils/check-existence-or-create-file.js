import { promises as fs } from 'fs';
import { access, constants } from 'node:fs';
import { absoluteFilePath } from './absolute-file-path.js';

export function checkExistenceOrCreateFile() {
    access(
        absoluteFilePath, constants.F_OK, (err) => {
            if (err) {
                return fs.writeFile(absoluteFilePath, '[]');
            }
        }
    );
}