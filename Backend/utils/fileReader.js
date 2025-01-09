const fs = require('fs');
const dateReader = require('./dateReader');

const fileReader = async () => {
    const files = fs.readdirSync(process.env.PHOTO_DIR);
    files.forEach((file) => {
        const date = dateReader(file)
        console.log(date)
    })
}

export default fileReader;