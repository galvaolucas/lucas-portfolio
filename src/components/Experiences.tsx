import { Box, Flex, Text  } from "@chakra-ui/react";
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
    height="400px"
    backgroundColor="white"
    > 
      <Box w="40%" mr="5rem" ml="10rem">
        <Box height="100%" display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="6xl" color="gray.900" fontFamily="Tapestry" >
            Lucas Galvão
          </Text>
          <Text
            fontSize="3xl"
            color="gray.900"
            fontWeight={600}
            fontFamily="Roboto"
            pl="5rem">
            Fullstack Software Developer
          </Text>
        </Box>
      </Box>
      <Box position="relative" width="60%">
        {/* <Image src={computer} alt="computer" layout="responsive" height={4} width={6} />  */}
      </Box>  
    </Box>
    </Flex>    
  )
}

export default About;