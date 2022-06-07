import NextLink from 'next/link';
import { Link } from "react-scroll";
import { HStack, Button, Flex } from '@chakra-ui/react';
import { FiUser, FiAward, FiGitMerge, FiBriefcase } from 'react-icons/fi';

export function Header() {
    return (
    <Flex
      w="100%"
      h="20"
      p="4"
      position="absolute"
      justify="flex-end"
      mr="12"
    >
      <HStack spacing="4">
        <Link to="aboutme" smooth={true} duration={1000}>
          <Button
            leftIcon={<FiUser/>}
            size="sm"
            color="white"
            colorScheme="white"
            _hover={{
              background: "teal.400",
              color: "white"
            }}
            variant="solid">
          Sobre Mim
          </Button>
        </Link>
        <Link to="techs" smooth={true} duration={1000}>
          <Button
              leftIcon={<FiGitMerge/>}
              size="sm"
              color="white"
              _hover={{
                background: "teal.400",
                color: "white"
              }}
              colorScheme="purple.200">
            Tecnologias
          </Button>
        </Link>
        <Link to="experiences" smooth={true} duration={1000}>
          <Button
            leftIcon={<FiBriefcase/>}
            size="sm"
            color="white"
            _hover={{
              background: "teal.400",
              color: "white"
            }}
            colorScheme="purple.200">
          Experiências Profissionais
          </Button>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <Button
            leftIcon={<FiAward/>}
            color="white"
            _hover={{
              background: "teal.400",
              color: "white"
            }}
            size="sm"
            colorScheme="white">
          Contato
          </Button>
        </Link>
        
      </HStack>
    </Flex>
    );  
}

export default Header;