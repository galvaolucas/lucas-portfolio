import { Box, Flex, HStack, Text  } from "@chakra-ui/react";
import { motion } from "framer-motion";
import TimelineLeft from "../components/TimelineLeftComponent";
import TimelineRight from "../components/TimelineRightComponent";

export function Experiences() {
  return(
    <Flex
    direction="column"
    id="experiences"
    bgColor="white"
    h="1600px"
    >
      <Box h="100%" w="100%" display="flex" flexDirection="column">
        <Box h={12} display="flex" justifyContent="center" alignItems="center" mt={8}>
          <Text fontWeight={500} color="gray.700"fontSize="3xl">Experiências Profissionais</Text>
        </Box>
        <TimelineRight
        periodFrom="Abril/2018"
        periodTo="Fevereiro/2019"
        role="Estagiário de Engenharia"
        description="Projetos e execuções de serviços voltados para a área de telecomunicações."
        companyName="World Telecom"
        />
        <TimelineLeft
        periodFrom="Fevereiro/2019"
        periodTo="Junho/2019"
        role="Técnico em Telecomunicações"
        description="Projetista de automação residencial. Virtualização e configuração de servidores de telecomunicações IP para uso via Asterisk. Suporte e configuração de PABX Asterisk."
        companyName="PUTT Automação"
        />
        <TimelineRight
        periodFrom="Junho/2019"
        periodTo="Novembro/2019"
        role="Projetista Elétrico"
        description="Projetista elétrico e de cabeamento estruturado. Suporte em licitações, orçamentos e comercial."
        companyName="LUMEN Energia e Automação"
        />
        <TimelineLeft
        periodFrom="Novembro/2019"
        periodTo="Março/2022"
        role="Analista de Engenharia / Coordenador"
        description="Coordenador de projetos, licitações e manutenções."
        companyName="LUMEN Energia e Automação"
        />
        <TimelineRight
        periodFrom="Fevereiro/2022"
        periodTo="Março/2022"
        role="Estagiário em Desenvolvimento de Software"
        description="A pensar"
        companyName="Fix It"
        />
        <TimelineLeft
        periodFrom="Março/2022"
        periodTo="Dias Atuais"
        role="Desenvolvedor de Software Júnior"
        description="A pensar"
        companyName="Fix It"
        />
      </Box>
    </Flex>    
  )
}

export default Experiences;