import React, {useContext} from 'react';
import Map from '../components/Map';
import useAddress from '../hooks/useAddress';
import AppContext from '../context/AppContext';
import '../styles/components/Success.css'
import { Spinner } from 'react-bootstrap';

const Success = () => {
    const {state} = useContext(AppContext);
    const {buyer} = state;
    const address = buyer[0].address + " " + buyer[0].city + " " + buyer[0].state + " " + buyer[0].country;
    const location = useAddress(address);
    console.log(location)

    return(
        <div className="container success-top">
            <div className="Success-content">
                <h2>{buyer.name} Thanks for your purchase</h2>
                <span>Your order will arrive soon at your address</span>
                <div className="Success-map">
                    {(location !== {}) ? 
                        <Map point={location}/> : 
                        <div className="center">
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Success;