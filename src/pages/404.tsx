import { Flex } from "@chakra-ui/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <Flex
        height="100vh"
        direction="column"
        justify="center"
        alignItems="center"
      >
        <p>
          {
            "The chances of getting to this place is almost 0% unless you're testing this application 😁"
          }
        </p>
        <Link href="/">
          <u>Go to home page</u>
        </Link>
      </Flex>
    </>
  );
};
export default NotFound;
