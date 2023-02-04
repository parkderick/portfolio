import {
  Flex,
  Link,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import JobExperience from "src/components/shared/JobExperience";
import { Pointer } from "src/components/shared/Pointer";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_EXPERIENCE_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { Text, SFMono } from "src/general/Text";

export default function Experience(): JSX.Element {
  return (
    <SectionContainer id={NAV_EXPERIENCE_ID}>
      <SectionHeader number="02." title={`Experience`} />
      <Tabs orientation="vertical">
        <TabList>
          <Tab whiteSpace="nowrap">Axiom Zen</Tab>
          <Tab whiteSpace="nowrap">Dapper Labs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <JobExperience
              position="Frontend Software Engineer"
              company="Axiom Zen"
              employmentDate="Sept 2020 - Present"
              responsibilities={
                <>
                  <Pointer>
                    Led the design and development of all Toby products:
                    Application (Google Chrome, Firefox, Web) + Landing page,
                    driving an increase in user base by 186%.
                  </Pointer>
                  <Pointer>
                    Executed feature requests that have the highest impact based
                    on product metrics and user interviews with an agile team of
                    5.
                  </Pointer>
                  <Pointer>
                    Developed 40+ new user-facing features and fixed 1000+ bugs,
                    increasing WAU (weekly active user) by 13%.
                  </Pointer>
                  <Pointer>
                    Diagnosed frame drop rates in application and implemented
                    virtualized lists supporting drag-and-drop, increasing fps
                    by 37 at a streamlined 55 fps across all quantities of
                    collection and tabs.
                  </Pointer>
                  <Pointer>
                    Translated all styles in stylesheets into 19 highly reusable
                    UI components built upon Chakra UI.
                  </Pointer>
                  <SFMono size="sm" alignSelf="flex-end">
                    Javascript React ReduxJS ChakraUI Webpack RESTAPIs
                  </SFMono>
                </>
              }
            />
          </TabPanel>
          <TabPanel>
            <JobExperience
              position="Full Stack Software Engineer"
              company="Dapper Labs"
              employmentDate="July 2021 - November 2022"
              responsibilities={
                <>
                  <Pointer>
                    <Flex flexDirection="column">
                      <Text>
                        Developed 3 Dapper Labs products alongside an agile team
                        of 10:
                      </Text>
                      <UnorderedList paddingLeft={1}>
                        <ListItem>
                          <Link href="https://warehouse.genies.com/collection">
                            Genies NFT Platform
                          </Link>
                          : NFT marketplace for fashion collectibles for avatars
                        </ListItem>
                        <ListItem>
                          <Link href="https://laligagolazos.com/">
                            LaLiga NFT platform
                          </Link>
                          : NFT marketplace for Laliga Moments video
                          collectibles
                        </ListItem>
                        <ListItem>
                          <Link href="https://genesis.seedsofhappiness.io/SeedsOfHappinessGenesis">
                            Dapper Creator
                          </Link>
                          : Platform for web3 creators to mint NFTs, monetize
                          and build individualized connections with their
                          community with no coding JobExperience.
                        </ListItem>
                      </UnorderedList>
                    </Flex>
                  </Pointer>
                  <Pointer>
                    Spearheaded the design system and built highly reusable UI
                    components that translated directly to designs, improved
                    developer JobExperience, and standardized workflows.
                  </Pointer>
                  <Pointer>
                    Maintained and updated the GraphQL layer to allow retrieval
                    and updates of user interactions with Firebase database.
                  </Pointer>
                  <SFMono size="sm" alignSelf="flex-end">
                    Typescript React Apollo ChakraUI NextJS GraphQL Firebase
                  </SFMono>
                </>
              }
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </SectionContainer>
  );
}
