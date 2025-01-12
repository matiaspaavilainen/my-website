import axios from 'axios';

import '../styles/Home.css';
import githubWhite from '../assets/github-white.svg';
import linkedinWhite from '../assets/linkedin-white.svg';

const getRandom = async () => {
    try {
        const response = await axios.get("/api/photos/random");
        return response.data;
    } catch (error) {
        console.error("Error fetching photos:", error);
    }
}

const Home = () => {
    return (
        <div>
            <div className="links">
                <a href='https://github.com/matiaspaavilainen' target='_blank' className='icon'>
                    <img src={githubWhite} alt='GitHub' />
                </a>
                <a href='https://www.linkedin.com/in/matiaspaavilainen/' target='_blank' className='icon'>
                    <img src={linkedinWhite} alt='LinkedIn' />
                </a>
            </div>
        </div>
    );
};

export default Home;