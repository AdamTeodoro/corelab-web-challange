import React, { useState } from 'react';

import { vehicleService } from '../../services/VehicleService';

import { VehicleSchema } from '../../schemas/VehicleSchema';

import "./UpdateVehicleForm.css";

export default function UpdateVehicleForm(props) {

    const [name, setName] = useState(props.vehicle.name);
    const [brand, setbrand] = useState(props.vehicle.brand);
    const [color, setColor] = useState(props.vehicle.color);
    const [year, setYear] = useState(props.vehicle.year);
    const [plate, setPlate] = useState(props.vehicle.plate);
    const [price, setPrice] = useState(props.vehicle.price);
    const [description, setDescription] = useState(props.vehicle.description);
    
    const [errorMessage, setErrorMessage] = useState(null);

    function getVehicle() {
        return {
            name,
            brand,
            color,
            year,
            plate,
            price,
            description
        };
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const isValid = VehicleSchema.validate(getVehicle());
            setPrice(Number(price));
            if (isValid.error) {
                setErrorMessage(isValid.error.details[0].message);
                return;
            } else {
                await vehicleService.updateVehicle(getVehicle(), props.id)
                    .then(() => {
                        let newVehicle = getVehicle();
                        newVehicle.id = props.vehicle.id;
                        props.updateVehicle(newVehicle);
                        props.close();
                    });
                
            }
        } catch {
            setErrorMessage('Erro desconhecido!');
            return;
        }
    }

    return  (
        <form onSubmit={handleSubmit} className="vehicle-form">
            <div className='form-element'>
                <p>Nome:</p>
                <input 
                    placeholder='Sandero' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <p>Marca:</p>
                <input 
                    placeholder='Renault' 
                    value={brand} 
                    onChange={(e) => setbrand(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <p>Cor:</p>
                <input 
                    placeholder='Azul' 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <p>Ano:</p>
                <input 
                    placeholder='2016'
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <p>Placa:</p>
                <input 
                    placeholder='ABXD-1234'
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <p>Preço:</p>
                <input 
                    placeholder='100,00'
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className='form-element'>
                <p>Description:</p>
                <input 
                    placeholder='Pneus novos'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className='error-message'>{errorMessage}</div>

            <button className='btn-submit'>SALVAR</button>
        </form>
    )
}
