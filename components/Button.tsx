import { ReactNode } from "react";


type Props = {
    children:ReactNode;
    className?:string
}
export const Button = ({children, className}:Props) => {
  return (
    <button className={`px-8 cursor-pointer py-3.5 text-center bg-background text-green w-fit ${className}`}>
        {children}
    </button>
  )
}
