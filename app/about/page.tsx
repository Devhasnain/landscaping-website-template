import { Sprout, CheckCircle2, ArrowUpRight, Heart, ShieldCheck, Sparkles, } from "lucide-react";
import { Breadcrumb, Container } from "@/components";
import { getTeams } from "@/lib/api";
import { stripHtml } from "@/lib";
import Image from "next/image";
import Link from "next/link";


// Stats Data
const stats = [
  { label: "Years of Experience", value: "12+" },
  { label: "Completed Projects", value: "350+" },
  { label: "Satisfied Clients", value: "280+" },
  { label: "Expert Team Members", value: "25+" },
];

// Core Values
const values = [
  {
    icon: Sprout,
    title: "Eco-Friendly Practices",
    description:
      "We prioritize sustainable landscaping methods and native plant selection to conserve water and protect local ecosystems.",
  },
  {
    icon: Heart,
    title: "Client-Centric Craftsmanship",
    description:
      "Every design is tailored around your personal lifestyle, aesthetic vision, and functional garden requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromised Quality",
    description:
      "From premium soil preparation to hardscaping construction, we never cut corners on quality and longevity.",
  },
  {
    icon: Sparkles,
    title: "Innovative Design",
    description:
      "We combine timeless nature with modern architectural design trends to build gardens that truly stand out.",
  },
];

export const AboutPage = async () => {
  const teams = await getTeams();
  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="py-18 md:py-20 bg-green-lite text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7">
              <Breadcrumb
                items={[
                  {
                    name: "Home",
                    href: "/",
                  },
                  {
                    name: "About",
                    href: "/about",
                  },
                ]}
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-tight">
                WE CRAFT LIVING <br />
                <span className="text-gray">LANDSCAPES THAT</span> INSPIRE
              </h1>
              <p className="text-sm md:text-base  leading-relaxed max-w-xl">
                Founded with a passion for nature and design, LeafLife
                transforms outdoor spaces into sustainable, aesthetically
                pleasing sanctuaries. Our dedicated team of architects and
                horticulturists brings years of expertise to every garden we
                cultivate.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 mt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2b3524] text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-xl hover:bg-[#1a2218] transition-colors"
                >
                  <span>Work With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#values"
                  className="inline-flex items-center gap-2 bg-[#e8e5d5] text-[#1a2218] font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-xl hover:bg-[#dcd8c4] transition-colors"
                >
                  <span>Our Values</span>
                </Link>
              </div>
            </div>

            {/* Hero Right Image Stack */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-105 sm:h-125 w-full rounded-3xl overflow-hidden shadow-sm">
                <Image
                  src="/section-2.jpg" // Replace with image
                  alt="LeafLife Landscape Design"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#2b3524] text-white p-6 rounded-2xl shadow-lg hidden sm:block max-w-[200px]">
                <p className="text-3xl font-bold">12+</p>
                <p className="text-xs uppercase tracking-wider text-gray-300 mt-1 font-medium">
                  Years of Green Excellence
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. STATS SECTION */}
      <section className="mb-20">
        <Container>
          <div className="bg-[#e8e5d5] rounded-3xl p-8 md:p-12 border border-[#d8d5c3]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a2218]">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm uppercase tracking-wider text-[#6b7265] font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="mb-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative h-95 sm:h-115 w-full rounded-3xl overflow-hidden shadow-sm">
                <Image
                  src="/section-2.jpg" // Replace with image
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-[#1a2218]">
                Passionate About Bringing <br />
                <span className="text-gray">Nature Back To Life</span>
              </h2>
              <p className="text-sm md:text-base text-[#6b7265] leading-relaxed">
                What started over a decade ago as a small nursery project has
                grown into a full-service landscape architecture and garden
                design firm. We believe every space—whether a residential
                backyard or a public garden—has the potential to foster calm,
                connection, and biological richness.
              </p>

              <ul className="space-y-3 text-sm text-[#2b3524] font-medium pt-2">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2b3524] shrink-0" />
                  <span>
                    Customized designs matching client lifestyle & architecture
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2b3524] shrink-0" />
                  <span>
                    Expert plant selection tailored to local climate & soil
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#2b3524] shrink-0" />
                  <span>End-to-end execution from concept to maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section id="values" className="mb-20">
        <Container>
          <h2 className="mb-12 text-3xl sm:text-4xl font-bold tracking-tight uppercase text-[#1a2218]">
            WHAT GUIDES <span className="text-gray">OUR WORK</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#e8e5d5] p-6 sm:p-8 rounded-3xl border border-[#d8d5c3] flex flex-col justify-between hover:bg-[#2b3524] hover:text-white transition-all duration-300 group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#f4f2e6] group-hover:bg-green-lite flex items-center justify-center text-[#2b3524] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-tight text-[#1a2218] group-hover:text-white transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#6b7265] group-hover:text-gray-300 leading-relaxed transition-colors">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. MEET OUR TEAM SECTION */}
      <section className="mb-20">
        <Container>
          <h2 className="mb-12 text-3xl sm:text-4xl font-bold tracking-tight uppercase text-[#1a2218]">
            MEET OUR <span className="text-gray">LANDSCAPE EXPERTS</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teams.map((member, idx) => (
              <div key={idx} className="group flex flex-col">
                <div className="relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden bg-[#dcd8c4] mb-4">
                 {member?.featuredImage?.node?.sourceUrl && <Image
                    src={member?.featuredImage?.node?.sourceUrl}
                    alt={member?.featuredImage?.node?.altText}
                    fill
                    className=" object-cover group-hover:scale-105 transition-transform duration-500"
                  />}
                </div>
                <h4 className="font-bold text-lg uppercase tracking-wide text-[#1a2218]">
                  {member?.title}
                </h4>
                <p className="text-xs text-[#6b7265] uppercase tracking-wider font-semibold">
                  {stripHtml(member?.excerpt)}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section>
        <Container>
          <div className="bg-[#2b3524] text-white rounded-3xl p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight leading-tight">
                Ready to bring your garden vision to life?
              </h2>
              <p className="text-sm text-gray-300">
                Book a consultation today and let our expert team design your
                perfect outdoor landscape.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-white text-[#2b3524] font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shrink-0"
            >
              Get Free Consultation
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default AboutPage