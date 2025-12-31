"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const certifications = [
  {
    id: 1,
    title: "Complete Financial Analysis Course 2025",
    issuer: "Udemy",
    date: "Aug 2025",
    credentialId: "UC-9F86D081C1BEEA73C298",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-c3b893c5-a89b-4c45-9300-b3f7334874c1.jpg",
  },
  {
    id: 2,
    title: "Financial Statement Audit",
    issuer: "Myskills",
    date: "Jul 2025",
    credentialId: "MOS-EXCEL-ASSOCIATE-2A4B6C8D0E2F",
  },
  {
    id: 3,
    title: "Solidity and Smart Contract Programming (Ethereum DApps)",
    issuer: "Udemy",
    date: "Jun 2025",
    credentialId: "UC-6940c8fe-05d6-4315-a125-241808261ec2",
    link: "https://udemy-certificate.s3.amazonaws.com/image/UC-6940c8fe-05d6-4315-a125-241808261ec2.jpg?v=1745773505000",
  },
  {
    id: 4,
    title: "Business Analyst Course (Excel, Statistics, SQL and Tableau)",
    issuer: "Udemy",
    date: "Dec 2024",
    credentialId: "ISACA-CISA-9876543210FEDCBA",
  },
]

export default function Certifications() {
  return (
    <section
  id="certifications"
  className="relative min-h-screen py-24 px-6 bg-gradient-to-b from-[#070B16] via-[#050914] to-black"
>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Professional certifications and intensive bootcamps that validate my
            commitment to continuous learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => {
            const Card = (
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
            className="rounded-2xl border border-white/10 bg-[#0B1224]/80 backdrop-blur-sm p-8 hover:border-white/20 hover:bg-[#101935]/90 transition cursor-pointer"

            >
                {/* Top row */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-white leading-snug mb-6">
                  {cert.title}
                </h3>

                {/* Credential */}
                <div className="text-sm text-gray-400">
                  <p className="mb-1">Credential ID</p>
                  <p className="text-gray-300 break-all">
                    {cert.credentialId}
                  </p>
                </div>
              </motion.div>
            )

            return cert.link ? (
              <Link
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Card}
              </Link>
            ) : (
              <div key={cert.id}>{Card}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
