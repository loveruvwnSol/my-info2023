import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

type BtnProps = {
  text: string;
  icon: IconType;
  onClick: () => void;
};

export const Btn: React.FC<BtnProps> = ({ text, icon, onClick }) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      size={"lg"}
      fontWeight={"bold"}
      rightIcon={<Icon as={icon} />}
      bg={colorMode === "light" ? "#2F3030" : "#fff"}
      variant="solid"
      color={colorMode === "light" ? "#fff" : "#000"}
      borderRadius={0}
      fontSize={"sm"}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
