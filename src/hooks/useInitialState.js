import { useState } from "react";
import initialState from '../initialState'

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    
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
        useState({
            ...state,
            buyer: [...state, payload]
        });
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        state
    }

}

export default useInitialState;