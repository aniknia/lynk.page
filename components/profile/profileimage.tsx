import { Text, Flex, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";

export default function ProfileImage(props) {
  return (
    <>
      <LinkBox>
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Image src={props.image} alt="" width={150} height={150} />
          <LinkOverlay href={props.link}>
            <Text fontSize="xl" as="b">
              {props.name}
            </Text>
          </LinkOverlay>
        </Flex>
      </LinkBox>
    </>
  );
}
