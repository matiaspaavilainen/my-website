import by from '../assets/by.svg';
import cc from '../assets/cc.svg';
import nc from '../assets/nc.svg';

const About = () => {
    return (
        <div className='content'>
            <div className='content text'>
                <p>
                    A photo gallery website made with React and Node.js.
                    Frontend is created with Vite + React, React Router adn axios used for routing within the frontend.
                    The Node.js backend serves the frontend as a static HTML file.
                    Backend routing is implemented with Express. Information such as title and category for each image are stored in a MySQL database,
                    and fetched to the website with mysql2. The creation time is extracted from the image&apos;s
                    exif data using ExifReader and is also added to the database.
                    The website is self-hosted on a Ubuntu server with nginx.</p>
            </div>
            <div className='content text'>
                <p>
                    You are free to share and adapt the photos on this website for non-commercial purposes,
                    as per the <a href="https://creativecommons.org/licenses/by-nc/4.0/" target='_blank'> Creative Commons Attribution-NonCommercial 4.0 International License</a>.
                    Please provide attribution to Matias Paavilainen and include a link to the source.
                </p>
            </div>
            <div className='copyright'>
                <img src={cc} width={50} /> <img src={by} width={50} /> <img src={nc} width={50} />
            </div>
        </div>
    );
};

export default About;