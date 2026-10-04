import { Phone, ArrowUpRight, ShieldCheck, Star } from 'lucide-react';
import Link from 'next/link';

import { Container } from './Container';


export function HeroSection() {
  return (
    <section className="relative heroBg min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Overlay for better typography contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <Container className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-20 min-h-screen">
        
        {/* Left Column: Main Content */}
        <div className="md:col-span-8 flex flex-col justify-center space-y-5 text-white">
          
          
            <Link
              href="tel:+15552345678"
              className="inline-flex w-fit items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-medium text-white transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-green-400 fill-green-400" />
              <span>+1 (555) 234-5678</span>
            </Link>

          {/* Hero Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[1.08]">
            CREATE YOUR <br />
            <span className="text-[#e2e0cb] font-extrabold underline decoration-white/30 decoration-2 underline-offset-8">
              DREAM GARDEN
            </span>
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl font-light">
            Crafting vibrant, sustainable green landscapes for over a decade. Our expert landscape architects and gardener teams bring passion, creativity, and lasting beauty to your outdoor spaces.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Primary Button */}
            <Link
              href="#estimate"
              className="inline-flex items-center gap-2 bg-[#2b3524] hover:bg-[#1a2218] text-white font-semibold uppercase tracking-wider text-xs px-7 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Free Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-[#1a2218] font-semibold uppercase tracking-wider text-xs px-7 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#2b3524]" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 flex items-center gap-6 text-xs text-gray-300 border-t border-white/20 max-w-lg">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>10+ Years Experience</span>
            </div>
          </div>

        </div>

        {/* Right Column: Floating Glassmorphism Widget */}
        <div className="hidden md:flex md:col-span-4 flex-col justify-center items-end">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white space-y-6 max-w-xs shadow-2xl">
            
            {/* Quick Stat Item 1 */}
            <div className="space-y-1">
              <span className="text-3xl font-extrabold tracking-tight text-[#e2e0cb]">
                350+
              </span>
              <p className="text-xs uppercase tracking-wider font-medium text-gray-200">
                Gardens Transformed
              </p>
            </div>

            <div className="h-px bg-white/20 w-full" />

            {/* Quick Stat Item 2 */}
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-white mt-1">
                4.9/5 Client Rating
              </p>
              <p className="text-[11px] text-gray-300">
                Based on 280+ verified homeowner reviews.
              </p>
            </div>

            {/* Direct Call CTA inside widget */}
            <a
              href="tel:+15552345678"
              className="block text-center w-full bg-[#2b3524] hover:bg-[#1a2218] text-white text-xs font-bold uppercase tracking-wider py-3 rounded-xl transition-colors border border-white/10"
            >
              Call Now: (555) 234-5678
            </a>

          </div>
        </div>

      </Container>
    </section>
  );
}