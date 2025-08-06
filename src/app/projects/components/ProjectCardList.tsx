'use client'

import { Project } from '@/types/project';
import ProjectCard from './ProjectCard';
import Title from '@/components/ui/Title';
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Badge } from '@radix-ui/themes';
import { bricolage_grotesque } from '@/utils/fonts';


const ProjectCardList = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className='w-full flex flex-col items-center mt-4 pb-8'>
      <div className='w-1/2 max-lg:w-full max-lg:px-20 max-sm:w-full max-sm:px-5 flex flex-col items-center'>
        <span className='mb-3'>
          <Title title='Projects' />
        </span>

        <div className="w-full flex flex-col gap-1">
          {data.slice(0, visibleProjects).map((project: Project, idx: number) => (
            <ProjectCard
              key={idx}
              logo={project.logo}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              source={project.source}
              bullets={project.bullets}
            />
          ))}
        </div>
        {/* {visibleProjects < data.length && (
          <Badge color="gray" variant="solid" highContrast onClick={loadMoreProjects} className={`text-xs max-sm:text-[10px] flex items-center text-center dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 mt-6 ${bricolage_grotesque}`}>
            <span>Load More</span>
            <span className='!ml-[-3px] mt-[1px]'>
              <ChevronDownIcon className='h-3 w-3 dark:!text-black !text-white  shrink-0 text-muted-foreground transition-transform duration-200' />
            </span>
          </Badge>
        )} */}
      </div>
    </div>
  )
}

export default ProjectCardList;

