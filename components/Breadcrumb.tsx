import { ChevronRight } from "lucide-react";
import Link from "next/link";


type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm ">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span
                    aria-current="page"
                    className=" font-medium line-clamp-1 max-w-50 sm:max-w-md"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="hover:underline transition-colors"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight
                      className="w-3.5 h-3.5 text-white"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
