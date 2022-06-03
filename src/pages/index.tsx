import { Header } from '../components/Header';
import { About } from '../components/About';
import { Introduce } from '../components/Introduce';
import Technologies from '../components/Technologies';
import Experiences from '../components/Experiences';

import { Flex, Box, Text, Button, HStack, Link, extendTheme } from '@chakra-ui/react';

export default function Home() {
  return (
    <Flex w="100%" maxWidth="100vw" flexDirection="column">
      <Flex h="600px" flexDirection="column" bgImage="pineapple.jpg" bgSize="contain">
        <Header />
        <Introduce />
      </Flex>
      <Flex direction="column">
        <About />
        <Technologies />
      </Flex>
    </Flex>
  )
}
