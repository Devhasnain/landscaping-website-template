import { Heart, Link, CheckCircle, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Container } from "./Container";


interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: Heart,
    title: "Passion in every work",
    description:
      "We are deeply passionate about creating beautiful, sustainable green landscapes for our clients.",
  },
  {
    icon: Link,
    title: "Collaboration on top",
    description:
      "We make your dream design come true by combining your ideas with our 10+ years of garden design expertise.",
  },
  {
    icon: CheckCircle,
    title: "Sustainability in check",
    description:
      "We love nurturing nature, one garden at a time, so that you can enjoy the beautiful landscape of our garden even longer.",
  },
  {
    icon: Star,
    title: "Creativity unleashed",
    description:
      "We make sure to not only give you our innovative designs that stand out to make sure that your garden is not like the others.",
  },
];

export function FeatureSection() {
  return (
    <section className="py-16 md:py-24">
      <Container className="space-y-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green">
          WE ARE{" "}<span className="text-gray-500">DIFFERENT</span><br />
          IN EVERY WAYS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Image */}
          <div className="md:col-span-5 relative h-125 w-full rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="/section-2.jpg" // Apni image path yahan replace karein
              alt="Green Indoor Garden with Orange Chairs"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Side: Features Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pl-0 md:pl-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start space-y-3"
                >
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-lg bg-[#e2e0cb] flex items-center justify-center text-[#2d3a29]">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a2218] tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6b7265] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
