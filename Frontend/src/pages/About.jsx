import by from '../assets/by.svg';
import cc from '../assets/cc.svg';
import nc from '../assets/nc.svg';

const About = () => {
    return (
        <div className='wrapper'>
            <div className='content'>
                <div className='content text'>
                    <p>A photo gallery website made with React and Node.js. More information on <a href='https://github.com/matiaspaavilainen/my-website' target='_blank'>GitHub</a>. </p>
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
        </div>
    );
};

export default About;