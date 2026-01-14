"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Github, Linkedin, ArrowDown, ExternalLink } from "lucide-react";
import Image from "next/image";

// Project data - Only 3 projects now
const projects = [
  {
    id: 1,
    title: "RETMOD",
    subtitle: "End-to-End Return Ecosystem",
    description: "SaaS platform that tracks and manages return processes end-to-end in Turkish marketplaces.",
    image: "/projects/retmod-logo.png",
    color: "#4F46E5",
    tech: "Next.js",
    tags: ["SaaS", "Marketplace", "Returns"],
  },
  {
    id: 2,
    title: "MIX FNDK",
    subtitle: "Premium E-Commerce Ecosystem",
    description: "Complete e-commerce ecosystem project. Digital transformation in the nuts & dried fruits industry.",
    image: "/projects/mixfindik-logo.png",
    color: "#166534",
    tech: "ikas",
    tags: ["E-Commerce", "Food", "Full Setup"],
  },
  {
    id: 3,
    title: "LUMIEER",
    subtitle: "Women's Fashion E-Commerce",
    description: "Full e-commerce ecosystem setup. End-to-end digital infrastructure for a women's clothing brand.",
    image: "/projects/lumieer-logo.png",
    color: "#1E40AF",
    tech: "Shopify",
    tags: ["E-Commerce", "Fashion", "Full Setup"],
  },
];

// Client/Reference data
const clients = [
  {
    id: 1,
    name: "Quakka Coffee",
    logo: "/clients/quakka-coffee.png",
    category: "Bakery & Patisserie",
  },
  {
    id: 2,
    name: "Triaexodus",
    logo: "/clients/triaexodus.png",
    category: "Tech & Gaming",
  },
  {
    id: 3,
    name: "themedya",
    logo: "/clients/themedya.png",
    category: "Creative Agency",
  },
  {
    id: 4,
    name: "Mix Fındık",
    logo: "/clients/mixfindik.png",
    category: "E-Commerce",
  },
];

