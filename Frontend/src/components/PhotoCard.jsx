const PhotoCard = ({ photo }) => {
    return (
        <div className="photo-card">
            <img src={photo.url} alt={photo.title}></img>
            <p>{photo.title}</p>
            <p>Matias Paavilainen</p>
        </div>
    )
};

export default PhotoCard;