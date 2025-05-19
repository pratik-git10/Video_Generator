"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "I created 50+ YouTube Shorts in a week. Blew up my channel!",
    name: "Alex",
    role: "YouTube Creator",
  },
  {
    quote: "My business explainer video was done in 3 minutes. Unreal.",
    name: "Sarah",
    role: "Startup Founder",
  },
  {
    quote: "Perfect tool for faceless content. No editing, no stress.",
    name: "David",
    role: "TikTok Marketer",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Creators Say
      </h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        className="max-w-2xl mx-auto">
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <p className="text-lg italic mb-6">“{t.quote}”</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
