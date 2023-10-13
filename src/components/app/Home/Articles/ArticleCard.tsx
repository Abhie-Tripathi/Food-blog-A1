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

interface IProps {
  name: string;
  image: string;
  description: string;
}

const ArticleCard = ({ name, image, description }: IProps) => {
  return (
    <Box
      border={{
        base: "0.876px solid #373737",
        lg: "1.37px solid rgba(147, 162, 211, 0.38)",
      }}
      borderRadius={{
        base: "26.773px",
        lg: "20.937px",
      }}
      padding={{
        base: "40px 19px 40px 16px",
        lg: "27px 19px 40px 16px",
      }}
      maxWidth={{
        base: "381px",
        lg: "300px",
        xl: "381px",
      }}
      minWidth={{
        base: "auto",
        xl: "381px",
      }}
      margin="0 auto 0 auto"
    >
      <AspectRatio
        ratio={204 / 166}
        position="relative"
        width="95%"
        margin="0 auto 39px auto"
      >
        <>
          <Hide above="lg">
            <Image
              alt="name"
              src={image}
              // height={166}
              // width={204}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "27px",
              }}
            />
          </Hide>
          <Show above="lg">
            <Image
              alt="name"
              src={image}
              // height={166}
              // width={204}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: "21px",
              }}
            />
          </Show>
        </>
      </AspectRatio>
      <Box
        padding={{
          base: "",
          lg: "0 20px 0 20px",
        }}
      >
        <h4>{name}</h4>
        <Text
          textAlign="left"
          fontSize={{
            base: "12px",
            lg: "15px",
          }}
          lineHeight={{
            base: "18px",
            lg: "27px",
          }}
          fontFamily="Source Sans Pro"
          maxW="295px"
          margin="6px auto 26px auto"
        >
          {description}
        </Text>
        <Flex
          justify={{
            base: "center",
            lg: "start",
          }}
        >
          <Button
            size={{
              base: "sm",
              lg: "md",
            }}
            color="#424961"
            border="2px solid #424961"
            borderRadius="full"
            variant="outline"
          >
            Read More
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
export default ArticleCard;
