import React from 'react';
import ReactDOM from 'react-dom/client';
import './my-sass.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Error from './pages/Error/Error';
import Footer from './containers/Footer/Footer'
import Accomodation from './pages/Accomodation/Accomodation';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="accomodation/:id" element={<Accomodation />} />
                    <Route path="About" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);