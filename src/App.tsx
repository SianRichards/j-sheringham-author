import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Header from "./components/header";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <div className="App">
<Header />
<Home />
<Footer />
    </div>
  );
}

export default App;
