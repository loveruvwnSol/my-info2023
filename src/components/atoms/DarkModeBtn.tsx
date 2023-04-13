import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { BiMoon } from "react-icons/bi";
import { IoMdMoon } from "react-icons/io";

export const DarkModeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box display={"flex"} justifyContent="right" mt={3} mr={3}>
      <IconButton
        background={colorMode === "light" ? "#fff" : "#000"}
        aria-label="dark mode"
        icon={
          colorMode === "light" ? (
            <BiMoon size={24} />
          ) : (
            <IoMdMoon fill="yellow" size={24} />
          )
        }
        onClick={toggleColorMode}
      />
    </Box>
  );
};
