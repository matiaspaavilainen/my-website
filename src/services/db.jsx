import mysql from 'mysql';

// Store just the paths to the iamges in the db and then just yeah

const db = mysql.createConnection({
    host: 'localhost',
    user: 'photos',
    password: 'photos'
});

db.connect((err) => {
    if (err) {
        console.log('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});

export default db;