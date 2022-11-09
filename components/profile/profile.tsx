import { Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image src="/logo.svg" alt="P" width={150} height={150} />
        <Text fontSize="xl" as="b">
          @Profile
        </Text>
      </Flex>
    </>
  );
}
