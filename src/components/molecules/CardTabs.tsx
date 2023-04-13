import {
  Box,
  Text,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { CardTabOne } from "../atoms/CardTabOne";

export const CardTabs = () => {
  return (
    <Tabs position="relative" variant="unstyled" ml={14}>
      <TabList>
        <Tab
          color={"#939794"}
          _selected={{ color: "#2F3030", fontWeight: "bold" }}
        >
          About
        </Tab>
        <Tab
          color={"#939794"}
          _selected={{ color: "#2F3030", fontWeight: "bold" }}
        >
          Activity
        </Tab>
        <Tab
          color={"#939794"}
          _selected={{ color: "#2F3030", fontWeight: "bold" }}
        >
          Contact
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CardTabOne />
        </TabPanel>
        <TabPanel>{/* <p>two!</p> */}</TabPanel>
        <TabPanel>{/* <p>three!</p> */}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
