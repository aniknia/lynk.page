import { VStack } from "@chakra-ui/react";
import Footer from "../general/footer";
import Meta from "../general/meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main>{children}</main>
      <Footer />
    </>
  );
}
