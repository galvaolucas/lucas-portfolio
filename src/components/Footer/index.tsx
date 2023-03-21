import { Box, Flex, Text, Divider, HStack, VStack, Icon, Button  } from "@chakra-ui/react";
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { motion } from "framer-motion";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BiDownload } from 'react-icons/bi';

const MotionAboutBox = motion(Box);

export function About() {
  return(
    <Flex
      w="100%"
      h={{ base: '100%' }}
      direction="row"
      mb='2rem'
    >
    <Box
      display="flex"
      w="100%"
      gap={2}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
    >
        <Text color="teal.500">Desenvolvido por Lucas Galvão - 2022</Text>
        <AiOutlineCopyrightCircle size={20} />
      </Box>
    </Flex>    
  )
}

export default About;
