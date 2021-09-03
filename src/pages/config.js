import React from "react"
import short from "short-uuid"

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
  InputLeftAddon,
  Select,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react"
import { useHistory } from "react-router"

const ConfigPage = () => {
  // App data
  const [isLoading, set_isLoading] = React.useState(false)

  // Quest config data
  const [name, set_name] = React.useState("Follow account and earn Near")
  const [totalPrice, set_totalPrice] = React.useState(1)
  const [unitPrice, set_unitPrice] = React.useState(1)
  const [sloc, set_sloc] = React.useState(10)

  // Quest task data
  const [twitter, set_twitter] = React.useState("@nearprotocol")

  let history = useHistory()

  const onSubmit = async (event) => {
    event.preventDefault()
    const { price } = event.target.elements
    const _price = price.value
    const _invoiceId = short.generate()
    history.push(`/invoice/${_invoiceId}/${_price}`)
  }
  return (
    <>
      <Box as="main" px={8} py={{ base: 8, md: 16 }} mx="auto">
        <Box
          w={{ base: "full", md: 9 / 12 }}
          mx="auto"
          mb={2}
          textAlign={{ base: "left", md: "left" }}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, red.300, brand.300)"
            fontWeight="extrabold"
          >
            Create quest on [Near]:
          </Text>
        </Box>

        <Flex
          flexDirection={{ base: "column", md: "row" }}
          w={{ base: "full", md: 9 / 12 }}
          pb={1}
          mx="auto"
        >
          <Box flex="1">
            <SimpleGrid
              as="form"
              columns={{ base: 1, lg: 6 }}
              spacing={3}
              mx="auto"
              mb={8}
              alignItems="center"
              justifyContent="center"
              onSubmit={onSubmit}
            >
              <GridItem as="label" colSpan={{ base: "auto", lg: 6 }}>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  display={{ base: "block", lg: "inline" }}
                  w="full"
                  bgClip="text"
                  color="white"
                  fontWeight="extrabold"
                >
                  Config:
                </Text>
              </GridItem>
              <GridItem as="label" mb={2} colSpan={{ base: "auto", lg: 6 }}>
                <VisuallyHidden>Name: </VisuallyHidden>
                <InputGroup>
                  <InputLeftAddon minHeight="48px" children="Name:" />
                  <Input
                    mt={0}
                    size="lg"
                    id="price"
                    placeholder="Enter your name..."
                    required={true}
                    defaultValue={name}
                    onChange={(event) => set_name(event.target.value)}
                  />
                </InputGroup>
              </GridItem>{" "}
              <GridItem as="label" mb={2} colSpan={{ base: "auto", lg: 3 }}>
                <VisuallyHidden>Total Price: </VisuallyHidden>
                <InputGroup>
                  <InputLeftAddon minHeight="48px" children="Total Price:" />
                  <Input
                    mt={0}
                    size="lg"
                    id="price"
                    type="number"
                    step=".01"
                    placeholder="Enter your total price..."
                    required={true}
                    defaultValue={totalPrice}
                    onChange={(event) => set_totalPrice(event.target.value)}
                  />
                </InputGroup>
              </GridItem>
              <GridItem as="label" mb={2} colSpan={{ base: "auto", lg: 3 }}>
                <VisuallyHidden>Price per quest: </VisuallyHidden>
                <InputGroup>
                  <InputLeftAddon minHeight="48px" children="Unit price:" />
                  <Input
                    mt={0}
                    size="lg"
                    id="price"
                    type="number"
                    step=".01"
                    placeholder="Price per quest..."
                    required={true}
                    defaultValue={unitPrice}
                    onChange={(event) => set_unitPrice(event.target.value)}
                  />
                </InputGroup>
              </GridItem>
              <GridItem as="label" mb={2} colSpan={{ base: "auto", lg: 6 }}>
                <VisuallyHidden>Slot: </VisuallyHidden>
                <InputGroup>
                  <InputLeftAddon minHeight="48px" children="Slot:" />
                  <Input
                    mt={0}
                    size="lg"
                    id="price"
                    type="number"
                    // step="1"
                    placeholder="Slot..."
                    required={true}
                    defaultValue={sloc}
                    onChange={(event) => set_sloc(event.target.value)}
                  />
                </InputGroup>
              </GridItem>
              <GridItem as="label" colSpan={{ base: "auto", lg: 6 }}>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  display={{ base: "block", lg: "inline" }}
                  w="full"
                  bgClip="text"
                  color="white"
                  fontWeight="extrabold"
                >
                  Task on quest:
                </Text>
              </GridItem>
              <GridItem as="label" mb={2} colSpan={{ base: "auto", lg: 6 }}>
                <VisuallyHidden>Twitter account: </VisuallyHidden>
                <InputGroup>
                  <InputLeftAddon minHeight="48px" children="Twitter account:" />
                  <Input
                    mt={0}
                    size="lg"
                    id="price"
                    placeholder="Twitter account..."
                    required={true}
                    defaultValue={twitter}
                    onChange={(event) => set_twitter(event.target.value)}
                  />
                </InputGroup>
              </GridItem>
              <GridItem as="label" colSpan={{ base: "auto", lg: 6 }}>
                <Button
                  isLoading={isLoading}
                  w="full"
                  variant="solid"
                  size="md"
                  type="submit"
                  colorScheme="brand"
                  cursor="pointer"
                >
                  Create
                  <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </Icon>
                </Button>
              </GridItem>
            </SimpleGrid>
          </Box>
          <Box w="100px" />
          <Box
            borderRadius="md"
            flex="1"
            bg="gray.600"
            textAlign="center"
            pt={4}
            pb={4}
          >
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              display={{ base: "block", lg: "inline" }}
              w="full"
              bgClip="text"
              color="color"
              fontWeight="extrabold"
            >
              Quest: {name}
            </Text>

            <Flex pt={1} flexDirection={{ base: "column" }} mx="auto">
              <Text
                fontSize={{ base: "sm", md: "md" }}
                display={{ base: "block", lg: "inline" }}
                w="full"
                bgClip="text"
                color="white"
                fontWeight="bold"
              >
                Earn: {unitPrice} Near
              </Text>
            </Flex>

            <Flex mt={4} flexDirection={{ base: "column" }} mx="auto">
              <Flex
                bg={useColorModeValue("white", "gray.800")}
                flexDirection={{ base: "row" }}
                mx="auto"
                justifyContent="center"
                alignContent="center"
                w="full"
              >
                <Image
                  height="50px"
                  width="50px"
                  mr={3}
                  src="https://pbs.twimg.com/profile_images/1309164520926056448/EX4mrWMW_400x400.jpg"
                  fallbackSrc="https://via.placeholder.com/50"
                />
                <Center>
                  <Text
                    textAlign="left"
                    noOfLines={2}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    Step 1: Follow account {twitter}
                  </Text>
                </Center>
                <Spacer />
                <Center>
                  <Button size="sm" mr={3} ml={2} colorScheme="brand">
                    Follow
                  </Button>
                </Center>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default ConfigPage
