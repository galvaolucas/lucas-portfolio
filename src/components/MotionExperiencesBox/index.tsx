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
            width="450px"
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
                    <Box
                    display="flex"
                    flexDirection="row"
                    >
                        <Box display="flex" flexDirection="column" alignItems="end">
                            <Text fontSize="16px" color="teal.600" fontFamily="Poppins">
                                Empresa:
                            </Text>
                            <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                                Função:
                            </Text>
                            <Text fontSize="1xl" color="teal.600" fontFamily="Poppins">
                                Descrição:
                            </Text>
                        </Box>

                        <Flex direction="column" justifyContent="center" alignItems="start" gap="4px">
                            <Text ml="5px" fontSize="14px" fontFamily="Poppins" textAlign="justify">{companyName}</Text>
                            <Text ml="5px" fontSize="14px" fontFamily="Poppins" textAlign="justify">{role}</Text>
                            <Text ml="5px" fontSize="14px" fontFamily="Poppins" textAlign="justify">{description}</Text>
                        </Flex>
                    </Box>
            </MotionExperiencesBox>
    )
}

export default MotionExpBox;