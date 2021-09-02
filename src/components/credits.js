import React from "react"

import { Text, Icon, Link, VStack, HStack } from "@chakra-ui/react"

import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa"
export default function Credits() {
  return (
    <VStack>
      <Text
        maxW="560px"
        mx="auto"
        textAlign="center"
        opacity={0.7}
        fontSize="sm"
        mt="8"
        mb={3}
      >
        Proudly developed in{" "}
        <Icon viewBox="0 0 511.9 511.9" boxSize={4}>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M473.7,88.25H38.3c-21.1,0-38.3,17.1-38.3,38.3v258.8c0,21.2,17.2,38.3,38.3,38.3h435.3  c21.2,0,38.3-17.2,38.3-38.3v-258.8C512,105.35,494.8,88.25,473.7,88.25z"
            fill="#D80027"
          />
          <path
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFDA44"
            d="M260.1,155.95l23.6,70.8l74.6,0.6c4.2,0,5.9,5.4,2.5,7.8l-60,44.3l22.5,71.1c1.3,4-3.3,7.3-6.7,4.8  l-60.6-43.3l-60.7,43.4c-3.4,2.4-7.9-0.9-6.7-4.8l22.5-71.1l-60-44.3c-3.4-2.5-1.6-7.8,2.5-7.8l74.6-0.6l23.6-70.8  C253.2,151.95,258.8,151.95,260.1,155.95z"
          />
        </Icon>{" "}
        by{" "}
        <Link
          isExternal
          rel="noreferrer"
          href={process.env.githubUrl}
          aria-label="Duy Thien"
        >
          Duy Thien
        </Link>
      </Text>
      <HStack spacing={4}>
        <Link
          isExternal
          rel="noreferrer"
          href={process.env.githubUrl}
          aria-label="Github Repo"
        >
          <Icon as={FaGithub} boxSize={4} />
        </Link>
        <Link
          isExternal
          rel="noreferrer"
          href={process.env.twitterUrl}
          aria-label="Twitter Profile"
        >
          <Icon as={FaTwitter} boxSize={4} />
        </Link>
        <Link
          isExternal
          rel="noreferrer"
          href={process.env.linkedinUrl}
          aria-label="Linkedin Profile"
        >
          <Icon as={FaLinkedin} boxSize={4} />
        </Link>
        <Link
          isExternal
          rel="noreferrer"
          href={`mailto:${process.env.emailAddress}`}
          aria-label="Email Address"
        >
          <Icon as={FaEnvelope} boxSize={4} />
        </Link>
      </HStack>
    </VStack>
  )
}
