import '../styles/Home.css';
import githubWhite from '../assets/github-white.svg';
import linkedinWhite from '../assets/linkedin-white.svg';

const Home = () => {
    return (
        <div className="links">
            <a href='https://github.com/matiaspaavilainen' target='_blank' className='icon'>
                <img src={githubWhite} alt='GitHub' />
            </a>
            <a href='https://www.linkedin.com/in/matiaspaavilainen/' target='_blank' className='icon'>
                <img src={linkedinWhite} alt='LinkedIn' />
            </a>
        </div>
    );
};

export default Home;