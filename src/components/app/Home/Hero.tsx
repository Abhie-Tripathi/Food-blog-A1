import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Hide,
  Show,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import redCurve from "/public/red-curve.png";
import heroPizza from "/public/hero-pizza.png";
import styled from "@emotion/styled";

const Heading = styled.h1({
  maxWidth: "240px",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "21px",
});

const HeadingDesktop = styled.h1({
  // maxWidth: "230px",
  textAlign: "left",
});

const BestSpan = styled.span({
  color: "#E23744",
});

const Hero = () => {
  return (
    <>
      <Hide above="bsm">
        <Box position="relative" w="100%">
          <AspectRatio position="relative" w="100%" ratio={375 / 426}>
            <Image
              alt="red-curve"
              src={redCurve}
              fill
              style={{
                zIndex: 100,
              }}
            />
          </AspectRatio>
          <div
            style={{
              position: "absolute",
              zIndex: 50,
              inset: 0,
            }}
          >
            <AspectRatio position="relative" w="100%" ratio={378.213 / 413.718}>
              <Image
                alt="red-curve"
                src={heroPizza}
                fill
                style={{
                  aspectRatio: 375 / 426,
                }}
              />
            </AspectRatio>
          </div>
        </Box>
        <Box marginTop="63px" marginBottom="64px" padding="0px 63px 0px 63px">
          <Heading>
            Discover the <BestSpan>Best</BestSpan> Food and Drinks
          </Heading>
          <Text
            marginBottom="28px"
            maxW="249px"
            marginLeft="auto"
            marginRight="auto"
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>
          <Flex justify="center">
            <Button
              className="open-sans-700"
              fontSize={12.266}
              lineHeight={"31.542px"}
              letterSpacing={0.123}
            >
              Explore Now!
            </Button>
          </Flex>
        </Box>
      </Hide>
      <Show above="bsm">
        <Flex alignItems="center" justify="space-between">
          <Box
            w={{
              base: 250,
              lg: 360,
            }}
            margin="0 auto"
            padding="10px"
          >
            <HeadingDesktop>
              Discover the <br />
              <BestSpan>Best</BestSpan> Food and Drinks
            </HeadingDesktop>
            <Text
              marginBottom="28px"
              textAlign="start"
              fontSize={{
                base: "11px",
                lg: "16.445px",
              }}
              lineHeight={{
                base: "18px",
                lg: "27.408px",
              }}
            >
              Naturally made Healthcare Products for the better care & support
              of your body.
            </Text>
            <Button
              className="open-sans-700"
              fontSize={18}
              lineHeight={"36px"}
              letterSpacing={0.18}
            >
              Explore Now!
            </Button>
          </Box>

          <Box
            position="relative"
            w={{
              base: "65%",
              lg: "50%",
            }}
          >
            <AspectRatio position="relative" w="100%" ratio={375 / 426}>
              <Image
                alt="red-curve"
                src={redCurve}
                fill
                style={{
                  zIndex: 100,
                }}
              />
            </AspectRatio>
            <div
              style={{
                position: "absolute",
                zIndex: 50,
                inset: 0,
                display: "flex",
                justifyContent: "end",
                alignItems: "start",
              }}
            >
              <AspectRatio
                position="relative"
                w="97%"
                ratio={378.213 / 413.718}
              >
                <Image
                  alt="pizza"
                  src={heroPizza}
                  fill
                  style={{
                    aspectRatio: 375 / 426,
                  }}
                />
              </AspectRatio>
            </div>
          </Box>
        </Flex>
      </Show>
    </>
  );
};
export default Hero;
