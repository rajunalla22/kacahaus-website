"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}

        <Link href="/">
          <h1 className="text-4xl font-bold text-white">
            Kaca<span className="text-yellow-400">Haus</span>
          </h1>
        </Link>

        {/* Menu */}

        <nav className="hidden gap-14 text-white md:flex">

          {[
            "Home",
            "About",
            "Products",
            "Projects",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative font-medium uppercase tracking-wide transition hover:text-yellow-400"
            >
              {item}

              <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#C8A96A] hover:bg-[#B89558] transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Button */}

        <button className="rounded-full bg-[#C8A96A] px-7 py-3 font-semibold text-black transition hover:bg-[#B89558]">
          Get Quote
        </button>

      </div>
    </header>
  );
}