// @flow
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ScrollToTop from "react-router-scroll-top"
//import ReactGA from "react-ga"
import { ToonFamilies } from "./containers/ToonFamilies"
import { Header } from "./components/Header/Header"
import { ErrorPage404 } from "./containers/ErrorPage404"
import { Footer } from "./components/Footer/Footer"
import { ToonFamily } from "./containers/ToonFamily"
import { Web3Provider } from "./stores/Web3Provider"
import { Toon } from "./containers/Toon"
import AccountStatus from "./components/AccountWidget/AccountStatus"
import { TransactionsProvider } from "./stores/TransactionsProvider"

// Initialize Google Analytics
// ReactGA.initialize('UA-117937544-1')

const logPageView = () => {
  // ReactGA.set({ page: window.location.pathname });
  // ReactGA.pageview(window.location.pathname);
  return null
}

class App extends Component<{}> {
  render() {
    return (
      <Web3Provider>
        <TransactionsProvider>
          <Router>
            <ScrollToTop>
              <div className="AppContent">
                <Header />
                <AccountStatus />

                <Route path="/" component={logPageView} />

                <Switch>
                  <Route exact path="/" component={ToonFamilies} />
                  <Route exact path="/toons/:name" component={ToonFamily} />
                  <Route
                    exact
                    path="/toons/:familyName/:toonId"
                    component={Toon}
                  />
                  <Route path="/404" component={ErrorPage404} />
                  <Route component={ErrorPage404} />
                </Switch>

                <Footer />
              </div>
            </ScrollToTop>
          </Router>
        </TransactionsProvider>
      </Web3Provider>
    )
  }
}

export default App
