import { IExperience } from "@/global/types";
import { parseDate } from "@/utils/parsers";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export const ExperiencesList = ({ experiences }: { experiences: IExperience[] }): React.ReactElement => {
  if (experiences) {
    return (
      <div className="space-y-5 mt-8">
        {experiences.map((experience: IExperience) => (
          <ListItem>
            <div className="flex flex-row justify-between items-center">
              <div className="w-full flex flex-col gap-4 lg:grid lg:grid-cols-4">
                <div key={experience.id} className="flex flex-col justify-start">
                  <span className="text-sm">Cargo</span>
                  <span className="text-md">{experience.role}</span>
                </div>
                <div key={experience.id} className="flex flex-col justify-start">
                  <span className="text-sm">Empresa</span>
                  <span className="text-md">{experience.company}</span>
                </div>
                <div key={experience.id} className="flex flex-col justify-start">
                  <span className="text-sm">Início</span>
                  <span className="text-md">{parseDate(experience.startDate)}</span>
                </div>
                <div key={experience.id} className="flex flex-col justify-start">
                  <span className="text-sm">Conclusão</span>
                  <span className="text-md">{experience.currentJob ? '-' : parseDate(experience.endDate ?? '')}</span>
                </div>
              </div>
              <div className="flex flex-col h-full lg:flex-row items-center justify-between gap-12 lg:gap-6">
                <MdModeEditOutline className='cursor-pointer hover:text-purple' />
                <FaRegTrashAlt className='cursor-pointer hover:text-purple' />
              </div>
            </div>
          </ListItem>
        ))}
      </div>
    )
  }
  return <></>
}

const ListItem = ({ children }: { children: React.ReactElement }): React.ReactElement => {
  return (
    <div className="w-full p-4 border border-gray hover:border-light rounded-md">
      {children}
    </div>
  )
}