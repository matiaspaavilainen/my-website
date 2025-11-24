// import ImageFilter from '../components/ImageFilter';
import PhotoCard from '../components/PhotoCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

const photoPath = import.meta.env.MODE === 'development' ? '/' : '/public/';

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
            globalThis.addEventListener('keydown', handleKeyDown);
        } else {
            globalThis.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            globalThis.removeEventListener('keydown', handleKeyDown);
        };
    }, [showPhotoLarge]);

    if (photos.length == 0) {
        return (
            <div>
                <h2 className='no-images'>No Images Found!</h2>
            </div>
        );
    } else {
        return (
            <div >
                {/* <ImageFilter /> */}
                <div className='photo-grid'>
                    {photos.map((photo) => (
                        <div className="photo-card-small" key={photo.file_n}>
                            <img
                                src={`${photoPath}thumbnails/${photo.thumb_n}`}
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
    }

};

export default Photos;