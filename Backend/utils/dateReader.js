import ExifReader from 'exifreader';

const dateReader = async (file) => {
    const tags = await ExifReader.load(file, { async: true });
    const imageDate = tags['DateTimeOriginal'].description;
    const date = imageDate.split(' ')[0].split(':').join('-') + ' ' + imageDate.split(' ')[1];
    const unixDate = Date.parse(date);
    return unixDate;
};

export default dateReader;