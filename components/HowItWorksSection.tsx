import { Container } from "./Container";


interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Design consultation",
    description:
      "In the initial step, we sit down with you to have a detailed discussion about your garden vision and preferences.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our team of experts meticulously crafts a custom garden design that aligns with your desires and your space characteristics.",
  },
  {
    number: "03",
    title: "Implement construction",
    description:
      "We present the design to you for review. Once approved, we move forward to implement the plan with construction.",
  },
  {
    number: "04",
    title: "Implement Construction",
    description:
      "We present the design to you for review. Once approved, we move forward to implement the plan with construction.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-green-lite text-white py-16 md:py-24">
      <Container className="space-y-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight max-w-2xl">
          Simple Steps For <br className="hidden md:block" />
          <span className="text-gray-300 font-normal">Our Landscape Work</span>
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col space-y-2 max-w-md">
              {/* Step Title with Number */}
              <h3 className="text-lg md:text-xl font-bold tracking-wide">
                <span className="font-semibold">{step.number}</span>
                <span className="mx-2 font-normal text-gray-400">|</span>
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
