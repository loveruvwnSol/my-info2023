import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import MyIcon from "../../images/MyIcon.png";
import { MoreBtn } from "../atoms/MoreBtn";

export const CardText = () => {
  return (
    <HStack
      display="flex"
      justifyContent="space-between"
      ml={20}
      mt={14}
      mr={20}
    >
      <HStack>
        <Avatar size={"2xl"} src={MyIcon} />
        <Box>
          <Text color={"#2F3030"} fontSize={"2xl"} fontWeight="bold" ml={3}>
            Shogo Arai
          </Text>
          <Text
            mt={1}
            color={"#939794"}
            fontWeight={"bold"}
            fontSize={"sm"}
            ml={3}
          >
            ISC student ・ Web developerc
          </Text>
        </Box>
      </HStack>
      <MoreBtn />
    </HStack>
  );
};
