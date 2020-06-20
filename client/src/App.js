import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import "./App.css"

import store from "./stores/index"

import Home from "./pages/Home"
import Quran from "./pages/Quran"
import Surah from "./pages/Surah"
import Asma from "./pages/99"
import Search from "./pages/Search"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/surah/:quran">
            <Quran />
          </Route>
          <Route path="/surah">
            <Surah />
          </Route>
          <Route path="/asmaul-husna">
            <Asma />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
