export interface Project {
  id: string
  title: string
  description: string

  /** ONE main image used everywhere (carousel + detail page) */
  heroImage: string
  url: string,
  category?: string
  industry: string
  year: number
  pages: number
  platform: string

  overview: string
  aboutProject: string

  pagesList: Array<{
    name: string
    description: string
  }>

  features: string[]
  tags: string[]
}

export const projects: Project[] = [
  {
    id: "Aegis",
    title: "Aegis Gold",
    description:"",
    

    heroImage: "Aegis2.png",
    url: "https://aegis-gold.vercel.app/",

    category: "Gold Bars Verification",
    industry: "Precious Metals Verification",
    year: 2025,
    pages: 7,
    platform: "Wix Studio",

    overview:
      "Aegis is a cryptographic NFC and blockchain-based system for verifying the authenticity and digital ownership of gold bars via a mobile application. ",

    aboutProject:
      "HealthCore is a complete healthcare website solution built to establish trust, clarity, and connection between patients and medical professionals. The design focuses on simplicity, professionalism, and ease of use, ensuring visitors can find essential healthcare information quickly and confidently.\n\nThe website includes key sections such as Home, About, Services, Doctors, and Contact — each crafted with a patient-first approach. Clear typography, accessible layouts, and calm color tones create a sense of care and reliability.",

    pagesList: [
      { name: "Home", description: "Main landing page with hero section" },
      { name: "About", description: "Company and team information" },
      { name: "Services", description: "Medical services overview" },
      { name: "Doctors", description: "Doctor profiles and specialties" },
      { name: "Contact", description: "Contact and appointment form" },
      { name: "Blog", description: "Health articles and news" },
      { name: "CMS", description: "Content management system" },
    ],

    features: [
      "Responsive Design",
      "Patient Portal",
      "Appointment Booking",
      "Doctor Directory",
      "Telemedicine Integration",
      "Health Blog",
      "CMS Integration",
    ],

    tags: ["NFC NTAG", "Blockchain", "Smart Contract", "Gold Bars Verification", "Digital Identity"],
  },

  {
    id: "Vitalis Healthcare",
    title: "Vitalis Medical Application",
    description:
      "A portfolio platform showcasing expert freelance design services with modern aesthetics.",

    heroImage: "Vitalis.png",
    url: "https://vitalisrecord.vercel.app/",

    category: "Design",
    industry: "Creative Services",
    year: 2025,
    pages: 5,
    platform: "Webflow",

    overview:
      "A sleek portfolio platform designed to showcase freelance design expertise. Built with bold typography and strong visual hierarchy, it communicates professionalism and creative excellence.",

    aboutProject:
      "This platform was designed for freelance designers to showcase their work and attract clients. It features a curated portfolio gallery, service breakdowns, client testimonials, and a clear call-to-action for project inquiries.",

    pagesList: [
      { name: "Portfolio", description: "Project showcase gallery" },
      { name: "Services", description: "Design services offered" },
      { name: "About", description: "Designer bio and experience" },
      { name: "Testimonials", description: "Client feedback and reviews" },
      { name: "Contact", description: "Hire inquiry form" },
    ],

    features: [
      "Portfolio Gallery",
      "Project Filtering",
      "Testimonials Section",
      "Contact Form",
      "CMS Integration",
    ],

    tags: ["Healthcare", "Solidity", "React", "DID "],
  },

  {
    id: "Dexpedia",
    title: "Dexpedia",
    description:
      "A mobile-optimized platform with seamless integration and elegant user interactions.",

    heroImage: "Dexpedia.png",
    url: "https://www.figma.com/design/E8uJKfrXsW7HCBP3WzOTxu/Dexpedia?node-id=10-791&t=3WqhJTyBwVun2Vdp-1",

    category: "Web3",
    industry: "Technology",
    year: 2025,
    pages: 8,
    platform: "React Native",

    overview:
      "Dexpedia is a decentralized marketplace that connects buyers and sellers directly using blockchain and smart contracts. Transactions are transparent, secure, and free from centralized control.",
    aboutProject:
      "This project demonstrates expertise in mobile application development with a strong focus on performance and usability. The platform supports real-time updates, elegant motion, and scalable architecture designed for growth.",

    pagesList: [
      { name: "Dashboard", description: "User dashboard and analytics" },
      { name: "Profile", description: "User profile management" },
      { name: "Settings", description: "Application preferences" },
      { name: "Notifications", description: "Real-time notifications" },
      { name: "Messages", description: "In-app messaging" },
      { name: "Analytics", description: "Performance metrics" },
      { name: "Help", description: "Support and documentation" },
      { name: "Feedback", description: "User feedback form" },
    ],

    features: [
      "Real-time Updates",
      "Push Notifications",
      "Offline Mode",
      "Dark Mode",
      "Analytics Dashboard",
      "User Authentication",
      "Cloud Sync",
    ],

    tags: ["E-Commerce", "Figma", "UI/UX", "Mobile App Design"],
  },
  {
    id: "Parkhere",
    title: "Parkhere",
    description:"",
    

    heroImage: "Parkhere.png",
    url: "https://www.figma.com/design/M1vMWZzEZNn6pibfpzoRXi/Parkhere?node-id=2055-2035&t=85j3Djieqv0Ej4GK-1",

    category: "Smart Parking Application",
    industry: "Parking",
    year: 2025,
    pages: 7,
    platform: "Wix Studio",

    overview:
      "ParkHere is a smart parking application that allows college students to reserve parking spaces directly from their mobile devices.Students can book parking in advance or request valet services, reducing congestion, saving time, and improving campus parking efficiency.",

    aboutProject:
      "",
    pagesList: [
      { name: "Home", description: "Main landing page with hero section" },
      { name: "About", description: "Company and team information" },
      { name: "Services", description: "Medical services overview" },
      { name: "Doctors", description: "Doctor profiles and specialties" },
      { name: "Contact", description: "Contact and appointment form" },
      { name: "Blog", description: "Health articles and news" },
      { name: "CMS", description: "Content management system" },
    ],

    features: [
      "Responsive Design",
      "Patient Portal",
      "Appointment Booking",
      "Doctor Directory",
      "Telemedicine Integration",
      "Health Blog",
      "CMS Integration",
    ],

    tags: ["Figma", "Information System", "UI/UX Design"],
  },
  {
    id: "Netflix Database system Analysis ",
    title: "Netflix Database system Analysis",
    description:"",
    

    heroImage: "Netflix.png",
    url: "https://drive.google.com/drive/folders/1swo6ZN48HXUi_r2QFoB0NXg7Hyi22mg6?usp=sharing",

    category: "Database System Analysis",
    industry: "Database Management",
    year: 2025,
    pages: 7,
    platform: "Wix Studio",

    overview:
      "This project we analyze netflix database model and application prototyping, the project contains netflix’s ERD modelling, conceptual, logical and physical database design, and normalization. This project scope to built an efficient scalable database model for netflix to manage their content and users.",
    aboutProject:
      "",
    pagesList: [
      { name: "Home", description: "Main landing page with hero section" },
      { name: "About", description: "Company and team information" },
      { name: "Services", description: "Medical services overview" },
      { name: "Doctors", description: "Doctor profiles and specialties" },
      { name: "Contact", description: "Contact and appointment form" },
      { name: "Blog", description: "Health articles and news" },
      { name: "CMS", description: "Content management system" },
    ],

    features: [
      "Responsive Design",
      "Patient Portal",
      "Appointment Booking",
      "Doctor Directory",
      "Telemedicine Integration",
      "Health Blog",
      "CMS Integration",
    ],

    tags: ["Database Structure", "ERD", "Normalization"],
  },
]
