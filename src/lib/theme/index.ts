import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import buttonConfig from './button'
import textConfig from './text';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  components: {
    Button: buttonConfig,
    Text: textConfig,
  },
  breakpoints: {
    bsm: "40em"
  }
})

export default theme;