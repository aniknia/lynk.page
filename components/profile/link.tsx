import {
  LinkBox,
  LinkOverlay,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";

export default function Link() {
  return (
    <>
      <LinkBox height="40px" width="100%" borderWidth="1px" borderRadius="20px">
        <Container centerContent>
          <Text fontSize="2xl">
            <LinkOverlay href="#">Instagram</LinkOverlay>
          </Text>
        </Container>
      </LinkBox>
    </>
  );
}
