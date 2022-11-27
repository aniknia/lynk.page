import { useState } from "react";
import { LinkBox, LinkOverlay, Text, Container } from "@chakra-ui/react";

export default function Link({
  name = "Link",
  address = "https://lynk.page",
  internal = true,
  colorSchemeHover = "gray.50",
  colorSchemeDefault = "",
}) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <LinkBox
        height="40px"
        width="100%"
        borderWidth="1px"
        borderRadius="20px"
        bg={hover ? colorSchemeHover : colorSchemeDefault}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <Container centerContent>
          <Text fontSize="2xl">
            <LinkOverlay href={address} isExternal={internal == undefined}>
              {name}
            </LinkOverlay>
          </Text>
        </Container>
      </LinkBox>
    </>
  );
}