const data: Project[] = [
  {
    logo: '/saloon-5.png',
    title: "Enrich Salon Management",
    description: "Full-stack salon management system with integrated booking, payment processing, and comprehensive admin dashboard.",
    bullets: [
      "Built complete booking system with calendar integration, service selection, and real-time availability checking",
      "Integrated Razorpay payment gateway processing 500+ transactions monthly with automated invoice generation",
      "Developed admin dashboard with revenue analytics, customer insights, and appointment management features",
      "Implemented automated email notifications using Nodemailer for booking confirmations and reminders"
    ],
    techStack: ["React", "MUI", "Tailwind CSS", "Razorpay", "Nodemailer", "React Charts", "Node.js", "Express.js", "MongoDB"],
    link: "https://enrich-salon.fardeen.tech",
    source: "https://github.com/Fardeen26/enrich-salon-management",
  },
  {
    logo: '/flick-ai.png',
    title: "Flick.AI",
    description: "AI-powered Twitter content enhancement tool serving 200+ active users with customizable tweet optimization.",
    bullets: [
      "Engineered AI-driven content analysis using Google Gemini API to enhance tweet engagement by 40%",
      "Built real-time preview system with character counting, hashtag suggestions, and sentiment analysis",
      "Implemented user authentication and personalized writing style profiles using NextAuth and Prisma",
      "Achieved 95% user satisfaction rate with custom tone adjustment and content variation features"
    ],
    techStack: ["Next.js", "TypeScript", "Google Gemini", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    link: "https://flick-ai.fardeen.tech/",
    source: "https://github.com/Fardeen26/flick-ai",
  },
  {
    logo: '/token-2.png',
    title: "OrbitToken",
    description: "Decentralized token creation and management platform on Solana blockchain with intuitive user interface.",
    bullets: [
      "Developed smart contract integration for custom SPL token creation with configurable supply and metadata",
      "Built secure wallet connection system supporting Phantom, Solflare, and Backpack wallets",
      "Implemented real-time balance tracking and transaction history with blockchain event listeners",
      "Created token transfer functionality with gas optimization reducing transaction costs by 30%"
    ],
    techStack: ["React", "Web3.js", "TypeScript", "Recoil", "spl-token", "Tailwind CSS"],
    link: "https://orbittoken.fardeen.tech",
    source: "https://github.com/Fardeen26/OrbitToken",
  },
  {
    logo: "/anon-4.png",
    title: "GhostGram - SaaS platform",
    description: "Anonymous messaging platform enabling secure communication through unique, authenticated links.",
    bullets: [
      "Architected end-to-end encrypted messaging system with automatic message expiration and IP masking",
      "Implemented AI-powered content moderation using Gemini API to filter harmful messages",
      "Built custom link generation algorithm with collision prevention handling 10K+ unique links",
      "Developed real-time notification system using WebSockets for instant message delivery"
    ],
    techStack: ["Next.js", "Typescript", "Gemini", "MongoDB", "NextAuth", "Nodemailer", "Tailwind CSS", "Shadcn"],
    link: "https://ghostgram.fardeen.tech",
    source: "https://github.com/Fardeen26/ghostgram",
  },
  {
    logo: "/chat-icon.png",
    title: "The Chat Haven",
    description: "Real-time chat application with room-based communication, WebSocket integration, and modern UI.",
    bullets: [
      "Implemented WebSocket server with Socket.io handling 100+ concurrent connections with low latency",
      "Built room management system with unique room codes, user presence tracking, and typing indicators",
      "Developed message persistence layer with MongoDB storing chat history and user sessions",
      "Created responsive UI with real-time updates, emoji support, and message status indicators"
    ],
    techStack: ["Next.js", "Node.js", "WebSockets", "TypeScript", "Tailwind CSS"],
    link: "https://chathaven.fardeen.tech",
    source: "https://github.com/Fardeen26/chat-app",
  },
  {
    logo: "/book-1.png",
    title: "Lexicon",
    description: "Digital library platform for book discovery, downloads, and community-driven content sharing.",
    bullets: [
      "Built comprehensive book catalog with advanced search, filtering, and category-based browsing",
      "Implemented secure file upload system with Cloudinary integration for book covers and PDFs",
      "Developed user authentication with role-based access control for readers and contributors",
      "Created review and rating system with comment threads and user recommendations"
    ],
    techStack: ["Next.js", "Typescript", "NextAuth", "framer-motion", "MongoDB", "Tailwind CSS", "Shadcn", "Zod"],
    link: "https://lexicon.fardeen.tech",
    source: "https://github.com/Fardeen26/lexicon",
  },
  {
    logo: '/credit-buddy.svg',
    title: "Credit Buddy",
    description: "AI-powered financial assistant providing personalized credit card recommendations and insights.",
    bullets: [
      "Integrated web scraping with Puppeteer to aggregate real-time credit card offers from 15+ banks",
      "Built AI recommendation engine using Gemini API analyzing user profiles and spending patterns",
      "Developed comparison tool showcasing fees, rewards, and benefits with interactive visualizations",
      "Implemented secure data handling with encryption for sensitive financial information"
    ],
    techStack: ["Next.js", "Puppeteer", "Google Gemini", "TypeScript"],
    link: "https://credit-buddy.fardeen.tech",
    source: "https://github.com/Fardeen26/gen-ai",
  },
  {
    logo: '/codify.png',
    title: "Codify",
    description: "Code beautification tool transforming source code into customizable, shareable visual snippets.",
    bullets: [
      "Built syntax highlighting engine supporting 20+ programming languages with accurate tokenization",
      "Implemented theme customization with 15 pre-built themes and custom color picker functionality",
      "Created export system generating high-resolution PNG/SVG images with watermark options",
      "Developed sharing feature with unique URLs and social media integration for code snippets"
    ],
    techStack: ["Next.js", "TypeScript", "Shadcn", "Tailwind CSS"],
    link: "https://codify.fardeen.tech",
    source: "https://github.com/Fardeen26/Codify",
  },
  {
    logo: '/memehub.png',
    title: "MemeHub",
    description: "Interactive meme creation platform with extensive template library and customization tools.",
    bullets: [
      "Curated library of 500+ trending meme templates with real-time popularity tracking",
      "Built drag-and-drop text editor with font customization, positioning, and styling options",
      "Implemented image processing pipeline with Canvas API for real-time meme generation",
      "Created social sharing integration with one-click posting to Twitter, Reddit, and Discord"
    ],
    techStack: ["Next.js", "Typescript", "framer-motion", "Tailwind CSS", "Magic UI"],
    link: "https://www.memehub.mom/",
    source: "https://github.com/Fardeen26/meme-generator",
  },
  {
    logo: '/malfoy.png',
    title: "SaaS Landing Page",
    description: "High-converting landing page with modern animations, responsive design, and optimized performance.",
    bullets: [
      "Achieved 95+ Lighthouse score with lazy loading, code splitting, and optimized asset delivery",
      "Implemented smooth scroll animations and micro-interactions using Framer Motion",
      "Built fully responsive design system with mobile-first approach and cross-browser compatibility",
      "Created reusable component library with consistent styling and accessibility standards"
    ],
    techStack: ["Next.js", "TypeScript", "Shadcn", "motion", "Tailwind CSS"],
    link: "https://malfoy.fardeen.tech",
    source: "https://github.com/Fardeen26/malfoy",
  },
  {
    logo: '/top-50.png',
    title: "Life50",
    description: "Community-driven platform curating life-changing resources through collective wisdom and voting.",
    bullets: [
      "Built voting system with Supabase real-time subscriptions updating rankings instantly",
      "Implemented user-generated content submission with moderation queue and spam detection",
      "Created categorized lists for books, habits, tools with filtering and search functionality",
      "Developed social features including user profiles, following system, and activity feeds"
    ],
    techStack: ["Next.js", "Supabase", "TypeScript", "Zod", "Tailwind CSS"],
    link: "https://life50.fardeen.tech",
    source: "https://github.com/Fardeen26/life50",
  },
  {
    logo: '/sumzsvg.svg',
    title: "SumZ - Article Summarizer",
    description: "AI-powered article summarization tool delivering concise summaries with key point extraction.",
    bullets: [
      "Integrated OpenAI GPT-3.5 API for intelligent content analysis and summary generation",
      "Built URL parsing system supporting 50+ news sites with content extraction algorithms",
      "Implemented caching layer with Redux reducing API calls by 60% for repeated articles",
      "Created adjustable summary length feature with bullet points and paragraph options"
    ],
    techStack: ["React", "Redux", "Open AI", "Tailwind CSS"],
    link: "https://sumz.fardeen.tech/",
    source: "https://github.com/Fardeen26/Article-Summarizer",
  },
];
