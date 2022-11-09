import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import Link from "./link";

export default function LinkList() {
  return (
    <>
      <VStack maxW="600px" pt="25">
        <Link />
        <Link />
      </VStack>
    </>
  );
}
