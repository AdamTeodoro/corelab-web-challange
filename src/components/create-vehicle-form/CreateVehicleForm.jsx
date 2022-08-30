
import React, { useState } from 'react';

import { formService } from '../../services/FormService';
import { vehicleService } from '../../services/VehicleService';

import { VehicleSchema } from '../../schemas/VehicleSchema';

import './CreateVehicleForm.css';

export default function CreateVehicleForm(props) {
    const [vehicle, setVehicle] = useState({
        name: '',
        brand: '',
        color: '',
        year: '',
        price: '',
        description: '',
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const { dataFormat, setValue } = formService;

    function getFormFild(fildName, event) {
        return setValue(fildName, event, setVehicle);
    }

    function getVehicle() {
        setVehicle(dataFormat([ 'price' ], vehicle));
        return vehicle;
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const isValid = VehicleSchema.validate(getVehicle());
            if (isValid.error) {
                setErrorMessage(isValid.error.details[0].message);
                return;
            } else {
               await vehicleService.createVehicle(getVehicle())
                .then((apiResponse) => {
                    props.addVehicle(apiResponse.data.newVehicle);
                    props.close();
                });
            }
        } catch(error) {
            console.log(error);
            setErrorMessage('Erro desconhecido!');
            return;
        }
    }

    return  (
        <form onSubmit={handleSubmit} className="vehicle-form">
            <div className='form-element'>
                <label>Nome:</label>
                <input placeholder='Sandero' onChange={(e) => getFormFild('name', e)}/>
            </div>
            <div className='form-element'>
                <label>Marca:</label>
                <input placeholder='Renault' onChange={(e) => getFormFild('brand', e)}/>
            </div>
            <div className='form-element'>
                <label>Cor:</label>
                <input placeholder='Azul' onChange={(e) => getFormFild('color', e)}/>
            </div>
            <div className='form-element'>
                <label>Ano:</label>
                <input placeholder='2016' onChange={(e) => getFormFild('year', e)}/>
            </div>
            <div className='form-element'>
                <label>Placa:</label>
                <input placeholder='ABXD-1234' onChange={(e) => getFormFild('plate', e)}/>
            </div>
            <div className='form-element'>
                <label>Preço:</label>
                <input placeholder='100,00' onChange={(e) => getFormFild('price', e)}/>
            </div>
            <div className='form-element'>
                <label>Description:</label>
                <input placeholder='Pneus novos' onChange={(e) => getFormFild('description', e)}/>
            </div>

            <div className='error-message'>{errorMessage}</div>

            <button className='btn-submit'>SALVAR</button>
        </form>
    )
}
