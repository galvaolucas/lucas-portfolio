import { IExperience, IExperienceListItemProps, IProjects } from "@/global/types";
import { parseDate } from "@/utils/parsers";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { ProjectsModal } from "../modal/projectsModal";
import { useContext, useState } from "react";
import { UserContext } from "@/app/contexts/userContext";

export const ProjectsList = ({ projects }: { projects: IProjects[] }): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [experience, setExperience] = useState<IExperience>({} as IExperience);
  const userContext = useContext(UserContext);

  const toggleModal = () => {
    setOpen(!open)
  };

  if (projects) {
    return (
      <>
      {experience && <ProjectsModal user={userContext?.user} open={open} onClose={toggleModal} experienceEditData={experience} setExperienceData={setExperience} />}
      <div className="space-y-5 mt-8">
        {projects.map((project: IProjects, index: number) => {
          return (
            <ListItem key={`experiencesListItem-${index}`} >
              <div className="flex flex-row justify-between items-center">
                <div className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-4">
                  <div className="flex flex-col justify-start">
                    <span className="text-sm">Cargo</span>
                    <span className="text-md">{experience.role}</span>
                  </div>
                  <div className="flex flex-col justify-start">
                    <span className="text-sm">Empresa</span>
                    <span className="text-md">{experience.company}</span>
                  </div>
                  <div className="flex flex-col justify-start">
                    <span className="text-sm">Início</span>
                    <span className="text-md">{parseDate(experience.startDate)}</span>
                  </div>
                  <div className="flex flex-col justify-start">
                    <span className="text-sm">Conclusão</span>
                    <span className="text-md">{experience.currentJob ? '-' : parseDate(experience.endDate ?? '')}</span>
                  </div>
                </div>
                <div className="flex flex-col h-full lg:flex-row items-center justify-between gap-12 lg:gap-6">
                  <MdModeEditOutline className='cursor-pointer hover:text-purple' onClick={() => {
                    setExperience(experience);
                    toggleModal();
                  }} />
                  <FaRegTrashAlt className='cursor-pointer hover:text-purple' />
                </div>
              </div>
            </ListItem>
          )}
        )}
      </div>
      </>
    )
  }
  return <></>
}

const ListItem = ({ children, onClick }: IExperienceListItemProps): React.ReactElement => {
  return (
    <div
      className="w-full p-4 border border-gray hover:border-light rounded-md" 
      onClick={onClick}
    >
      {children}
    </div>
  )
}