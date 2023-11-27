import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';

const Pages = () => {
    return (
        <Router>
            <Routes>
                <Route path='/:token' Component={Home} />
            </Routes>
        </Router>
    )
};

export default Pages;
