import fs from 'fs';
import dateReader from './dateReader.js';
import path from 'path';

const __dirname = path.resolve();

/**
 * Reads files in the folder and extracts the date from the exif data.
 * @returns {string []}
 */
const fileReader = async () => {
    let file_data = [];
    const filePath = path.join(__dirname, 'public/toAdd/');
    const files = fs.readdirSync(filePath);

    const promises = files.map(async (file) => {
        const date = await dateReader(path.join(filePath, file));
        const obj = {
            filename: file,
            date: date
        };

        file_data.push(obj);
    });

    await Promise.all(promises);
    return file_data;
};

export default fileReader;