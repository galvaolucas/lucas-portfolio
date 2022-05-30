import { Box, Button, Flex, Text  } from "@chakra-ui/react";
import Image from 'next/image';
import { FiUser } from "react-icons/fi";
import computer from '../../public/assets/computer-2.jpg'

export function Introduce() {
  return(
    <Flex
    w="100vw"
    h="100vh"
    mt={12}
    direction="row"
    >
    <Box
    display="flex"
    width="100vw"
    height="400px"
    backgroundColor="gray.800"
    > 
      <Box w="55%" h="100%">
        <Box
          height="100%"
          w="100%"
          display="flex"
          flexDirection="column"
          mt={12}
          pl={12}
          alignItems="start">
          <Text fontSize="5xl" color="white" fontFamily="Tapestry" >
            Lucas Galvão
          </Text>
          <Text
            fontSize="2xl"
            color="white"
            fontWeight={600}
            fontFamily="Roboto"
            mt={5}
            >
            Fullstack Software Developer
          </Text>
          <Text
            fontSize="0xl"
            color="white"
            fontWeight={300}
            fontFamily="Roboto"
            mt={2}
            >
            Olá, sou o Lucas Galvão.
            <br/>
            Tenho 26 anos, sou formado em Engenharia Elétrica pela UFRN.
            <br/>
            Atualmente estou cursando Análise e Desenvolvimento de Sistemas na UnP.
          </Text>
          <Button
            leftIcon={<FiUser/>}
            size="sm"
            mt={5}
            color="white"
            backgroundColor="red.500"
            colorScheme="black"
            _hover={{
              background: "white",
              color: "red.500"
            }}
            variant="solid">
              Saiba Mais
          </Button>
        </Box>
      </Box>
      <Box position="relative" width="45%" justifyContent="center" alignItems="center">
        <Image src={computer} alt="computer" layout="fill"/> 
      </Box>  
    </Box>
    </Flex>    
  )
}

export default Introduce;