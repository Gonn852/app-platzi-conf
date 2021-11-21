import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Spinner } from 'react-bootstrap';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/components/App.css'



const App = () => {
    const initialState = useInitialState();
    const isEmpty = Object.keys(initialState.products).length;

    return(
        <>
        {isEmpty > 0 ? (
            <AppContext.Provider value={initialState}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/checkout" component={Checkout}></Route>
                            <Route exact path="/checkout/information" component={Information}></Route>
                            <Route exact path="/checkout/payment" component={Payment}></Route>
                            <Route exact path="/checkout/success" component={Success}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </Layout>
                </BrowserRouter>    
            </AppContext.Provider>
        ):
        <div className="center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
        }
        </>

    )
}

export default App;
