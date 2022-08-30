import React, { useState, useEffect } from 'react';

import HeartButtonIcon from '../../icons/HeartButtonIcon';
import CloseButtonIcon from '../../icons/CloseButtonIcon';
import PencilSquareButtonIcon from '../../icons/PencilSquareButtonIcon';
import HeartFullButtonIcon from '../../icons/HeartFullButtonIcon';
import PlusButtonIcon from '../../icons/PlusButtonIcon';

import BackButton from '../../components/back-button/BackButton';
import UpdateVehicleForm from '../../components/update-vehicle-form/UpdateVehicleForm';
import CreateVehicleForm from '../create-vehicle-form/CreateVehicleForm';
import Vehicle from '../vehicle/Vehicle';

import { colorService } from '../../services/ColorsService';
import { vehicleService } from '../../services/VehicleService';
import { favoriteService } from '../../services/FavoriteService';
import { favoriteLocalService } from '../../services/FavoriteLocalService';

import './MyVehicles.css';

export default function MyVehicles() {
    
    const favorites = favoriteLocalService.getFavorites();
    const [vehicles, setVehicles] = useState({
        myVehicles: [],
        favorites: []
    });
    
    const [showUpdateVehicleForm, setShowUpdateVehicleForm] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [openFormCreate, setOpenFormCreate] = useState(false);

    //Load my vehicles
    useEffect(() => {
        vehicleService.listMyVehicles()
        .then((apiResponse) => {
            const myVehicles = apiResponse.data.myVehicles;
            const onlyVehicles = [];
            const onlyFavorites = [];
            myVehicles.forEach((vehicle) => {
                const exists = favorites.findIndex(
                    (favorite) => vehicle.id === favorite.idVehicle
                ) !== -1? true: false;
                if (exists) {
                    onlyFavorites.push(vehicle);
                } else {
                    onlyVehicles.push(vehicle);
                }
            });
            setVehicles({
                myVehicles: onlyVehicles,
                favorites: onlyFavorites
            });
        });
    }, []);

    async function deleteVehicle(idVehicle) {
        await vehicleService.deleteVehicle(idVehicle)
        .then(() => {
            const updatedVehicles = vehicles.myVehicles.filter(
                (vehicle) => vehicle.id !== idVehicle
            );
            setVehicles({
                myVehicles: updatedVehicles,
                favorites: vehicles.favorites
            });
        })
    }

    async function deleteFavoriteVehicle(idVehicle) {
        await vehicleService.deleteVehicle(idVehicle)
        .then(() => {
            const favorites = favoriteLocalService.getFavorites();
            const foundFavorite = favorites.filter(
                (favorite) => favorite.idVehicle === idVehicle)[0];
            favoriteLocalService.removeFavorite(foundFavorite.id);
            const updatedVehiclesFavorites = vehicles.favorites.filter(
                (vehicle) => vehicle.id !== idVehicle
            );
            setVehicles({
                myVehicles: vehicles.myVehicles,
                favorites: updatedVehiclesFavorites
            });
        })
    }

    function openUpdateVehicleForm(vehicle) {
        setSelectedVehicle(vehicle);
        setShowUpdateVehicleForm(true);
    }

    function close() {
        setShowUpdateVehicleForm(false)
    }

    function updateVehicle(vehicle) {
        console.log(vehicle.id);
        const isFavorite = vehicles.favorites
        .findIndex((favorite) => favorite.id === vehicle.id) !== -1? true: false;
        console.log(isFavorite)
        let newFavorites = vehicles.favorites;
        let newMyVehicles = vehicles.myVehicles
        if (isFavorite) {
            newFavorites = vehicles.favorites
            .filter((favorite) => favorite.id !== vehicle.id);
            newFavorites.push(vehicle);
            console.log('newfavorites: ', newFavorites);
        } else {
            newMyVehicles = vehicles.myVehicles
            .filter((myVehicle) => myVehicle.id !== vehicle.id);
            newMyVehicles.push(vehicle);
            console.log('newMyVehicles: ', newMyVehicles);
        }
        setVehicles({
            myVehicles: newMyVehicles,
            favorites: newFavorites
        });
    }

    function ShowUpdateVehicleForm() {
        if (showUpdateVehicleForm) {
            return (
                <div className='modal'> 
                    <BackButton close={close}></BackButton>
                    <UpdateVehicleForm 
                        close={close}
                        vehicle={selectedVehicle}
                        id={selectedVehicle.id}
                        updateVehicle={(e) => updateVehicle(e)}
                    >
                    </UpdateVehicleForm>
                </div>
            )
        }
    }
    
    async function createFavorite(idVehicle) {
        await favoriteService.createFavorite(idVehicle)
        .then((apiResponse) => {
            // save local
            const newFavorite = apiResponse.data.newFavorite;
            favoriteLocalService.addFavorite(newFavorite);
            console.log(favoriteLocalService.getFavorites())
            // remove of myvehicles
            const newMyVehicles = vehicles.myVehicles
            .filter((vehicle) => vehicle.id !== idVehicle);
            // copy the vehicle
            const newVehicleFavorite = vehicles.myVehicles
            .filter((vehicle) => vehicle.id === idVehicle)[0]
            //update favorites
            const newfavorites = vehicles.favorites;
            newfavorites.push(newVehicleFavorite);
            setVehicles({ 
                myVehicles: newMyVehicles,
                favorites: newfavorites
            });
        })
    }

    async function removeFavorite(idVehicle) {
        const myVehicles = vehicles.myVehicles;
        const favorites = vehicles.favorites;
        const foundedFavorite = favoriteLocalService
        .getFavorites()
        .filter(
            (favorite) => favorite.idVehicle === idVehicle
        )[0];
        await favoriteService.deleteFavorite(foundedFavorite.id)
        .then(() => {
            favoriteLocalService.removeFavorite(foundedFavorite.id);
            console.log(favoriteLocalService.getFavorites())
            const newFavorites = favorites.filter(
                (vehicle) => vehicle.id !== idVehicle
            );
            const newMyVehicles = favorites.filter(
                (vehicle) => vehicle.id === idVehicle
            );
            setVehicles({
                favorites: newFavorites,
                myVehicles: myVehicles.concat(myVehicles, newMyVehicles)
            });
        })
    }

    function showFavorites() {
        return (   
            vehicles.favorites.map((favorite) => (
                <div 
                    className="vehicle" 
                    key={favorite.id}
                    style={{ backgroundColor: colorService.findColorName(favorite.color) }}
                >
                    <div className="vehicle-text-element">
                        <div className='options'>
                            <button 
                                className='btn-none' 
                                onClick={() => openUpdateVehicleForm(favorite)}
                            >
                                <PencilSquareButtonIcon></PencilSquareButtonIcon>
                            </button>
                            <button 
                                className='btn-none' 
                                onClick={(e) => deleteFavoriteVehicle(favorite.id)}
                            >
                                <CloseButtonIcon></CloseButtonIcon>
                            </button>
                            <button 
                                className='btn-none' 
                                onClick={(e) => removeFavorite(favorite.id)}
                            >
                                <HeartFullButtonIcon></HeartFullButtonIcon>
                            </button>
                        </div>

                        <Vehicle vehicle={favorite}></Vehicle>

                    </div>
                </div>
            ))
        )
    }

    function showMyVehicles() {
        return (
            vehicles.myVehicles.map((vehicle) => (
                <div 
                    className="vehicle" 
                    key={vehicle.id}
                    style={{ backgroundColor: colorService.findColorName(vehicle.color) }}
                >
                    <div className="vehicle-text-element">
                        <div className='options'>
                            <button 
                                className='btn-none' 
                                onClick={() => openUpdateVehicleForm(vehicle)}
                            >
                                <PencilSquareButtonIcon></PencilSquareButtonIcon>
                            </button>
                            <button 
                                className='btn-none' 
                                onClick={(e) => deleteVehicle(vehicle.id)}
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

    function addVehicle(newVehicle) {
        console.log(newVehicle);
        const myVehicles = vehicles.myVehicles;
        myVehicles.push(newVehicle);
        setVehicles({
            myVehicles,
            favorites: vehicles.favorites
        })
    }

    function ShowCreateVehicleForm() {
        if (openFormCreate === true) {
            return (
                <div className="modal">
                    <BackButton close={() => setOpenFormCreate(false)}></BackButton>
                    <CreateVehicleForm 
                        close={() => setOpenFormCreate(false)}
                        addVehicle={(newVehicle) => addVehicle(newVehicle)}
                    >
                    </CreateVehicleForm>
                </div>
            )
        }
    }

    return (
        <>
            <button className="add" onClick={(e) => setOpenFormCreate(true)}>
                <PlusButtonIcon></PlusButtonIcon>
                ADICIONAR
            </button>
            <div className="vehicles">
                {/* User Anunces favorites */}
                {vehicles.favorites.length > 0? (<h3>Favoritos</h3>): ''}
                {showFavorites()}
                {vehicles.myVehicles.length > 0? (<h3>Meus Anúncios</h3>): ''}
                {showMyVehicles()}
                {/* Modal to update vehicle */}
                {ShowUpdateVehicleForm()}
                {ShowCreateVehicleForm()}
            </div>
        </>
    );
    
}
