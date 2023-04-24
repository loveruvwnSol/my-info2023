import {
  Avatar,
  Box,
  HStack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import MyIcon from "../../images/MyIcon.png";
import { Btn } from "../atoms/Btn";
import { BiRightArrow } from "react-icons/bi";
import { useState } from "react";
import { MoreDrawer } from "../atoms/MoreDrawer";

export const CardText = () => {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  const { colorMode } = useColorMode();
  return (
    <>
      <HStack
        display="flex"
        justifyContent={{
          base: "center",
          md: "space-between",
          lg: "space-between",
        }}
        ml={{ base: 5, md: 20, lg: 20 }}
        mt={10}
        mr={{ base: 5, md: 20, lg: 20 }}
      >
        <HStack>
          <Avatar size={{ base: "lg", md: "2xl", lg: "2xl" }} src={MyIcon} />
          <Box>
            <Text
              color={colorMode === "light" ? "#2F3030" : "#fff"}
              fontSize={{ base: "lg", md: "3xl", lg: "3xl" }}
              fontWeight="bold"
              ml={3}
            >
              Shogo Arai
            </Text>
            <Text
              mt={1}
              color={"#939794"}
              fontWeight={"bold"}
              fontSize={{ base: "1px", md: "sm", lg: "sm" }}
              ml={3}
            >
              ISC student ・ Web developer
            </Text>
          </Box>
        </HStack>
        <Btn
          text={"More"}
          icon={BiRightArrow}
          onClick={() => handleClick(size)}
        />
      </HStack>

      <MoreDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};
