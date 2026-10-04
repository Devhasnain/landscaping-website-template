import { Service } from "@/types";
import Link from "next/link";

import { ServicesCard } from "./ServicesCard";
import { Container } from "./Container";


export function ServicesSection({ services }: { services: Service[] }) {
  return (
    <section className="py-16 md:py-24">
      <Container className="space-y-10">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <h2 className="text-3xl uppercase sm:text-4xl lg:text-5xl font-bold text-green">
            OUR LANDSCAPING <br />
          <span className="text-gray-600">SERVICES</span>
          </h2>
          <Link href={"/services"} className="font-medium underline text-green">
            See all Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, id) => (
            <ServicesCard key={id} service={{ ...service, id }} />
          ))}
        </div>
      </Container>
    </section>
  );
}
