import NextLink from 'next/link';
import { Link } from "react-scroll";
import { HStack, Button, Flex } from '@chakra-ui/react';
import { FiUser, FiAward, FiGitMerge, FiBriefcase } from 'react-icons/fi';

export function Header() {
    return (
    <Flex
      w="100%"
      h="12"
      bg="red.500"
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
              background: "white",
              color: "red.500"
            }}
            variant="solid">
          Sobre Mim
          </Button>
        </Link>
        <Link to="techs">
          <Button
              leftIcon={<FiGitMerge/>}
              size="sm"
              color="white"
              _hover={{
                background: "white",
                color: "red.500"
              }}
              colorScheme="purple.200">
            Tecnologias
          </Button>
        </Link>
        <Link to="conquers" smooth={true} duration={1000}>
          <Button
            leftIcon={<FiAward/>}
            color="white"
            _hover={{
              background: "white",
              color: "red.500"
            }}
            size="sm"
            colorScheme="white">
          Conquistas
          </Button>
        </Link>
          <Button
            leftIcon={<FiBriefcase/>}
            size="sm"
            color="white"
            _hover={{
              background: "white",
              color: "red.500"
            }}
            colorScheme="purple.200">
          Experiências Profissionais
          </Button>
      </HStack>
    </Flex>
    );  
}

export default Header;