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
  useMediaQuery,
} from "@chakra-ui/react";
import { Pointer } from "src/components/shared/Pointer";
import SectionHeader from "src/components/shared/SectionHeader";
import { NAV_EXPERIENCE_ID } from "./NavBar";
import SectionContainer from "src/components/shared/SectionContainer";
import { Text } from "src/general/Text";
import { H4 } from "src/general/Heading";
import { IJobExperience } from "src/schema/types";
import { SFMono } from "src/general/Text";

export default function Experience(): JSX.Element {
  const [isDesktopView] = useMediaQuery("(min-width: 48em)");
  return (
    <SectionContainer id={NAV_EXPERIENCE_ID} alignItems="center">
      <Flex flexDirection="column" gap={10} width="100%">
        <SectionHeader number="02." title={`Experience`} data-aos="fade-up" />
        <Tabs
          orientation={isDesktopView ? "vertical" : "horizontal"}
          maxWidth="800px"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <TabList borderColor="navy.200">
            <Tab whiteSpace="nowrap" fontSize={14}>
              Costco
            </Tab>
            <Tab whiteSpace="nowrap" fontSize={14}>
              Axiom Zen
            </Tab>
            <Tab whiteSpace="nowrap" fontSize={14}>
              Dapper Labs
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <JobExperience
                position="Frontend Software Engineer II"
                company="Costco"
                employmentDate="June 2023 - Present"
                responsibilities={
                  <>
                    <Pointer>
                      Spearheaded the migration of the existing Costco e-commerce website (91.4M monthly active users) from Websphere Commerce
                      (WCS) to React using GatsbyJS, Redux Saga, Material UI, GraphQL.
                    </Pointer>
                    <Pointer>
                      Utilized Redux Saga for state management, enabling smooth data flow and effective handling of asynchronous actions.
                    </Pointer>
                    <Pointer>
                      Developed automated test suites using Jest and React Testing Library to ensure the reliability / functionality of React applications.
                    </Pointer>
                    <Pointer>
                    Integrated accessibility best practices into web application development workflows, ensuring compliance with WCAG.
                    </Pointer>
                    <Pointer>
                      Implemented Logrocket, an application monitoring and debugging tool, across the entire Costco e-commerce platform to gain
                      in-depth insights into user interactions, pinpoint and resolve bugs, and optimize overall website performance.
                    </Pointer>
                    <Pointer>
                      Leveraged Material-UI’s extensive component library and adhered to atomic front-end practices to expedite the development
                      process, deliver high-quality UI features and improve code maintainability.
                    </Pointer>
                  </>
                }
              />
            </TabPanel>

            <TabPanel>
              <JobExperience
                position="Frontend Software Engineer"
                company="Axiom Zen"
                employmentDate="Sept 2020 - May 2023"
                responsibilities={
                  <>
                    <Pointer>
                      Led the design and development of all Toby products: Application (Google Chrome, Firefox, Web) + Landing page using
                      Typescript, React, Redux, ChakraUI, Styled Components, Webpack, Heroku.
                    </Pointer>
                    <Pointer>
                      Developed 40+ user features, driving an increase in user base by 186%, and weekly active users by 13%.
                    </Pointer>
                    <Pointer>
                      Diagnosed frame drop rates in application and implemented virtualized lists supporting drag-and-drop, increasing fps by 37 at a
                      streamlined 55 fps across all quantities of collection and tabs.
                    </Pointer>
                    <Pointer>
                      Architected a scalable design system using ChakraUI and React, which consolidated 25+ stylesheets into 19 highly reusable
                      atomic UI components that improved styling/brand consistency and developer efficiency.
                    </Pointer>
                    <Pointer>
                      Implemented a suite of custom React Hooks that abstracted away state management and API handlers to reduce code duplication
                      and improved the application&apos;s modularity, maintainability, and scalability.
                    </Pointer>
                    <Pointer>
                      Developed and maintained the Redux state management system, utilizing best practices such as middlewares, selectors, actions,
                      and reducers to optimize performance and ensure efficient data flow throughout the application.
                    </Pointer>
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
                        <Text size="xmd">
                          Developed 3 Dapper Labs products alongside a team of
                          10:
                        </Text>
                        <UnorderedList paddingLeft={1}>
                          <ListItem>
                            <Link href="https://warehouse.genies.com/collection">
                              Genies NFT Platform
                            </Link>
                            : NFT platform for users to create, customize, and
                            trade unique avatars’ fashion collectibles.
                          </ListItem>
                          <ListItem>
                            <Link href="https://laligagolazos.com/">
                              LaLiga NFT platform
                            </Link>
                            : NFT platform for users to collect and trade LaLiga
                            Moments video collectibles.
                          </ListItem>
                          <ListItem>
                            <Link href="https://genesis.seedsofhappiness.io/SeedsOfHappinessGenesis">
                              Dapper Creator
                            </Link>
                            : NFT platform for web3 creators to mint, monetize
                            and build individualized connections with their
                            community.
                          </ListItem>
                        </UnorderedList>
                      </Flex>
                    </Pointer>
                    <Pointer>
                      Led the development of a comprehensive design system,
                      creating a library of atomic UI components that reduced UI
                      development time by 25% and improved consistency and
                      quality of UI design that streamlined
                      design-to-development workflows.
                    </Pointer>
                    <Pointer>
                      Built scalable GraphQL APIs using Express and Firebase
                      that enabled retrieval and seamless updates of user
                      interactions.
                    </Pointer>
                    <Pointer>
                      Architected and developed a highly optimized and scalable
                      virtualized list of NFTs on sale for the marketplace page
                      using GraphQL and Apollo, including advanced filtering
                      capabilities to enable efficient data retrieval and
                      enhanced user experience.
                    </Pointer>
                    <Pointer>
                      Integrated with Dapper wallet API to facilitate seamless
                      and secure processing of cryptocurrency transactions.
                    </Pointer>
                  </>
                }
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </SectionContainer>
  );
}

function JobExperience({
  position,
  company,
  employmentDate,
  responsibilities,
}: IJobExperience): JSX.Element {
  return (
    <Flex flexDirection="column">
      <H4 color="slate.100">{position}</H4>
      <SFMono size="sm" marginTop={4}>
        {employmentDate}
      </SFMono>
      <Flex marginTop={4} flexDirection="column" gap={3}>
        {responsibilities}
      </Flex>
    </Flex>
  );
}
