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
            { name: "Welcome to Lynk Page", address: "", internal: true },
            { name: "To get started you can", address: "", internal: true },
            {
              name: "Create your Lynk Page",
              address: "https://lynk.page/create",
              internal: true,
            },
            {
              name: "Log in to your Lynk Page",
              address: "https://lynk.page/login",
              internal: true,
            },
            {
              name: "Learn More",
              address: "https://lynk.page/learnmore",
              internal: true,
            },
          ]}
        />
      </Flex>
    </>
  );
}
