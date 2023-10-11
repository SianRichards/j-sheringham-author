import * as React from "react";
import { Route, Routes as RouteWrapper, useLocation } from "react-router-dom";
import Daniel from "./daniel";
import FromInside from "./from-inside";
import MyDetectiveDarling from "./my-detective-darling";
import Jonah from "./jonah";
import Contact from "./contact";
import About from "./about";
import Header from "../components/header";
import Footer from "../components/footer";
import TaleOfTwoProphets from "./tale-of-two-prophets";
import Home from "./home";
import AngelsDreamsAndProphecies from "./angels-dreams-and-prophecies";
import PageNotFound from "./page-not-found";

const Routes = () => {
  let pathname = useLocation().pathname;
  return (
    <div>
      <Header pathname={pathname} />
      <RouteWrapper>
        <Route path="" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/daniel/*" element={<Daniel />} />
        <Route path="/from-inside/*" element={<FromInside />} />
        <Route
          path="/angels-dreams-and-prophecies/*"
          element={<AngelsDreamsAndProphecies />}
        />
        <Route
          path="/my-detective-darling/*"
          element={<MyDetectiveDarling />}
        />
        <Route path="/jonah/*" element={<Jonah />} />
        <Route path="/tale-of-two-prophets/*" element={<TaleOfTwoProphets />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </RouteWrapper>
      <Footer />
    </div>
  );
};

export default Routes;
