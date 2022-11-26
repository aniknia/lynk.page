import { Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

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
        <Image
          src={props.image}
          alt={props.alt}
          width={150}
          height={150}
          style={ImageStyle}
        />
        <Text fontSize="xl" as="b">
          {props.name}
        </Text>
      </Flex>
    </>
  );
}
