import { Box, Flex, HStack, Image, Text} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionExperiencesBox = motion(Flex);

interface MotionExpBoxProps {
    companyName: string;
    role: string;
    description: string;
}

export function MotionExpBox({companyName, role, description}:MotionExpBoxProps) {
    return (
        <MotionExperiencesBox
            width="350px"
            height="150px"
            display="flex"
            p="10px"
            flexDirection="row"
            alignItems="center"
            justifyContent="start"
            border="2px solid"
            borderColor="teal.600"
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
                            Empresa:
                        </Text>
                        <Text ml="5px" fontSize="1xl" fontFamily="Poppins">{companyName}</Text>
                        </Box>
                        <Box display="flex" flexDirection="row">
                        <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                            Função:
                        </Text>
                        <Text ml="5px" fontSize="1xl" fontFamily="Poppins">26 anos</Text>
                        </Box>
                        <Box display="flex" flexDirection="row">
                        <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                            Descrição:
                        </Text>
                        <Text ml="5px" fontSize="1xl" fontFamily="Poppins">{description}</Text>
                        </Box>
                    </Box>
                </HStack> 
            </MotionExperiencesBox>
    )
}

export default MotionExpBox;