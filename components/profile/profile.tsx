import { Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Profile(props) {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src={props.image} alt="P" width={150} height={150} />
        <Text fontSize="xl" as="b">
          {props.name}
        </Text>
      </Flex>
    </>
  );
}
