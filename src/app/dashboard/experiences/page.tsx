"use client";
import { Button } from "@/app/components/button/button";
import { Container } from "@/app/components/container/container"
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useUser } from "@/app/hooks/useUser";
import { ProfessionalExperiencesModal } from "@/app/features/professionalExperiences/modal/professionalExperiencesModal";

const Page = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const user = useUser();
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