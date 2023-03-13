import { Box, Flex, Text, Image, HStack  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import MotionBox from "../../components/MotionTechnologiesBox";

export function Technologies() {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  useEffect(() => {
    if (carousel) {
      console.log(carousel.current);
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      console.log(width)
    }
  }, [])
  
  const images = [
    {
      label: 'nextJS',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
      label: 'react',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      label: 'typescript',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      label: 'javascript',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      label: 'html',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      label: 'css3',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      label: 'nodejs',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg'
    },
    {
      label: 'postgres',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    },
    {
      label: 'mysql',
      icon_link: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      label: 'typeorm',
      icon_link: 'typeorm.png'
    },
    {
      label: 'fauna',
      icon_link: 'fauna.png'
    },
    {
      label: "docker",
      icon_link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      label: "lint",
      icon_link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    },
    { 
      label: "figma",
      icon_link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
      label: "github",
      icon_link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      label: "gitflow",
      icon_link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      label: "jira",
      icon_link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    },
    { 
      label: "linux",
      icon_link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    }
  ]

  return(
      <motion.div
        style={{ backgroundColor: 'black', minWidth: '150%', marginTop: '2rem', height: '10rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'grab' }}
        whileTap={{ cursor: 'grabbing' }}
      >
          <motion.div
              style={{ display: 'flex', flexDirection: 'row', gap: '4rem' }}
              ref={carousel}
              drag='x'
              dragConstraints={{ right: 0, left: -width }}
              animate={{
                x: [-300, 400, 0]
              }}
              whileTap={{ cursor: 'grabbing' }}
              transition={{ duration: 25 }}
              whileInView={{ scale: 1.2 }}
          >
              {images.map((image, index) => {
                return (
                  <motion.div key={index} >
                    <Image width={100} key={index} src={image.icon_link} alt='tech' />
                  </motion.div>
                )
              })}
          </motion.div>
        </motion.div>
  );
    // <Flex
    // direction="row"
    // h='100vh'
    // >
    // <Box w="100%" display="flex" flexDirection="column" >
    //   <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8}>
    //     <Text fontWeight={500} color="gray.700"fontSize="3xl">Tecnologias</Text>
    //   </Box> 
    //   <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8}>
    //     <Text color="teal.300" fontWeight={500} fontSize="3xl">Frontend</Text>
    //   </Box> 

    //   <Box display="flex" alignItems="center" justifyContent="center">
    //     <HStack spacing={16}>
 



    //   <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
    //     <Text color="teal.300" fontWeight={500} fontSize="3xl">Backend</Text>
    //   </Box> 

  
    //   <Box h={12} display="flex" justifyContent="center" alignItems="center" mb={8} mt={8}>
    //     <Text color="teal.300" fontWeight={500} fontSize="3xl">Ferramentas</Text>
    //   </Box> 

    //   <Box display="flex" alignItems="center" justifyContent="center">
    //     <HStack spacing={16}>
    //       <MotionBox
    //           text="Docker"
    //           icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    //         />
    //         <MotionBox
    //           text="Lint"
    //           icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
    //         />
    //         <MotionBox
    //           text="Figma"
    //           icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    //         />
    //         <MotionBox
    //           text="Github"
    //           icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    //         />
    //         <MotionBox
    //           text="Gitflow"
    //           icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    //         />
    //         <MotionBox
    //           text="Jira"
    //           icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    //         />
    //         <MotionBox
    //           text="Linux"
    //           icon_link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    //         />
    //     </HStack>
    //   </Box>
    // </Box>
    // </Flex>    
}

export default Technologies;