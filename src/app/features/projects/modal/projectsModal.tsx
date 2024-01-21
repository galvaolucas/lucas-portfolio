import { Modal } from "@/app/components/modal/modal"
import { IProfessionalExperiencesModal } from "./types"
import { Input } from "@/app/components/input/default/input"
import { FieldValues, FormProps, FormProvider, useForm } from "react-hook-form";
import { RadioButton } from "@/app/components/input/radioButton/radioButton";
import { useEffect, useState } from "react";
import { LimitedTextInput } from "@/app/components/input/limitedTextInput/limitedTextInput";
import { SearchInput } from "@/app/components/input/selectInput/searchInput";
import { technologiesOptions } from "@/global/constants";
import { Button } from "@/app/components/button/button";
import { parseDate } from "@/utils/parsers";
import { messages } from "@/utils/messages";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const ProjectsModal = ({ open, onClose, experienceEditData, user, refetchList, setExperienceData }: IProfessionalExperiencesModal): React.ReactElement => {
  const [actualJob, setActualJob] = useState<boolean>(experienceEditData?.currentJob ?? false);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (experience: FieldValues): Promise<any> => {
      return await handleExperiences(experience);
    },
  })
  const form = useForm();

  useEffect(() => {
    if (experienceEditData) {
      form.reset(experienceEditData);
      form.setValue('company', experienceEditData.company);
      form.setValue('role', experienceEditData.role);
      form.setValue('startDate', experienceEditData.startDate && parseDate(experienceEditData.startDate));
      form.setValue('endDate', experienceEditData.endDate && parseDate(experienceEditData.endDate));
      form.setValue('attributions', experienceEditData.attributions);
      if (experienceEditData.currentJob) {
        form.setValue('currentJob', experienceEditData.currentJob);
        setActualJob(experienceEditData.currentJob)
      }
    }
  }, [open, experienceEditData]);

  const handleExperiences = async (values: FieldValues) => {
    try {
      let data;
      console.log('user', user);
      console.log('data', values);

      if (user) {
        data = {
          ...values,
          user: user.id
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/experience/${experienceEditData ? experienceEditData._id : ''}`, {
          method: experienceEditData ? 'PUT' : 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          }
        })
        if (!response.ok) {
          throw new Error(`Erro durante o cadastro da experiência: ${response.statusText}`);
        } 
        await queryClient.invalidateQueries({ queryKey: ['experienceslist'] });
        refetchList && await refetchList();
        handleCloseModal();
        return await response.json();
      }
    } catch (err) {
      console.error(`Erro durante o cadastro da experiência: ${err}`);
    }
  }

  const handleCloseModal = () => {
    form.reset();
    setExperienceData && setExperienceData({} as any);
    onClose();
  }

  return (
    <FormProvider {...form}>
      <Modal open={open} onClose={handleCloseModal} title="Cadastrar Experiência" >
        <form onSubmit={form.handleSubmit(async () => await mutation.mutateAsync(form.getValues()))}>
            <div className="w-96 flex flex-col gap-4">
              <div className="w-full flex flex-col gap-4">
                <Input placeholder='Empresa' formProperty="company" register={form.register} errors={form.formState.errors} required errorMessage={messages.fields.required} />
                <RadioButton placeholder="Esse é meu emprego atual" formProperty="currentJob" register={form.register} onClick={() => setActualJob(!actualJob)} />
              </div>
              <div className="flex flex-col gap-4">
                <Input placeholder='Cargo' formProperty="role" register={form.register} errors={form.formState.errors} required />
                <Input type="date" placeholder='Data de Início' formProperty="startDate" register={form.register} errors={form.formState.errors} required errorMessage={messages.fields.required} />
                {!actualJob && <Input type="date" placeholder='Data de Encerramento' formProperty="endDate" register={form.register} errors={form.formState.errors} />}
              </div>
              <div className="flex flex-col gap-4">
                <LimitedTextInput placeholder='Atribuições' formProperty="attributions" register={form.register} errors={form.formState.errors} required errorMessage={messages.fields.required} />
                <SearchInput loadedOptions={experienceEditData?.technologies} searchOptions={technologiesOptions.sort()} placeholder='Tecnologias Utilizadas' formProperty="technologies" register={form.register} errors={form.formState.errors} />
              </div>
              <div className="flex w-full gap-2">
                <Button variant="filled" label="Fechar" onClick={handleCloseModal} />
                <Button disabled={!(Object.keys(form.formState.dirtyFields)?.length > 0)} variant={(Object.keys(form.formState.dirtyFields)?.length > 0) ? "filled" : "disabled"} type="submit" label="Salvar" />
              </div>
          </div>
        </form>
      </Modal>
    </FormProvider>
  )
}