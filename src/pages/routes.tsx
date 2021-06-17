import * as React from 'react';
import Home from "./home";
import { Route, RouteComponentProps, withRouter, Redirect } from "react-router-dom";
import Daniel from "./daniel";
import FromInside from "./frominside";
import MyDet from "./mydet";
import Jonah from "./jonah";
import Contact from "./contact";
import About from './about';
import Header from '../components/header';
import Footer from '../components/footer';
import PageNotFound from './pageNotFound';
import ReactGA from 'react-ga';
import TaleOfTwoProphets from '../pages/taleOfTwoProphets';

const checkRoute = (history: RouteComponentProps) => {
    let pathway = history.location.pathname;
    let routes = ["/", "/about", "/daniel", "/from-inside", "/my-detective-darling", "/jonah", "/contact", "page-not-found", "/tale-of-two-prophets"];
    let filteredRoutes = routes.filter(route => route === pathway);
    if (filteredRoutes.length === 0)
        return <Redirect to="/page-not-found" />
}

const Routes = (history: RouteComponentProps): JSX.Element => {
    ReactGA.initialize('UA-170132555-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div>
            <Header history={history} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/daniel" component={Daniel} />
            <Route exact path="/from-inside" component={FromInside} />
            <Route exact path="/my-detective-darling" component={MyDet} />
            <Route exact path="/jonah" component={Jonah} />
            <Route exact path="/tale-of-two-prophets" component={TaleOfTwoProphets} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/page-not-found" component={PageNotFound} />
            {checkRoute(history)}
            <Footer />
        </div>
    )
}

export default withRouter(Routes);