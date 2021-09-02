import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"
import { initContract } from "./utils"
import { ColorModeScript } from "@chakra-ui/react"
import { config } from "./theme"
import Theme from "./theme"
import Header from "./components/header"
import Credits from "./components/credits"

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <Theme>
        <Router>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          <Header />
          <App />
          <Credits />
        </Router>
      </Theme>,
      document.querySelector("#root")
    )
  })
  .catch(console.error)
