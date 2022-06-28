import { Flex, Image, Text} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionTechnologiesBox = motion(Flex);

interface MotionTechBoxProps {
    text: string;
    icon_link: string;
    has_link?: boolean;
    click_link?: string;
}

export function MotionBox({text, icon_link, has_link, click_link}:MotionTechBoxProps) {
    return (
        has_link ? 
        <Link href={click_link}>
            <MotionTechnologiesBox
                direction="column"
                alignItems="center"
                justifyContent="center"
                ragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
            >
                <Image alt="tech" src={icon_link} boxSize={16} />
                <Text fontSize="14px" mt="5px">{text}</Text>
            </MotionTechnologiesBox>
        </Link>
        
        :
        <MotionTechnologiesBox
            direction="column"
            alignItems="center"
            justifyContent="center"
            ragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
        >
            <Image alt="tech" src={icon_link} boxSize={16} />
            <Text fontSize="14px" mt="5px">{text}</Text>
        </MotionTechnologiesBox>
    )
}

export default MotionBox;