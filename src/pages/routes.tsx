import * as React from "react";
import {
  Route,
  Routes as RouteWrapper,
  useLocation,
} from "react-router-dom";
import DanielHook from "./danielHook";
import FromInsideHook from "./fromInsideHook";
import MyDetectiveDarlingHook from "./myDetectiveDarlingHook";
import JonahHook from "./jonahHook";
import ContactHook from "./contactHook";
import AboutHook from "./aboutHook";
import HeaderHook from "../components/headerHook";
import Footer from "../components/footer";
import TaleOfTwoProphetsHook from "./taleOfTwoProphetsHook";
import HomeHook from "./HomeHook";
import AngelsDreamsAndPropheciesHook from "./angelDreamsAndPropheciesHook";

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
