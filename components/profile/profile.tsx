import { Text, Flex, Avatar } from "@chakra-ui/react";

export default function Profile(props) {
  const ImageStyle = {
    padding: "10px",
    borderRadius: "50%",
    textAlign: "center",
  };

  return (
    <>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      >
        <Avatar name={props.name} src={props.image} />
        <Text fontSize="xl" as="b">
          {props.name}
        </Text>
      </Flex>
    </>
  );
}
