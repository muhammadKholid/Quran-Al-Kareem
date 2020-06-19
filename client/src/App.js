import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import "./App.css"

import store from "./stores/index"

import Home from "./pages/Home"
import Quran from "./pages/Quran"
import Surah from "./pages/Surah"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quran/:surah">
            <Surah />
          </Route>
          <Route path="/quran">
            <Quran />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
