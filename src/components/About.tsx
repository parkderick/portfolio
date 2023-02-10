import { Flex, Grid } from "@chakra-ui/react";
import { SFMonoPointer } from "src/components/shared/Pointer";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_ABOUT_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { Text } from "src/general/Text";
import { Player } from "@lottiefiles/react-lottie-player";

export default function About(): JSX.Element {
  return (
    <SectionContainer id={NAV_ABOUT_ID} >
      <SectionHeader number="01." title={`About Me`}  data-aos="fade-up"/>
      <Grid
        color="slate.300"
        justifyItems="center"
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
        gap={10}
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <Flex flexDirection="column">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
            <br />
            <br />
          </Text>
          <Grid gridTemplateColumns="repeat(2, 1fr)" gridGap={2}>
            <SFMonoPointer>Typescript</SFMonoPointer>
            <SFMonoPointer>GraphQL</SFMonoPointer>
            <SFMonoPointer>NextJS</SFMonoPointer>
            <SFMonoPointer>ReduxJS</SFMonoPointer>
            <SFMonoPointer>React Query</SFMonoPointer>
            <SFMonoPointer>Chakra UI</SFMonoPointer>
          </Grid>
        </Flex>
        <Player
          autoplay
          loop
          src="/lottie.json"
          style={{
            height: "400px",
            width: "400px",
          }}
        />
      </Grid>
    </SectionContainer>
  );
}
