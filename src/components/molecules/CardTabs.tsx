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

export const CardTabs = () => {
  const { colorMode } = useColorMode();
  return (
    <Tabs position="relative" variant="unstyled" ml={14}>
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
        <TabPanel>{/* <p>three!</p> */}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
