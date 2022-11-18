import { useState } from "react";
import {
  LinkBox,
  LinkOverlay,
  VStack,
  Text,
  Container,
  propNames,
} from "@chakra-ui/react";
import { readBuilderProgram } from "typescript";

export default function Link(props) {
  const [hover, setHover] = useState(false);
  return (
    <>
      <LinkBox
        height="40px"
        width="100%"
        borderWidth="1px"
        borderRadius="20px"
        bg={hover ? "gray.50" : ""}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Container centerContent>
          <Text fontSize="2xl">
            <LinkOverlay href={props.address} isExternal>
              {props.name}
            </LinkOverlay>
          </Text>
        </Container>
      </LinkBox>
    </>
  );
}
