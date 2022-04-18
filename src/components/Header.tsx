import NextLink from 'next/link';
import { HStack, Button, Flex } from '@chakra-ui/react';
import { FiUser, FiAward, FiGitMerge, FiBriefcase } from 'react-icons/fi';

export function Header() {
    return (
    <Flex
      w="100%"
      h="12"
      bg="gray.900"
      p="4"
      position="absolute"
      justify="flex-end"
      mr="12"
      mt={4}
    >
      <HStack spacing="4">
        <NextLink href="/aboutme" passHref>
          <Button leftIcon={<FiUser/>} size="sm" colorScheme="blue" variant="solid" >
          Sobre Mim
          </Button>
        </NextLink>
        <Button leftIcon={<FiAward/>} size="sm" colorScheme="blue">
        Conquistas
        </Button>
        <Button leftIcon={<FiGitMerge/>} size="sm" colorScheme="blue">
        Tecnologias
        </Button>
        <Button leftIcon={<FiBriefcase/>} size="sm" colorScheme="blue">
        Experiências Profissionais
        </Button>
      </HStack>
    </Flex>
    );  
}

export default Header;