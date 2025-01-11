import fs from 'fs';
import path from 'path';


/**
 * Renames the file based on it's given title to make sure it is unique
 * Moves the file to the display dircetory, making it visible on the website
 * @param filename
 * @param title
 * @param date
 * @returns {string} filename
 */
const fileRenamer = (file, title, date) => {
    const filePath = path.join(__dirname, 'public/');
    let filename = '';

    fs.rename(
        path.join(filePath, 'toAdd/', file),
        path.join(filePath, 'display/', `${title}_${date}.${file.split('.')[1]}`),
        (error) => {
            if (error) {
                console.log(error);
            } else {
                filename = `${title}_${date}.${file.split('.')[1]}`;
            }
        }
    );

    return filename;
};

export default fileRenamer;