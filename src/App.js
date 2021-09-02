import "regenerator-runtime/runtime"
import React from "react"
import { utils } from "near-api-js"

import { login, logout } from "./utils"
import "./global.css"

import getConfig from "./config"
import HomePage from "./pages/home"
import { Box } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { chakra, useColorModeValue } from "@chakra-ui/react"

const { networkId } = getConfig(process.env.NODE_ENV || "development")

export default function App() {
  // use React Hooks to store greeting in component state
  const [greeting, set_greeting] = React.useState()
  const [account, set_account] = React.useState("support1.testnet")

  // when the user has not yet interacted with the form, disable the button
  const [buttonDisabled, setButtonDisabled] = React.useState(true)

  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = React.useState(false)

  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  React.useEffect(
    () => {
      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {
        // window.contract is set by initContract in index.js
        window.contract
          .get_greeting({ account_id: window.accountId })
          .then((greetingFromContract) => {
            set_greeting(greetingFromContract)
          })
      }
    },

    // The second argument to useEffect tells React when to re-run the effect
    // Use an empty array to specify "only run on first render"
    // This works because signing into NEAR Wallet reloads the page
    []
  )

  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <main>
        <Box textAlign="center" px={8} py={24} mx="auto">
          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
          >
            Welcome to NEAR!
          </chakra.h1>

          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: "sm", md: "md" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            To make use of the NEAR blockchain, you need to sign in. The button below
            will sign you in using NEAR Wallet.
          </chakra.p>
          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: "sm", md: "md" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            By default, when your app runs in "development" mode, it connects to a
            test network ("testnet") wallet. This works just like the main network
            ("mainnet") wallet, but the NEAR Tokens on testnet aren't convertible to
            other currencies – they're just for testing!
          </chakra.p>
          <chakra.p
            px={{ base: 0, lg: 24 }}
            mb={6}
            fontSize={{ base: "sm", md: "md" }}
            color={useColorModeValue("gray.600", "gray.300")}
          >
            Go ahead and click the button below to try it out:
          </chakra.p>
          <chakra.p style={{ textAlign: "center", marginTop: "2.5em" }}>
            <Button colorScheme="brand" onClick={login}>
              Sign in
            </Button>
          </chakra.p>
        </Box>
      </main>
    )
  }

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <main>
      {/* <button className="link" style={{ float: 'right' }} onClick={logout}>
        Sign out
      </button> */}
      <HomePage />
    </main>
  )
}
