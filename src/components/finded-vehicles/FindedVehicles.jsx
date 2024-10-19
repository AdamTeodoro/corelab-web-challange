import React, { useEffect, useState } from "react";

import './FindedVehicles.css';

import HeartButtonIcon from '../../icons/HeartButtonIcon';
import HeartFullButtonIcon from '../../icons/HeartFullButtonIcon';
import CloseButtonIcon from '../../icons/CloseButtonIcon';

import { favoriteService } from "../../services/FavoriteService";
import { colorService } from "../../services/ColorsService";
import { favoriteLocalService } from '../../services/FavoriteLocalService';

import Vehicle from "../vehicle/Vehicle";

export default function FindedVehicles(props) {
    
    const favorites = favoriteLocalService.getFavorites();
    const [vehicles, setVehicles] = useState({
        findeds: props.findeds,
        favorites: []
    });

    function filterFavorites() {
        const onlyVehicles = [];
        const onlyFavorites = [];
        props.findeds.forEach((vehicle) => {
            const founded = favorites.findIndex((favorite) => vehicle.id === favorite.idVehicle)
            const exists = founded !== -1? true: false;
            if (exists) {
                onlyFavorites.push(vehicle);
            } else {
                onlyVehicles.push(vehicle);
            }
        });
        setVehicles({ findeds: onlyVehicles, favorites: onlyFavorites });
    }

    useEffect(() => { 
        filterFavorites();
    }, [props.findeds])

    function removeFindedVehicle(idVehicle) {
        const updatedVehicles = vehicles.findeds
            .filter((vehicle) => vehicle.id !== idVehicle);
        setVehicles({ findeds: updatedVehicles, favorites: vehicles.favorites });
    }

    function removeFavoriteVehicle(idVehicle) {
        const updatedVehicles = vehicles.favorites
            .filter((vehicle) => vehicle.id !== idVehicle);
        setVehicles({ findeds: vehicles.findeds, favorites: updatedVehicles });
    }

    async function createFavorite(idVehicle) {
        await favoriteService.createFavorite(idVehicle)
        .then((apiResponse) => {
            // save local
            const newFavorite = apiResponse.data.newFavorite;
            favoriteLocalService.addFavorite(newFavorite);
            // remove of findeds
            const newfindeds = vehicles.findeds
                .filter((vehicle) => vehicle.id !== idVehicle);
            // copy the vehicle
            const newVehicleFavorite = vehicles.findeds
                .filter((vehicle) => vehicle.id === idVehicle)[0]
            //update favorites
            const newfavorites = vehicles.favorites;
            newfavorites.push(newVehicleFavorite);
            setVehicles({ findeds: newfindeds, favorites: newfavorites });
        })
    }

    async function deleteFavorite(idVehicle) {
        const favorites = vehicles.favorites;
        const foundedFavorite = favoriteLocalService.getFavorites()
            .filter((favorite) => favorite.idVehicle === idVehicle)[0];
        await favoriteService.deleteFavorite(foundedFavorite.id)
            .then(() => {
                //remove localstorage
                favoriteLocalService.removeFavorite(foundedFavorite.id);
                const newFindeds = vehicles.findeds;
                //remove on the favorites
                const newFavorites = favorites.filter((vehicle) => vehicle.id !== idVehicle);
                //insert in founds
                const newFinded = favorites.filter((vehicle) => vehicle.id === idVehicle)[0];
                newFindeds.push(newFinded);
                setVehicles({ favorites: newFavorites, findeds: newFindeds });
            })
        
    }

    function ShowFindedsVehicles() {
        return (
            vehicles.findeds.map((vehicle) => (
                <div 
                    className="vehicle" 
                    key={vehicle.id}
                    style={{ backgroundColor: colorService.findColorName(vehicle.color) }}
                >
                    <div className="vehicle-text-element">
                        <div className='options-finded'>
                            <button 
                                className='btn-none' 
                                onClick={(e) => removeFindedVehicle(vehicle.id)}
                            >
                                <CloseButtonIcon></CloseButtonIcon>
                            </button>
                            <button 
                                className='btn-none' 
                                onClick={(e) => createFavorite(vehicle.id)}
                            >
                                <HeartButtonIcon></HeartButtonIcon>
                            </button>
                        </div>
                        <Vehicle vehicle={vehicle}></Vehicle>
                    </div>
                </div>
            ))
        )
    }

    function ShowFavoritesVehicles() {
        return (
            vehicles.favorites.map((vehicle) => (
                <div 
                    className="vehicle" 
                    key={vehicle.id}
                    style={{ backgroundColor: colorService.findColorName(vehicle.color) }}
                >
                    <div className="vehicle-text-element">
                        <div className='options-finded'>
                            <button 
                                className='btn-none' 
                                onClick={(e) => removeFavoriteVehicle(vehicle.id)}
                            >
                                <CloseButtonIcon></CloseButtonIcon>
                            </button>
                            <button 
                                className='btn-none' 
                                onClick={(e) => deleteFavorite(vehicle.id)}
                            >
                                <HeartFullButtonIcon></HeartFullButtonIcon>
                            </button>
                        </div>
                        <Vehicle vehicle={vehicle}></Vehicle>
                    </div>
                </div>
            ))
        )
    }

    return (
        <div className="vehicles">
            {vehicles.favorites.length > 0? <h3>Favoritos</h3>: ''}
            {ShowFavoritesVehicles()}
            {vehicles.findeds.length > 0? <h3>Anúncios</h3>: ''}
            {ShowFindedsVehicles()}
            {
                vehicles.findeds.length === 0 && vehicles.favorites.length === 0 ?
                    <h3>Nenhum anúncio encontrado :(</h3> : ''
            }
        </div>
    )
}
