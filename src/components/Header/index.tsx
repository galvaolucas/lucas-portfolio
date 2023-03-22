import NextLink from 'next/link';
import Image from 'next/image';
import logo from '../../../public/lucas-galvao.png';
import memoji from '../../../public/lucas_memoji.png';
import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Link, useDisclosure } from '@chakra-ui/react'
import { Button, Flex } from '@chakra-ui/react';
import { FiUser, FiAward, FiGitMerge, FiBriefcase } from 'react-icons/fi';
import { IoOptionsOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import React from 'react';

export function Header() {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  if (!isMobile) {
    return (
    <Flex
      w="100%"
      h={40}
      align='start'
      justify="space-between"
      mt='4'
    >
      <Flex flexDir='row' p='1rem' width='100%' justifyContent='space-between' gap={{ sm: '1rem', md: '5rem', xl: '10rem' }} backgroundColor='teal.400'>
        <Box>
        <Link as={NextLink} href='/' >
          <Button
            leftIcon={<FiUser/>}
            size="md"
            color="white"
            colorScheme="white"
            _hover={{
              background: "white",
              color: "teal.500"
            }}
            variant="solid">
          About Me
          </Button>
        </Link>
        </Box>
        <Box>
        <Link as={NextLink} href='/technologies'>
          <Button
              leftIcon={<FiGitMerge/>}
              size="md"
              color="white"
              _hover={{
                background: "white",
                color: "teal.500"
              }}
              colorScheme="purple.200"
              >
            Technologies
          </Button>
        </Link>
        </Box>
        <Link as={NextLink} href='/experiences' >
          <Button
            leftIcon={<FiBriefcase/>}
            size="md"
            color="white"
            _hover={{
              background: "white",
              color: "teal.500"
            }}
            colorScheme="purple.200">
          Professional Experiences
          </Button>
        </Link>
        <Link as={NextLink} href='/contact'>
          <Button
            leftIcon={<FiAward/>}
            color="white"
            _hover={{
              background: "white",
              color: "teal.500"
            }}
            size="md"
            colorScheme="white">
          Contact Me
          </Button>
        </Link>
      </Flex>
    </Flex>
    );  
  }

  return (
    <Flex align='center' justify='right' >
      <Button mr='1rem' mt='1rem' ref={btnRef} leftIcon={<IoOptionsOutline />} fontSize='12px' backgroundColor='teal.400' color='white' onClick={onOpen}>
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='xs'
      >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
          <Flex flexDir='column' gap={{ sm: '2rem', md: '4rem', xl: '6rem' }}>
              <Link as={NextLink} href='/' >
                <Button
                  leftIcon={<FiUser/>}
                  size="sm"
                  color="white"
                  backgroundColor='teal.400'
                  variant="solid">
                Sobre Mim
                </Button>
              </Link>
              <Link as={NextLink} href='/technologies'>
                <Button
                    leftIcon={<FiGitMerge/>}
                    size="sm"
                    color="white"
                    backgroundColor='teal.400'
                    >
                  Tecnologias
                </Button>
              </Link>
              <Link as={NextLink} href='/experiences' >
                <Button
                  leftIcon={<FiBriefcase/>}
                  size="sm"
                  color="white"
                  backgroundColor='teal.400'>
                Experiências Profissionais
                </Button>
              </Link>
              <Link as={NextLink} href='/contact'>
                <Button
                  leftIcon={<FiAward/>}
                  color="white"
                  size="sm"
                  backgroundColor='teal.400'>
                Contato
                </Button>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Header;