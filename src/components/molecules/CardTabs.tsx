import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  useColorMode,
} from "@chakra-ui/react";
import { CardTabOne } from "../atoms/CardTabOne";
import { CardTabTwo } from "../atoms/CardTabTwo";
import { CardTabThree } from "../atoms/CardThree";

export const CardTabs = () => {
  const { colorMode } = useColorMode();
  return (
    <Tabs
      position="relative"
      variant="unstyled"
      ml={{ base: 7, md: 14, lg: 14 }}
    >
      <TabList>
        <Tab
          color={"#939794"}
          _selected={{
            color: colorMode === "light" ? "#2F3030" : "#fff",
            fontWeight: "bold",
          }}
        >
          About
        </Tab>
        <Tab
          color={"#939794"}
          _selected={{
            color: colorMode === "light" ? "#2F3030" : "#fff",
            fontWeight: "bold",
          }}
        >
          Activity
        </Tab>
        <Tab
          color={"#939794"}
          _selected={{
            color: colorMode === "light" ? "#2F3030" : "#fff",
            fontWeight: "bold",
          }}
        >
          Contact
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CardTabOne />
        </TabPanel>
        <TabPanel>
          <CardTabTwo />
        </TabPanel>
        <TabPanel>
          <CardTabThree />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
