import { Flex } from "@chakra-ui/react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
    return (
    <Flex
        flexDir='column'
        w={["100%", "75%", "50%", "25%"]}
        h={["100%", "75%", "50%", "25%"]}
        minW='100vw'
        minH='100vh'
        justifyContent='space-between'
    >
        <Flex
            w='100%'
            h='100%'
            flexDir='column'
        >
            <Header />
            <main>{children}</main>
        </Flex>
        <Footer />
    </Flex>
    )
  }