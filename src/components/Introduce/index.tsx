import { Box, Button, Flex, Link, Text  } from "@chakra-ui/react";
import NextLink from 'next/link';
import { FiUser } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { TechnologiesCarousel } from "../TechnologiesCarousel";

export function Introduce() {  
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  if (isMobile) {
    return(
      <Box>
        <Flex
          mt={12}
          w='100%'
          h='100%'
          direction="row"
        >
          <Box w='100%' h="100%">
            <Box
              display="flex"
              flexDir="column"
              mt={12}
              pl='1rem'
              justifyContent='center'
              alignItems="start">
              <Text
                fontSize="2xl"
                color="gray.700"
                fontWeight={600}
                fontFamily="Poppins"
                mt={5}
                >
                Fullstack Software Developer
              </Text>
              <Text
                fontSize="0xl"
                color="gray.700"
                fontWeight={300}
                fontFamily="Poppins"
                mt={2}
                >
                Olá, sou o Lucas Galvão.
                <br/>
                Tenho 27 anos, formado em Engenharia Elétrica pela UFRN.
                <br/>
                Há dois anos atuo como programador fullstack.
                <br/>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Universidade Potiguar.
              </Text>
              <Link as={NextLink} href='/contact' >
                <Button
                  leftIcon={<FiUser/>}
                  size="sm"
                  mt={5}
                  color="white"
                  backgroundColor="teal.400"
                  colorScheme="black"
                  fontSize='1rem'
                  _hover={{
                    background: "white",
                    color: "teal.500",
                    border: '2px solid teal'
                  }}
                  >
                Entre em Contato
                </Button>
              </Link>
            </Box>
          </Box>
        </Flex>
        <Box
          mt='18rem'
        >
          <TechnologiesCarousel />
        </Box>   
      </Box>
    )
  }
  return (
    <Box>
      <Flex
          mt={12}
          w='100%'
          h='100%'
        >
          <Box w={[768, 1280, 1600]} h="100%">
            <Box
              display="flex"
              flexDir="column"
              mt={12}
              pl='1rem'
              fontSize='1.5rem'
              justifyContent='center'
              alignItems="start">
              <Text
                fontSize="2xl"
                color="gray.700"
                fontWeight={700}
                fontFamily="Poppins"
                mt={5}
                >
                Fullstack Software Developer
              </Text>
              <Text
                fontSize="0xl"
                color="gray.700"
                fontWeight={300}
                fontFamily="Poppins"
                mt={2}
                >
                Olá, sou o Lucas Galvão.
                <br/>
                Tenho 27 anos, formado em Engenharia Elétrica pela UFRN.
                <br/>
                Há dois anos atuo como programador fullstack.
                <br/>
                Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Universidade Potiguar.
              </Text>
              <Link as={NextLink} href='/contact' >
                <Button
                  leftIcon={<FiUser/>}
                  size="sm"
                  mt={5}
                  color="white"
                  backgroundColor="teal.400"
                  colorScheme="black"
                  fontSize='1rem'
                  _hover={{
                    background: "white",
                    color: "teal.500",
                    border: '2px solid teal'
                  }}
                  >
                Entre em Contato
                </Button>
              </Link>
          </Box>
          </Box>
        </Flex>
        <Box
          mt='18rem'
        >
          <TechnologiesCarousel />
        </Box>
      </Box>
  )
}

export default Introduce;