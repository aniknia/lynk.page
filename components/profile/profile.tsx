import { Flex } from "@chakra-ui/react";
import ProfileImage from "./profileimage";
import LinkList from "./linklist";

export default function Profile(props) {
  return (
    <>
      <Flex
        direction="column"
        minH="calc(100vh - 40px)"
        maxW="650px"
        margin="auto"
        align="center"
      >
        <ProfileImage
          name={props.profile.name}
          image={props.profile.image}
          link={props.profile.link}
        />
        <LinkList links={props.links} />
      </Flex>
    </>
  );
}
