import React, { useState } from 'react';

import { SearchSchema } from '../../schemas/SearchSchema';

import './FormFind.css';

import { colorService } from '../../services/ColorsService';
import { formService } from '../../services/FormService';
import { vehicleService } from '../../services/VehicleService';

export default function FormFind(props) {

    const [findData, setfindData] = useState({
        brand: '',
        color: '',
        year: '',
        minPrice: '',
        maxPrice: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const { dataFormat, setValue } = formService;

    function getFormFild(fildName, event) {
        return setValue(fildName, event, setfindData);
    }

    function getFindData() {
        setfindData(dataFormat([ 'maxPrice', 'minPrice' ], findData));
        return findData;
    }

    async function handleSubmit(event) {
        try {
            event.preventDefault();
            const isValid = SearchSchema.validate(getFindData());
            if (isValid.error) {
                setErrorMessage(isValid.error.details[0].message);
                return;
            } else {
               await vehicleService.searchVehicle({ queryForm: getFindData() })
                    .then((apiResponse) => {
                        props.setFindeds(apiResponse.data.vehiclesFindeds);
                        return props.close();
                    });
            }
        } catch(error) {
            setErrorMessage('Erro desconhecido!');
            return;
        }
    }

    const colors = colorService.colors
    .filter((color) => color.ptbrName !== undefined);
    
    function showColors() {
        return (
            colors.map((color, i) => {
                return <option key={i} value={color.ptbrName}>{color.ptbrName}</option>;
            })
        )
    }

    return(
        <form onSubmit={handleSubmit} className='form-find'>
            <div className="form-element">
                <label>Marca:</label>
                <select onChange={(e) => getFormFild('brand', e)}>
                    <option value={""}></option>
                    <option value={"Caoa Chery"}>Caoa Chery</option>
                    <option value={"Hyundai"}>Hyundai</option>
                    <option value={"Mercedes Benz"}>Mercedes Benz</option>
                    <option value={"Fiat"}>Fiat</option>
                    <option value={"Alfa Romeo"}>Alfa Romeo</option>
                    <option value={"Land Rover"}>Land Rover</option>
                    <option value={"Volkswagen"}>Volkswagen</option>
                    <option value={"Chevrolet"}>Chevrolet</option>
                    <option value={"Ford"}>Ford</option>
                    <option value={"Opel"}>Opel</option>
                    <option value={"Toyota"}>Toyota</option>
                    <option value={"Nissan"}>Nissan</option>
                    <option value={"Honda"}>Honda</option>
                    <option value={"Hyundai"}>Hyundai</option>
                    <option value={"Kia"}>Kia</option>
                    <option value={"Renault"}>Renault</option>
                    <option value={"BMW"}>BMW</option>
                    <option value={"Peugeot"}>Peugeot</option>
                    <option value={"Audi"}>Audi</option>
                </select>
            </div>
            
            <div className="form-element">
                <label>Cor:</label>
                <select onChange={(e) => getFormFild('color', e)}>
                    <option value={""}></option>
                    { showColors() }
                </select>
            </div>

            <div className="form-element">
                <label>Ano:</label>
                <select onChange={(e) => getFormFild('year', e)}>
                    <option value={""}></option>
                    {     
                        Array(new Date().getFullYear() + 1)
                            .fill(1986)
                            .map(
                                (el, i) => (i >= 1886)? <option key={i} value={i}>{i}</option>: ''
                            )
                    }
                </select>
            </div>
            
            <div className='input-row'>
                <div className='form-element'>
                    <label>Preço Mín:</label>
                    <input onChange={(e) => getFormFild('minPrice', e)} />
                </div>
                <div className='form-element'>
                    <label>Preço Max:</label>
                    <input onChange={(e) => getFormFild('maxPrice', e)} />
                </div>
            </div>

            <div className='error-message'>{errorMessage}</div>
            <button className='btn-submit'>SALVAR</button>
        </form>
    );
}
