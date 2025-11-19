import fs from 'node:fs';
import dateReader from './dateReader.js';
import path from 'node:path';

const __dirname = path.resolve();

/**
 * Reads files in the folder and extracts the date from the exif data.
 * @returns {obj []}
 */
const fileReader = async () => {
    const filePath = path.join(__dirname, 'public/toAdd/');
    const files = fs.readdirSync(filePath);

    const promises = files.map(async (file) => {
        const date = await dateReader(path.join(filePath, file));
        return {
            filename: file,
            date: date
        };
    });

    let file_data = (await Promise.all(promises)).toSorted((a, b) => a.date - b.date);

    return file_data;
};

export default fileReader;