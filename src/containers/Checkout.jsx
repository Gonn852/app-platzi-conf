import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';
import AppContext from '../context/AppContext';
import { Alert,Button } from 'react-bootstrap';

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
        <div className="container">
            <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 checkout-top border-right">
                <Alert variant="dark">Order list</Alert>
                {cart.length === 0 && <h3>No orders...</h3>}
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
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 checkout-top">
                    <Alert variant="dark"><strong>Total price: ${handleSumTotal()}</strong></Alert>
                    <Link to="checkout/information"><Button variant="dark" type="button">Continue order</Button></Link>
                </div>
            )}
            </div>
        </div>
    )
}

export default Checkout;