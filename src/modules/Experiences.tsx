import { Box, Flex, HStack, Text  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MotionExpBox from "../components/MotionExperiencesBox";

export function Experiences() {
  return(
    <Flex
    direction="column"
    id="experiences"
    bgColor="white"
    h="700px"
    >
      <Box h="100%" w="100%" display="flex" flexDirection="column">
        <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8}>
          <Text fontWeight={500} color="gray.700"fontSize="3xl">Experiências Pessoais</Text>
        </Box>
        <Flex w="100%" h="200px" direction="row"  alignItems="center" justifyContent="center" gap="50px">
          <Flex h="100%" direction="column" justifyContent="center" >
            <Box h="40%" w="5px" bgColor="red" display="flex" alignItems="center" justifyContent="center">
              
            </Box>
            <Flex h="20%" w="20px" border="2px solid">
              
            </Flex>
            <Box h="40%" w="5px" bgColor="red" display="flex" alignItems="center" justifyContent="center">
              
            </Box>
          </Flex>
          <Box display="flex" alignItems="center" justifyContent="center">
            <MotionExpBox 
              companyName="World Telecom"
              role="Estagiário de Engenharia"
              description="A pensar"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>    
  )
}

export default Experiences;