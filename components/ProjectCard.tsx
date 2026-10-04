import { ArrowUpRight, MapPin } from "lucide-react";
import { stripHtml } from "@/lib";
import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";


type Props = {
  project: Project
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="group flex flex-col h-full bg-background p-5 sm:p-6 rounded-3xl border border-[#d8d5c3] shadow-sm hover:shadow-md transition-all duration-300">
      {/* Setshwantsho se nang le Hover Zoom Animation */}
      <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#dcd8c4]">
        <Image
          src={project?.featuredImage?.node?.sourceUrl || ""}
          alt={project?.featuredImage?.node?.altText || project?.title || ""}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          priority
        />
        {/* Badge ya Location godimo ga setshwantsho */}
        <div className="absolute top-4 left-4 bg-[#2b3524]/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <MapPin className="text-gray" size={14} />
          <span className="text-[11px] font-semibold tracking-wider uppercase">
            {project?.customFields?.location || ""}
          </span>
        </div>
      </div>

      {/* Dintlha tsa Project */}
      <div className="mt-6 flex flex-col justify-between grow space-y-3">
        <div>
          <div className="text-[10px] font-mono tracking-widest text-[#6b7265] uppercase mb-1">
            [ PROJECT {(project?.id || 0) < 10 ? `0${project.id}` : project.id} ]
          </div>
          <h4 className="font-bold text-lg md:text-xl tracking-tight uppercase text-[#1a2218] group-hover:text-green-lite transition-colors line-clamp-1">
            {project.title}
          </h4>
        </div>

        <p className="text-xs md:text-sm text-[#6b7265] leading-relaxed line-clamp-2">
          {stripHtml(project.excerpt)}
        </p>

        {/* Arow icon go laetša seka sa link/action */}
        <div className="pt-2 border-t border-[#d8d5c3] flex items-center justify-between text-xs font-semibold text-[#2b3524] uppercase tracking-wider">
          <span>View Details</span>
          <Link
            href={`/projects/${project.slug}`}
            className="w-8 h-8 rounded-full bg-[#f4f2e6] flex items-center justify-center group-hover:bg-[#2b3524] group-hover:text-white transition-colors duration-300"
          >
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
