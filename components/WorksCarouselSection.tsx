"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { Container } from "./Container";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types";

export function WorksCarouselSection({projects}:{projects:Project[]}) {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="bg-green-lite py-16 md:py-24 text-white">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight max-w-3xl">
            OUR LATEST <br /> <span className="text-gray-300">LANDSCAPE PROJECTS</span>
          </h2>
          <Link href={"/"} className="font-medium underline">
            See all
          </Link>
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1.2}
            spaceBetween={24}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1.25,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
            }}
            className="w-full"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i} className="select-none h-full">
                <ProjectCard project={{...project, id:i+1}} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
