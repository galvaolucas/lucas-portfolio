import { Flex, Image, Text} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionTechnologiesBox = motion(Flex);

interface MotionTechBoxProps {
    text: string;
    link: string;
}

export function MotionBox({text, link}:MotionTechBoxProps) {
    return (
        <MotionTechnologiesBox
            direction="column"
            alignItems="center"
            justifyContent="center"
            ragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
        >
            <Image alt="react" src={link} boxSize={16} />
            <Text fontSize="14px" mt="5px">{text}</Text>
        </MotionTechnologiesBox>
    )
}

export default MotionBox;