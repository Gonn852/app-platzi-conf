import React, {useContext} from 'react'
import Product from './Product';
import AppContext from '../context/AppContext';

const Products = () => {
    const {products, addToCart} = useContext(AppContext);

    const handleAddToCart = product => () => {
        addToCart(product)
    }

    return(
        <div className="container">
            <div className="row">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
                ))}
            </div>
        </div>
    )
}

export default Products;