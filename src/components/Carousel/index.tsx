import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import Image, { StaticImageData } from 'next/image';
import { useState } from "react";
import { TbPoint } from 'react-icons/tb';
import { FiDownload } from 'react-icons/fi';

interface CarouselProps {
	renderImages: { id: number, image: StaticImageData }[]
}

export const Carousel = ({ renderImages }: CarouselProps): React.ReactElement => {
    const [page, setPage] = useState<number>(0);

    return (
        <Flex
         w='100%'
         h='100%'
				 border='1px solid black'
        >
            <Button
                backgroundColor='white'
                color='black'
                _hover={{
									backgroundColor: 'none'
                }}
                position='absolute'
                zIndex={1}
                top={265}
                left={270}
                onClick={() => {}}
            >
                <FiDownload 
                    size={20} 
                />
            </Button>
            <Image src={renderImages[page].image} alt='resume'/>
            <Box
                position='absolute'
                bottom='130px'
                left='500px'
                zIndex={0}
            >
                <HStack>
                {renderImages.map((image, index) => {
                return (
                    <Button 
                        key={index} 
                        bgColor='white'
                        boxShadow='none'
                        _hover={{
                            cursor: 'pointer',
                            backgroundColor: 'none',
                            svg: {
                                color: 'teal',
                            }
                        }}
                        onClick={() => setPage(index)}
                    >
                        <TbPoint key={index} size={20}  />
                    </Button>
                )
            })}
                </HStack>
            </Box>
        </Flex>
    );
}