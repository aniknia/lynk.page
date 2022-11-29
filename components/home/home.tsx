import { Flex } from "@chakra-ui/react";
import LinkList from "../profile/linklist";
import Profile from "../profile/profile";

export default function HOME() {
  const links: { name: string; address: string; internal: boolean }[] = [
    { name: "Welcome to Lynk Page", address: "", internal: true },
    { name: "To get started you can", address: "", internal: true },
    {
      name: "Create your Lynk Page",
      address: "/create",
      internal: true,
    },
    {
      name: "Log in to your Lynk Page",
      address: "/login",
      internal: true,
    },
    {
      name: "Learn More",
      address: "/learnmore",
      internal: true,
    },
  ];
  return (
    <>
      <Flex
        direction="column"
        minH="calc(100vh - 40px)"
        maxW="650px"
        margin="auto"
        align="center"
      >
        <Profile name="Lynk Page" image="/logo.svg" />
        <LinkList links={links} />
      </Flex>
    </>
  );
}
