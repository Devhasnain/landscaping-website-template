import { socialLinks } from "@/data/sociallinks";
import { siteConfig } from "@/data/site-config";
import { Container, Logo } from "@/components";
import { getServiceSlugs } from "@/lib/api";
import Link from "next/link";


export async function Footer() {
  const services = await getServiceSlugs(5);
  return (
    <footer className="bg-background text-green pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16">
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-12">
            <div className="flex items-center space-x-4">
              <Logo className="tracking-tight text-green" />
              <div className="h-6 w-px bg-green-lite/30" />
              <p className="text-xs sm:text-sm text-[#73786c] max-w-xs leading-snug">
                We craft vibrant, sustainable landscapes for homes and businesses. From design to construction and care, we turn your outdoor space into a place you love.
              </p>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white w-10 h-10 rounded-lg bg-green flex items-center justify-center"
                  target="_blank"
                  rel="nofollow"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 text-xs sm:text-sm">
            {/* Column 2: Links */}
            <div className="space-y-4">
              <h4 className="font-bold tracking-wider text-[#1a2218] uppercase">
                Links
              </h4>
              <ul className="space-y-2.5 text-[#62685c] font-medium uppercase text-[11px] sm:text-xs">
                <li>
                  <Link href="/about" className="hover:text-black">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="Services" className="hover:text-black">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-black">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="space-y-4">
              <h4 className="font-bold tracking-wider text-[#1a2218] uppercase">
                Services
              </h4>
              <ul className="space-y-2.5 text-[#62685c] font-medium uppercase text-[11px] sm:text-xs">
                {services?.map((s, i) => (
                  <li key={i}>
                    <Link href={`/services/${s?.slug}` || "#"} className="hover:text-black line-clamp-1">
                      {s?.title || ""}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-[#d8d6c7] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-[#82887a] font-medium tracking-wider">
          <div>{siteConfig.name} 2026. ALL RIGHTS RESERVED. &copy;</div>
          <div className="flex items-center space-x-2 uppercase">
            <Link href="/privacy-policy" className="hover:text-black">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-black">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
