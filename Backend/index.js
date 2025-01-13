import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';

import photosRouter from './controllers/photos.js';
import adminRouter from './controllers/admin.js';
const __dirname = path.resolve();
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/photos', photosRouter);
app.use('/admin', adminRouter);

app.get('*', (req, res) => {
    console.log(`Redirecting invalid request for ${req.url} to home page`);
    res.redirect(302, '/');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));