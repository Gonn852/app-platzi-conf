import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout'

import '../styles/components/Layout.css'


const App = () => {
    return(
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
    )
}

export default App;
