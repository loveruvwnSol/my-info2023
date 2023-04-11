import { VStack, Text, Stack, Divider } from "@chakra-ui/react";
export const SideText = () => {
  return (
    <VStack mt={7} gap={20} mr={10}>
      <Text color={"white"} fontFamily={"cursive"} fontSize={"3xl"}>
        MY INFO 2023.
      </Text>
      <Text
        as="cite"
        color={"white"}
        fontFamily={"cursive"}
        fontSize={"medium"}
        textAlign="right"
      >
        This page is about my information. <br />
        Mainly for ISC.
      </Text>
    </VStack>
  );
};
