import { Box, Icon, Flex, Image, Link } from "@chakra-ui/react";
import { H3 } from "src/general/Heading";
import { FiGithub } from "react-icons/fi";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_PORTFOLIO_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { SFMono, Text } from "src/general/Text";
interface IProject {
  company: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  href: string;
}

const PROJECTS: IProject[] = [
  {
    company: "Dapper Labs",
    title: "Genies Warehouse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: [
      "Typescript",
      "React",
      "Apollo Client",
      "ChakraUI",
      "NextJS",
      "GraphQL",
    ],
    image: "/geniessc1.png",
    href: "https://warehouse.genies.com/collection",
  },
  {
    company: "Dapper Labs",
    title: "Laliga Golazos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Typescript", "React", "NextJS"],
    image: "/laligasc1.png",
    href: "https://laligagolazos.com/",
  },
  {
    company: "Dapper Labs",
    title: "Dapper Creator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: [
      "Typescript",
      "React",
      "Apollo Client",
      "ChakraUI",
      "NextJS",
      "GraphQL",
    ],
    image: "/dappercreatorsc1.png",
    href: "https://genesis.seedsofhappiness.io/SeedsOfHappinessGenesis",
  },
  {
    company: "Axiom Zen",
    title: "Toby App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: [
      "Javascript",
      "React",
      "ReduxJS",
      "ChakraUI",
      "Webpack",
      "REST APIs",
    ],
    image: "/tobyappsc1.png",
    href: "https://chrome.google.com/webstore/detail/toby-for-chrome/hddnkoipeenegfoeaoibdmnaalmgkpip?hl=en",
  },
  {
    company: "Axiom Zen",
    title: "Toby Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: [
      "Javascript",
      "React",
      "React Router",
      "SASS/SCSS",
      "Webpack",
      "Poet",
    ],
    image: "/tobywebsitesc1.png",
    href: "https://gettoby.com/",
  },
];

export default function Portfolio(): JSX.Element {
  return (
    <SectionContainer id={NAV_PORTFOLIO_ID}>
      <SectionHeader number="03." title={`Portfolio`} />
      {PROJECTS.map((project, index) => (
        <Project key={index} index={index} project={project} />
      ))}
    </SectionContainer>
  );
}

function Project({
  project,
  index,
}: {
  project: IProject;
  index: number;
}): JSX.Element {
  const { company, title, description, stack, image, href } = project;
  const isEven = index % 2 === 0;
  return (
    <Flex flexDirection={isEven ? "row" : "row-reverse"}>
      <Link
        href={href}
        borderRadius={4}
        position="relative"
        width="100%"
        height="100%"
        bgColor="green.200"
        _hover={{
          bgColor: "transparent",
          [".overlay"]: {
            backgroundColor: "transparent",
            opacity: 1,
          },
          [".image-container"]: {
            filter: "none",
            mixBlendMode: "normal",
          },
        }}
      >
        <Box
          className="image-container"
          transition="all 0.1s cubic-bezier(0.645,0.045,0.355,1)"
          mixBlendMode="multiply"
          filter="grayscale(100%) contrast(1) brightness(100%)"
        >
          <Image alt={title} src={image} w="600px" h="350px" />
        </Box>
        <Box
          transition="all 0.25s cubic-bezier(0.645,0.045,0.355,1)"
          backgroundColor="#133241"
          position="absolute"
          width="100%"
          height="100%"
          top={0}
          opacity={0.6}
          className="overlay"
        ></Box>
      </Link>
      <Box position="relative" width="100%">
        <Flex
          flexDirection="column"
          alignItems={isEven ? "flex-end" : "flex-start"}
          position="absolute"
          width="110%"
          right={isEven ? "0%" : "auto"}
          left={isEven ? "auto" : "0%"}
          gap={2}
        >
          <Text color="green.200">{company}</Text>
          <H3 color="slate.100">{title}</H3>
          <Box
            bg="navy.300"
            padding={5}
            boxShadow="0 10px 30px -15px"
            color="navy.100"
            my={2}
            zIndex={3}
          >
            <Text color="slate.200">{description}</Text>
          </Box>
          <SFMono color="slate.200" size="xs">
            {stack.map((tech) => (
              <>{tech}&nbsp;</>
            ))}
          </SFMono>
          <Flex color="slate.100">
            <Link href="https://www.github.com" isExternal>
              <Icon as={FiGithub} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
