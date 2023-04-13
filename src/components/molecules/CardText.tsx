import { Avatar, Box, HStack, Text, useColorMode } from "@chakra-ui/react";
import MyIcon from "../../images/MyIcon.png";
import { MoreBtn } from "../atoms/MoreBtn";

export const CardText = () => {
  const { colorMode } = useColorMode();
  return (
    <HStack
      display="flex"
      justifyContent="space-between"
      ml={20}
      mt={10}
      mr={20}
    >
      <HStack>
        <Avatar size={"2xl"} src={MyIcon} />
        <Box>
          <Text
            color={colorMode === "light" ? "#2F3030" : "#fff"}
            fontSize={"3xl"}
            fontWeight="bold"
            ml={3}
          >
            Shogo Arai
          </Text>
          <Text
            mt={1}
            color={"#939794"}
            fontWeight={"bold"}
            fontSize={"sm"}
            ml={3}
          >
            ISC student ・ Web developer
          </Text>
        </Box>
      </HStack>
      <MoreBtn />
    </HStack>
  );
};
