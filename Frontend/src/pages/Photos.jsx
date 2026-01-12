import ImageFilter from '../components/ImageFilter';
import PhotoCard from '../components/PhotoCard';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';

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

    // get the sorting from ImageFilter, false == DESC
    const [selectedFilter, setSelectedFilter] = useState([]);
    const optionsFilter = [
        { value: 'Space', label: 'Space' },
        { value: 'Crete', label: 'Crete' },
        { value: 'Animals', label: 'Animals' },
        { value: 'Nature', label: 'Nature' },
        { value: 'Scenery', label: 'Scenery' },
        { value: 'City', label: 'City' },
        { value: 'Food', label: 'Food' },
        { value: 'Other', label: 'Other' },
    ];

    const [sortObject, setSortObject] = useState({ sort: 'time_taken', direction: false });

    // Probably not ideal for larger datasets, but works for this
    useEffect(() => {
        const compareFn = (a, b) => {
            if (sortObject.sort === 'time_taken') {
                const aVal = Number(a[sortObject.sort]);
                const bVal = Number(b[sortObject.sort]);
                return sortObject.direction ? aVal - bVal : bVal - aVal;
            } else if (sortObject.sort === 'title') {
                const aVal = a[sortObject.sort].toLowerCase();
                const bVal = b[sortObject.sort].toLowerCase();
                return sortObject.direction ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
            }
            return 0;
        };

        const filterFN = (element) => {
            return selectedFilter.length == 0 ? true : selectedFilter.every(item => element.category.includes(item.value));
        };

        getAll().then(photos => {
            if (Array.isArray(photos)) {
                // apply tag filter
                photos = photos.filter(filterFN);
                // sort after filter
                const sortedPhotos = [...photos].sort(compareFn);
                setPhotos(sortedPhotos);
            } else {
                console.error("Expected an array");
                setPhotos([]);
            }
        });
    }, [sortObject, selectedFilter]);

    const handleNext = useCallback(() => {
        const index = (photos.indexOf(photoLarge) + 1) % photos.length;
        setPhotoLarge(photos[index]);
    }, [photoLarge, photos]);

    const handlePrevious = useCallback(() => {
        const index = (photos.indexOf(photoLarge) - 1 + photos.length) % photos.length;
        setPhotoLarge(photos[index]);
    }, [photoLarge, photos]);


    useEffect(() => {
        const handleKeyDown = (event) => {

            if (event.key === 'Escape') {
                setShowPhotoLarge(false);
            }

            if (event.key === 'ArrowLeft') {
                handlePrevious();
            }

            if (event.key === 'ArrowRight') {
                handleNext();
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
    }, [showPhotoLarge, handleNext, handlePrevious]);


    if (photos.length == 0) {
        return (
            <div>
                <ImageFilter
                    onSortChange={setSortObject}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    optionsFilter={optionsFilter}
                />
                <h2 className='no-images'>No Images Found!</h2>
            </div>
        );
    } else {
        return (
            <div className='photos' >
                <ImageFilter
                    onSortChange={setSortObject}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                    optionsFilter={optionsFilter}
                />
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
                    {showPhotoLarge &&
                        <div className='photo-container' onClick={(e) => e.stopPropagation()}>
                            <PhotoCard
                                setShowPhotoLarge={setShowPhotoLarge}
                                setPhotoLarge={setPhotoLarge}
                                setSelectedFilter={setSelectedFilter}
                                photoLarge={photoLarge}
                                photos={photos} />

                            <button id='next' style={{ 'gridArea': 'next' }} onClick={handleNext} ></button>
                            <button id='previous' style={{ 'gridArea': 'previous' }} onClick={handlePrevious} ></button>
                        </div>
                    }
                </div>
                <footer>
                    <p>© Matias Paavilainen 2026 | This work is licensed under
                        a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target='_blank'> Creative Commons Attribution-NonCommercial 4.0 International License</a>
                    </p>
                </footer>
            </div >
        );
    }

};

export default Photos;