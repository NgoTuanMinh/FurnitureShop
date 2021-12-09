import React from 'react';
import {
    Route, Routes
} from "react-router-dom";
import ProductPage from './ProductPage';
import TipTricks from './TipTricksPage';

function MainPage() {
    return (
        <Routes>
            <Route path="/product" element={<ProductPage />} />
            <Route path="/tip-tricks" element={<TipTricks />} />
        </Routes>
    )
}

export default MainPage;