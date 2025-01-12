import ImageFilter from '../components/ImageFilter';
import PhotoCard from '../components/PhotoCard';
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
    const [photoLarge, setPhotoLarge] = useState({});
    const [showPhotoLarge, setShowPhotoLarge] = useState(false);

    // Probably not ideal for larger datasets
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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setShowPhotoLarge(false);
            }
        };

        if (showPhotoLarge) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showPhotoLarge]);

    return (
        <div >
            {/* TODO: Implement filter */}
            {/* <ImageFilter /> */}
            <div className='photo-grid'>
                {photos.map((photo) => (
                    <div className="photo-card-small" key={photo.file_n}>
                        <img
                            src={`/thumbnails/${photo.thumb_n}`}
                            alt={photo.title}
                            loading="lazy"
                            onClick={() => {
                                setPhotoLarge(photo);
                                setShowPhotoLarge(true);
                            }}
                        />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
            <div className={`card-overlay ${showPhotoLarge ? 'show' : ''}`} onClick={() => { setShowPhotoLarge(false); }} >
                {showPhotoLarge && <PhotoCard
                    {...photoLarge}
                    setShowPhotoLarge={setShowPhotoLarge}
                    setPhotoLarge={setPhotoLarge}
                    photoLarge={photoLarge}
                    photos={photos}
                />
                }
            </div>
            <footer>
                <p>© Matias Paavilainen 2025 | This work is licensed under
                    a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target='_blank'> Creative Commons Attribution-NonCommercial 4.0 International License</a>
                </p>
            </footer>
        </div >
    );
};

export default Photos;