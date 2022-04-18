import Image from 'next/image';
import { Header } from '../components/Header';
import { Flex, Box, Text, Button, HStack, Link } from '@chakra-ui/react';
import computer from '../../public/assets/computer.png'

export default function Home() {
  return (
    
  <Flex
    direction="column"
    h="100vh"
  >
    <Header />
    <Flex
    w="100vw"
    h="100vh"
    mt={16}
    direction="row"
    >
      <Box>
        <Text fontSize="6xl" color="gray.50" fontFamily="Monoton" >
          LUCAS
          <br />
          GALVÃO
        </Text>
      </Box>
      <Box position="relative" width="800px" height="600px">
        <Image src={computer} alt="computer" layout="fill"/>

        
      </Box>


    </Flex>    

  </Flex>

  )
}
