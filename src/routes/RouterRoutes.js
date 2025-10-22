import React from 'react';
import { Routes, Route } from 'react-router';
import useScrollRestore from '../hooks/useScrollRestore';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

const RouterRoutes = () => {

    useScrollRestore();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default RouterRoutes;