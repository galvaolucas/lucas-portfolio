import { Header } from '../components/Header';
import { About } from '../components/About';
import { Introduce } from '../components/Introduce';
import Technologies from '../components/Technologies';
import Experiences from '../components/Experiences';

import { Flex, Box, Text, Button, HStack, Link, Divider, extendTheme } from '@chakra-ui/react';

export default function Home() {
  return (
    
  <>
    <Flex
      direction="column"
      h="600px"
      w="100vw"
      bgImage="pineapple.jpg"
      bgSize="contain"
    >
      <Header />
      <Introduce />
    </Flex>
    <Flex
      direction="column"
      h="100vh"
    >
        <About />
        <Technologies />
        <Experiences />
      </Flex>
  </>

  )
}
