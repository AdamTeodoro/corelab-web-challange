import React from "react";

import "./Home.css";

import SearchButtonIcon from "../../icons/SearchButtonIcon";

import OptionButton from "../../components/option-button/OptionButton";
import BackButton from '../../components/back-button/BackButton';
import MyVehicles from "../../components/my-vehicles/MyVehicles";
import FormFind from "../../components/form-find/FormFind";
import FindedVehicles from "../../components/finded-vehicles/FindedVehicles";

import { vehicleService } from '../../services/VehicleService';

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            myVehicles: [],
            vehiclesFindeds: [],
            openFormFind: false,
            isFinding: false,
            searchQuery: ''
        };
    }
        
    ShowFormFind() {
        if (this.state.openFormFind) {
            return (
                <div className="modal">
                    <BackButton close={() => this.closeFormFind()}></BackButton>
                    <FormFind close={() => this.closeFormFind()} setFindeds={(v) => this.setVehiclesFindeds(v)}></FormFind>
                </div>
            )
        }
    }

    ShowVehicles() {
        if (this.state.isFinding) {
            return (
                <FindedVehicles findeds={this.state.vehiclesFindeds}></FindedVehicles>
            )
        } else {
            return (
                <MyVehicles></MyVehicles>
            )
        }
    }

    openFormFind() {
        this.setState({ openFormFind: true })
    }

    closeFormFind() {
        this.setState({ openFormFind: false })
    }

    closeFind() {
        this.setState({ isFinding: false });
    }

    setVehiclesFindeds(vehiclesFindeds) {
        this.setState({ vehiclesFindeds: vehiclesFindeds, isFinding: true });
    }

    async handleSubmit(event) {
        event.preventDefault();
        if (this.state.searchQuery.length > 0) {
            await vehicleService.searchVehicle({
                query: this.state.searchQuery.replace(',', '')
            })
                .then((apiResponse) => {
                    this.setState({
                        vehiclesFindeds: apiResponse.data.vehiclesFindeds,
                        isFinding: false
                    });
                })
                .finally(() => {
                    this.setState({ isFinding: true })
                });
        }
    }

    updateChildrenState(childrenState, findeds) {
        childrenState({...findeds})
    }

    render() {
        return (
            <>
                {   
                    this.state.isFinding?
                        <BackButton className="back-home" close={() => this.closeFind()}></BackButton>: ''
                }
                
                <div className="home" style={{ marginTop: this.state.isFinding? '-15%': '-5%'  }}>
                    <div className="find">
                        <form onSubmit={(e) => this.handleSubmit(e)} className="input-find">
                            <button className='icon'>
                                <SearchButtonIcon></SearchButtonIcon>
                            </button>
                            <input 
                                maxLength={500}
                                value={this.state.searchQuery}
                                placeholder="Buscar"
                                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                            />
                        </form>
                        <div className="find-options">
                            <OptionButton openFormFind={(e) => this.openFormFind()}></OptionButton>
                        </div>
                    </div>
                    
                    {/* DATA LIST */}

                    {
                        this.state.isFinding ? (
                            <FindedVehicles 
                                findeds={this.state.vehiclesFindeds}
                                setState={(s) => this.updateChildrenState(s, this.state.vehiclesFindeds)}
                            >
                            </FindedVehicles>    
                        ): 
                        (
                            <MyVehicles></MyVehicles>
                        )
                    }

                    {/* MODAL */}
                    {this.ShowFormFind()}

                </div>
            </>
        )
    }

}
