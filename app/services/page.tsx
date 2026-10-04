import { Breadcrumb, Container, ServicesCard } from "@/components";
import { getServices } from "@/lib/api";


const Services = async () => {
  const services = await getServices(10);
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
                name: "Services",
                href: "/services",
              },
            ]}
          />

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Services
          </h1>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, id) => (
              <ServicesCard key={id} service={{ ...service, id: id + 1 }} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Services;
