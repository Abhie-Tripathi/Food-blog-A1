import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const customVariant = defineStyle({
  color: "#444957",
  textAlign: "center",
  fontFamily: "Open Sans",
  fontSize: "11px",
  fontWeight: 400,
  lineHeight: "18px",
})

const textConfig = defineStyleConfig({
  variants: {
    customVariant,
  },
  defaultProps: {
    variant: "customVariant"
  }
})

export default textConfig;