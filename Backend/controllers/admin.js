import express from 'express';
import { insertPhoto, deletePhoto } from '../models/database.js';
import fileReader from '../utils/fileReader.js';
import fileRenamer from '../utils/fileRenamer.js';

const adminRouter = express.Router();

adminRouter.post('/', async (req, res) => {
    const body = req.body;

    try {
        const [file_n, thumb_n] = fileRenamer(body.file_n, body.title, body.date);
        const savedPhoto = await insertPhoto(
            body.date,
            body.title,
            JSON.stringify(body.category),
            file_n,
            thumb_n
        );
        res.status(201).json(savedPhoto);
    } catch (error) {
        console.error('Error inserting photo: ', error);
        res.status(500).json({ error: 'Failed to send photo' });
    }
});

adminRouter.delete('/:id', async (req, res) => {
    try {
        await deletePhoto(req.params.id);
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting:', error);
        res.status(500).json({ error: 'Failed to delete photo' });
    }
});

adminRouter.get('/files', async (req, res) => {
    try {
        const files = fileReader();
        res.status(200).json(files);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to fetch files' });
    }
});

export default adminRouter;