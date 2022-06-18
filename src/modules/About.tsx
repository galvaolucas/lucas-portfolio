import { Box, Flex, Text, Divider, HStack, VStack, Icon, Button  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiDownload } from 'react-icons/bi';

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
    alignItems="center"
    height="500px"
    bgColor="white"
    > 
      <Box w="50%">
        
      </Box>
      <Box position="relative" width="50%" mr="30px">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start">
          <Flex direction="row" align="center" gap="10px">
            <Icon as={BsFillPersonLinesFill} w={6} h={6} color="teal.300"/>
            <Text fontSize="2xl" color="gray.900" fontFamily="Poppins" >
              Informações Pessoais
            </Text>
          </Flex>
          <Divider orientation="horizontal" size="10" color="teal.400" variant="solid"/>
        </Box>
          <MotionAboutBox
            height="200px"
            display="flex"
            mt="5"
            p="10px"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            border="2px solid"
            borderColor="yellow.400"
            borderRadius="10px"
            ragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            >
            <HStack spacing={20} alignItems="center" display="flex" flexDirection="row" justify="center">
            <Box
              display="flex"
              flexDirection="column"
            >
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    Nome:
                  </Text>
                  <Text ml="5px" fontSize="1xl" fontFamily="Poppins">Lucas de Melo Galvão</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    Estado:
                  </Text>
                  <Text ml="5px" fontSize="1xl" fontFamily="Poppins">26 anos</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    Telefone:
                  </Text>
                  <Text ml="5px" fontSize="1xl" fontFamily="Poppins">55 (84) 9 9617-0738</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    Github:
                  </Text>
                  <Text ml="5px" fontSize="1xl" fontFamily="Poppins">galvaolucas</Text>
                </Box>
            </Box>
              
            <Box
              display="flex"
              flexDirection="column"
            >
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    Idade:
                  </Text>
                  <Text ml="5px" fontSize="1xl" fontFamily="Poppins">26 anos</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    Cidade:
                  </Text>
                  <Text ml="5px" fontSize="1xl" fontFamily="Poppins">Natal</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    Profissão:
                  </Text>
                  <Text ml="5px" fontSize="1xl" fontFamily="Poppins">Desenvolvedor Fullstack</Text>
                </Box>
                <Box display="flex" flexDirection="row">
                  <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                    LinkedIn:
                  </Text>
                  <Text ml="5px" fontSize="1xl" color="gray.900" fontFamily="Poppins">lucasmgalv</Text>
                </Box>
            </Box>
            </HStack> 
          </MotionAboutBox>
          <Button
              leftIcon={<BiDownload/>}
              mt={5}
              size="sm"
              color="white"
              bgColor="teal.400"
              _hover={{
                background: "white",
                color: "teal.400",
                border: "2px solid",
                borderColor: "teal.400",
              }}
              colorScheme="teal.400"
              >
            Download CV
            </Button>
        </Box>
      </Box>  
    </Flex>    
  )
}

export default About;
