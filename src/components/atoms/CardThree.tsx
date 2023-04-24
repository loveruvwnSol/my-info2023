import {
  Box,
  Grid,
  Heading,
  Input,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import { Btn } from "./Btn";
import { BiCheck } from "react-icons/bi";
import { useEffect, useState } from "react";

export const CardTabThree = () => {
  const { colorMode } = useColorMode();
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log(name, value);
  });

  const onSubmit = () => {
    if (!name.match(/\S/g)) {
      alert("please input your name");
    } else if (!value.match(/\S/g)) {
      alert("please input text");
    } else {
      alert("sent your text !");
      setName("");
      setValue("");
    }
  };

  return (
    <Box maxW="64rem" mt={{ base: 3, md: "unset", lg: "unset" }} mr={10}>
      <Input
        variant="outline"
        placeholder="name"
        bg={colorMode === "light" ? "#fff" : "#2F3030"}
        w={{ base: 56, md: 72, lg: 72 }}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Textarea
        h={{ base: "36", md: "unset", lg: "unset" }}
        placeholder="input text"
        bg={colorMode === "light" ? "#fff" : "#2F3030"}
        mt={5}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Box mt={10} display={"flex"} justifyContent={"end"}>
        <Btn text={"submit"} icon={BiCheck} onClick={onSubmit} />
      </Box>
    </Box>
  );
};
