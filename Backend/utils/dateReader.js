import ExifReader from 'exifreader';

const dateReader = async (file) => {
    try {
        const tags = await ExifReader.load(file, { async: true });
        const imageDate = tags['DateTimeOriginal'].description;
        const date = imageDate.split(' ')[0].split(':').join('-') + ' ' + imageDate.split(' ')[1];
        const unixDate = Date.parse(date);
        return unixDate;
    } catch (error) {
        console.log(`Failed to read EXIF for ${file}:`, error);
        throw error;
    }

};

export default dateReader;