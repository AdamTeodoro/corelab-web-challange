import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './pages/home/Home';

import { sessionService } from './services/SessionService';
import { favoriteService } from './services/FavoriteService';
import { favoriteLocalService } from './services/FavoriteLocalService';

async function loadFavorites() {
    await favoriteService.getFavorites()
    .then((apiResponse) => {
        const favorites = apiResponse.data.favoriteList
        favoriteLocalService.setFavorites(favorites);
    });
}
  
async function createSessionIfNotExists() {
    if (sessionService.getSession()) { 
       return 
    } else {
        await sessionService.createSession();
    }
}
  
createSessionIfNotExists();
loadFavorites();
export default function App() {
    
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
