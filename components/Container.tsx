import { ReactNode } from "react";


type Props = {
    children:ReactNode,
    className?:string
}
export const Container = ({children, className}:Props) => {
  return (
    <div className={`container px-5 mx-auto ${className}`}>{children}</div>
  )
}