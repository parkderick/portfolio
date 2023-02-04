import { Box, Flex, Button } from "@chakra-ui/react";
import { H1 } from "src/general/Heading";
import { Text, SFMono } from "src/general/Text";

export default function Hero(): JSX.Element {
  return (
    <Flex alignItems="center" height="100vh">
      <Flex flexDirection="column" gap={8}>
        <SFMono color="green.200">Hi, my name is</SFMono>
        <Box>
          <H1 color="slate.100">Derick Park.</H1>
          <H1>I build things for the web.</H1>
        </Box>
        <Text maxWidth={540}>
          I am a software engineer specialized in building beautiful
          applications using modern frontend and backend technologies! My
          passion for software engineering really stems from my passion to think
          critically and solve problems, all while being able to stay in
          creative control.
        </Text>
        <Button>Resume</Button>
      </Flex>
    </Flex>
  );
}
