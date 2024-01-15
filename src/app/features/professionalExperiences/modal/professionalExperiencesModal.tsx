import { Modal } from "@/app/components/modal/modal"
import { IProfessionalExperiencesModal } from "./types"
import { Input } from "@/app/components/input/default/input"
import { useForm } from "react-hook-form";
import { RadioButton } from "@/app/components/input/radioButton/radioButton";
import { useState } from "react";
import { LimitedTextInput } from "@/app/components/input/limitedTextInput/limitedTextInput";
import { SearchInput } from "@/app/components/input/selectInput/searchInput";
import { technologiesOptions } from "@/global/constants";

export const ProfessionalExperiencesModal = ({ open, onClose }: IProfessionalExperiencesModal): React.ReactElement => {
  const { register, formState: { errors }} = useForm();
  const [actualJob, setActualJob] = useState<boolean>(false);
  return (
    <Modal open={open} onClose={onClose} title="Cadastrar Experiência">
      <form>
        <div className="w-96">
          <div className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-4">
              <Input placeholder='Empresa' formProperty="company" register={register} errors={errors} required />
              <RadioButton placeholder="Esse é meu emprego atual" formProperty="actualCompany" register={register} onClick={() => setActualJob(!actualJob)} />
            </div>
            <div className="flex flex-col gap-4">
              <Input placeholder='Cargo' formProperty="role" register={register} errors={errors} required />
              <Input type="date" placeholder='Data de Início' formProperty="startdate" register={register} errors={errors} required />
              {!actualJob && <Input type="date" placeholder='Data de Encerramento' formProperty="enddate" register={register} errors={errors} />}
            </div>
            <div className="flex flex-col gap-4">
              <LimitedTextInput placeholder='Atribuições' formProperty="attributions" register={register} errors={errors} required  />
              <SearchInput searchOptions={technologiesOptions} placeholder='Tecnologias Utilizadas' formProperty="technologies" register={register} errors={errors} required />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  )
}