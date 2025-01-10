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
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));