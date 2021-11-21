import { useState, useEffect } from "react";
import initialState from '../initialState';
import axios from "axios";

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const [products, setProducts] = useState([]);
    const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api'; //API ya generada

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data)
    }, [])
    
    const addToCart = payload => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }
    const removeFromCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        });
    }
    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        });
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    const successOrder = payload => {
        setState({
            ...state,
            cart: []
        })
    }

    return {
        addToCart,
        removeFromCart,
        addNewOrder,
        addToBuyer,
        successOrder,
        products,
        state
    }

}

export default useInitialState;