import { Box, Flex, Image, Text  } from "@chakra-ui/react";
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
      <Box 
        w='600px'
        mb='3rem'
        mt='5rem'
        ml='260px'
      > 
        <Flex>
          <Text fontSize='48px' fontWeight='bold' color='teal.500'>Resume.</Text>
        </Flex>
        <Carousel renderImages={renderImages} />
      </Box>
  )
}

export default Experiences;