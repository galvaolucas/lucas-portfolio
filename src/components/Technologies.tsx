import { Box, Flex, Text, Image, HStack  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import typeorm from '../../public/typeorm.png';

const MotionTechnologiersBox = motion(Flex);

export function Technologies() {
  return(
    <Flex
    direction="row"
    id="tech"
    bgColor="#e1dad8"
    >
    <Box h="700px" w="100%" display="flex" flexDirection="column">
      <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8}>
        <Text fontWeight={500} color="gray.700"fontSize="3xl">Tecnologias</Text>
      </Box> 
      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8}>
        <Text color="teal.300" fontWeight={500} fontSize="3xl">Frontend</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={16}>
          <MotionTechnologiersBox
            direction="column"
            alignItems="center"
            justifyContent="center"
            drag="x"
            ragConstraints={{ left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">React JS</Text>
          </MotionTechnologiersBox>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">Typescript</Text>
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">Javascript</Text>
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">HTML5</Text>
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">CSS3</Text>
          </Flex>
        </HStack>
      </Box>

      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
        <Text color="teal.300" fontWeight={500} fontSize="3xl">Backend</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={16}>
        <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">Node JS</Text>
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">Postgres</Text>
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" boxSize={16} />
            <Text fontSize="14px" mt="5px">MySQL</Text>
          </Flex>
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Image alt="react" src="typeorm.png" boxSize={16} />
            <Text fontSize="14px" mt="5px">TypeORM</Text>
          </Flex>
        </HStack>
      </Box>

      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
        <Text color="teal.300" fontWeight={500} fontSize="3xl">Ferramentas</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={16}>
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