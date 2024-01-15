import { MdOutlineClose } from "react-icons/md"
import { IModal } from "./types"

export const Modal = ({ children, title, open, onClose }: IModal) => {
  if (open) {
    return (
      <div>
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-light-black rounded-lg z-20 p-4">
          <div className="w-full flex flex-row justify-between items-center p-2">
            <h1 className="text-light text-lg">{title}</h1>
            <MdOutlineClose className='text-light' onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
    )
  }
}