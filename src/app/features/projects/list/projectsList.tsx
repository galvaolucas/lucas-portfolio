import { IExperienceListItemProps, IProject } from "@/global/types";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export const ProjectsList = ({ projects }: { projects: IProject[] | undefined }): React.ReactElement => {
  if (projects) {
    return (
      <>
      <div className="space-y-5 mt-8">
        {projects.map((project: IProject, index: number) => {
          return (
            <ListItem key={`projectsListItem-${index}`} >
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-col h-full lg:flex-row items-center justify-between gap-12 lg:gap-6">
                  <MdModeEditOutline className='cursor-pointer hover:text-purple' onClick={() => {
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