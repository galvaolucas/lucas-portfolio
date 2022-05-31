import { Box, Flex, Text, Divider  } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import Image from 'next/image';
import computer from '../../public/computer-2.jpg'

export function About() {
  return(
    <Flex
    w="100vw"
    h="100vh"
    direction="row"
    id="aboutme"
    >
    <Box
    display="flex"
    width="100vw"
    height="500px"
    bgColor="white"
    > 
      <Box w="50%">
        
      </Box>
      <Box position="relative" width="50%">
        <Box
          display="flex"
          mt="10"
          flexDirection="column"
          alignItems="start">
          <Text fontSize="2xl" color="gray.900" fontFamily="Roboto" >
            Informações Pessoais
          </Text>
          <Divider orientation="horizontal" size="10" color="teal.400" variant="solid"/>
        </Box>
        <Box
          height="200px"
          display="flex"
          mt="10"
          p="10px"
          flexDirection="column"
          alignItems="start"
          border="2px solid"
          borderColor="yellow.400"
          borderRadius="10px"
          >
          <Box display="flex" flexDirection="row">
          <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
            Nome:
          </Text>
          <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
          </Box>
          
        </Box>
      </Box>  
    </Box>
    </Flex>    
  )
}

export default About;