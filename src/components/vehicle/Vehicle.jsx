
export default function Vehicle(props) {
    return (
        <div className="vehicle-text-element">
            {props.vehicle.name}<br />
            Preço: {props.vehicle.price}<br />
            Descrição: {props.vehicle.description}<br/>
            Ano: {props.vehicle.year}<br />
            Cor: {props.vehicle.color}<br />    
        </div>
    );
}
