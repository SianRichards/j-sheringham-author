import * as React from 'react';
import Home from "./home";
import { Route } from "react-router-dom";
import Daniel from "./daniel";
import FromInside from "./frominside";
import MyDet from "./mydet";
import Jonah from "./jonah";
import Contact from "./contact";
import About from './about';
import Header from '../components/header';
import Footer from '../components/footer';

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/daniel" component={Daniel} />
                <Route exact path="/from-inside" component={FromInside} />
                <Route exact path="/my-detective-darling" component={MyDet} />
                <Route exact path="/jonah" component={Jonah} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        );
    }
}

export default Routes;