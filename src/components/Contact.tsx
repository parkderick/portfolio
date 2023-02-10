import { Link, Button } from "@chakra-ui/react";
import { NAV_CONTACT_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { SFMono, Text } from "src/general/Text";
import { H2 } from "src/general/Heading";

export default function Contact(): JSX.Element {
  return (
    <SectionContainer id={NAV_CONTACT_ID} gap={4} alignItems="center" data-aos="fade-up">
      <SFMono fontSize={20} color="green.200" marginTop="auto">
        04. Lets connect
      </SFMono>
      <H2 display="inline" whiteSpace="nowrap" color="slate.100">
        Contact
      </H2>
      <Text textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br />
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Link marginTop={10} href='mailto:derickminsoopark@gmail.com'>
        <Button>Contact</Button>
      </Link>
    </SectionContainer>
  );
}
