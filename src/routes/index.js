import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from 'pages/Calculator/Form'
import Header from 'Layout/Header'

const Routes = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Form} />
            </Switch>
        </Router>
    )
}

export default Routes;
