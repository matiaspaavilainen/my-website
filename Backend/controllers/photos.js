import express from 'express';
import { getAllPhotos, getPhoto, insertPhoto } from '../database.js';

const photosRouter = express.Router();

photosRouter.get('/', async (req, res) => {
    try {
        const photos = await getAllPhotos();
        res.json(photos);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch photos' });
    }
});

photosRouter.get('/:id', async (req, res) => {
    try {
        const photo = await getPhoto(req.params.id);
        res.json(photo);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch photo' });
    }
});

photosRouter.post('/', async (req, res) => {
    const body = req.body
    try {
        const savedPhoto = await insertPhoto(
            body.time_taken,
            body.title,
            body.category,
            body.secondary_title,
            body.file_n
        ).then(res.status(201).json(savedPhoto))
    } catch (err) {
        res.status(500).json({ error: 'Failed to send photo' });
    }
});

export default photosRouter;