import { Button } from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";

export const MoreBtn = () => {
  return (
    <Button
      size={"lg"}
      fontWeight={"bold"}
      rightIcon={<BiRightArrow />}
      background={"#2F3030"}
      variant="solid"
      color={"#fff"}
      borderRadius={0}
      fontSize={"sm"}
    >
      More
    </Button>
  );
};
