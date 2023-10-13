import { Box, Flex, Heading, Hide, Show, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import friesTruck from "/public/fries_truck.png";
import Image from "next/image";
import instagramLogo from "/public/instagram.png";
import twitterLogo from "/public/twitter.png";
import fbLogo from "/public/facebook.png";

const FooterWrapper = styled.footer({
  backgroundColor: "#F8F8F8",
  padding: "52px 46px 107px 46px",
});

const FooterText = styled.p({
  fontSize: 8.76,
  lineHeight: "29.45px",
});

const FooterTextDesktop = styled.p({
  fontSize: 14.656,
  lineHeight: "27px",
});

const Footer = () => {
  return (
    <>
      <Hide above="bsm">
        <FooterWrapper>
          <Flex direction="column" alignItems="center">
            <Image alt="fries-truck" src={friesTruck} height={58} width={75} />
            <Flex
              direction={{
                base: "column",
                sm: "row",
              }}
              alignItems={{
                base: "center",
                sm: "start",
              }}
              gap={{
                base: "0px",
                sm: "20vw",
              }}
              marginTop="42px"
            >
              <Box w="100%" mb="29px">
                <h5>Contact Us</h5>
                <FooterText
                  className="source-sans-400"
                  style={{
                    lineHeight: "12.266px",
                  }}
                >
                  Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                  Market, XYZ-343434
                </FooterText>
                <FooterText className="source-sans-400">
                  example2020@gmail.com
                </FooterText>
                <FooterText className="source-sans-400">
                  (904) 443-0343
                </FooterText>
              </Box>

              <Box w="100%" mb="40px">
                <h5>More</h5>
                <FooterText className="source-sans-400">About Us</FooterText>
                <FooterText className="source-sans-400">Products</FooterText>
                <FooterText className="source-sans-400">Career</FooterText>
                <FooterText className="source-sans-400">Contact Us</FooterText>
              </Box>
            </Flex>

            <Box>
              <FooterText
                className="roboto"
                style={{
                  lineHeight: "32.127px",
                }}
              >
                © 2022 Food Truck Example
              </FooterText>
              <Flex justify="space-between">
                <Image
                  alt="insta logo"
                  src={instagramLogo}
                  height={12}
                  width={12}
                />
                <Image
                  alt="twitter logo"
                  src={twitterLogo}
                  height={12}
                  width={12}
                />
                <Image
                  alt="facebook logo"
                  src={fbLogo}
                  height={12}
                  width={12}
                />
              </Flex>
            </Box>
          </Flex>
        </FooterWrapper>
      </Hide>
      <Show above="bsm">
        <FooterWrapper>
          <Flex
            maxWidth="1225px"
            margin="0 auto 0 auto"
            direction={{
              base: "column",
              xl: "row",
            }}
            gap={{
              xl: "10vw",
            }}
            alignItems="center"
          >
            <Image
              alt="fries-truck"
              src={friesTruck}
              height={125}
              width={161}
            />
            <Flex marginTop="42px" justifyContent="space-between" w="100%">
              <Box w="100%">
                <h5>Contact Us</h5>
                <FooterTextDesktop
                  className="source-sans-400"
                  style={{
                    lineHeight: "23.031px",
                    maxWidth: "217px",
                    marginTop: "14px",
                  }}
                >
                  Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                  Market, XYZ-343434
                </FooterTextDesktop>
                <FooterTextDesktop
                  className="source-sans-400"
                  style={{
                    margin: "15px 0",
                  }}
                >
                  example2020@gmail.com
                </FooterTextDesktop>
                <FooterTextDesktop className="source-sans-400">
                  (904) 443-0343
                </FooterTextDesktop>
              </Box>

              <Box w="100%">
                <h5>More</h5>
                <FooterTextDesktop
                  className="source-sans-400"
                  style={{
                    lineHeight: "27.218px",
                    marginTop: "14px",
                  }}
                >
                  About Us
                </FooterTextDesktop>
                <FooterTextDesktop
                  className="source-sans-400"
                  style={{
                    marginTop: "14px",
                  }}
                >
                  Products
                </FooterTextDesktop>
                <FooterTextDesktop
                  className="source-sans-400"
                  style={{
                    marginTop: "14px",
                  }}
                >
                  Career
                </FooterTextDesktop>
                <FooterTextDesktop
                  className="source-sans-400"
                  style={{
                    marginTop: "14px",
                  }}
                >
                  Contact Us
                </FooterTextDesktop>
              </Box>

              <Flex flexShrink={0} direction="column" justify="space-between">
                <div>
                  <h5
                    style={{
                      fontSize: "19px",
                      lineHeight: "27px",
                      letterSpacing: "0.57px",
                      textAlign: "center",
                    }}
                  >
                    Social Links
                  </h5>
                  <Flex justify="end" marginTop="11px" gap="38px">
                    <Image
                      alt="insta logo"
                      src={instagramLogo}
                      height={21}
                      width={21}
                    />
                    <Image
                      alt="twitter logo"
                      src={twitterLogo}
                      height={21}
                      width={21}
                    />
                    <Image
                      alt="facebook logo"
                      src={fbLogo}
                      height={21}
                      width={21}
                    />
                  </Flex>
                </div>
                <FooterTextDesktop
                  className="roboto"
                  style={{
                    lineHeight: "25.124px",
                  }}
                >
                  © 2022 Food Truck Example
                </FooterTextDesktop>
              </Flex>
            </Flex>
          </Flex>
        </FooterWrapper>
      </Show>
    </>
  );
};
export default Footer;
