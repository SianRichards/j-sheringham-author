import React from 'react';
import './App.css';
import Home from "./components/home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Daniel from "./components/daniel";
import FromInside from "./components/frominside";
import MyDet from "./components/mydet";
import Jonah from "./components/jonah";

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
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
