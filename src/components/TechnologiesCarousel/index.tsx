import { Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { techImages } from './technologiesCarousel';

export const TechnologiesCarousel = (): React.ReactElement => {
  const [pageWidth, setPageWidth] = useState<number>();

  useEffect(() => {
    if (window) {
      setPageWidth(window.innerWidth);
    }
  }, []);

  const container = {
    animate: {
      x: [0, -pageWidth],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          ease: 'linear',
          duration: 15,
        },
      },
    },
  }

  return (
    <Flex
      w='100'
      overflow='hidden'
    >
      <motion.div
        variants={container}
        animate="animate"
      >
        <Flex
          align='center'
          justifyContent='space-between'
          gap='4rem'
        >
          {techImages.map((image, index) => (
              <Image
                h='4rem'
                _hover={{
                  cursor: 'pointer',
                  transform: 'scale(1.1)',
                  transition: '0.5s'
                }}
                key={index}
                src={image.icon_link}
                alt='techLogo' 
              />
          ))}
        </Flex>
      </motion.div>
    </Flex>
  );
}