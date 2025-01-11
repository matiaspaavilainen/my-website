import PhotoCard from '../components/PhotoCard';
import ImageFilter from '../components/ImageFilter';
import axios from 'axios';
import { useEffect, useState } from 'react';

const getAll = async () => {
    try {
        const response = await axios.get("/api/photos");
        return response.data;
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
};

const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getAll().then(photos => {
            if (Array.isArray(photos)) {
                setPhotos(photos);
            } else {
                console.error("Expected an array");
                setPhotos([]);
            }
        });
    }, []);

    return (
        <div>
            <ImageFilter />
            <div className='photo-grid'>
                {photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={{ url: `public/display/${photo.file_n}`, title: photo.title, time_taken: photo.time_taken }} />
                ))}
            </div>
        </div>
    );
};

export default Photos;