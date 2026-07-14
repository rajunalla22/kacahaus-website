"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  "home",
  "about",
  "products",
  "projects",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    menuItems.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <Link href="/">
          <h1 className="text-5xl font-bold text-white">
            Kaca<span className="text-yellow-400">Haus</span>
          </h1>
        </Link>

        <nav className="hidden gap-10 md:flex">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`relative uppercase font-medium transition-all duration-300 ${
                active === item
                  ? "text-yellow-400"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              {item.toUpperCase()}

              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300 ${
                  active === item ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <button className="rounded-full bg-[#c8a96a] px-7 py-3 font-semibold text-black hover:bg-[#b89a5b] transition">
          Get Quote
        </button>
      </div>
    </header>
  );
}