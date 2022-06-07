import { Box, Flex, Image, Text} from "@chakra-ui/react";
import MotionExpBox from "../MotionExperiencesBox";

interface TimelineBoxProps {
    companyName: string;
    role: string;
    description: string;
    periodFrom: string;
    periodTo: string;
}

export function TimelineRight({companyName, role, description, periodFrom, periodTo}:TimelineBoxProps) {
    return (
        <Flex w="100%" h="260px" direction="row"  alignItems="center" justifyContent="center" gap="50px">
            <Flex h="100%" ml="500px" direction="column" justifyContent="center" alignItems="center">
              <Box h="24%" w="3px" bgColor="yellow.400" display="flex" alignItems="center" justifyContent="center" />
              
              <Flex h="30%" direction="column" w="150px" border="2px solid" borderRadius="10px" borderColor="yellow.400" justifyContent="center" alignItems="center">
                <Text fontSize="12px">{periodFrom}</Text>
                <Text fontSize="10px" fontStyle="italic">-</Text>
                <Text fontSize="12px">{periodTo}</Text>
              </Flex>

              <Box h="40%" w="3px" bgColor="yellow.400" display="flex" alignItems="center" justifyContent="center" />
                
              <Box h="6%" w="15px" bgColor="yellow.400" border="2px solid" borderRadius="50%" borderColor="yellow.400" display="flex" alignItems="center" justifyContent="center" />
            </Flex>
            <Box display="flex" alignItems="center" justifyContent="center" mb="30px">
              <MotionExpBox 
                companyName={companyName}
                role={role}
                description={description}
              />
            </Box>
        </Flex>
    )
}

export default TimelineRight;