import Image from 'next/image';
import Link from 'next/link';

import { Container } from './Container';


export function ContactCTA() {
  return (
    <section className="relative bg-green-lite h-95 md:h-120 w-full flex items-center overflow-hidden">
      {/* <Image
        src="/transform-bg.jpg" 
        alt="Transform Your Garden Landscape"
        fill
        className="object-cover"
        priority
      /> */}


      <div className="relative z-10 w-full text-white">
        <Container>
          <div className="max-w-2xl space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
              Ready to transform <br />
              your garden?
            </h2>

            <div>
              <Link
                href="/contact"
                className="inline-block bg-white text-black font-semibold px-8 py-3.5 rounded-sm hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}