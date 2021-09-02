import { extendTheme, ThemeConfig, ThemeOverride } from "@chakra-ui/react"
import styles from "./styles"
import { presets } from "./colors"
import Fonts, { fonts } from "./fonts"
import layerStyles from "./foundations/layerStyles"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "./context"
import React, { useEffect, useMemo, useState } from "react"

const choc = {
  bg: "#1A202C",
  primary: "#2D3748",
  secondary: "#4A5567",
}

export const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

const Theme = (props) => {
  const [brand, setBrand] = useState("default")

  const overrides = {
    colors: { brand: presets(brand), choc },
    config,
    layerStyles,
    styles,
    fonts,
  }
  const theme = extendTheme(overrides)

  useEffect(() => {
    setBrand(window.localStorage.getItem("brand") || "default")
  }, [])
  useEffect(() => {
    window.localStorage.setItem("brand", brand)
  }, [brand])

  const themeProps = useMemo(
    () => ({
      brand,
      setBrand,
      presets,
    }),
    [brand]
  )
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider value={themeProps}>
        <Fonts />
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default Theme
