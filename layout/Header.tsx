"use client";
import { AlignRight, X } from "lucide-react";
import { navLikns } from "@/data/routes";
import { Container, Logo } from "@/components";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 250);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
          scrolled ? "bg-background text-black shadow-sm py-3" : "py-5 bg-transparent text-white"
        }`}
      >
        <Container className="flex flex-row items-center justify-between">
          <div>
            <Logo/>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-row items-center justify-end gap-10">
              {navLikns.map((item, i) => (
                <li className="hidden sm:block" key={i}>
                  <Link href={item.href}>{item.name}</Link>
                </li>
              ))}
              <li className="block sm:hidden">
                <button
                  onClick={() => setOpenSidebar(!openSidebar)}
                  className="cursor-pointer"
                  aria-label="Open menu"
                >
                  <AlignRight />
                </button>
              </li>
            </ul>
          </nav>
        </Container>
      </header>

      <div
        className={`fixed z-50 ${
          openSidebar
            ? "top-0 right-0 h-screen w-full"
            : "-top-20 -right-20 h-0 w-0"
        } flex flex-col items-center justify-center sm:hidden bg-green-lite`}
      >
        <X
          size={25}
          className="text-white cursor-pointer"
          onClick={() => setOpenSidebar(!openSidebar)}
        />
        <ul className="flex flex-col items-center justify-end gap-5 font-medium text-white mt-5">
          {navLikns.map((item, i) => (
            <li className="block sm:hidden" key={i}>
              <Link href={item.href} onClick={() => setOpenSidebar(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};