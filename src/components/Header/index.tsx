import NextLink from 'next/link';
import Image from 'next/image';
import logo from '../../../public/lucas-galvao.png';
import { Box, Link } from '@chakra-ui/react'
import { HStack, Button, Flex } from '@chakra-ui/react';
import { FiUser, FiAward, FiGitMerge, FiBriefcase } from 'react-icons/fi';

export function Header() {
    return (
    <Flex
      w="100%"
      h={40}
      align='start'
      justify="space-between"
      mt='4'
    >
      <Box
        w='200px'
        h='200px'
        position='relative'
        top='-45px'
      >
        <Image src={logo} alt='logo' />
      </Box>
      <Flex flexDir={{ sm: 'column', md: 'row' }} gap={{ sm: '1rem', md: '5rem', xl: '10rem' }}>
        <Box>
        <Link as={NextLink} href='/' >
          <Button
            leftIcon={<FiUser/>}
            size="sm"
            color="black"
            colorScheme="white"
            _hover={{
              background: "teal.400",
              color: "white"
            }}
            variant="solid">
          Sobre Mim
          </Button>
        </Link>
        </Box>
        <Box>
        <Link as={NextLink} href='/technologies'>
          <Button
              leftIcon={<FiGitMerge/>}
              size="sm"
              color="black"
              _hover={{
                background: "teal.400",
                color: "white"
              }}
              colorScheme="purple.200"
              >
            Tecnologias
          </Button>
        </Link>
        </Box>
        <Link as={NextLink} href='/experiences' >
          <Button
            leftIcon={<FiBriefcase/>}
            size="sm"
            color="black"
            _hover={{
              background: "teal.400",
              color: "white"
            }}
            colorScheme="purple.200">
          Experiências Profissionais
          </Button>
        </Link>
        <Link as={NextLink} href='/contact'>
          <Button
            leftIcon={<FiAward/>}
            color="black"
            _hover={{
              background: "teal.400",
              color: "white"
            }}
            size="sm"
            colorScheme="white">
          Contato
          </Button>
        </Link>
      </Flex>
    </Flex>
    );  
}

export default Header;