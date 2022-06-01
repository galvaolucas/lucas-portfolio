import { Box, Flex, Text, Divider, HStack, VStack  } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import { motion } from "framer-motion";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image';
import computer from '../../public/computer-2.jpg'

const MotionAboutBox = motion(Box);

export function About() {
  return(
    <Flex
    w="100%"
    h="500px"
    direction="row"
    id="aboutme"
    >
    <Box
    display="flex"
    w="100%"
    flexDirection="row"
    height="500px"
    bgColor="white"
    > 
      <Box w="50%">
        
      </Box>
      <Box position="relative" width="50%" mr="30px">
        <Box
          display="flex"
          mt="5"
          flexDirection="column"
          alignItems="start">
          <Text fontSize="2xl" color="gray.900" fontFamily="Roboto" >
            
            Informações Pessoais
          </Text>
          <Divider orientation="horizontal" size="10" color="teal.400" variant="solid"/>
        </Box>
          <MotionAboutBox
            height="200px"
            display="flex"
            mt="5"
            p="10px"
            flexDirection="column"
            alignItems="start"
            justifyContent="center"
            border="2px solid"
            borderColor="yellow.400"
            borderRadius="10px"
            drag="x"
            ragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            >
            <VStack spacing={4}>
            <Box
              display="flex"
              flexDirection="row"
            >
              <HStack spacing={8}>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Nome:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Idade:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">26 anos</Text>
                </Box>
              </HStack>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
            >
              <HStack spacing={8}>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Telefone:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Endereço:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
                </Box>
              </HStack>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
            >
              <HStack spacing={8}>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Experiência:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Github:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
                </Box>
              </HStack>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
            >
              <HStack spacing={8}>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Email:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="gray.900" fontFamily="Roboto">
                    Nome:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Roboto">Lucas de Melo Galvão</Text>
                </Box>
              </HStack>
            </Box>
            </VStack> 
          </MotionAboutBox>
        </Box>
      </Box>  
    </Flex>    
  )
}

export default About;
