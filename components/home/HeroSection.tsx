"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen"
    >
      {/* Background Image */}
      <Image
        src="/images/hero/hero.jpg"
        alt="Luxury Aluminium & Glass"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT CONTENT */}

            <div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 uppercase tracking-[8px] text-[#B89558]"
              >
                Premium Architecture & Interiors
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-6xl xl:text-7xl"
              >
                Transforming Spaces
                <br />
                 With Aluminium
                <br />
                & Glass
              </motion.h1>

            </div>

            {/* RIGHT CONTENT */}

            <div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 mb-10 text-xl leading-10 text-white/90"
              >
                 Premium aluminium windows, doors, curtain walls and architectural glass solutions crafted for modern luxury spaces.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >

                <button
                  className="rounded-full bg-[#B89558] px-10 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-[#B89558]"
                >
                  View Our Projects
                </button>

                <button
                  className="rounded-full border border-white px-10 py-4 text-lg text-white transition duration-300 hover:bg-white hover:text-black"
                >
                  Contact Us
                </button>

              </motion.div>

              {/* Stats */}

              <motion.div
                className="mt-20 grid grid-cols-3 gap-10"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 8 }}
              >

                <div>
                  <h2 className="text-4xl font-bold text-[#B89558]">
                    12+
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Years Experience
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-[#B89558]">
                    250+
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Completed Projects
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-[#B89558]">
                    100%
                  </h2>
                  <p className="mt-2 text-gray-300">
                    Client Satisfaction
                  </p>
                </div>

              </motion.div>

            </div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-14 w-8 justify-center rounded-full border border-white">
          <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>
        </div>
      </div>

    </section>
  );
}