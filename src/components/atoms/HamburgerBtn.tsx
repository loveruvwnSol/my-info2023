import { IconButton } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";

export const HamburgerBtn = () => {
  return (
    <IconButton
      mt={5}
      ml={5}
      aria-label="Hamburger btn"
      background={"unset"}
      _hover={{}}
      icon={<BiMenu fill="white" size={"32"} />}
    />
  );
};
