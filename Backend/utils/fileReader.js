import fs from 'fs';
import dateReader from './dateReader.js';
import path from 'path';

const __dirname = path.resolve();

const fileReader = async () => {
    let file_data = [];
    const files = fs.readdirSync(path.join(__dirname, 'public'));

    const promises = files.map(async (file) => {
        const date = await dateReader(path.join(__dirname, 'public', file));
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