import { Box, Button, Flex, Text  } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";

export function Footer() {
  return(
    <Flex
    w="100%"
    h="400px"
    direction="column"
    bgColor="#e1dad8"
    >
    <Box
    display="flex"
    width="100%"
    height="100%"
    justifyContent="center"
    > 
      <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8}>
        <Text fontWeight={500} color="gray.700"fontSize="3xl">Contato</Text>
      </Box> 
    </Box>
    </Flex>    
  )
}

export default Footer;