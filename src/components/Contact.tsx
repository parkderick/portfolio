import { Link, Button } from "@chakra-ui/react";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_CONTACT_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { Text } from "src/general/Text";

export default function Contact(): JSX.Element {
  return (
    <SectionContainer id={NAV_CONTACT_ID} alignItems="center" gap={4}>
      <SectionHeader number="04." title={`Let's connect`} />
      <Text textAlign="center">
        Just feel free to contact if you wanna collaborate with me, or simply
        have a conversation. Let's Connect!
      </Text>
      <Link marginTop={10}>
        <Button>Say Hello</Button>
      </Link>
    </SectionContainer>
  );
}
