import { getServiceBySlug, getServiceSlugs } from "@/lib/api";
import { Breadcrumb, Container } from "@/components";
import { stripHtml } from "@/lib";
import Image from "next/image";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) {
    return {
      title: "",
      description: "",
    };
  }
  return {
    title: service.title,
    description: service.excerpt,
  };
}
export async function generateStaticParams() {
  const slugs = await getServiceSlugs(100);

  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}
const ServiceDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return <>Service not found</>;
  const breadcrumb = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: service.title,
      href: `/services/${service.slug}`,
    },
  ];
  return (
    <main>
      <section className="relative h-[50vh] overflow-hidden flex flex-col justify-end">
        <Image
          alt={service.featuredImage.node.altText}
          src={service.featuredImage.node.sourceUrl}
          className="w-full h-full object-cover absolute top-0 left-0"
          width={500}
          height={500}
        />
        <div className="absolute w-full h-full bg-black opacity-30 top-0 left-0" />

        <div className="text-white z-10">
          <Container className="pb-10">
            <Breadcrumb items={breadcrumb} />
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                {service.title}
              </h1>
              <p>{stripHtml(service.excerpt)}</p>
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
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </Container>
      </section>
    </main>
  );
};

export default ServiceDetails;
