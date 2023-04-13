import { Box, Heading, Text } from "@chakra-ui/react";

export const CardTabOne = () => {
  return (
    <Box maxW="32rem">
      <Heading mb={4}>Hi. Im Shogo Arai.</Heading>
      <Text fontSize="xl" as="i" color={"#939794"}>
        18 year old. Graduated from N High School.
        <br />
        web app developer. My favorite languages ​​are React and TypeScript. I
        have an IT Passport qualification.
      </Text>
    </Box>
  );
};
