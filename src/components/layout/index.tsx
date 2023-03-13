import { Flex } from "@chakra-ui/react";
import Footer from "../Footer";
import Header from "../Header";

export default function Layout({ children }) {
    return (
    <Flex
        flexDir='column'
        w='100%'
        h='100%'
        justifyContent='space-between'
        minHeight='100vh'
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