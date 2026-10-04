import Link from "next/link";


export const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={'/'}>
      <span className={`text-2xl font-semibold ${className}`}>Landscaping</span>
    </Link>
    )
};
