import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const friesVariant = defineStyle({
  borderRadius: "full",
  border: "1px",
  borderColor: "white",
  fontSize: "11px",
  backgroundColor: "#E23744",
  color: "white",
  fontFamily: "Source Sans Pro, sans-serif",
  fontWeight: 600,
  letterSpacing: 0.33,
  lineHeight: "46px",
})

const buttonConfig = defineStyleConfig({
  variants: {
    friesVariant,
  },
  defaultProps: {
    variant: "friesVariant"
  }
})

export default buttonConfig;