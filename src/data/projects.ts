// src/data/projects.ts
import fileSharingImg from '../assets/file-sharing-app.jpg.png';
import Shorts from "../assets/Shorts.jpeg"

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  hasLivePreview: boolean;
  imageUrl?: string;
  details?: ProjectDetails;
}

export interface ProjectDetails {
  overview: string;
  coreTech: string[];
  keyFeatures: string[];
  architecture?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "File Sharing App",
    description: "Full-stack file sharing application with authentication, file upload/download, shareable links, and validation. Built with production-grade folder structure and error handling.",
    techStack: ["MERN", "TypeScript", "Tailwind CSS", "JWT", "Multer"],
    githubLink: "https://github.com/atikur-web-dev/Project-File-Sharing-App-MERN-Stack-.git",
    liveLink: "https://file-sharing-app.demo.com",
    hasLivePreview: true,
    imageUrl: fileSharingImg,
    details: {
      overview: "FileShare is a secure, high-performance, full-stack file distribution platform built for seamless file sharing. Designed with a modular architecture using Node.js, TypeScript, Express, and MongoDB on the backend, alongside a modern React + Vite frontend, the app prioritizes file security, performance, and a robust user experience. It enables users to securely upload, download, and inline-preview files, managing access and sharing through auto-generated unique URLs while maintaining a clean server storage via automated background maintenance routines.",
      coreTech: [
        "Backend: Node.js, TypeScript, Express.js, MongoDB + Mongoose",
        "Frontend: React, TypeScript, Vite",
        "Validation: Zod for runtime environment schema validation",
        "Authentication: JWT with database-backed refresh tokens",
        "File Handling: Multer for multi-file upload with validation",
        "Automation: Node-cron for automatic file cleanup",
        "Security: Rate-limiting, CORS, custom error handling"
      ],
      keyFeatures: [
        "Secure Dual-Token Authentication System - Built a strong authentication layer using JWT access tokens (short-lived) and database-backed refresh tokens (long-lived) stored in secure, tamper-proof httpOnly and SameSite cookies to prevent XSS and CSRF attacks.",
        "Multi-File Upload & Distribution Pipeline - Engineered a file upload middleware powered by Multer that validates file count limits and generates unique UUIDs for every file, concealing raw server paths and ensuring secure file resolution.",
        "Automatic Maintenance & File Cleanup - Designed an automated cron job service that periodically parses storage and MongoDB collections to remove orphaned uploads, ensuring efficient server disk space usage.",
        "Production-Grade Security & Performance - Enforced strict runtime environment schema validation (Zod), rate-limiting middleware, CORS configurations, and customized global Express error handling to build a resilient backend."
      ]
    }
  },
  {
    id: 2,
    title: "AI Shorts Generator",
    description: "Production-ready RESTful backend service that automatically transforms product images into studio-grade marketing photos and promotional videos using Generative AI.",
    techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Redis", "Prisma", "Gemini AI", "Veo AI"],
    githubLink: "https://github.com/atikur-web-dev/Project-AI-Shorts-Generation-PERN.git",
    liveLink: "https://ai-shorts-generator.demo.com",
    hasLivePreview: true,
    imageUrl: Shorts, 
    details: {
      overview: "AI Shorts Generator is a production-ready, high-performance RESTful backend service designed to power next-generation e-commerce marketing. It enables business owners and creators to automatically transform basic product images into studio-grade marketing photos and high-fidelity promotional video ads using state-of-the-art Generative AI.",
      coreTech: [
        "Runtime & Language: Node.js, Express.js, TypeScript - ensuring type safety and clean, modular design patterns",
        "Database & ORM: PostgreSQL with Prisma ORM for type-safe query building and complex schema migrations",
        "Caching & Limit Control: Redis used for caching, session management, and custom endpoint rate limiting",
        "Generative AI Engines: Google Gemini AI for image generation and Veo AI for video compilation",
        "Cloud Storage & CDN: Cloudinary for optimized, secure hosting and streaming of generated media files",
        "Payment & Subscription: SSLCommerz Integration for premium credit packages"
      ],
      keyFeatures: [
        "Intelligent AI Generation Pipelines - Integrates Gemini API to handle base64-encoded image payloads, dynamically matching scale, perspective, and studio lighting between products and models. Orchestrates video compilation with Veo AI featuring a secure polling mechanism to check generation states and download/upload optimized MP4 outputs.",
        "Secured Hybrid Authentication - Supports traditional passwordless social login via Google and GitHub OAuth 2.0. Secures sessions using JWT Access & Refresh Token rotation stored securely inside HTTP-Only, SameSite cookies. Utilizes a database-backed session table combined with Redis for instant session revocation.",
        "Transactional Credit System with Auto-Refunds - Uses a credit-deduction structure (e.g., 5 credits for image generation, 10 credits for video). Generation logic is wrapped in atomic transactions; if external AI request times out or fails safety filters, credits are automatically refunded to the user's account.",
        "Anti-Spoofing Payment Verification - Connects SSLCommerz payment gateways to handle subscription orders. Protects order creation and success callbacks with server-to-server transaction validation protocol (val_id verification) and Instant Payment Notifications (IPN) to eliminate payment spoofing.",
        "Performance & Security Hardening - Implements custom Redis-based rate limiting tailored with varying rules for general endpoints, login routes, and heavy AI processing. Secures headers with Helmet, parses payloads with Zod request schemas, and utilizes Winston for detailed server logging and audit logs."
      ]
    }
  }
];