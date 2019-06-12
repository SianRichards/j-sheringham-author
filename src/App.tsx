import React from 'react';
import './App.css';
import Home from "./pages/home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Daniel from "./pages/daniel";
import FromInside from "./pages/frominside";
import MyDet from "./pages/mydet";
import Jonah from "./pages/jonah";
import Contact from "./pages/contact";

const App: React.FC = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/daniel" component={Daniel} />
    <Route exact path="/from-inside" component={FromInside} />
    <Route exact path="/my-detective-darling" component={MyDet} />
    <Route exact path="/jonah" component={Jonah} />
    <Route exact path="/contact" component={Contact} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
