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

    // Check if directory exists
    if (!fs.existsSync(filePath)) {
        console.log(`Directory not found: ${filePath}`);
        return [];
    }

    const files = fs.readdirSync(filePath);

    const promises = files.map(async (file) => {
        try {
            const date = await dateReader(path.join(filePath, file));
            return {
                filename: file,
                date: date
            };
        } catch (error) {
            console.error(`Error reading EXIF data for ${file}:`, error.message);
            return null;
        }
    });

    let file_data = (await Promise.all(promises))
        .filter(item => item !== null)  // Remove failed items
        .toSorted((a, b) => a.date - b.date);

    return file_data;
};

export default fileReader;