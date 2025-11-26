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
        <div className='app-wrapper'>
            <NavBar links={links} location={location} />
            <main className='main-content' style={{ 'gridArea': 'main-content' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Photos" element={<Photos />} />
                    <Route path="/About" element={<About />} />
                    {/* Enable only when running locally}
                {/* <Route path='/Admin' element={<Admin />} /> */}
                </Routes>
            </main>
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
