import express from 'express';
import { getAllPhotos, getRandomPhoto } from '../models/database.js';

const photosRouter = express.Router();

photosRouter.get('/', async (req, res) => {
    try {
        const photos = await getAllPhotos();
        res.json(photos);
    } catch {
        res.status(500).json({ error: 'Failed to fetch photos' });
    }
});

photosRouter.get('/random', async (req, res) => {
    try {
        const photo = await getRandomPhoto();
        res.json(photo);
    } catch {
        res.status(500).json({ error: 'Failed to fetch photo' });
    }
});

export default photosRouter;