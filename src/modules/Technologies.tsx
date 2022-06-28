import { Box, Flex, Text, Image, HStack  } from "@chakra-ui/react";
import MotionBox from "../components/MotionTechnologiesBox";

export function Technologies() {
  return(
    <Flex
    direction="row"
    id="techs"
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
          <MotionBox
              text="Next JS"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          />
          <MotionBox
            text="React JS"
            icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <MotionBox
            text="Typescript"
            icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          />
          <MotionBox
            text="Javascript"
            icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <MotionBox
            text="HTML5"
            icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <MotionBox
            text="CSS3"
            icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
        </HStack>
      </Box>

      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
        <Text color="teal.300" fontWeight={500} fontSize="3xl">Backend</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={16}>
          <MotionBox
              text="Node JS"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
            />
            <MotionBox
              text="Postgres"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
            <MotionBox
              text="My SQL"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            />
            <MotionBox
              text="TypeORM"
              icon_link="typeorm.png"
            />
            <MotionBox
              text="FaunaDB"
              icon_link="fauna.png"
            />
        </HStack>
      </Box>

      <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
        <Text color="teal.300" fontWeight={500} fontSize="3xl">Ferramentas</Text>
      </Box> 

      <Box display="flex" alignItems="center" justifyContent="center">
        <HStack spacing={16}>
          <MotionBox
              text="Docker"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            />
            <MotionBox
              text="Lint"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
            />
            <MotionBox
              text="Figma"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />
            <MotionBox
              text="Github"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
            <MotionBox
              text="Gitflow"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <MotionBox
              text="Jira"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
            />
            <MotionBox
              text="Linux"
              icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            />
        </HStack>
      </Box>

    </Box>
    </Flex>    
  )
}

export default Technologies;