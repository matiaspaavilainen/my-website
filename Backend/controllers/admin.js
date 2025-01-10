import express from 'express';
import { insertPhoto, deletePhoto } from '../models/database.js';
import fileReader from '../utils/fileReader.js';

const adminRouter = express.Router();

adminRouter.post('/', async (req, res) => {
    const body = req.body[0];
    try {
        const savedPhoto = await insertPhoto(
            body.time_taken,
            body.title,
            body.category,
            body.secondary_category,
            body.file_n
        );
        res.status(201).json(savedPhoto);
    } catch (err) {
        console.log('Error inserting photo: ', err);
        res.status(500).json({ err: 'Failed to send photo' });
    }
});

adminRouter.delete('/:id', async (req, res) => {
    try {
        await deletePhoto(req.params.id);
        res.status(204).end();
    } catch {
        res.status(500).json({ error: 'Failed to delete photo' });
    }
});

adminRouter.get('/files', async (req, res) => {
    try {
        const files = await fileReader();
        res.status(200).json(files);
    } catch {
        res.status(500).json({ error: 'Failed to fetch files' });
    }
});

export default adminRouter;