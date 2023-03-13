import { Box, Flex, HStack, Text  } from "@chakra-ui/react";
import cv01 from '../../../public/cv_01.jpg';
import cv02 from '../../../public/cv_02.jpg';
import { Carousel } from "../../components/Carousel";
export function Experiences() {

  const renderImages = [
    { 
        id: 0,
        image: cv01
    },
    { 
        id: 1,
        image: cv02
    },
]
  return(
    <Flex
      direction="column"
      w='100%'
      h="100%"
    >
      <Box 
        w='600px'
        h='800px'
        ml='260px'
      >
        <Carousel renderImages={renderImages} />
      </Box>
    </Flex>    
  )
}

export default Experiences;