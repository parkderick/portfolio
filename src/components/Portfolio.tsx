import { Box, Icon, Flex, Image, Link, Grid } from "@chakra-ui/react";
import { H3 } from "src/general/Heading";
import { FiExternalLink, FiGithub } from "react-icons/fi";
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
  github: string;
}

const PROJECTS: IProject[] = [
  {
    company: "Dapper Labs",
    title: "Genies Warehouse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Typescript", "React", "ChakraUI", "NextJS", "GraphQL"],
    image: "assets/geniessc1.png",
    href: "https://warehouse.genies.com/collection",
    github: "https://github.com/dapperlabs/genies-app",
  },
  {
    company: "Dapper Labs",
    title: "Laliga Golazos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Typescript", "React", "NextJS"],
    image: "assets/laligasc1.png",
    href: "https://laligagolazos.com/",
    github: "https://github.com/dapperlabs/laliga-landing",
  },
  {
    company: "Dapper Labs",
    title: "Dapper Creator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    stack: ["Typescript", "React", "ChakraUI", "NextJS", "GraphQL"],
    image: "assets/dappercreatorsc1.png",
    href: "https://genesis.seedsofhappiness.io/SeedsOfHappinessGenesis",
    github: "https://github.com/dapperlabs/dapper-creator-platforms-app",
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
    image: "assets/tobyappsc1.png",
    href: "https://chrome.google.com/webstore/detail/toby-for-chrome/hddnkoipeenegfoeaoibdmnaalmgkpip?hl=en",
    github: "https://github.com/axiomzen/toby",
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
    image: "assets/tobywebsitesc1.png",
    href: "https://gettoby.com/",
    github: "https://github.com/axiomzen/toby-landing",
  },
];

export default function Portfolio(): JSX.Element {
  return (
    <SectionContainer id={NAV_PORTFOLIO_ID}>
      <SectionHeader number="03." title={`Portfolio`} data-aos="fade-up" />
      <Flex flexDirection="column" gap={{ base: "70px", lg: "120px" }}>
        {PROJECTS.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </Flex>
    </SectionContainer>
  );
}

const LEFT_SIDE_IMAGE_COLUMN = "1 / span 7";
const RIGHT_SIDE_IMAGE_COLUMN = "6 / -1";
const LEFT_SIDE_CONTENT_COLUMN = "1 / 7";
const RIGHT_SIDE_CONTENT_COLUMN = "7 / -1";

function Project({
  project,
  index,
}: {
  project: IProject;
  index: number;
}): JSX.Element {
  const { company, title, description, stack, image, href, github } = project;
  const isEven = index % 2 === 0;

  return (
    <Grid
      gridTemplateColumns="repeat(12, 1fr)"
      data-aos={isEven ? "fade-right" : "fade-left"}
      data-aos-delay={100}
    >
      <Link
        isExternal
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
        gridColumn={{
          base: "1 / -1",
          lg: isEven ? LEFT_SIDE_IMAGE_COLUMN : RIGHT_SIDE_IMAGE_COLUMN,
        }}
        gridRow="1/1"
      >
        <Box
          className="image-container"
          transition="all 0.1s cubic-bezier(0.645,0.045,0.355,1)"
          mixBlendMode="multiply"
          filter={{
            base: "grayscale(100%) contrast(1) brightness(20%)",
            lg: "grayscale(100%) contrast(1) brightness(100%)",
          }}
          height="100%"
          boxShadow="0 10px 30px -15px"
          color="navy.100"
        >
          <Image alt={title} src={image} objectFit="cover" height="100%" />
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
      <Box
        position="relative"
        width="100%"
        gridColumn={{
          base: "1 / -1",
          lg: isEven ? RIGHT_SIDE_CONTENT_COLUMN : LEFT_SIDE_CONTENT_COLUMN,
        }}
        gridRow="1/1"
        padding={{
          base: "40px 40px 30px",
          lg: 0,
        }}
      >
        <Flex
          flexDirection="column"
          alignItems={{
            base: "flex-start",
            lg: isEven ? "flex-end" : "flex-start",
          }}
          width="100%"
          gap={2}
        >
          <Text color="green.200">{company}</Text>
          <H3 color="slate.100">{title}</H3>
          <Box
            bg={{ base: "transparent", lg: "navy.300" }}
            padding={{ base: 0, lg: 5 }}
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
          <Flex color="slate.100" gap={4} marginTop={4}>
            <Link href={github} isExternal>
              <Icon boxSize={5} as={FiGithub} />
            </Link>
            <Link href={href} isExternal>
              <Icon boxSize={5} as={FiExternalLink} />
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Grid>
  );
}
