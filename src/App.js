import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import HomePage from './pages/HomePage'
import Header from './layout/header/Header'
import JeepSafari from './pages/JeepSafari'
import DalyanTour from './pages/DalyanTour'
import BoatTour from './pages/BoatTour'
import DailyTours from './pages/DailyTours'
import MarmarisAllInclusiveBoatTour from './pages/MarmarisAllInclusiveBoatTour'
import Whatsapp from './components/whatsapp/Whatsapp'
import ScrollToTop from './components/scroll-to-top/ScrollToTop'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './layout/footer/Footer'
import Contact from './pages/Contact'
import { useTranslation } from 'react-i18next'
import Diving from './pages/Diving'
import HorseSafari from './pages/HorseSafari'

const App = () => {
  const { i18n } = useTranslation()
  document.documentElement.lang = i18n.language
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
      <div style={{ marginTop: '70px' }}>
        <Router>
          <ScrollToTop>
            <Header />
            <Whatsapp />
            <Switch>
              <Route exact path="/" render={() => <HomePage />} />
              <Route path="/boat-tour" render={BoatTour} />
              <Route path="/contact" render={Contact} />
              <Route path="/jeep-safari" render={() => <JeepSafari />} />
              <Route path="/daily-tours" render={DailyTours} />
              <Route path="/dalyan-tour" render={() => <DalyanTour />} />
              <Route path="/diving" render={() => <Diving />} />
              <Route path="/horse-safari" render={() => <HorseSafari />} />
              <Route
                path="/marmaris-all-inclusive-boat-tour"
                render={() => <MarmarisAllInclusiveBoatTour />}
              />
              <Redirect to="/" />
            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    </>
  )
}

export default App
