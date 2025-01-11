import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

/**
 * Renames the file based on it's given title to make sure it is unique
 * Moves the file to the display dircetory, making it visible on the website
 * @param filename
 * @param title
 * @param date
 * @returns {string} filename
 */
const fileRenamer = async (file, title, date) => {
    const filePath = path.join(__dirname, 'public/');
    const newFileName = `${title}_${date}.${file.split('.').pop()}`;

    try {
        await fs.promises.rename(
            path.join(filePath, 'toAdd/', file),
            path.join(filePath, 'display/', newFileName)
        );
        return newFileName;
    } catch (error) {
        console.error('Error renaming file:', error);
        throw error;
    }
};

export default fileRenamer;