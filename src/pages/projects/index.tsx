import { Box, Heading, Button, Flex, Text, Grid, GridItem  } from "@chakra-ui/react";
import { m } from "framer-motion";
import gif_romeu from '../../../public/gif_romeu.gif';
import github_logo from '../../../public/github_logo.png';
import { ProjectsCard } from "../../components/ProjectsCard";
export function Projects() {
  const cards = [
    {
      title: 'Rome.u',
      description: 'Expense control application',
      file: gif_romeu,
      link: 'https://rome-u.netlify.app',
      technologies: [
        'Typescript',
        'ReactJS',
        'NodeJS',
        'Chakra UI',
        'MongoDB',
        'AWS'
      ]
    },
    {
      title: 'POC - Google Drive',
      description: 'Code for importing google drive files in your application',
      file: github_logo,
      link: 'https://github.com/galvaolucas/poc-googledrive',
      technologies: [
        'Typescript'
      ]
    },
  ]
  return(
    <Grid
      h='100%'
      templateColumns='repeat(3, 1fr)'
      mb='1rem'
      gap='2rem'
      margin='3rem'
    >
      {cards.map((card, index) => (
        <ProjectsCard key={index} card={card} />
      ))}
    </Grid>    
  )
}

export default Projects;