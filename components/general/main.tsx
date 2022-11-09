import { Flex } from "@chakra-ui/react";
import LinkList from "../profile/linklist";
import Profile from "../profile/profile";

export default function Main() {
  return (
    <>
      <Flex direction="column">
        <Profile />
        <LinkList />
      </Flex>
    </>
  );
}
