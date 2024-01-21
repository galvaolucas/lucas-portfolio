import { IAuthUser, IExperience } from "@/global/types"
import { QueryObserverResult } from "@tanstack/react-query"

export interface IProfessionalExperiencesModal {
  open: boolean
  onClose: () => void
  experienceEditData?: IExperience
  setExperienceData?: (arg: IExperience) => void
  user?: IAuthUser
  refetchList?: () => Promise<QueryObserverResult<any, Error>>
}