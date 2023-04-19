import { Box, Grid, Heading, Image, useColorMode } from "@chakra-ui/react";
import WebImage1 from "../../images/WebImage1.png";
import WebImage2 from "../../images/WebImage2.png";
import WebImage3 from "../../images/WebImage3.png";

export const CardTabTwo = () => {
  const { colorMode } = useColorMode();
  const ImagesInfo = [WebImage1, WebImage2, WebImage3];
  return (
    <Box maxW="64rem">
      <Heading color={colorMode === "light" ? "#2F3030" : "#fff"} mb={4}>
        Activity
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {ImagesInfo.map((e, idx) => (
          <Image key={idx} boxShadow="lg" w={72} src={e} />
        ))}
      </Grid>
    </Box>
  );
};
