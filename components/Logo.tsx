import { siteConfig } from "@/data/site-config";
import Link from "next/link";


export const Logo = ({className}:{className?:string}) => {
  return (
    <Link href={'/'}>
      <span className={`text-2xl font-semibold ${className}`}>{siteConfig.name}</span>
    </Link>
    )
};
