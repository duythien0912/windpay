import {
  chakra,
  Box,
  useColorModeValue,
  Text,
  Flex,
  Avatar,
  Spacer,
  Button,
} from "@chakra-ui/react"
import React from "react"
import { useParams } from "react-router"

import solana from "../assets/coin/solana.png"
import near from "../assets/coin/near.jpeg"
import { utils } from "near-api-js"

const InvoicePage = () => {
  let { id, price } = useParams()
  const [priceNear, set_priceNear] = React.useState("")
  const [nearRate, set_nearRate] = React.useState("")

  React.useEffect(() => {
    getNearPrice()
    const interval = setInterval(() => {
      getNearPrice()
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getNearPrice = () => {
    try {
      fetch("https://helper.mainnet.near.org/fiat")
        .then((res) => res.json())
        .then((result) => {
          console.log("useEffect: fiat:", result)
          if (result?.near?.usd) {
            set_priceNear(`${Number(price / result?.near?.usd).toFixed(2)}`)
            set_nearRate(result?.near?.usd)
          }
        })
    } catch (e) {
      console.log("Get fiat error: ", e)
    }
  }

  const clickNearPay = async () => {
    console.log("clickNearPay", id, price)
    await window.contract.pay_approve(
      {
        invoice_id: id,
        receiver_id: "support.testnet",
      },
      "6000000000000",
      utils.format.parseNearAmount(`${price / nearRate}`)
    )
  }

  const clickSolanaPay = () => {
    console.log("clickSolanaPay", id, price)
  }

  return (
    <>
      <Box as="main" px={8} py={24} mx="auto">
        <Box
          w={{ base: "full", md: 7 / 12 }}
          mx="auto"
          mb={10}
          textAlign={{ base: "center", md: "center" }}
        >
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, brand.400,purple.500)"
            fontWeight="extrabold"
          >
            {price} USD
          </Text>
          {/* <chakra.p
            fontSize={{ base: "xl", md: "2xl" }}
            color={useColorModeValue("gray.600", "gray.300")}
            fontWeight="bold"
            mb={2}
          >
            {priceNear} Near
          </chakra.p> */}
          <chakra.p color={useColorModeValue("gray.600", "gray.300")}>
            Invoice id: {id}
          </chakra.p>
        </Box>
        <Box
          w={{ base: "full", md: 4 / 12 }}
          mx="auto"
          bg="gray.600"
          mb={2}
          px={4}
          pt={4}
          pb={1}
          borderRadius="md"
          textAlign={{ base: "left", md: "left" }}
        >
          <chakra.p mb={2}>Paywith:</chakra.p>
          <Flex
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            shadow="md"
            rounded="lg"
            overflow="hidden"
            cursor="pointer"
            mb={4}
            onClick={() => clickNearPay()}
          >
            <Flex w={2} bg={useColorModeValue("gray.800", "gray.900")}></Flex>

            <Flex w="full" alignItems="center" px={2} py={3}>
              <Avatar boxSize={10} name="Near" src={near} />
              <chakra.p fontSize="xl" ml={3}>
                Near
              </chakra.p>
              <Spacer />
              <chakra.p mr={2} color={useColorModeValue("gray.600", "gray.200")}>
                ≈ {priceNear} Near
              </chakra.p>
            </Flex>
          </Flex>

          <Flex
            w="full"
            bg={useColorModeValue("white", "gray.800")}
            shadow="md"
            rounded="lg"
            overflow="hidden"
            cursor="pointer"
            mb={4}
            onClick={() => clickSolanaPay()}
          >
            <Flex w={2} bg={useColorModeValue("gray.800", "gray.900")}></Flex>

            <Flex w="full" alignItems="center" px={2} py={3}>
              <Avatar boxSize={10} name="Solana" src={solana} />
              <chakra.p fontSize="xl" ml={3}>
                Solana
              </chakra.p>
              <Spacer />
              <chakra.p mr={2} color={useColorModeValue("gray.600", "gray.200")}>
                1 - 2 Min
              </chakra.p>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default InvoicePage
