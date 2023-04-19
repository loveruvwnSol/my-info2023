import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

export const CardTabOne = () => {
  const { colorMode } = useColorMode();
  return (
    <Box maxW="32rem">
      <Heading mb={4} color={colorMode === "light" ? "#2F3030" : "#fff"}>
        Hi. Im Shogo Arai.
      </Heading>
      <Text fontSize="xl" as="i" color={"#939794"}>
        18 year old. Graduated from N High School.
        <br />
        web app developer. My favorite languages ​​are React and TypeScript. I
        have an IT Passport qualification.
      </Text>
    </Box>
  );
};
