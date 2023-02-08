import { Link, Button } from "@chakra-ui/react";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_CONTACT_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { Text } from "src/general/Text";

export default function Contact(): JSX.Element {
  return (
    <SectionContainer id={NAV_CONTACT_ID} gap={4}>
      <SectionHeader number="04." title={`Let's connect`} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      <Link marginTop={10}>
        <Button>Contact</Button>
      </Link>
    </SectionContainer>
  );
}
