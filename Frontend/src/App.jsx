import './styles/App.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Photos from './pages/Photos';
import About from './pages/About';
// import Admin from './pages/Admin';

const links = [
    { link: "/", text: "Home" },
    { link: "/Photos", text: "Photos" },
    { link: "/About", text: "About" },
    // { link: "/Admin", text: "Admin" },
];

const App = () => {
    const location = useLocation();

    return (
        <>
            {/* TODO: make navbar close when clicking anywhere else */}
            <NavBar links={links} location={location} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Photos" element={<Photos />} />
                <Route path="/About" element={<About />} />
                {/* Enable only when running in dev mode locally, TODO: add auth to use all the time */}
                {/* <Route path='/Admin' element={<Admin />} /> */}
            </Routes>
        </>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
