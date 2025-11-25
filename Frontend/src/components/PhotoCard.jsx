import chevron_right from '../assets/chevron-right-solid.svg';
import chevron_left from '../assets/chevron-left-solid.svg';
import close from '../assets/xmark-solid.svg';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const photoPath = import.meta.env.MODE === 'development' ? '/' : '/public/';

const PhotoCard = ({ setShowPhotoLarge, setPhotoLarge, photoLarge, photos, setSelectedFilter }) => {
    useEffect(() => {
        // Disable scrolling when card is open
        document.body.style.overflow = 'hidden';
        document.documentElement.style.scrollbarGutter = 'stable';

        return () => {
            // Re-enable scrolling when card is closed
            document.body.style.overflow = '';
            document.documentElement.style.scrollbarGutter = 'auto';
        };
    }, []);
    const handleNext = () => {
        const index = (photos.indexOf(photoLarge) + 1) % photos.length;
        setPhotoLarge(photos[index]);
    };

    const handlePrevious = () => {
        const index = (photos.indexOf(photoLarge) - 1 + photos.length) % photos.length;
        setPhotoLarge(photos[index]);
    };

    const handleClose = () => {
        setShowPhotoLarge(false);
    };

    const handleTagClick = (c) => {
        setSelectedFilter([{ value: c, label: c }]);
        setShowPhotoLarge(false);
    };

    return (
        <div className='photo-card-large' onClick={(e) => e.stopPropagation()}>
            <img className='photo-card-large img'
                src={`${photoPath}display/${photoLarge.file_n}`}
                alt={photoLarge.title}
                loading="lazy" />
            <div className="photo-card-info">
                <h1>{photoLarge.title}</h1>
                <hr id="title-underline" />
                <p id="date">{new Date(Number(photoLarge.time_taken)).toLocaleDateString('FI')}</p>

                <div className="photo-card-categories">
                    <p>Tags:</p>
                    {photoLarge.category.map((c) => (
                        <p key={c} id="category" onClick={() => handleTagClick(c)}>{c}</p>
                    ))}
                </div>
            </div>
            <a target='_blank' id='previous' onClick={handlePrevious}>
                <img src={chevron_left} alt='Previous' />
            </a>
            <a target='_blank' id='close' onClick={handleClose}>
                <img src={close} alt='Close' />
            </a>
            <a target='_blank' id='next' onClick={handleNext}>
                <img src={chevron_right} alt='Next' />
            </a>
        </div>
    );
};

PhotoCard.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        file_n: PropTypes.string.isRequired,
        thumb_n: PropTypes.string.isRequired,
    })).isRequired,
    photoLarge: PropTypes.shape({
        id: PropTypes.number.isRequired,
        time_taken: PropTypes.string.isRequired,
        file_n: PropTypes.string.isRequired,
        thumb_n: PropTypes.string.isRequired,
        category: PropTypes.arrayOf(PropTypes.string.isRequired),
        title: PropTypes.string.isRequired,
    }),
    setShowPhotoLarge: PropTypes.func.isRequired,
    setPhotoLarge: PropTypes.func.isRequired,
    setSelectedFilter: PropTypes.func.isRequired,
    optionsFilter: PropTypes.arrayOf(PropTypes.object)
};

export default PhotoCard;