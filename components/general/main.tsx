import { Flex } from "@chakra-ui/react";
import LinkList from "../profile/linklist";
import Profile from "../profile/profile";

export default function Main() {
  return (
    <>
      <Flex
        direction="column"
        minH="calc(100vh - 40px)"
        maxW="650px"
        margin="auto"
        align="center"
      >
        <Profile name="@Profile" alt="Profile Photo" image="/logo.svg" />
        <LinkList
          links={[
            { name: "Link 1", address: "https://google.com" },
            { name: "Link 2", address: "https://google.com" },
          ]}
        />
      </Flex>
    </>
  );
}
