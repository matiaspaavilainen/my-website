import mysql from 'mysql2/promise';
import 'dotenv/config';

const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

try {
    connection.connect();
    console.log('Connected to database');
} catch (err) {
    console.error('Error connecting: ' + err);
}

const getAllPhotos = async () => {
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM photos ORDER BY time_taken DESC',
        );
        return results;
    } catch (err) {
        console.error(err);
    }
};

const getRandomPhoto = async () => {
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `photos` ORDER BY RAND() LIMIT 1',
        );
        return results;
    } catch (err) {
        console.error(err);
    }
};

const deletePhoto = async (id) => {
    try {
        await connection.query(
            'DELETE FROM `photos` WHERE `id` = ?',
            [id]
        );
    } catch (err) {
        console.log(err);
    }
};

const insertPhoto = async (time_taken, title, category, file_n, thumb_n) => {
    try {
        await connection.query(
            'INSERT INTO `photos` (time_taken, title, category, file_n, thumb_n) VALUES (?, ?, ?, ?, ?)',
            [time_taken, title, category, file_n, thumb_n]
        );
        console.log('Photo added with title', title);
    } catch (err) {
        console.log(err);
    }
};

export { getAllPhotos, getRandomPhoto, insertPhoto, deletePhoto };