// E-Commerce Platforms
const ecommercePlatforms = [
  { name: "Shopify", logo: "/platforms/shopify.png" },
  { name: "ikas", logo: "/platforms/ikas.png" },
  { name: "WooCommerce", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
  { name: "Akinon", logo: "/platforms/akinon.png" },
  { name: "SAP Commerce Cloud", logo: "/platforms/sap-commerce-cloud.png" },
];

// Tech Stack
const techStack = [
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

// SEO Skills
const seoSkills = [
  "Technical SEO Audits",
  "Core Web Vitals Optimization",
  "Schema Markup & Structured Data",
  "Site Speed Optimization",
  "Mobile-First Indexing",
  "Crawl Budget Management",
  "International SEO (hreflang)",
  "Log File Analysis",
];

// Experience data
const experiences = [
  {
    id: 1,
    title: "Freelance Consultant",
    company: "Themedya Software & Media Agency",
    type: "Freelance",
    location: "Remote",
    period: "Jun 2025 - Present",
    duration: "8 months",
    color: "#8B5CF6",
    highlights: [
      "Led end-to-end platform evaluation and setup (Shopify, WooCommerce, ikas, OpenCart)",
      "Developed REST & SOAP API integrations for ERP, shipping, payment, and CRM systems",
      "Reduced MySQL query response times by ~40% through optimization",
      "Built technical SEO infrastructure: canonical tags, hreflang, Schema.org structured data",
    ],
  },
  {
    id: 2,
    title: "E-Commerce & Marketplace Specialist",
    company: "Jebinde",
    type: "Full-time",
    location: "Kayseri, Türkiye",
    period: "Nov 2024 - Present",
    duration: "1 year 3 months",
    color: "#3B82F6",
    highlights: [
      "Led marketplace integrations: Trendyol, Hepsiburada, N11, Pazarama, Koçtaş, Idefix",
      "Owned ERP–e-commerce integration roadmap with two-way data sync",
      "Designed scalable SEO-driven content systems with Google Sheets automation",
      "Implemented structured data (Schema.org: Product, Offer, BreadcrumbList)",
    ],
  },
  {
    id: 3,
    title: "E-Commerce Responsible",
    company: "Bingöl",
    type: "Full-time",
    location: "Kayseri, Türkiye",
    period: "Nov 2024 - Present",
    duration: "1 year 3 months",
    color: "#10B981",
    highlights: [
      "Managed end-to-end e-commerce operations for multiple brands",
      "Oversaw product return processes with brand-level approvals",
      "Coordinated compensation and reimbursement workflows",
      "Monitored order fulfillment, stock accuracy, and shipment status",
    ],
  },
  {
    id: 4,
    title: "E-Commerce Business Development Specialist",
    company: "Ferace",
    type: "Full-time",
    location: "Kayseri, Türkiye",
    period: "Apr 2022 - Sep 2024",
    duration: "2 years 6 months",
    color: "#F59E0B",
    highlights: [
      "Led projects on Trendyol, Hepsiburada, N11, Amazon, Etsy, Alibaba, Seashells",
      "Optimized multichannel sales operations with automated inventory management",
      "Established ERP integrations via XML and API for data consistency",
      "Boosted marketplace performance by up to 40% through competitive analysis",
    ],
  },
  {
    id: 5,
    title: "Intern Software Developer",
    company: "Ünlem Bilişim Teknolojileri",
    type: "Internship",
    location: "Kayseri, Türkiye",
    period: "Jun 2024 - Aug 2024",
    duration: "3 months",
    color: "#EC4899",
    highlights: [
      "Developed web projects using HTML, CSS, and JavaScript",
      "Built dynamic interfaces with Vue.js, Vue Router, and Vuex",
      "Automated data fetching through RESTful API integrations",
      "Created real-time data transfer apps using WebSocket technology",
    ],
  },
];

// Animation variants - Advanced animations for the entire site
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Scale in animation
const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

// Slide from left
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

// Slide from right
const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

// Float animation for background elements
const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Pulse glow animation
const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(139, 92, 246, 0.3)",
      "0 0 60px rgba(139, 92, 246, 0.6)",
      "0 0 20px rgba(139, 92, 246, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Text reveal animation
const textReveal = {
  hidden: { opacity: 0, y: 100, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

// Hero Section Component with Advanced Animations
function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6"
      >
        {/* Main title with 3D effect */}
        <motion.h1
          className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-[-0.04em] mb-6"
          style={{ fontFamily: "var(--font-geist-sans)", perspective: "1000px" }}
        >
          <motion.span
            className="block gradient-text"
            initial={{ opacity: 0, y: 100, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          >
            ŞAMİL
          </motion.span>
          <motion.span
            className="block text-white"
            initial={{ opacity: 0, y: 100, rotateX: -45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            POLAT
          </motion.span>
        </motion.h1>

        {/* Subtitle with typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto mb-8 tracking-wide"
        >
          Senior E-Commerce &amp; Full Stack Developer
        </motion.p>

        {/* Contact Links with stagger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-4"
        >
          <motion.a
            href="https://linkedin.com/in/sam1lp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
            <span className="text-sm text-zinc-300 group-hover:text-white">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://github.com/sam1lplt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-700 hover:border-zinc-600 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="text-sm text-zinc-300 group-hover:text-white">GitHub</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <motion.a
            href="tel:+905075982127"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-green-600 hover:border-green-500 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-green-400 group-hover:text-white">📞</span>
            <span className="text-sm text-zinc-300 group-hover:text-white">+90 507 598 21 27</span>
          </motion.a>
          <motion.a
            href="mailto:hello@samilpolat.com"
            className="group flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/50 hover:bg-purple-600 hover:border-purple-500 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-purple-400 group-hover:text-white">✉️</span>
            <span className="text-sm text-zinc-300 group-hover:text-white">hello@samilpolat.com</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.span
          className="text-xs text-zinc-500 uppercase tracking-[0.3em]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="p-2 rounded-full border border-zinc-700"
        >
          <ArrowDown className="w-4 h-4 text-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// Clients/References Section with Infinite Marquee
function ClientsSection() {
  // Duplicate clients array for seamless infinite loop
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-y border-zinc-800/50">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent pointer-events-none" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-8"
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">
          Trusted By
        </h2>
        <p className="text-2xl md:text-4xl font-bold text-white tracking-tight">
          Brands I&apos;ve Worked With
        </p>
      </motion.div>

      {/* Mobile: Swipeable / Desktop: Marquee */}
      <div className="relative">
        {/* Fade gradients - only show on desktop for marquee */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Mobile: Swipeable horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
          <div className="flex gap-4 w-max">
            {clients.map((client) => (
              <motion.div
                key={client.id}
                className="flex-shrink-0"
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-40 h-24 flex items-center justify-center px-4 py-3 rounded-2xl bg-white border border-zinc-200">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-3"
                    sizes="160px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          {/* Swipe hint */}
          <p className="text-center text-xs text-zinc-600 mt-4">← Swipe to see more →</p>
        </div>

        {/* Desktop: Infinite marquee */}
        <div className="hidden md:flex animate-marquee">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 group"
            >
              <div className="relative w-44 h-24 md:w-60 md:h-32 flex items-center justify-center px-6 py-4 rounded-2xl bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-lg hover:shadow-white/10 transition-all duration-500">
                {/* Logo container */}
                <div className="relative w-full h-full flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 176px, 240px"
                  />
                </div>

                {/* Hover tooltip */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  <span className="text-xs text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
                    {client.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 px-8"
      >
        <div className="text-center">
          <span className="text-4xl md:text-5xl font-black text-white">20+</span>
          <p className="text-sm text-zinc-500 mt-2">Projects Completed</p>
        </div>
        <div className="text-center">
          <span className="text-4xl md:text-5xl font-black text-white">4+</span>
          <p className="text-sm text-zinc-500 mt-2">Years Experience</p>
        </div>
        <div className="text-center">
          <span className="text-4xl md:text-5xl font-black text-white">98%</span>
          <p className="text-sm text-zinc-500 mt-2">Client Satisfaction</p>
        </div>
      </motion.div>
    </section>
  );
}

// Experience Section - Timeline Design
function ExperienceSection() {
  return (
    <section className="relative py-24 md:py-32 px-8 md:px-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">
            Career
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Professional Experience
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-teal-500 transform md:-translate-x-1/2" />

          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 border-4 border-black z-10" style={{ backgroundColor: exp.color }} />

              {/* Card */}
              <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                <div
                  className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300"
                  style={{ borderLeftColor: exp.color, borderLeftWidth: '3px' }}
                >
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-base text-zinc-400">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <span className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400">
                      {exp.type}
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-400">
                      {exp.location}
                    </span>
                    <span
                      className="px-2 py-1 text-xs rounded-full text-white font-medium"
                      style={{ backgroundColor: exp.color }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  {/* Period */}
                  <p className={`text-sm text-zinc-500 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.period}
                  </p>

                  {/* Highlights */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.slice(0, 4).map((highlight, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                        <span style={{ color: exp.color }} className={index % 2 === 0 ? "md:order-last" : ""}>•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// E-Commerce & Tech Stack Section
function ExpertiseSection() {
  return (
    <section className="relative py-24 md:py-32 px-8 md:px-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* E-Commerce Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3 text-center">
            E-Commerce Experience
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
            Platforms I Work With
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {ecommercePlatforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-16 h-12 md:w-20 md:h-14 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-zinc-700 text-center">
                    {platform.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3 text-center">
            Development
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
            Tech Stack
          </p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 md:p-6 hover:border-indigo-500/50 hover:bg-zinc-800/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-zinc-400 group-hover:text-white transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical SEO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3 text-center">
            Expertise
          </h2>
          <p className="text-2xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
            Technical SEO
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {seoSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 md:px-6 py-2 md:py-3 rounded-full border border-zinc-700 bg-zinc-900/50 text-sm md:text-base text-zinc-300 hover:border-teal-500/50 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* SEO Stats */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-black text-teal-500">100+</span>
              <p className="text-sm text-zinc-500 mt-1">SEO Audits</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-black text-teal-500">50%+</span>
              <p className="text-sm text-zinc-500 mt-1">Avg. Traffic Increase</p>
            </div>
            <div className="text-center">
              <span className="text-3xl md:text-4xl font-black text-teal-500">Top 3</span>
              <p className="text-sm text-zinc-500 mt-1">Ranking Keywords</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Project Card Component - Horizontal rectangular design
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      className="relative flex-shrink-0 w-[80vw] md:w-[550px] group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Card container - Horizontal layout */}
      <div
        className="relative w-full flex flex-col md:flex-row rounded-3xl overflow-hidden bg-white border-2 transition-all duration-500 hover:shadow-2xl"
        style={{ borderColor: `${project.color}30` }}
      >
        {/* Logo section - Left side */}
        <div className="relative w-full md:w-1/2 h-44 md:h-auto flex items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 p-6">
          <Image
            src={project.image}
            alt={project.title}
            width={220}
            height={100}
            className="object-contain max-h-full"
          />
          {/* Tech badge */}
          <span
            className="absolute top-3 left-3 text-xs font-bold px-3 py-1.5 rounded-full text-white"
            style={{ backgroundColor: project.color }}
          >
            {project.tech}
          </span>
        </div>

        {/* Content section - Right side */}
        <div className="w-full md:w-1/2 p-5 bg-white flex flex-col justify-center">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full font-medium"
                style={{
                  backgroundColor: `${project.color}15`,
                  color: project.color
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-black tracking-tight mb-1"
            style={{ color: project.color }}
          >
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm font-semibold text-zinc-700 mb-2">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs text-zinc-500 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 20px 60px ${project.color}25`,
          }}
        />
      </div>
    </motion.div>
  );
}

// Horizontal Scroll Section - Compact version
function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation for the horizontal scroll
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform vertical scroll to horizontal movement - adjusted for mobile
  const x = useTransform(smoothProgress, [0, 1], ["2%", "-75%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] md:h-[250vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-8 md:py-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-16 mb-6 md:mb-8"
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-2">
            Featured Work
          </h2>
          <p className="text-2xl md:text-5xl font-bold text-white tracking-tight">
            Selected Projects
          </p>
        </motion.div>

        {/* Horizontal scrolling track */}
        <motion.div style={{ x }} className="flex gap-4 md:gap-6 pl-6 md:pl-16 pr-[30%] items-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Scroll progress indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-6 md:left-16 right-6 md:right-16">
          <div className="h-[2px] bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Section
function FooterSection() {
  return (
    <footer className="relative py-24 md:py-32 px-8 md:px-16 overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Main CTA */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-6xl font-black tracking-[-0.03em] text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s work together
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-400 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Have a project in mind? I&apos;d love to hear about it.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/sam1lp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">LinkedIn</span>
            <span className="text-xs text-zinc-600">@sam1lp</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/sam1lplt"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">GitHub</span>
            <span className="text-xs text-zinc-600">@sam1lplt</span>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+905075982127"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-3xl">📞</span>
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">Phone</span>
            <span className="text-xs text-zinc-600">+90 507 598 21 27</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:hello@samilpolat.com"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-3xl">✉️</span>
            <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">Email</span>
            <span className="text-xs text-zinc-600">hello@samilpolat.com</span>
          </motion.a>
        </motion.div>

        {/* Quick Contact Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="mailto:hello@samilpolat.com"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in Touch</span>
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-800/50">
          {/* Brand */}
          <motion.span
            className="text-xl font-black tracking-[-0.03em] text-white"
            whileHover={{ scale: 1.02 }}
          >
            samilpolat.com
          </motion.span>

          {/* Copyright */}
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Şamil Polat. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <HeroSection />
      <ClientsSection />
      <ExperienceSection />
      <ExpertiseSection />
      <HorizontalScrollSection />
      <FooterSection />
    </main>
  );
}
