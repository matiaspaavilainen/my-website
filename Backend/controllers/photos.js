import express from 'express';
import { getAllPhotos, getPhoto } from '../models/database.js';

const photosRouter = express.Router();

photosRouter.get('/', async (req, res) => {
    try {
        const photos = await getAllPhotos();
        res.json(photos);
    } catch {
        res.status(500).json({ error: 'Failed to fetch photos' });
    }
});

photosRouter.get('/:id', async (req, res) => {
    try {
        const photo = await getPhoto(req.params.id);
        res.json(photo);
    } catch {
        res.status(500).json({ error: 'Failed to fetch photo' });
    }
});

export default photosRouter;