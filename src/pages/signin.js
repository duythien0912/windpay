import React from "react"

import { Box } from "@chakra-ui/layout"
import { Button } from "@chakra-ui/button"
import { chakra, useColorModeValue } from "@chakra-ui/react"

import Notification from "../components/notification"
import { login } from "../utils"

export default function SignIn() {
  const [showNotification, setShowNotification] = React.useState(false)

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
          fontSize={{ base: "lg", md: "xl" }}
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
          By default, when your app runs in "development" mode, it connects to a test
          network ("testnet") wallet. This works just like the main network
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
          <Button
            colorScheme="brand"
            onClick={() => {
              try {
                login()
              } catch (e) {
                setShowNotification(true)
                setTimeout(() => {
                  setShowNotification(false)
                }, 11000)
              }
            }}
          >
            Sign in
          </Button>
        </chakra.p>
      </Box>
      {showNotification && <Notification />}
    </main>
  )
}
