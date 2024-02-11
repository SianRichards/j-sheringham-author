import React from "react";
import "./App.css";
import Routes from "./pages/routes";
import { TrolleyProvider } from "./context/trolleyContent";

const App: React.FC = () => {
  return (
    <div className="App">
      <TrolleyProvider>
        <Routes />
      </TrolleyProvider>
    </div>
  );
};

export default App;
