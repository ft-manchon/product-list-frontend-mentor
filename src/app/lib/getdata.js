import { fsPromises } from 'fs/promises';

import path from 'path';

export default async function getLocalData() {
    
    const filePath = path.join(process.cwd(), '/src/app/lib/data.json');

    const jsonData = await fsPromises.readFile(filePath);

    const objectData = JSON.parse(jsonData);

    return objectData;
}