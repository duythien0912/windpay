import React from "react"
import {
  chakra,
  Box,
  useColorModeValue,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  GridItem,
  VisuallyHidden,
  Input,
  SimpleGrid,
  InputRightAddon,
  InputGroup,
} from "@chakra-ui/react"
import { utils } from "near-api-js"
import Notification from "../components/notification"

const HomePage = () => {
  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = React.useState(false)
  const [isLoading, set_isLoading] = React.useState(false)
  const [amount, set_amount] = React.useState(0.1)
  const [account, set_account] = React.useState("support")

  const onSubmit = async (event) => {
    event.preventDefault()

    // get elements from the form using their id attribute
    const { amount, account } = event.target.elements
    console.log(
      "[event.target.elements] ==> ",
      amount.value,
      account.value,
      utils.format.parseNearAmount("0.1")
    )

    // hold onto new user-entered value from React's SynthenticEvent for use after `await` call
    const newAmount = amount.value

    set_isLoading(true)

    try {
      await window.contract.pay_approve(
        {
          // pass the value that the user entered in the greeting field
          message: newAmount,
          receiver_id: account.value + ".testnet",
        },
        "6000000000000",
        utils.format.parseNearAmount("0.1")
      )
    } catch (e) {
      alert(
        "Something went wrong! " +
          "Maybe you need to sign out and back in? " +
          "Check your browser console for more info."
      )
      throw e
    } finally {
      // re-enable the form, whether the call succeeded or failed
      set_isLoading(false)
    }

    // update local `greeting` variable to match persisted value

    // set_greeting(newGreeting)

    // // show Notification
    setShowNotification(true)

    // // remove Notification again after css animation completes
    // // this allows it to be shown again next time the form is submitted
    setTimeout(() => {
      setShowNotification(false)
    }, 11000)
  }

  return (
    <Box px={8} py={32} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
      >
        <chakra.h1
          mb={8}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          All your{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            customer feedback
          </Text>{" "}
          in one single place.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          Hellonext is a feature voting software where you can allow your users to
          vote on features, publish roadmap, and complete your customer feedback
          loop.
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{ base: "full", md: 7 / 12 }}
          columns={{ base: 1, lg: 7 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
          alignItems="center"
          justifyContent="center"
          onSubmit={onSubmit}
        >
          <GridItem as="label" colSpan={{ base: "auto", lg: 7 }}>
            <VisuallyHidden>Your Account</VisuallyHidden>
            <InputGroup>
              <Input
                mt={0}
                size="lg"
                id="account"
                defaultValue={account}
                placeholder="Enter your account..."
                required="true"
              />
              <InputRightAddon minHeight="48px" children=".testnet" />
            </InputGroup>
          </GridItem>
          <GridItem as="label" colSpan={{ base: "auto", lg: 5 }}>
            <VisuallyHidden>Your amount</VisuallyHidden>
            <InputGroup>
              <Input
                mt={0}
                size="lg"
                type="number"
                id="amount"
                autoComplete="off"
                defaultValue={amount}
                placeholder="Enter your amount..."
                required="true"
              />
              <InputRightAddon minHeight="48px" children="Near" />
            </InputGroup>
          </GridItem>
          <GridItem as="label" colSpan={{ base: "auto", lg: 2 }}>
            <Button
              isLoading={isLoading}
              w="full"
              variant="solid"
              size="lg"
              type="submit"
              colorScheme="brand"
              cursor="pointer"
            >
              Send
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </GridItem>

          {/* <Button
                        as="a"
                        colorScheme="gray"
                        display="inline-flex"
                        alignItems="center"
                        justifyContent="center"
                        w={{ base: "full", sm: "auto" }}
                        mb={{ base: 2, sm: 0 }}
                        size="lg"
                        cursor="pointer"
                    >
                        Book a Demo
                        <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                                clipRule="evenodd"
                            />
                        </Icon>
                    </Button> */}
        </SimpleGrid>
      </Box>
      {showNotification && <Notification />}
    </Box>
  )
}

export default HomePage
