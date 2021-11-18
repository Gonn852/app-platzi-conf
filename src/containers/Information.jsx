import React,{useRef, useContext, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import '../styles/components/Information.css'
import AppContext from '../context/AppContext';
import { Badge, Button, Form, FloatingLabel } from 'react-bootstrap';

const Information = () => {
    const history = useHistory();
    const {state, addToBuyer} = useContext(AppContext);
    const {cart} = state;
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'apto': formData.get('apto'),
            'city': formData.get('city'),
            'country': formData.get('country'),
            'state': formData.get('state'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
            }
        addToBuyer(buyer);
        history.push('/checkout/payment') 
        }

    return(
        <div className="container information-top">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">                
                    <h2><Badge bg="secondary">Informacion de contacto</Badge></h2>
                        <Form ref={form} onSubmit={handleSubmit}>
                            <FloatingLabel controlId="floatingInput" label="Name">
                                <Form.Control type="text" placeholder="Name" name="name" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Email address">
                                <Form.Control type="email" placeholder="Email" name="email" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Address">
                                <Form.Control type="text" placeholder="Address" name="address" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Apto">
                                <Form.Control type="text" placeholder="Apto" name="apto"/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="City">
                                <Form.Control type="text" placeholder="City" name="city" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Country">
                                <Form.Control type="text" placeholder="Country" name="country" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="State">
                                <Form.Control type="text" placeholder="State" name="state" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="CP">
                                <Form.Control type="text" placeholder="CP" name="cp" required/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Phone">
                                <Form.Control type="text" placeholder="Phone" name="phone" required/>
                            </FloatingLabel>
                            <div className="Information-buttons">
                                <div className="Information-back">
                                    <Button variant="primary" type="button"><Link to="/checkout">Regresar</Link></Button>
                                </div>
                                <div className="Information-next">
                                    <Button variant="primary" type="submit" >Pagar</Button>
                                </div>
                            </div>
                        </Form>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <h2><Badge bg="secondary">Pedido:</Badge></h2>
                    {cart.map((item) => (
                    <div className="Information-item" key={item.title}>
                        <div className="Information-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Information;