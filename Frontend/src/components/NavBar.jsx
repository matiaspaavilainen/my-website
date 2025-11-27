import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = ({ links, location }) => {

    return (
        <div className={`topbar ${location.pathname.trim().substring(1).toLowerCase()}`}>
            {links.map((link) => (
                <Link
                    className={`link${location.pathname === link.link ? " current" : ""}`}
                    to={link.link}
                    key={link.text}
                >
                    {link.text}
                </Link>
            ))}
        </div>
    );
};

NavBar.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    location: PropTypes.object.isRequired
};

export default NavBar;