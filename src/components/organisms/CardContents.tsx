import { Box, Divider, Center, useColorMode } from "@chakra-ui/react";
import { CardTabs } from "../molecules/CardTabs";
import { CardText } from "../molecules/CardText";
import { DarkModeBtn } from "../atoms/DarkModeBtn";

export const CardContents = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      w={"5xl"}
      h={"xl"}
      background={colorMode === "light" ? "#fff" : "#000"}
      boxShadow={"lg"}
    >
      <DarkModeBtn />
      <CardText />
      <Center mt={10}>
        {" "}
        <Divider
          borderColor={
            colorMode === "light" ? "chakra-border-color" : "#F3F3F2"
          }
          w={"4xl"}
        />
      </Center>
      <CardTabs />
    </Box>
  );
};
