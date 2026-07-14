"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 lg:grid-cols-[1fr_1.1fr]">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="relative h-[650px] lg:h-[700px]"
        >
          <Image
            src="/images/about/about.jpg"
            alt="About KacaHaus"
            fill
            className="object-cover brightness-110 contrast-110 transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="mb-4 uppercase tracking-[6px] text-[#c8a96a]">
            ABOUT US
          </p>

          <h2 className="mb-8 text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
            Crafting Modern Spaces
            <br />
            with Precision &
            Innovation
          </h2>

          <p className="mb-8 text-lg leading-9 text-gray-600">
            KacaHaus specializes in premium aluminium and glass
            solutions for residential and commercial projects.
            We combine innovative design, engineering excellence
            and superior craftsmanship to create elegant,
            functional and long-lasting architectural spaces.
          </p>

          <div className="grid gap-5">

            {[
              "Premium Aluminium Systems",
              "Custom Glass Facades",
              "Luxury Interior Solutions",
              "Turnkey Project Execution",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4"
              >
                <CheckCircle
                  className="text-[#c8a96a]"
                  size={24}
                />

                <span className="text-lg font-medium">
                  {item}
                </span>
              </div>
            ))}

          </div>

          <button className="mt-12 flex items-center gap-3 rounded-full bg-[#c8a96a] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#b08d4d]">
            Learn More
            <ArrowRight size={20}/>
          </button>

        </motion.div>

      </div>
    </section>
  );
}