import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import Link from "./link";

export default function LinkList(props) {
  return (
    <>
      <VStack width="100%" mt="25" pl="5" pr="5">
        {props.links.map((link, index) => (
          <Link
            key={index}
            name={link.name}
            address={link.address}
            internal={link.internal}
          />
        ))}
      </VStack>
    </>
  );
}
