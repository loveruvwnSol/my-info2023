import { Box } from "@chakra-ui/react";
import { SideText } from "../molecules/SideText";
import { HamburgerBtn } from "../atoms/HamburgerBtn";

export const SideContents = () => {
  return (
    <Box w={"96"} h={"100vh"} background={"#FF2C2C"}>
      <HamburgerBtn />
      <SideText />
    </Box>
  );
};
