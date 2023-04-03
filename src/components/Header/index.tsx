import NextLink from 'next/link';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Link, useDisclosure } from '@chakra-ui/react'
import { Button, Flex } from '@chakra-ui/react';
import { FiUser, FiAward, FiGitMerge, FiBriefcase } from 'react-icons/fi';
import { IoOptionsOutline } from 'react-icons/io5';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

export function Header() {
  const isMobile = useMediaQuery({ query: `(max-width: 850px)` });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef()

  if (!isMobile) {
    return (
    <Flex
      w="100%"
      align='center'
      mt='6'
    >
      <Flex flexDir='row' p='1rem' width='100%' justifyContent='space-between' backgroundColor='teal.400'>
        <Link as={NextLink} href='/' >
          <Button
            leftIcon={<FiUser/>}
            size="xl"
            color="white"
            p='1rem'
            colorScheme="white"
            _hover={{
              background: "white",
              color: "teal.500",
            }}
            variant="solid">
            About Me
          </Button>
        </Link>
        <Link as={NextLink} href='/experiences' >
          <Button
            leftIcon={<FiBriefcase/>}
            p='1rem'
            size="xl"
            color="white"
            _hover={{
              background: "white",
              color: "teal.500",
            }}
            colorScheme="purple.200">
            Professional Experiences
          </Button>
        </Link>
        <Link as={NextLink} href='/projects' >
          <Button
            leftIcon={<AiOutlineFundProjectionScreen />}
            p='1rem'
            size="xl"
            color="white"
            _hover={{
              background: "white",
              color: "teal.500"
            }}
            colorScheme="purple.200">
            Projects
          </Button>
        </Link>
        <Link as={NextLink} href='/contact'>
          <Button
            p='1rem'
            leftIcon={<FiAward/>}
            color="white"
            _hover={{
              background: "white",
              color: "teal.500"
            }}
            size="xl"
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
          <Flex flexDir='column' gap='2rem'>
              <Link as={NextLink} href='/' >
                <Button
                  leftIcon={<FiUser/>}
                  size="sm"
                  color="white"
                  backgroundColor='teal.400'
                  variant="solid">
                  About me
                </Button>
              </Link>
              <Link as={NextLink} href='/experiences' >
                <Button
                  leftIcon={<FiBriefcase/>}
                  size="sm"
                  color="white"
                  backgroundColor='teal.400'>
                  Professional Experiences
                </Button>
              </Link>
              <Link as={NextLink} href='/projects' >
                <Button
                  leftIcon={<FiBriefcase/>}
                  size="sm"
                  color="white"
                  backgroundColor='teal.400'>
                  Projects
                </Button>
              </Link>
              <Link as={NextLink} href='/contact'>
                <Button
                  leftIcon={<FiAward/>}
                  color="white"
                  size="sm"
                  backgroundColor='teal.400'>
                  Contact me
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