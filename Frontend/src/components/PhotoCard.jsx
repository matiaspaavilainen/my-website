import chevron_right from '../assets/chevron-right-solid.svg';
import chevron_left from '../assets/chevron-left-solid.svg';
import close from '../assets/xmark-solid.svg';

const PhotoCard = ({ time_taken, title, category, file_n, setShowPhotoLarge, setPhotoLarge, photoLarge, photos }) => {
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

    return (
        <div className='photo-card-large' onClick={(e) => e.stopPropagation()}>
            <div>
                <img className='photo-card-large img'
                    src={`/display/${file_n}`}
                    alt={title}
                    loading="lazy" />
            </div>
            <div className="photo-card-info">
                <h1>{title}</h1>
                <hr id="title-underline" />
                <p id="date">{new Date(Number(time_taken)).toLocaleDateString('FI')}</p>

                {/* TODO: Make tags clickable and show all photos with that tag */}
                <div className="photo-card-categories">
                    <p>Tags: </p>
                    {category.map((c) => (
                        <p key={c} id="category">{c}</p>
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

export default PhotoCard;