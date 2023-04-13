import { Button, useColorMode } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

export const MoreBtn = () => {
  const { colorMode } = useColorMode();
  return (
    <Button
      size={"lg"}
      fontWeight={"bold"}
      rightIcon={<BiRightArrow />}
      bg={colorMode === "light" ? "#2F3030" : "#fff"}
      variant="solid"
      color={colorMode === "light" ? "#fff" : "#000"}
      borderRadius={0}
      fontSize={"sm"}
    >
      More
    </Button>
  );
};
