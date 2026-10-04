import { Container } from "./Container";


interface StepItem {
  number: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Design Consultation",
    description:
      "We meet with you to discuss your vision, budget, and style, and visit your site to understand the space.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our designers create a custom plan with layouts, plant selections, and materials that match your taste and your space.",
  },
  {
    number: "03",
    title: "Review & Approval",
    description:
      "We present the full design for your feedback. We refine it until you love it, then finalize the plan.",
  },
  {
    number: "04",
    title: "Construction & Care",
    description:
      "Our skilled team builds your garden with care, then hands it over along with simple maintenance tips.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-green-lite text-white py-16 md:py-24">
      <Container className="space-y-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight max-w-2xl">
          SIMPLE STEPS FOR <br className="hidden md:block" />
          <span className="text-gray-300">YOUR DREAM GARDEN</span>
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
