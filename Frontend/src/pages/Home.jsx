import axios from 'axios';
import { Link } from 'react-router-dom';

import githubWhite from '../assets/github-white.svg';
import linkedinWhite from '../assets/linkedin-white.svg';
import { useEffect, useState } from 'react';

const getRandom = async () => {
    try {
        const response = await axios.get("/api/photos/random");
        return response.data;
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
};

const Home = () => {
    const [photo, setPhoto] = useState('');

    useEffect(() => {
        getRandom().then(photo => {
            setPhoto(photo.shift());
        });
    }, []);

    if (photo) {
        return (
            <div className='container'>
                <div className="links">
                    <a href='https://github.com/matiaspaavilainen' target='_blank' className='icon'>
                        <img src={githubWhite} alt='GitHub' />
                    </a>
                    <a href='https://www.linkedin.com/in/matiaspaavilainen/' target='_blank' className='icon'>
                        <img src={linkedinWhite} alt='LinkedIn' />
                    </a>
                </div>
                <div className='image-container'>
                    <Link to="/Photos" onClick={() => {
                    }}>
                        <img className='image'
                            src={`public/thumbnails/${photo.thumb_n}`}
                            alt={photo.title}
                            loading="lazy"
                        />
                    </Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <div className="links">
                    <a href='https://github.com/matiaspaavilainen' target='_blank' className='icon'>
                        <img src={githubWhite} alt='GitHub' />
                    </a>
                    <a href='https://www.linkedin.com/in/matiaspaavilainen/' target='_blank' className='icon'>
                        <img src={linkedinWhite} alt='LinkedIn' />
                    </a>
                </div>
                <div className='image-container'>
                    <h2 className='no-images'>No Images Found!</h2>
                </div>
            </div>
        );
    }


};

export default Home;