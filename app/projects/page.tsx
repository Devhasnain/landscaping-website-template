import { Breadcrumb, Container, ProjectCard } from "@/components";
import { getProjects } from "@/lib/api";


const Projects = async () => {
    const projects = await getProjects(10);
  return (
    <main className="">
      <section className="relative min-h-[30vh] md:min-h-[50vh] serviceHeaderBg flex flex-col justify-end pb-10">
        <Container className="text-white">
          <Breadcrumb
            items={[
              {
                name: "Home",
                href: "/",
              },
              {
                name: "Projects",
                href: "/projects",
              },
            ]}
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Projects
          </h1>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((proj,i) => (
              <ProjectCard key={i} project={{...proj,id:i+1}} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Projects;
