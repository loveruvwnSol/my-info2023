import { Center, useColorMode } from "@chakra-ui/react";
import { CardContents } from "../organisms/CardContents";

export const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Center
      h="100vh"
      background={"#F3F3F2"}
      bg={colorMode === "light" ? "#F3F3F2" : "#2F3030"}
    >
      <CardContents />
    </Center>
  );
};
