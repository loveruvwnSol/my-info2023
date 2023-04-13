import { Box, Divider, Center, DarkMode } from "@chakra-ui/react";
import { CardTabs } from "../molecules/CardTabs";
import { CardText } from "../molecules/CardText";
import { DarkModeBtn } from "../atoms/DarkModeBtn";

export const CardContents = () => {
  return (
    <Box w={"5xl"} h={"xl"} background={"#fff"} boxShadow={"lg"}>
      <DarkModeBtn />
      <CardText />
      <Center mt={10}>
        {" "}
        <Divider w={"4xl"} />
      </Center>
      <CardTabs />
    </Box>
  );
};
