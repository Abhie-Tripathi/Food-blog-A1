import { Box, Button, Flex, Hide, Show, Text } from "@chakra-ui/react";
import Image from "next/image";
import aboutImage from "/public/about.png";

const About = () => {
  return (
    <>
      <Hide above="bsm">
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          bgColor="#F0F1F7"
          minHeight="100vh"
          padding="0 50px 0 50px"
        >
          <h3>About Us</h3>
          <Text lineHeight="21px" margin="21px 0 16px 0" maxW="400px">
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries."
            }
          </Text>
          <Button size="sm" border={0} paddingLeft="20px" paddingRight="20px">
            Read More
          </Button>
        </Flex>
      </Hide>
      <Show above="bsm">
        <Box bgColor="#F0F1F7" margin="150px 0 158px 0">
          <Flex
            maxWidth="1225px"
            margin="0 auto 0 auto"
            direction="row"
            alignItems="center"
            justifyContent="space-around"
            // padding="0 50px 0 50px"
          >
            <Hide above="lg">
              <Image
                alt="about image"
                src={aboutImage}
                width={300}
                height={364.9}
              />
            </Hide>
            <Show above="lg">
              <Image
                alt="about image"
                src={aboutImage}
                width={384}
                height={468}
              />
            </Show>
            <Box padding="30px" maxW="447px">
              <h3>About Us</h3>
              <Text
                lineHeight={{
                  base: "21px",
                  lg: "27px",
                }}
                margin="21px 0 16px 0"
                textAlign="left"
                fontSize={{
                  base: "11px",
                  lg: "15px",
                }}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries."
                }
              </Text>
              <Button
                border={0}
                fontSize="16px"
                lineHeight="36px"
                paddingLeft="20px"
                paddingRight="20px"
              >
                Read More
              </Button>
            </Box>
          </Flex>
        </Box>
      </Show>
    </>
  );
};
export default About;
