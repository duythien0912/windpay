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
} from "@chakra-ui/react"
import { useHistory } from "react-router"

const CreatePage = () => {
  const [isLoading, set_isLoading] = React.useState(false)
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
      <Box as="main" px={8} py={36} mx="auto">
        <Box
          w={{ base: "full", md: 5 / 12 }}
          mx="auto"
          mb={2}
          textAlign={{ base: "left", md: "left" }}
        >
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.500, brand.300)"
            fontWeight="extrabold"
          >
            Create new Invoice:
          </Text>
        </Box>

        <SimpleGrid
          as="form"
          w={{ base: "full", md: 5 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
          alignItems="center"
          justifyContent="center"
          onSubmit={onSubmit}
        >
          <GridItem as="label" mb={2} colSpan={{ base: "auto", lg: 6 }}>
            <VisuallyHidden>Price: </VisuallyHidden>
            <InputGroup>
              <InputLeftAddon minHeight="48px" children="Price:" />
              <Input
                mt={0}
                size="lg"
                id="price"
                type="number"
                step=".01"
                placeholder="Enter your price..."
                required={true}
              />
              <InputRightAddon minHeight="48px">
                <Select isDisabled={true} variant="unstyled">
                  <option selected={true} value="Near">
                    USD
                  </option>
                </Select>
              </InputRightAddon>
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
    </>
  )
}

export default CreatePage
