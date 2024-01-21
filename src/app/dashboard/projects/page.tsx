"use client";
import { Button } from "@/app/components/button/button";
import { Container } from "@/app/components/container/container"
import { useContext, useState } from "react";
import { ProfessionalExperiencesModal } from "@/app/features/professionalExperiences/modal/professionalExperiencesModal";
import { useQuery } from "@tanstack/react-query";
import { ExperienceRestClient } from "@/app/api/experience";
import { ExperiencesList } from "@/app/features/professionalExperiences/experiencesList/experiencesList";
import { UserContext } from "@/app/contexts/userContext";
import { ProjectsModal } from "@/app/features/projects/modal/projectsModal";
import { ProjectsList } from "@/app/features/projects/projectsList/projectsList";

const Page = (): React.ReactElement => {
  const userContext = useContext(UserContext);
  const [open, setOpen] = useState<boolean>(false);
  const experienceRestClient = new ExperienceRestClient();
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['experienceslist'],
    queryFn: async () => {
      if (userContext?.user) {
        return await experienceRestClient.getExperiencesByUserId(userContext.user.id);
      }
    },
    enabled: !!userContext?.user?.id,
  }); 

  const toggleModal = () => setOpen(!open);
  const Header = (): React.ReactElement => {
    return (
      <div className="w-full flex justify-end">
        <div className="w-1/6">
          <Button label='Cadastrar Projeto' onClick={toggleModal} />
        </div>
      </div>
    );
  }
  return (
    <Container>
      <>
        <ProjectsModal open={open} onClose={toggleModal} user={userContext?.user} refetchList={refetch} />
        <Header />
        {isFetching ? <>Loading...</> : <ProjectsList projects={data} />}
      </>
    </Container>
  )
}

export default Page;