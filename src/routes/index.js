import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Form from 'pages/Calculator/Form'
import Loading from 'pages/Calculator/Loading'
import Deforestation from 'pages/Calculator/Deforestation'
import SiltingOfRivers from 'pages/Calculator/SiltingOfRivers'
import MercuryContamination from 'pages/Calculator/MercuryContamination'
import MonetaryImpacts from 'pages/Calculator/MonetaryImpacts'

import Introduction from 'pages/Introduction'

import Header from 'layout/Header'
import Footer from 'layout/Footer'



const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact render={() => {
                    if(localStorage.getItem("introduction")) {
                        return <Redirect to="/calculator" />
                    }
                    return <Redirect to="/introduction" />
                }} />
                <Route path="/introduction" exact component={Introduction} />
                <Route path="/calculator" exact component={Form} />
                <Route path="/loading" exact component={Loading} />
                <Route path="/impacts/deforestation" exact component={Deforestation} />
                <Route path="/impacts/silting-of-rivers" exact component={SiltingOfRivers} />
                <Route path="/impacts/mercury-contamination" exact component={MercuryContamination} />
                <Route path="/impacts/monetary-impacts" exact component={MonetaryImpacts} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes;
