const ExifReader = require('exifreader');

const dateReader = async (file) => {
    const tags = ExifReader.load(file);
    const imageDate = tags['DateTimeOriginal'].description;
    const date = imageDate.split(' ')[0].split(':').join('-') + ' ' + imageDate.split(' ')[1];
    console.log(date);
    const unixDate = Date.parse(date);
    return unixDate;
};

export default dateReader;