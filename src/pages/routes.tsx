import * as React from "react";
import {
  Route,
  Routes as RouteWrapper,
  useLocation,
  useNavigate,
} from "react-router-dom";
import DanielHook from "./danielHook";
import FromInsideHook from "./fromInsideHook";
import MyDetectiveDarlingHook from "./myDetectiveDarlingHook";
import JonahHook from "./jonahHook";
import ContactHook from "./contactHook";
import AboutHook from "./aboutHook";
import HeaderHook from "../components/headerHook";
import Footer from "../components/footer";
import ReactGA from "react-ga";
import TaleOfTwoProphetsHook from "./taleOfTwoProphetsHook";
import PageNotFoundHook from "./pageNotFoundHook";
import HomeHook from "./HomeHook";
import AngelsDreamsAndPropheciesHook from "./angelDreamsAndPropheciesHook";

// const checkRoute = () => {
//   let navigate = useNavigate();
//   let location = useLocation();
//   let pathway = location.pathname;
//   let routes = [
//     "/",
//     "/about",
//     "/daniel",
//     "/from-inside",
//     "/my-detective-darling",
//     "/jonah",
//     "/contact",
//     "page-not-found",
//     "/tale-of-two-prophets",
//   ];
//   let filteredRoutes = routes.filter((route) => route === pathway);
//   if (filteredRoutes.length === 0) return navigate("/page-not-found");
// };

const Routes = () => {
  let location = useLocation();
  ReactGA.initialize("UA-170132555-1");
  ReactGA.pageview(location.pathname + location.search);
  return (
    <div>
      <HeaderHook location={location} />
      <RouteWrapper>
        <Route path="/*" element={<HomeHook />} />
        <Route path="/about*" element={<AboutHook />} />
        <Route path="/daniel*" element={<DanielHook />} />
        <Route path="/from-inside*" element={<FromInsideHook />} />
        <Route path="/angels-dreams-and-prophecies" element={<AngelsDreamsAndPropheciesHook />} />
        <Route
          path="/my-detective-darling*"
          element={<MyDetectiveDarlingHook />}
        />
        <Route path="/jonah*" element={<JonahHook />} />
        <Route
          path="/tale-of-two-prophets*"
          element={<TaleOfTwoProphetsHook />}
        />
        <Route path="/contact*" element={<ContactHook />} />
        <Route path="/page-not-found*" element={<PageNotFoundHook />} />
      </RouteWrapper>
      <Footer />
    </div>
  );
};

export default Routes;
