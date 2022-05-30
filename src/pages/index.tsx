import { Header } from '../components/Header';
import { About } from '../components/about';
import { Introduce } from '../components/Introduce';
import Technologies from '../components/Technologies';
import Experiences from '../components/Experiences';

import { Flex, Box, Text, Button, HStack, Link, Divider, extendTheme } from '@chakra-ui/react';

export default function Home() {
  return (
    
  <Flex
    direction="column"
    h="100vh"
  >
    <Header />
    <Introduce />
    <About />
    <Technologies />
    <Experiences />
  </Flex>

  )
}
