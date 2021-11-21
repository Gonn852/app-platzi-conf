import React, {useContext} from 'react'
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css'
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { Alert } from 'react-bootstrap';

const Payment = () => {
    const history = useHistory();
    const {state, addNewOrder, successOrder} = useContext(AppContext);
    const {cart, buyer} = state;

    const paypalOptions = {
        clientId: 'access_token$sandbox$6h8m647mhk8h9chy$410c7d8c3b8128bdba0f55aa2be772ad',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer,0);
        return sum;
    }

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
          const newOrder = {
            buyer,
            product: cart,
            payment: data
          }
          addNewOrder(newOrder);
          successOrder();
          history.push('/checkout/success')
        }
      }
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 payment-top border-right">
                    <Alert variant="dark">Order summary</Alert>
                        {cart.map((item) => (
                        <div className='Payment-item payment-bottom' key={item.title}>
                            <div className='Payment-element'>
                            <h4>{item.title}</h4>
                            <span>
                                $
                                {' '}
                                {item.price}
                            </span>
                            </div>
                        </div>
                        ))}
                    {cart.length > 0 &&
                        <Alert className="payment-top" variant="warning"><strong>Total price: ${handleSumTotal()}</strong></Alert>
                    }    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 payment-top text-center">
                    <Alert variant="dark">Pay</Alert>
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal()}
                        onSuccess={(data) => handlePaymentSuccess(data)}
                        onError={(error) => console.log(error)}
                        onCancel={(data) => console.log(data)}
                        className="payment-top"
                    />
                </div>
            </div>
            <div/>
        </div>
    )
}

export default Payment;