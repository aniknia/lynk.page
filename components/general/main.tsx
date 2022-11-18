import { Flex } from "@chakra-ui/react";
import LinkList from "../profile/linklist";
import Profile from "../profile/profile";

export default function Main() {
  return (
    <>
      <Flex
        direction="column"
        minH="calc(100vh - 36px)"
        maxW="650px"
        margin="auto"
        align="center"
      >
        <Profile name="aniknia" image="/logo.svg" />
        <LinkList
          links={[
            { name: "Flight Maps", address: "https://flightmaps.io" },
            { name: "Petr Archive", address: "https://petrarchive.io" },
            { name: "Github", address: "https://github.com/aniknia" },
          ]}
        />
      </Flex>
    </>
  );
}
