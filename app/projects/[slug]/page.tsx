import { getProjectBySlug, getProjectSlugs } from "@/lib/api";
import { Breadcrumb, Container } from "@/components";
import { MapPin } from "lucide-react";
import { stripHtml } from "@/lib";
import Image from "next/image";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) {
    return {
      title: "",
      description: "",
    };
  }
  return {
    title: project.title,
    description: project.excerpt,
  };
}
export async function generateStaticParams() {
  const slugs = await getProjectSlugs();

  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}
const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return <>Project not found</>;
  const breadcrumb = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: project.title,
      href: `/projects/${project.slug}`,
    },
  ];
  return (
    <main>
      <section className="relative h-[50vh] overflow-hidden flex flex-col justify-end">
        <Image
          alt={project.featuredImage.node.altText}
          src={project.featuredImage.node.sourceUrl}
          className="w-full h-full object-cover absolute top-0 left-0"
          width={500}
          height={500}
        />
        <div className="absolute w-full h-full bg-black opacity-30 top-0 left-0" />

        <div className="text-white z-10">
          <Container className="pb-10">
            <Breadcrumb items={breadcrumb} />
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                {project.title}
              </h1>
              <p>{stripHtml(project.excerpt)}</p>
              <div className="bg-[#2b3524]/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm w-fit">
                <MapPin className="text-gray" size={14} />
                <span className="text-[11px] font-semibold tracking-wider uppercase">
                  {project?.customFields?.location || ""}
                </span>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="py-16">
        <Container>
          <div
            className={
              "prose pt-6 font-light leading-relaxed space-y-6 prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:pt-4 prose-h3:text-xl prose-p:text-sm sm:prose-p:text-base prose-p:leading-relaxed prose-strong:font-semibold"
            }
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </Container>
      </section>
    </main>
  );
};

export default ProjectDetails;
