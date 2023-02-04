import { Flex } from "@chakra-ui/react";
import { H4 } from "src/general/Heading";
import { IJobExperience } from "src/schema/types";
import { SFMono } from "src/general/Text";

function JobExperience({
  position,
  company,
  employmentDate,
  responsibilities,
}: IJobExperience): JSX.Element {
  return (
    <Flex flexDirection="column">
      <H4 color="slate.100">
        {position}
        <H4 display="inline-flex" color="green.200">
          &nbsp;@ {company}
        </H4>
      </H4>
      <SFMono marginTop={2}>{employmentDate}</SFMono>
      <Flex marginTop={4} flexDirection="column" gap={3}>
        {responsibilities}
      </Flex>
    </Flex>
  );
}

export default JobExperience;
