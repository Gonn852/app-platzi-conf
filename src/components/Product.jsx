import React from 'react';
import '../styles/components/Product.css';
import { Card,Button } from 'react-bootstrap';

const Product = ({product, handleAddToCart}) => {
    return(
        <>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 card-top">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Card>
                    <Card.Img variant="top" src={product.image} height="200px"/>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Title>$ {product.price}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Button variant="dark" className=" button-size col-xs-12 col-sm-12 col-md-12 col-lg-12" type="button" onClick={handleAddToCart(product)}>Buy</Button>
                    </Card.Body>
                </Card>
            </div>  
        </div>
        </>
    )
}

export default Product; 