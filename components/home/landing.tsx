import { Flex } from "@chakra-ui/react";
import Profile from "../profile/profile";

export default function Landing() {
  const profile: { name: string; image: string; link: string } = {
    name: "Lynk Page",
    image: "/logo.svg",
    link: "/",
  };
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
      address: "/account",
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
      <Profile profile={profile} links={links} />
    </>
  );
}
