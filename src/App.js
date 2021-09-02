import "regenerator-runtime/runtime"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import "./global.css"

import HomePage from "./pages/home"
import SignIn from "./pages/signin"
import CreatePage from "./pages/create"
import InvoicePage from "./pages/invoices"

export default function App() {
  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return <SignIn />
  }

  return (
    <Router>
      <Switch>
        <Route path="/invoice/:id/:price">
          <InvoicePage />
        </Route>
        <Route path="/create">
          <CreatePage />
        </Route>
        <Route exact path="/">
        <CreatePage />
          {/* <HomePage /> */}
        </Route>
      </Switch>
    </Router>
  )
}
