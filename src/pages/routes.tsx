import * as React from "react";
import {
  Route,
  Routes as RouteWrapper,
  useLocation,
} from "react-router-dom";
import DanielHook from "./daniel";
import FromInsideHook from "./from-inside";
import MyDetectiveDarlingHook from "./my-detective-darling";
import JonahHook from "./jonah";
import ContactHook from "./contact";
import AboutHook from "./about";
import HeaderHook from "../components/header";
import Footer from "../components/footer";
import TaleOfTwoProphetsHook from "./tale-of-two-prophets";
import HomeHook from "./home";
import AngelsDreamsAndPropheciesHook from "./angels-dreams-and-prophecies";

const Routes = () => {
  let pathname = useLocation().pathname;
  return (
    <div>
      <HeaderHook pathname={pathname} />
      <RouteWrapper>
        <Route path="/*" element={<HomeHook />} />
        <Route path="/about/*" element={<AboutHook />} />
        <Route path="/daniel/*" element={<DanielHook />} />
        <Route path="/from-inside/*" element={<FromInsideHook />} />
        <Route
          path="/angels-dreams-and-prophecies/*"
          element={<AngelsDreamsAndPropheciesHook />}
        />
        <Route
          path="/my-detective-darling/*"
          element={<MyDetectiveDarlingHook />}
        />
        <Route path="/jonah/*" element={<JonahHook />} />
        <Route
          path="/tale-of-two-prophets/*"
          element={<TaleOfTwoProphetsHook />}
        />
        <Route path="/contact/*" element={<ContactHook />} />
      </RouteWrapper>
      <Footer />
    </div>
  );
};

export default Routes;
