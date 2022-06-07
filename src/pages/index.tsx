import Header from '../modules/Header';
import About from '../modules/About';
import Introduce from '../modules/Introduce';
import Technologies from '../modules/Technologies';
import Experiences from '../modules/Experiences';
import Contact from '../modules/Contact';

import { Flex, Box, Text, Button, HStack, Link, extendTheme } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100%" maxWidth="100vw" flexDirection="column">
      <Flex h="600px" flexDirection="column" bgImage="option-2.jpg" bgSize="cover">
        <Header />
        <Introduce />
      </Flex>
      <Flex direction="column">
        <About />
        <Technologies />
        <Experiences />
        <Contact />
      </Flex>
    </Flex>
  )
}
