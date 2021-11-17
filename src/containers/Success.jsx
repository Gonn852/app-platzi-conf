import React, {useContext} from 'react';
import Map from '../components/Map';
import useAddress from '../hooks/useAddress';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css'

const Success = () => {
    const {state} = useContext(AppContext);
    const {buyer} = state;
    const location = useAddress(buyer[0].address);

    return(
        <div className="Success">
            <div className="Success-content">
                <h2>{buyer.name} Gracias por tu compra</h2>
                <span>Tu pedido llegará pronto a tu dirección</span>
                <div className="Success-map">
                    <Map point={location}/>
                </div>
            </div>
        </div>
    )
}

export default Success;