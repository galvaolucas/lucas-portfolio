import { Box, Button, Flex, Text  } from "@chakra-ui/react";
import { Link } from "react-scroll";
import { FiUser } from "react-icons/fi";

export function Introduce() {
  return(
    <Flex
    mt={12}
    w='100%'
    h='100%'
    direction="row"
    >
      <Box w={[600, 700, 800]} h="100%">
        <Box
          display="flex"
          flexDirection="column"
          mt={12}
          pl={12}
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
          <Link to="contact" smooth={true} duration={2000}>
            <Button
              leftIcon={<FiUser/>}
              size="sm"
              mt={5}
              color="white"
              backgroundColor="teal.400"
              colorScheme="black"
              _hover={{
                background: "white",
                color: "teal.400",
                border: '2px solid teal'
              }}
              variant="solid">
                Entre em Contato
            </Button>
          </Link>
        </Box>
      </Box>
    </Flex>    
  )
}

export default Introduce;