import { ArrowUpRight } from "lucide-react";
import { stripHtml } from "@/lib";
import { Service } from "@/types";
import Image from "next/image";
import Link from "next/link";


type Props = {
  service: Service
};

export const ServicesCard = ({ service }: Props) => {
  return (
    <div className="group relative h-80 sm:h-95 w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm flex flex-col justify-between p-6 sm:p-8 cursor-pointer">
      {/* Background Image */}
      <Image
        src={service?.featuredImage?.node?.sourceUrl}
        alt={service?.featuredImage?.node?.altText || service?.title || "Image preview"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority={(service?.id || 0) < 2}
      />

      {/* Dark Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

      {/* Top Action Button */}
      <div className="relative z-10 flex justify-end">
        <Link
          href={`/services/${service?.slug}` || "#"}
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-100 transition-colors duration-200"
        >
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 text-white space-y-2 max-w-lg">
        <h3 className="text-xl sm:text-2xl font-bold tracking-wide uppercase">
          {service?.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-light">
          {stripHtml(service.excerpt)}
        </p>
      </div>
    </div>
  );
};
