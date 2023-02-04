import { Box, Icon, Flex, Image, Link } from "@chakra-ui/react";
import { H3 } from "src/general/Heading";
import { FiGithub } from "react-icons/fi";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_PORTFOLIO_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { Text } from "src/general/Text";

export default function Portfolio(): JSX.Element {
  return (
    <SectionContainer id={NAV_PORTFOLIO_ID}>
      <SectionHeader number="03." title={`Portfolio`} />
      <Flex>
        <Link borderRadius={4} position="relative" width="100%" height="100%">
          <Image alt="Genies" src="/geniessc1.png" w="600px" h="350px" />
        </Link>
        <Box position="relative" width="100%">
          <Flex
            flexDirection="column"
            alignItems="flex-end"
            position="absolute"
            width="110%"
            right="0%"
            gap={2}
          >
            <Text color="green.200">Featured Project</Text>
            <H3 color="slate.100">Genies Warehouse</H3>
            <Box
              bg="navy.300"
              padding={5}
              boxShadow="0 10px 30px -15px"
              color="navy.100"
              my={2}
              zIndex={3}
            >
              <Text color="slate.200">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </Text>
            </Box>
            <Text color="slate.200">
              VS Code Sublime Text Atom iTerm2 Hyper
            </Text>
            <Flex color="slate.100">
              <Link href="https://www.github.com" isExternal>
                <Icon as={FiGithub} />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      {/* <Flex position="relative" boxShadow="0 10px 30px -15px rgba(2,12,27,0.7)">
        <Link borderRadius={4} position="absolute" width="100%" height="100%">
          <Image alt="Genies" src="/geniessc1.png" w="100%" h="350px" />
        </Link>

        <Box position="relative" width="100%" padding={4}>
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            position="absolute"
            gap={2}
          >
            <Text color="green.200">Featured Project</Text>
            <H3 color="slate.100">Genies Warehouse</H3>
            <Box
              padding={5}
              boxShadow="0 10px 30px -15px"
              color="navy.100"
              my={2}
              zIndex={3}
            >
              <Text color="slate.200">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </Text>
            </Box>
            <Text color="slate.200">
              VS Code Sublime Text Atom iTerm2 Hyper
            </Text>
            <Flex color="slate.100">
              <Link href="https://www.github.com" isExternal>
                <Icon as={FiGithub} />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex> */}
    </SectionContainer>
  );
}
