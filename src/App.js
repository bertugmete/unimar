import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
import Header from "./layout/header/Header";
import JeepSafari from "./pages/JeepSafari";
import BoatTour from "./pages/BoatTour";
import Whatsapp from "./components/whatsapp/Whatsapp";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <Router>
        <ScrollToTop>
          <Header />
          <Whatsapp />
          <Switch>
            <Route exact path="/" render={HomePage} />
            <Route path="/boat-tour" render={BoatTour} />
            <Route path="/jeep-safari" render={JeepSafari} />
            <Redirect to="/" />
          </Switch>
        </ScrollToTop>
        </Router>
      </div>
    </>
  );
};

export default App;
