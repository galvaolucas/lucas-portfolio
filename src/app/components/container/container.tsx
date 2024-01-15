import clsx from "clsx"
import { IContainer } from "./types"

export const Container = ({ children, className }: IContainer): React.ReactElement => {
  return (
    <div className={clsx("w-full h-full overflow-y-auto", className)}>
      {children}
    </div>
  )
}