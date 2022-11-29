import { Box, Heading, Text } from "@chakra-ui/react";

export default function QA(props) {
  return (
    <>
      <Box>
        <Heading size="xs" textTransform="uppercase">
          {props.question}
        </Heading>
        <Text pt="2" fontSize="sm">
          {props.answer}
        </Text>
      </Box>
    </>
  );
}
