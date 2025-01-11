import './styles/App.css';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Photos from './pages/Photos';
import About from './pages/About';
import Admin from './pages/Admin';
import { useEffect, useState } from 'react';

const App = () => {
    const [topText, setTopText] = useState("Matias Paavilainen");
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setTopText('Matias Paavilainen');
                break;
            case '/Photos':
                setTopText('Photos');
                break;
            case '/About':
                setTopText('About');
                break;
            case '/Admin':
                setTopText('Admin');
                break;
        };

    }, [location.pathname]);
    return (
        <>
            <NavBar topText={topText} />
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
