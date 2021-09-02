import React from "react";

// @packages
import { BrowserRouter, Switch, Route } from "react-router-dom";

// @components
import GlobalData from "./Components/GlobalDataBar/GlobalData";
import Minibar from "./Components/Minibar/Minibar";
import Navbar from "./Components/Navbar/Navbar";
import NotificationBar from "./Components/NotificationBar/NotificationBar";
import Footer from "./Components/Footer/Footer";

// @pages
import Home from "./Pages/Index/Home";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import CoinFocused from "./Pages/CoinFocused/CoinFocused";

// @helpers

export default function App() {
  return (
    <div className="app">
      <GlobalData />
      <NotificationBar />
      
      <BrowserRouter>
        <Navbar />
        <Minibar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/coin_focused" component={CoinFocused} />
        </Switch>
      </BrowserRouter>

      <Disclaimer/>
      <Footer/>
    </div>
  );
}
