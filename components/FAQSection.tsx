'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import {Container} from './Container';
import { stripHtml } from '@/lib';

export function FAQSection({faqs}:{faqs:{title:string,excerpt:string}[]}) {
  const [openId, setOpenId] = useState<number | null>(1); // Default open first question

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 text-green">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Header Info */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight uppercase leading-tight text-[#1a2218]">
              FREQUENTLY <br />
              <span className="text-gray">ASKED</span> QUESTIONS
            </h2>
            <p className="text-sm text-[#6b7265] leading-relaxed max-w-md pt-2">
              Have questions about our landscaping process, timelines, or pricing? Find clear answers to common queries below.
            </p>
          </div>

          {/* Accordion List */}
          <div className="lg:col-span-7 space-y-4">
            {faqs?.map((faq,i) => {
              const isOpen = openId === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-base md:text-lg text-[#1a2218] tracking-wide uppercase">
                      {faq?.title}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#f4f2e6] flex items-center justify-center text-[#1a2218] shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-[#5d6356] leading-relaxed border-t border-[#d8d5c3] pt-4">
                      {stripHtml(faq?.excerpt)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}