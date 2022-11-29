import {
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import QA from "./qa";

export default function QACard(props) {
  return (
    <>
      <Card mt="25">
        <CardHeader></CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {props.qalist.map((qa, index) => (
              <QA key={index} question={qa.question} answer={qa.answer} />
            ))}
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
