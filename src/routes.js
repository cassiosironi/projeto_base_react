import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./views/Home";
import Header from "./Header";
import Footer from "./Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
export default Route;
