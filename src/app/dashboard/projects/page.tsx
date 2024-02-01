"use client";
import { Button } from "@/app/components/button/button";
import { Container } from "@/app/components/container/container"
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UserContext } from "@/app/contexts/userContext";
import { ProjectsList } from "@/app/features/projects/list/projectsList";
import { ProjectForm } from "@/app/features/projects/form/projectForm";
import { ProjectRestClient } from "@/app/api/projects";
import { IProject } from "@/global/types";
import { useRouter } from "next/navigation";

const Page = (): React.ReactElement => {
  const userContext = useContext(UserContext);
  const router = useRouter();
  const projectRestClient = new ProjectRestClient();
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['projectslist'],
    queryFn: async () => {
      if (userContext?.user) {
        return await projectRestClient.getProjectsByUserId(userContext.user.id);
      }
    },
    enabled: !!userContext?.user?.id,
  }); 

  const Header = (): React.ReactElement => {
    return (
      <div className="w-full flex justify-end">
        <div className="w-1/6">
          <Button label='Cadastrar Novo Projeto' onClick={() => router.push('projects/create')} />
        </div>
      </div>
    );
  }
  
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <Header />
        {isFetching ? <>Loading...</> : <ProjectsList projects={data} />}
      </div>
    </Container>
  )
}

export default Page;