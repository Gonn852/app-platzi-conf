import React from 'react'
import initialState from '../initialState';
import Products from '../components/Products';
import { Helmet } from 'react-helmet';

const Home = () => {
    return(
        <>
            <Helmet>
               <meta property="og:image" content="https://vabadus.es/images/cache/imagen_nodo/images/articulos/5c9deedea0c7e844300455.png" />
            </Helmet>
            <Products products={initialState.products}></Products>  
        </>
    )
}

export default Home;