"use client";
import { Button } from "@/app/components/button/button";
import { Container } from "@/app/components/container/container"
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useUser } from "@/app/hooks/useUser";
import { ProfessionalExperiencesModal } from "@/app/features/professionalExperiences/modal/professionalExperiencesModal";
import { useQuery } from "@tanstack/react-query";
import { ExperienceRestClient } from "@/app/api/experience";

const Page = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const experienceRestClient = new ExperienceRestClient();
  const { user } = useUser();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['experienceslist'],
    queryFn: async () => {
      if (user) return await experienceRestClient.getExperiencesByUserId(user?.id)
    },
  }) 
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });
  const toggleModal = () => setOpen(!open);
  const Header = (): React.ReactElement => {
    return (
      <div className="w-full flex justify-end">
        <div className="w-1/6">
          <Button label='Cadastrar Experiência' onClick={toggleModal}/>
        </div>
      </div>
    );
  }
  return (
    <Container>
      <>
        <ProfessionalExperiencesModal open={open} onClose={toggleModal} />
        <Header />
      </>
    </Container>
  )
}

export default Page;