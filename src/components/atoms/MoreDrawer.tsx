import {
  Box,
  Text,
  Icon,
  HStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorMode,
  Image,
  DrawerFooter,
} from "@chakra-ui/react";
import { IoLogoTwitter, IoLogoGithub } from "react-icons/io";
import { SiDiscord } from "react-icons/si";
import Instagram from "../../images/instagram-logo.png";

type MoreDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MoreDrawer: React.FC<MoreDrawerProps> = ({ isOpen, onClose }) => {
  const { colorMode } = useColorMode();
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg={colorMode === "light" ? "#F3F3F2" : "#2F3030"}>
        <DrawerCloseButton />
        <DrawerHeader>{`More info`}</DrawerHeader>
        <DrawerBody>
          <Text>
            I use Github, Twitter, instagram and Discord. Here are my accounts.
            Please follow me.
          </Text>
          <Box>
            <HStack mt={7}>
              <Text fontSize={24}>・</Text>
              <Icon as={IoLogoGithub} boxSize={8} />
              <Text>GitHub</Text>
            </HStack>
            <HStack mt={7}>
              <Text fontSize={24}>・</Text>
              <Icon as={IoLogoTwitter} boxSize={8} color={"#00acee"} />
              <Text>Twitter</Text>
            </HStack>
            <HStack mt={7}>
              <Text fontSize={24}>・</Text>
              <Image src={Instagram} boxSize={8} />
              <Text>Instagram</Text>
            </HStack>
            <HStack mt={7}>
              <Text fontSize={24}>・</Text>
              <Icon as={SiDiscord} boxSize={8} color={"#7289da"} />
              <Text>Discord</Text>
            </HStack>
          </Box>
        </DrawerBody>
        <DrawerFooter>
          <Text color={"#939794"}>made by Shogo Arai</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
