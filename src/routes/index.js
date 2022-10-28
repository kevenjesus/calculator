import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Form from 'pages/Calculator/Form'
import Loading from 'pages/Calculator/Loading'
import Deforestation from 'pages/Calculator/Deforestation'
import SiltingOfRivers from 'pages/Calculator/SiltingOfRivers'
import MercuryContamination from 'pages/Calculator/MercuryContamination'
import MonetaryImpacts from 'pages/Calculator/MonetaryImpacts'

import Introduction from 'pages/Introduction'
import ContextValue from 'pages/Introduction/ContextValue'

import Header from 'layout/Header'
import Footer from 'layout/Footer'
import Home from 'pages/Home';
import DeforestationReferences from 'pages/Calculator/Deforestation/references';
import SiltingRiversReferences from 'pages/Calculator/SiltingOfRivers/references';
import MercuryReferences from 'pages/Calculator/MercuryContamination/references';
import Team from 'pages/Team';
import MoralDamages from 'pages/MoralDamages';
import CountrySelect from 'components/CountrySelect'
import { useContext, useEffect } from 'react';
import { AppContext, stateTypes } from 'utils/AppContext';
import useExchange from 'hooks/useExchange';


const Routes = () => {
    const {state, dispatch} = useContext(AppContext)
    const { country_region } = state
    const { USDtoBRL } = useExchange()


    useEffect(() => {
        if(USDtoBRL) {
            const dolarReal = Number(USDtoBRL.high)
            dispatch({type: stateTypes.SET_PRICEUSDTOBRL, payload: dolarReal})
        }
        // eslint-disable-next-line
    }, [USDtoBRL])

    const isHome = window.location.hash === '#/'
    return (
        <Router>
            {!isHome  && <Header />}
            {
                country_region === null ? (
                    <CountrySelect />
                ) : <></>
            }
            
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/team" exact component={Team} />
                <Route path="/moral-damages" exact component={MoralDamages} />
                <Route path="/introduction" exact component={Introduction} />
                <Route path="/introduction/context-value" exact component={ContextValue} />
                <Route path="/calculator" exact component={Form} />
                <Route path="/loading" exact component={Loading} />
                <Route path="/impacts/deforestation" exact component={Deforestation} />
                <Route path="/impacts/deforestation/references" exact component={DeforestationReferences} />
                <Route path="/impacts/silting-of-rivers" exact component={SiltingOfRivers} />
                <Route path="/impacts/silting-of-rivers/references" exact component={SiltingRiversReferences} />
                <Route path="/impacts/mercury-contamination" exact component={MercuryContamination} />
                <Route path="/impacts/mercury-contamination/references" exact component={MercuryReferences} />
                <Route path="/impacts/monetary-impacts" exact component={MonetaryImpacts} />
            </Switch>
             <Footer />
        </Router>
    )
}

export default Routes;
