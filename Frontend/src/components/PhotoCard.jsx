const PhotoCard = ({ photo }) => {
    // database implementation
    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title} loading="lazy" ></img>
            <p>{photo.title} on {new Date(Number(photo.time_taken)).toLocaleDateString()}</p>
            <p>Matias Paavilainen</p>
        </div>
    );
};

export default PhotoCard;