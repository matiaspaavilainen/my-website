const fs = require('fs');
const dateReader = require('./dateReader');

const fileReader = async () => {
    const files = fs.readdirSync(process.env.PHOTO_DIR);

}

export default fileReader;