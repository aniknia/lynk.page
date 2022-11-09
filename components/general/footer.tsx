import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { VStack, HStack } from "@chakra-ui/react";

export default function Footer() {
  const logo = useColorModeValue("/lynk.svg", "/lynk-invert.svg");
  return (
    <>
      <footer>
        <VStack>
          <a href="https://lynk.page" target="_blank" rel="noopener noreferrer">
            <HStack>
              <h5>Powered by </h5>P
              <Image src={logo} alt="Lynk" width={72} height={36} />
            </HStack>
          </a>
        </VStack>
      </footer>
    </>
  );
}
