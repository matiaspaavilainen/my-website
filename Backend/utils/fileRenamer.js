import fs from 'fs';
import path from 'path';
import imageThumbnail from 'image-thumbnail';

const __dirname = path.resolve();

/**
 * Renames the file based on it's given title to make sure it is unique
 * Moves the file to the display directory, making it visible on the website
 * Creates a thumbnail for the file in the thumbnails directory
 * @param filename
 * @param title
 * @param date
 * @returns {string[]} filename, thumbname
 */
const fileRenamer = async (file, title, date) => {
    const filePath = path.join(__dirname, 'public/');
    const newFileName = `${title}_${date}.${file.split('.').pop()}`;

    try {
        await fs.promises.rename(
            path.join(filePath, 'toAdd/', file),
            path.join(filePath, 'display/', newFileName)
        );

        const thumbnail = await imageThumbnail(path.join(filePath, 'display/', newFileName), { percentage: 16 });
        const thumbFilename = `${title}_${date}_thumbnail.${file.split('.').pop()}`;
        await fs.promises.writeFile(path.join(filePath, 'thumbnails/', thumbFilename), thumbnail, error => {
            if (error) {
                console.error(error);
            } else {
                console.log('Created thumbnail');
            }
        });

        return [newFileName, thumbFilename];
    } catch (error) {
        console.error('Error renaming file:', error);
        throw error;
    }
};

export default fileRenamer;