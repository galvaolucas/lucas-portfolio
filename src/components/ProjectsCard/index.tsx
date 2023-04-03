import { Card, CardBody, Text, Image, Link, Box, VStack, Flex, Grid } from "@chakra-ui/react";
import { IProject } from "../../dtos/dtos";
import { RiExternalLinkLine } from 'react-icons/ri';

export const ProjectsCard = ({ card }: IProject) => {
    return (
        <Card>
          <CardBody>
            <Text color='teal.500' mb='1rem' fontWeight='bold'>{card.title}</Text>
            <Image src={card.file.src} alt='image' h={250} />
            <VStack>
              <Text mt='1rem'>{card.description}</Text>
              <Link display='flex' gap='0.5rem' alignItems='center' href={card.link} isExternal color='teal.500' >
                {card.link}
                <RiExternalLinkLine />
              </Link>
            </VStack>
            {card.technologies && 
            <Grid w='100' gap='1rem' m='1rem' mt='2rem' templateColumns='repeat(3, 1fr)'>
              {card.technologies.map((item, index) => (
                <Box
                  key={index}
                  color='white'
                  background='teal.400'
                  borderRadius='10px'
                  p='0.2rem'
                  textAlign='center'
                  _hover={{
                    background: 'teal.300'
                  }}
                  >
                  {item}
                </Box>
              ))}
            </Grid>
            }
          </CardBody>
        </Card>
    );
}