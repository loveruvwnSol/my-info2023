import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import WebImage1 from "../../images/WebImage1.png";
import WebImage2 from "../../images/WebImage2.png";
import WebImage3 from "../../images/WebImage3.png";

export const CardTabTwo = () => {
  const { colorMode } = useColorMode();
  const ImagesInfo = [WebImage1, WebImage2, WebImage3];
  return (
    <Box maxW="64rem">
      <Heading
        color={colorMode === "light" ? "#2F3030" : "#fff"}
        mb={4}
        fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
      >
        Activity
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {ImagesInfo.map((e, idx) => (
          <Center>
            <Image
              key={idx}
              boxShadow="lg"
              w={{ base: 36, md: 72, lg: 72 }}
              src={e}
            />
          </Center>
        ))}
      </Grid>
    </Box>
  );
};
