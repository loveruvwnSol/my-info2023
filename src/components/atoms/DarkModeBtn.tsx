import { Box, IconButton } from "@chakra-ui/react";
import { BiRightArrow, BiMoon } from "react-icons/bi";

export const DarkModeBtn = () => {
  return (
    <Box display={"flex"} justifyContent="right" mt={3} mr={3}>
      <IconButton
        background={"#fff"}
        aria-label="dark mode"
        icon={<BiMoon size={24} />}
      />
    </Box>
  );
};
