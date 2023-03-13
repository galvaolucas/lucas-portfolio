import { Box, Heading, Button, Flex, Text  } from "@chakra-ui/react";
import { BiMailSend } from 'react-icons/bi';
import ContactForm from "../../components/ContactForm";

export function Contact() {
  return(
    <Flex
    w="100%"
    h="900px"
    direction="column"
    bgColor="#e1dad8"
    id="contact"
    >
      <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8} mb={8}>
        <Heading fontWeight={600} color="gray.700"fontSize="3xl">Entre em Contato</Heading>
      </Box> 
      <Flex direction="column" w="30%" h="55%" p="10px" paddingLeft="20px" ml="80px" justifyContent="start" border="1px solid" borderColor="teal.500" borderRadius="20px" boxShadow="2px" gap="15px">
        <Flex w="100%" gap={2} align="center" justifyContent="center">
          <Heading fontSize="16px" color="teal.500">Insira seus dados e me envie um e-mail!</Heading>
          <BiMailSend size={22} />
        </Flex>
        <ContactForm />
      </Flex>
    </Flex>    
  )
}

export default Contact;