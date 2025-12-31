"use client"

import Link from "next/link"

const socials = [
  {
    name: "GitHub",
    value: "@Wesley Taruna",
    href: "https://github.com/Wesley-Taruna",
  },
  {
    name: "Instagram",
    value: "@wesley_n.t",
    href: "https://instagram.com/wesley_n.t",
  },
  {
    name: "Whatsapp",
    value: "081380590140",
    href: "https://wa.me/6281380590140",
  },
  {
    name: "LinkedIn",
    value: "Wesley Taruna",
    href: "https://www.linkedin.com/in/wesley-taruna-9563a02a3/",
  },
]

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8">
            Let&apos;s Connect
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
            Always interested in new opportunities, collaborations, and
            conversations about the future of finance and advancement of
            technology.
          </p>

          <Link
            href="https://drive.google.com/file/d/1F5bjorxhk_BWO9uHcDZcJhiY1m4j5eVL/view"
            target="_blank"
            className="inline-flex items-center gap-3 text-white text-lg hover:opacity-70 transition"
          >
            Download Resume
            <span className="text-xl">→</span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p className="text-gray-500 uppercase tracking-wider mb-6">
            Socials
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target="_blank"
                className="
                  group rounded-2xl border border-white/10
                  bg-white/[0.02] p-6
                  hover:border-white/20 hover:bg-white/[0.04]
                  transition
                "
              >
                <h3 className="text-white text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition">
                  {item.value}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10">
        <p className="text-gray-500 text-sm">
          © 2025 Wesley Taruna. All rights reserved.
        </p>
      </div>
    </section>
  )
}
