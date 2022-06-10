import { Box, Button, Flex, Text  } from "@chakra-ui/react";
import { FiUser } from "react-icons/fi";
import ContactForm from "../components/ContactForm";

export function Contact() {
  return(
    <Flex
    w="100%"
    h="800px"
    direction="column"
    bgColor="#e1dad8"
    >
      <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8}>
        <Text fontWeight={500} color="gray.700"fontSize="3xl">Contato</Text>
      </Box> 
      <Flex direction="column" w="30%" h="75%" p="10px" paddingLeft="20px" ml="30px" justifyContent="start" border="1px solid" borderColor="teal.500" borderRadius="20px" boxShadow="2px" gap="15px">
        <Text>Insira seus dados!</Text>
        <ContactForm />
      </Flex>
    </Flex>    
  )
}

export default Contact;