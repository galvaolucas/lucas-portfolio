import { Box, Flex, Text, Image, HStack  } from "@chakra-ui/react";
import typeorm from '../../public/assets/typeorm.png';

export function Technologies() {
  return(
    <Flex
    w="100vw"
    direction="row"
    id="tech"
    backgroundColor="gray.800"
    >
    <Box h="700px" w="100%" display="flex" flexDirection="column">
      <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8}>
        <Text fontWeight={500} fontSize="3xl">Tecnologias</Text>
      </Box> 
      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8}>
        <Text color="red.500" fontWeight={500} fontSize="3xl">Frontend</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={8}>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" boxSize={16} />
          </Box>
        </HStack>
      </Box>

      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
        <Text color="red.500" fontWeight={500} fontSize="3xl">Backend</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={8}>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="typeorm" src="/typeorm.png" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" boxSize={16} />
          </Box>          
        </HStack>
      </Box>

      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
        <Text color="red.500" fontWeight={500} fontSize="3xl">Ferramentas</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={8}>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" boxSize={16} />
          </Box>
          <Box>
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" boxSize={16} />
          </Box>
        </HStack>
      </Box>

    </Box>
    </Flex>    
  )
}

export default Technologies;