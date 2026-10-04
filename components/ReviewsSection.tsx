"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import { Container } from "./Container";

interface ReviewItem {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
}

const reviews: ReviewItem[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner, Sunnyvale",
    rating: 5,
    comment:
      "LeafLife transformed our backyard into an absolute paradise! Their team was extremely professional, punctual, and attentive to every detail.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Developer",
    rating: 5,
    comment:
      "Top-notch plant selection and hardscaping work. They delivered the project on time and within our budget. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Villa Owner, Palo Alto",
    rating: 5,
    comment:
      "The garden maintenance team does an exceptional job. Our landscape looks lush, green, and vibrant throughout the entire year.",
  },
  {
    id: 4,
    name: "David Miller",
    role: "Residential Client",
    rating: 5,
    comment:
      "From the initial design consultation to final construction, the process was seamless and stress-free. Beautiful garden layout!",
  },
];

export function ReviewsSection() {
  return (
    <section className="bg-[#f4f2e6] py-16 md:py-24 text-[#2b3524]">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-[#1a2218]">
              WHAT OUR <span className="text-gray">CLIENTS SAY</span>
            </h2>
          </div>
          <p className="text-sm text-[#6b7265] max-w-sm pt-2">
            Read authentic feedback from homeowners and clients who trusted us
            with their landscape transformation.
          </p>
        </div>

        {/* Reviews Swiper */}
        <div className="relative pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1} // Mobile default: 1 card
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3, // LG screen: 3 cards
                spaceBetween: 30,
              },
            }}
            className="w-full pb-14!"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-[#e8e5d5] p-6 sm:p-8 rounded-3xl h-full flex flex-col justify-between shadow-sm relative group hover:bg-[#2b3524] hover:text-white transition-all duration-300">
                  {/* Quote Icon & Stars */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <Quote className="w-8 h-8 text-gray group-hover:text-gray transition-colors" />
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#2b3524] text-[#2b3524] group-hover:fill-white group-hover:text-white transition-colors"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Comment */}
                    <p className="text-sm md:text-base leading-relaxed text-[#4a5244] group-hover:text-gray-200 transition-colors mb-8">
                      "{review.comment}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="border-t border-[#c5c2b0] group-hover:border-[#424f3b] pt-4 transition-colors">
                    <h4 className="font-bold text-base uppercase tracking-wide text-[#1a2218] group-hover:text-white transition-colors">
                      {review.name}
                    </h4>
                    <p className="text-xs text-[#6b7265] group-hover:text-gray-400 transition-colors">
                      {review.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
