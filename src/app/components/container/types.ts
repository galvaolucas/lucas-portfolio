import { ReactNode } from "react"

export interface IContainer {
  children: React.ReactElement | ReactNode
  className?: string
}