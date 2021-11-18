import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { Badge,Button } from 'react-bootstrap';

const Checkout = () => {
    const {state, removeFromCart} = useContext(AppContext);
    const {cart} = state;

    const handleRemove = product => () => {
        removeFromCart(product)
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer,0);
        return sum;
    }

    return(
        <div className="container checkout-top">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <h2><Badge bg="secondary">Lista de pedidos</Badge></h2>
                {cart.length === 0 && <h3>Sin pedidos...</h3>}
                {cart.map(item => (
                    <div className="Checkout-item">
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>                        
                        </div>
                    <button type="button" onClick={handleRemove(item)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <h2><Badge bg="secondary">Precio total: ${handleSumTotal()}</Badge></h2>
                    <Link to="checkout/information"><Button variant="primary" type="button">Continuar pedido</Button></Link>
                </div>
            )}
            </div>
        </div>
    )
}

export default Checkout;