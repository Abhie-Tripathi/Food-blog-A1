import { Button, Flex, Show, Spacer } from "@chakra-ui/react";
import styled from "@emotion/styled";
import friesTruck from "/public/fries_truck.png";
import Image from "next/image";

const NavBarWrapper = styled.nav({
  position: "fixed",
  left: 0,
  right: 0,
  top: 0,
  zIndex: 1000,
  padding: "18px 21.77px 18px 21.77px",
});

const NavBar = () => {
  return (
    <NavBarWrapper>
      <Flex maxWidth="1225px" margin="0 auto 0 auto">
        <Show above="bsm">
          <Image alt="logo" src={friesTruck} height={107} width={83} />
        </Show>
        <Spacer />
        <Button className="source-sans-600" size="sm">
          Get In Touch
        </Button>
      </Flex>
    </NavBarWrapper>
  );
};
export default NavBar;
